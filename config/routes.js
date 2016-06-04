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
.put('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })

// Events routes
.resources('events')
.post('/eventful', 'api#eventful')

// Followee Routes
// .get('/followees', 'users#getFollowees')
.put('/add-followee', 'users#addFollowee');
// .patch('/remove-followee', 'users#removeFollowee');

// all routes created
