var jwtDecode = require('jwt-decode');

let LeaseObj = require('../models/lease.js');
const Lease = LeaseObj.model;
let User = require('../models/user.js');
const overlappingRequests = require("../validation/lease-request");
let ToyObj = require('../models/toy.js');
const Toy = ToyObj.model;
const gps = require("gps2zip");
const cities = require("cities");
var NodeGeocoder = require('node-geocoder');

function distance(lat1, lon1, lat2, lon2) {
  let radlat1 = (Math.PI * lat1) / 180;
  let radlat2 = (Math.PI * lat2) / 180;
  let theta = lon1 - lon2;
  let radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  return dist;
}

exports.findBygps = function(req,res,next) {
  console.log("hits this");
  let zip = gps.gps2zip(
      parseFloat(req.query.latitude),
      parseFloat(req.query.longitude)
    );
    let range = parseInt(req.query.range);
    let lat = parseFloat(req.query.latitude);
    let long = parseFloat(req.query.longitude);

    let newToys;
    Toy.find({},function(err,allToys){
      console.log("AllToys",allToys);
      if(!allToys) {
        return res.status(422).send({error: 'No result found'});
      } else{
        allToys.forEach(toy => {
            if (toy.geometry.coordinates) {
              let point = toy.geometry.coordinates;

              if (distance(lat, long, point[0], point[1]) <= range) {
                    newToys = Object.assign(newToys, { [toy._id]: toy });
                  }
                }
              });
              newToys = Object.assign(
                      newToys,
                      { zip: zip.zip_code.toString() },
                      { range: range }
                    );
                    res.json({ toys: newToys });
                  }

      }
    );
  };
