'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const request = require('request');
const eventfulKey = process.env.EVENTFUL_KEY;
const xml2json = require('xml2js').parseString

// http://api.eventful.com/rest/events/search?app_key=sXx2bDsZHXXqVNkZ&category=music&location=boston&keywords=chvrches

const eventful = (req, res, next) => {
  console.log(req.body, "request body");
  let url = `http://api.eventful.com/json/events/search?app_key=${eventfulKey}&category=music`;
  if(req.body.location){
    url += '&location=' + req.body.location;
  } if (req.body.keywords){
    url += '&keywords=' + req.body.keywords;
  }

  request(url, function(error, response, body) {
    if(error){
      console.log(error)
    }
    let dataToReturn = [];
    let data = JSON.parse(response.body);
    data.events.event.forEach(function(concert, index){
      let parsedConcert = {
        'id': concert.id,
        'city_name': concert.city_name,
        'country_name': concert.country_name,
        'region_name': concert.region_name,
        'description': concert.description,
        'title': concert.title,
        'venue_url': concert.venue_url,
        'venue_name': concert.venue_name,
        'venue_address': concert.venue_address,
        'start_time': concert.start_time,
        'url': concert.url,
        'image_url': concert.image.thumb.url,
        'performer': concert.performers.performer,
      };
      dataToReturn.push(parsedConcert);
    });
    res.json( {'eventful-event': dataToReturn });
  });
};


module.exports = {
  eventful
};
