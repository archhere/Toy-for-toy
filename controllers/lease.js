var jwtDecode = require('jwt-decode');

let LeaseObj = require('../models/lease.js');
const Lease = LeaseObj.model;
let User = require('../models/user.js');
const overlappingRequests = require("../helper/lease-request");
let ToyObj = require('../models/toy.js');
const Toy = ToyObj.model;

exports.addLease = function(req,res,next) {
  let x = Lease.findOne({ toy_id: req.params.toyId});


// First check if the toy is already leased or if this is a new toy

  let currentLease = Lease.findOne({toy_id: req.params.toyId,}).then(lease => {
    overlappingRequests(req.body, req.params.toyId).then(result => {
    if (result) {
      res.json({ msg: 'overlapping dates. Sorry'});
    } else {

      let start_date =  req.body.start_date;
      let end_date = req.body.end_date;
      let rental_status = req.body.rental_status;
      let toy_id = req.body.toy_id;
      let renter_id = req.body.renter_id;
      let owner_id = req.body.owner_id;

// --------------------------------------------------------------------
  // VALIDATIONS
// --------------------------------------------------------------------

      if (!start_date) return res.status(422).send({ error: 'You must enter start date.'});
      if (!end_date) return res.status(422).send({ error: 'You must enter end date.'});
      if (!rental_status) return res.status(422).send({ error: 'You must enter valid rental status.'});
      if (!toy_id) return res.status(422).send({ error: 'You must enter toy id.'});
      if (!renter_id) return res.status(422).send({ error: 'You must enter renter id.'});
      if (!owner_id) return res.status(422).send({ error: 'You must enter owner id.'});



      const newLease = new Lease({
        start_date: start_date,
        end_date: end_date,
        rental_status: rental_status,
        toy_id: toy_id,
        renter_id: renter_id,
        owner_id: owner_id
      });
      newLease
      .save()
      .then(doc => res.json(doc))
      .catch(err => console.log(err));
    }
  });
  });
};

// --------------------------------------------------------------------
// LEASE INDEX PAGE - details of every lease on a particular toy
// --------------------------------------------------------------------

exports.getAllLease = function(req,res,next) {
  const query = Lease.find({toy_id: req.params.toyId});
  query.exec(function(err,lease){
    res.send(lease);
  });
};


// --------------------------------------------------------------------
// LEASE SHOW PAGE - details of a particular lease for a
// particular toy
// --------------------------------------------------------------------

exports.getOneLease = function(req,res,next) {
  let x = Lease.findById(req.params.leaseId);
  const currentLease = Lease.findById(req.params.leaseId,function(err,doc){
    if(!doc) {
      return res.status(422).send({error: 'There is no lease on this toy'});
    } else {
      res.send(doc);
    }
  });
};

// --------------------------------------------------------------------
// LEASE EDIT PAGE - edit the lease details. Renter can edit the lease
// dates based on availability.
// --------------------------------------------------------------------

exports.editLease = function(req,res,next) {
  const currentLease = Lease.findById(req.params.leaseId,function(err,doc){
    if(!doc) {
      return res.status(422).send({error: 'There is no lease on this toy'});
    } else {

      let updatedInfo = {};
      updatedInfo._id = req.params.leaseId;
      if(req.body.start_date) updatedInfo.start_date = req.body.start_date;
      if(req.body.end_date) updatedInfo.end_date = req.body.end_date;
      if(req.body.rental_status) updatedInfo.end_date = req.body.end_date;
      if (req.body.renter_id) return res.status(422).send({ error: 'You cannot edit renter id.'});
      if (req.body.owner_id) return res.status(422).send({ error: 'You cannot edit owner id.'});
      if (req.body.toy_id) return res.status(422).send({ error: 'You cannot edit toy id.'});

      let newResult = Object.assign(doc,{});
      if (updatedInfo.start_date) newResult.start_date = updatedInfo.start_date;
      if (updatedInfo.end_date) newResult.end_date = updatedInfo.end_date;

      // created a new object temporarily with updated information,
      // to check for overlap in dates

      overlappingRequests(newResult, newResult.toyId).then(result => {
      if (result) {
        res.json({ msg: 'overlapping dates. Sorry'});
      } else {
        Lease.findOneAndUpdate(
          {_id: req.params.leaseId},
          { $set: updatedInfo},
          { new: true }
        ).then(newLease => res.json(newLease)).catch(err =>
          res.status(404).json({ lease:
                    "You cannot edit this lease" })
        );
      }
    });
   }
  });
};

// --------------------------------------------------------------------
// LEASE DELETE PAGE - Delete particular lease. Renter/owner can remove
    // lease 1 day before the start_date.
// --------------------------------------------------------------------


exports.deleteLease = function(req,res,next) {

  Lease.findByIdAndRemove(req.params.leaseId, (err, lease) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Lease successfully deleted",
      id: lease._id
    };
    return res.status(200).send(response);
  });
};
