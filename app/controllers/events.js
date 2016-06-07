'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Event = models.event;
const User = models.user;
const authenticate = require('./concerns/authenticate');


const index = (req, res, next) => {
  console.log(req.currentUser);
  User.findOne({"_id": req.currentUser._id}).then(function(user){
    return user.events;
  })
    .then(events => res.json({ events }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  User.findOne({"_id": req.currentUser._id}).then(function (user){
   return user.events.id(req.params.id);
  })
    .then(concert => concert ? res.json({ concert }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  User.findById(req.currentUser._id).then (function(user){
    let concert = req.body;
    console.log(concert)
    user.events.push(concert);
    return user.save();
  })
  .then(user => res.json({ user }))
  .catch(err => console.log(err.stack));
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
  User.findOne({"_id": req.currentUser._id })
    .then(user => {
      if (!user) {
        return next();
      }
      user.events.id(req.params.id).remove();
      return user;
    })
    .then((user) => user.save())
    .then((user) => res.json({ user }))
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: authenticate, except: ['eventful']},
], });
