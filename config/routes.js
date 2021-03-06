 'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.patch('/user-bio', 'users#editbio')
.patch('/user-img', 'users#addimg')
.resources('users', { only: ['index', 'show'] })

// Events routes
.resources('events')
.post('/eventful', 'api#eventful')
.get('/eventful_events', 'api#trash')

// Followee Routes
.get('/followees', 'users#getFollowees')
.patch('/add-followee', 'users#addFollowee')
.patch('/remove-followee', 'users#removeFollowee');

// all routes created
