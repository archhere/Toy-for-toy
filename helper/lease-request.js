// const Validator = require("validator");
const mongoose = require("mongoose");
const express = require("express");
let LeaseObj = require('../models/lease.js');
const Lease = LeaseObj.model;

module.exports = async function overlappingRequests(data,req_toy_id){
  var start_date = Date.parse(data.start_date);
  console.log(start_date);
  var end_date = Date.parse(data.end_date);
  console.log(end_date);
  var today = Date.parse(new Date());
  if (start_date > end_date){
    return true;
  }else if (start_date < today ){
    return true;
  }
  return new Promise((res,rej)=>{
    Lease.find({toy_id: data.toy_id,rental_status:'accepted'})
    .then(lease=>{
      console.log("lease-request",lease)

      lease = lease.filter((el) => {
        let strData = data._id.toString();
        console.log(strData.constructor.name);
        let strel = el._id.toString();
        console.log(strel.constructor.name);
        console.log("data",data._id)
        console.log("el",el._id);
        console.log(strData == strel);
        if (strel != strData) return el
      })
      console.log("lease-request",lease)
      lease.forEach((el)=>{
        if(Date.parse(el.start_date)==start_date || Date.parse(el.end_date)==start_date){
          res(true);
        }else if(Date.parse(el.start_date)==end_date || Date.parse(el.end_date)==end_date){
          res(true);
        }else if ((Date.parse(el.start_date) < start_date) &&
        (Date.parse(el.end_date) > start_date && Date.parse(el.end_date) < end_date)){
          res(true);
        }else if (((Date.parse(el.start_date) > start_date)&&(Date.parse(el.start_date) < end_date))
         && ((Date.parse(el.end_date) < end_date)&&(Date.parse(el.end_date) > start_date))){
          res(true);
        }else if (((Date.parse(el.start_date) > start_date) && (Date.parse(el.start_date) < start_date))
         && (Date.parse(el.end_date) > end_date)){
          res(true);
        }else if ((Date.parse(el.start_date) < start_date) && (Date.parse(el.end_date) > end_date)){
          res(true);
        }
      });
      res(false);
    });
  })

};
