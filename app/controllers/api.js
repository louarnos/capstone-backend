'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const request = require('request');
const eventfulKey = process.env.EVENTFUL_KEY;
const xml2json = require('xml2js').parseString

// http://api.eventful.com/rest/events/search?app_key=sXx2bDsZHXXqVNkZ&category=music&location=boston&keywords=chvrches

const eventful = (req, res, next) => {
  console.log(req.body, "request body");
  let url = `http://api.eventful.com/json/events/search?app_key=${eventfulKey}&category=music&page_size=25`;
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
    data.events.event.forEach(function(concert){
      let parsedConcert = {
        'id': (concert.id ? concert.id : 'none'),
        'city_name': (concert.city_name ? concert.city_name : 'none'),
        'country_name': (concert.country_name ? concert.country_name : 'none'),
        'region_name': (concert.region_name ? concert.region_name : 'none'),
        'description': (concert.description ? concert.description : 'none'),
        'title': (concert.title ? concert.title : 'none'),
        'venue_url': (concert.venue_url ? concert.venue_url : 'none'),
        'venue_name': (concert.venue_name ? concert.venue_name : 'none'),
        'venue_address': (concert.venue_address ? concert.venue_address : 'none'),
        'start_time': (concert.start_time ? concert.start_time : 'none'),
        'url': (concert.url ? concert.url : 'none'),
        'image_url': (concert.image ? concert.image.thumb.url : 'none'),
        'performer': (concert.performers ? concert.performers.performer : 'none'),
      };
      dataToReturn.push(parsedConcert);
    });
    res.json( {'eventful_event': dataToReturn });
  });
};


 const trash = (req, res, next) => {
   res.json({'hi': 'hi'});
 };

module.exports = {
  eventful,
  trash
};
