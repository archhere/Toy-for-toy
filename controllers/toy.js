var jwtDecode = require('jwt-decode');

let ToyObj = require('../models/toy.js');
const Toy = ToyObj.model;
let User = require('../models/user.js');
const cities = require("cities");
// Toy Index

exports.getToys = function(req, res, next) {
  const query = Toy.find({});
  query.exec(function(err,toys){
    res.send(toys);
  });
};

// --------------------------------------------------------------------
// Toy show

exports.getToy = function(req,res,next) {
  let x = Toy.findById(req.params.toyId);
  const currentPlan = Toy.findById(req.params.toyId, function(err,doc){
    if(!doc) {
      return res.status(422).send({error: 'This toy does not exist'});
    } else{
      res.send(doc);
    }
  });
};

// --------------------------------------------------------------------
// Toy Create

exports.addToy = function(req,res,next) {
  let token = req.headers.authorization;
        // const geometry= {
        //   coordinates: [req.body.longitude, req.body.latitude]
        // };

        console.log(req.body);
        const line1 = req.body.line1;
        const line2 = req.body.line2;

        const zipcode= req.body.zipcode;
        const description=req.body.description;
        // const ageGroup = req.body.ageGroup;
        const toyType= req.body.toyType;
        let zip = cities.zip_lookup(req.body.zipcode.toString());
        console.log(zip);
        const latitude = parseFloat(zip.latitude);
        const longitude = parseFloat(zip.longitude);
        const city = zip.city;
        const state = zip.state;

        const rental_rate= req.body.rental_rate;
        const rental_type= req.body.rental_type;
        let img_url= req.body.img_url || "https://res.cloudinary.com/archhere/image/upload/v1531881005/download_2.jpg";
        const ownerId = req.body.ownerId || jwtDecode(JSON.stringify(token))._id;
        console.log(city);
        console.log(state);
        console.log(latitude);
        console.log(longitude);

// --------------------------------------------------------------------
  // VALIDATIONS
// --------------------------------------------------------------------

  // if(!geometry){
  //   return res.status(422).send({ error: 'You must enter coordinates.'});
  // }

  if (!line1) {
    return res.status(422).send({ error: 'You must enter an address.'});
  }

  // if (!line2) {
  //   return res.status(422).send({ error: 'You must enter an address.' });
  // }

  if (!city) {
    return res.status(422).send({ error: 'You must enter city name.' });
  }

  if (!state) {
    return res.status(422).send({ error: 'You must enter state name.' });
  }

  if (!zipcode) {
    return res.status(422).send({ error: 'You must enter zip code.' });
  }

  if (!description) {
    return res.status(422).send({ error: 'You must enter a description.' });
  }

  // if (!ageGroup) {
  //   return res.status(422).send({ error: 'You must enter appropriate age group.' });
  // }

  if (!toyType) {
    return res.status(422).send({ error: 'You must enter toy type.' });
  }

  if (!rental_rate) {
    return res.status(422).send({ error: 'You must enter rental rate.' });
  }

  if (!rental_type) {
    return res.status(422).send({ error: 'You must enter rental type.' });
  }

  if (!img_url) {
    return res.status(422).send({ error: 'You must provide image url.' });
  }

  let doc = new Toy({
    ownerId: ownerId,
    line1: line1,
    line2: line2,
    city: city,
    state: state,
    zipcode: zipcode,
    latitude: latitude,
    longitude: longitude,
    description: description,
    toyType: toyType,
    rental_rate: rental_rate,
    rental_type: rental_type,
    img_url: img_url
  });

  doc.save(function(err,doc) {
    if (err) { return next(err); }
    res.send(doc);
  });

};

// --------------------------------------------------------------------
// Toy Edit

exports.editToy = function(req,res,next) {
  let updatedInfo={};
  updatedInfo._id = req.params.toyId;

  if (req.body.ownerId) updatedInfo.ownerId = req.body.ownerId;
  if (req.body.img_url) updatedInfo.img_url = req.body.img_url;
  if (req.body.line1) updatedInfo.line1 = req.body.line1;
  if (req.body.line2) updatedInfo.line2 = req.body.line2;
  if (req.body.city) updatedInfo.city = req.body.city;
  if (req.body.zipcode) updatedInfo.zipcode = req.body.zipcode;
  if (req.body.description) updatedInfo.description = req.body.description;
  if (req.body.ageGroup) updatedInfo.ageGroup = req.body.ageGroup;
  if (req.body.toyType) updatedInfo.toyType = req.body.toyType;
  if (req.body.rental_rate) updatedInfo.rental_rate = req.body.rental_rate;
  if (req.body.rental_type) updatedInfo.rental_type = req.body.rental_type;

  Toy.findOneAndUpdate(
    {_id: req.params.toyId},
    { $set: updatedInfo },
    { new: true }
  ).then(newToy => res.json(newToy)).catch(err =>
    res.status(404).json({ toys:
            "You cannot edit this toy" })
  );
};


// --------------------------------------------------------------------
// DELETE TOY

exports.deleteToy = function(req,res,next) {

  Toy.findByIdAndRemove(req.params.toyId, (err, toy) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Toy successfully deleted",
      id: toy._id
    };
    return res.status(200).send(response);
  });
};
