var express = require('express')
var router = express.Router()
const passport = require('passport')
const User = require('../models/User')
const crypto = require('crypto')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

router.post('/signup', function(req, res, next) {
	console.log("Signing up with data: ", req.body)
  const user = new User({
    email: req.body.email,
    password: req.body.password
  })

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) { return next(err) }
    if (existingUser) {
			return res.status(400).send('exists')
    }
    user.save((err) => {
      if (err) { return next(err) }
      req.logIn(user, (err) => {
        if (err) {
          return next(err)
        }
				res.header('Access-Control-Allow-Credentials', 'true')
				res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        return res.json(user)
      })
    })
  })
})
router.post('/login', (req, res, next) => {
	console.log("trying to login with : ", req.body)
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) {
      return res.status(401).send('Not Authorized!!')
    }
    req.logIn(user, (err) => {
      if (err) { return next(err) }
      return res.json(user)
    })
  })(req, res, next)
})

router.get('/logout', (req,res,next) => {
	req.logout()
	return res.status(200).send()
})
router.get('/login2', (req, res, next) => {
	res.render('login')
	})
router.post('/login2', (req, res, next) => {
	console.log("trying to login with : ", req.body)
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) {
      return res.status(401).send('Not Authorized!!')
    }
    req.logIn(user, (err) => {
      if (err) { return next(err) }
      return res.redirect('/')
    })
  })(req, res, next)
})

module.exports = router
