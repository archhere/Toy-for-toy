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
  function addDays(theDate, days) {
    return new Date(theDate.getTime() - days*24*60*60*1000);
  }
  let temp = addDays(new Date(), 1)
  var today = Date.parse(temp);
  if (start_date > end_date){
    console.log("start greater than end");
    return true;
  }else if (start_date < today ){
    console.log(today);
    console.log('start date before today');
    return true;
  }

  return new Promise((res,rej)=>{
    Lease.find({toy_id: data.toy_id,rental_status:'accepted'})
    .then(lease=>{
      console.log("lease-request",lease)
      if (data._id){
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
      }

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
