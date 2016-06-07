'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  city_name: {
    type: String
  },
  country_name: {
    type: String
  },
  region_name: {
    type: String
  },
  description: {
    type: String
  },
  title: {
    type: String
  },
  venue_url: {
    type: String
  },
  venue_name: {
    type: String
  },
  venue_address: {
    type: String
  },
  start_time: {
    type: Date
  },
  url: {
    type: String
  },
  image_url: {
    type: String
  },
  performer: {
    type: schema.Types.Mixed
  },
  id:{
    type: String,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
