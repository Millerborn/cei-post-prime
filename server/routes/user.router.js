const express = require('express');
const { rejectUnauthenticated } = require('../auth/authentication-middleware');
const encryptLib = require('../auth/encryption');
const Person = require('../models/user.model');
const userStrategy = require('../auth/user-strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Get all users
// TODO: rejectUnauthenticated
router.get('/list', (req, res) => {
  Person.find({}).sort({ username: 1 }).exec((err, data) => {
		return err ? res.json({ success: false, error: err }) : res.send(data);
  });
});

// DELETE route to remove user
router.delete('/:id', (req, res) => {
  console.log('in router delete user', req.params.id);
  let reqId = req.params.id;
  Person.findOneAndDelete({
    _id: reqId
  })
    .then( (removedDocument) => {
      console.log('delete result', removedDocument);
      
      res.sendStatus(200)
    })
    .catch( (error) => {
      console.log('delete error');
      res.sendStatus(500)
    })
})

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
	console.log(`in api/user/register router`, req.body);
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const newPerson = new Person({ username, password });
  newPerson.save()
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;