'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Event = models.event;
const User = models.user;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Event.find()
    .then(events => res.json({ events }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => event ? res.json({ event }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  User.findById(req.currentUser._id).then (function(user){
    let event = Object.assign(req.body.event);
    user.events.push(event);
    let success = user.save().then(function (err) {
      if(err){
        console.log(err);
      }else{
        return user;
      }
    });
    console.log(success);
    return success;
  })
  .then(success => res.json({ success }))
  .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Event.findOne(search)
    .then(event => {
      if (!event) {
        return next();
      }

      delete req.body._owner;  // disallow owner reassignment.
      return event.update(req.body.event)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Event.findOne(search)
    .then(event => {
      if (!event) {
        return next();
      }

      return event.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: authenticate, except: ['index', 'show'] },
], });
