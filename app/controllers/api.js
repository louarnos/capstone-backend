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
  }
  if (req.body.keywords){
    let keywords = req.body.keywords.replace(/ /g,"+");
    console.log(keywords);
    url += '&keywords=' + keywords;
  }

  request(url, function(error, response, body) {
    if(error){
      console.log(error)
    }
    let dataToReturn = [];
    let singleEvent;
    let data = JSON.parse(response.body);
    console.log(data);
    if(data.total_items > 1) {
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
  }else if (data.total_items === '1') {
    let parsedConcert = {
      'id': (data.events.event.id ? data.events.event.id : 'none'),
      'city_name': (data.events.event.city_name ? data.events.event.city_name : 'none'),
      'country_name': (data.events.event.country_name ? data.events.event.country_name : 'none'),
      'region_name': (data.events.event.region_name ? data.events.event.region_name : 'none'),
      'description': (data.events.event.description ? data.events.event.description : 'none'),
      'title': (data.events.event.title ? data.events.event.title : 'none'),
      'venue_url': (data.events.event.venue_url ? data.events.event.venue_url : 'none'),
      'venue_name': (data.events.event.venue_name ? data.events.event.venue_name : 'none'),
      'venue_address': (data.events.event.venue_address ? data.events.event.venue_address : 'none'),
      'start_time': (data.events.event.start_time ? data.events.event.start_time : 'none'),
      'url': (data.events.event.url ? data.events.event.url : 'none'),
      'image_url': (data.events.event.image ? data.events.event.image.thumb.url : 'none'),
      'performer': (data.events.event.performers ? data.events.event.performers.performer : 'none'),
    };
    res.json( {'eventful_event': dataToReturn });
  }else {
    res.sendStatus(404);
  }
  });
};


 const trash = (req, res, next) => {
   res.json({'hi': 'hi'});
 };

module.exports = {
  eventful,
  trash
};
