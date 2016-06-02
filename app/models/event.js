'use strict';

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  location: {
    venue: {
      name: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      region: {
        type: String,
        required: true,
      }
    }
  },
  date: {
    month: {
      type: String,
      required: true,
    },
    day: {
      name: {
        type: String,
        required: true,
      },
      num_of_day: {
        type: Number,
        required: true,
      }
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
