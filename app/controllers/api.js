'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const request = require('request');
const eventfulKey = process.env.EVENTFUL_KEY;
const xml2json = require('lib/xml-to-json');

// http://api.eventful.com/rest/events/search?app_key=sXx2bDsZHXXqVNkZ&category=music&location=boston&keywords=chvrches

const eventful = (req, res, next) => {
  console.log(req.body)
  let url = `http://api.eventful.com/rest/events/search?app_key=${eventfulKey}&category=music`;
  if(req.body.location){
    url += '&location=' + req.body.location;
  } if (req.body.keywords){
    url += '&keywords=' + req.body.keywords;
  }
  request(url, function(error, response, body) {
    let converted = xml2json(body, '   ');
    console.log(converted);
})
.catch(err => next(err));
};


module.exports = {
  eventful
};
