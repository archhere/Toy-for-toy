var jwtDecode = require('jwt-decode');

let LeaseObj = require('../models/lease.js');
const Lease = LeaseObj.model;
let User = require('../models/user.js');
// const overlappingRequests = require("../helper/lease-request");
let ToyObj = require('../models/toy.js');
const Toy = ToyObj.model;
const gps = require("gps2zip");
const cities = require("cities");
const getCoords = require('city-to-coords');

// ---------------------------------------------------------------------------
// Helper functions
// -----------------------------------------------------------------------------

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


// -----------------------------------------------------------------------
  // Location based search
  // Sample query to test on postman
   // http://localhost:5000/api/?latitude=37.58694&longitude=122.02583&range=5
// -----------------------------------------------------------------------

exports.findBygps = function(req,res,next) {
  let zip = gps.gps2zip(
      parseFloat(req.query.latitude),
      parseFloat(req.query.longitude)
    );

    let range = parseInt(req.query.range);
    let lat = parseFloat(req.query.latitude);
    let long = parseFloat(req.query.longitude);

    let newToys={};
    let point1;
    let point2;
    Toy.find({},function(err,allToys){
      if(!allToys) {
        return res.status(422).send({error: 'No result found'});
      } else{
        allToys.forEach(toy => {
            if (toy.latitude) point1 = toy.latitude;
            if (toy.longitude) point2 = toy.longitude;
            // let zip1 = cities.zip_lookup(toy.zipcode.toString());
            //   point1 = parseFloat(zip1.latitude);
            //   point2 = parseFloat(zip1.longitude);
              console.log("distance",distance(lat, long, point1, point2));
            if (distance(lat, long, point1, point2) <= range) {
                  newToys = Object.assign(newToys, { [toy._id]: toy });
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

// -----------------------------------------------------------------------
    // Search based on zipcode

    // http://localhost:5000/api/?zip=94538&range=4
// -----------------------------------------------------------------------

    exports.findByzipcode = function(req,res,next) {
      let zip = cities.zip_lookup(req.query.zip.toString());
      console.log("zip",zip);
      console.log("zip1",cities.zip_lookup('94539'));
      let range = parseInt(req.query.range);
      let lat = parseFloat(zip.latitude);
      let long = parseFloat(zip.longitude);
      let newToys={};
      let point1;
      let point2;

      Toy.find({},function(err,allToys){
        if(!allToys) {
          return res.status(422).send({error: 'No result found'});
        } else{
          allToys.forEach(toy => {

            let zip1 = cities.zip_lookup(toy.zipcode.toString());
              point1 = parseFloat(zip1.latitude);
              point2 = parseFloat(zip1.longitude);
              if (distance(lat, long, point1, point2) <= range) {
                    newToys = Object.assign(newToys, { [toy._id]: toy });
                  }

              });

                newToys = Object.assign(
                        newToys,
                        { zip: zip.zipcode.toString() },
                        { range: range }
                      );
                      res.json({ toys: newToys });
                    }

        }
      );

    };

    // -----------------------------------------------------------------------
        // Search based on city

        // http://localhost:5000/api/?zip=94538&range=4
    // -----------------------------------------------------------------------

    exports.findBycity = function(req,res,next) {
      let coord = getCoords(req.query.city.toString());

      let range = parseInt(req.query.range);
      let lat = parseFloat(coord.lat);
      let long = parseFloat(coord.lng);
      let newToys={};
      let point1;
      let point2;

      Toy.find({},function(err,allToys){
        if(!allToys) {
          return res.status(422).send({error: 'No result found'});
        } else{
          allToys.forEach(toy => {

            let zip1 = cities.zip_lookup(toy.zipcode.toString());
              point1 = parseFloat(zip1.latitude);
              point2 = parseFloat(zip1.longitude);
              if (distance(lat, long, point1, point2) <= range) {
                    newToys = Object.assign(newToys, { [toy._id]: toy });
                  }

              });

                newToys = Object.assign(
                        newToys,
                        { city: req.query.city.toString() },
                        { range: range }
                      );
                      res.json({ toys: newToys });
                    }

        }
      );

    };
