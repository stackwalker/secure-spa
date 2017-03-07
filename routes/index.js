var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', (req, res, next) => {
	console.log('Request is: ', req.body)
	if(req.user){
		console.log("Apparently logged in: ", req.body)
		return res.json({recieved: req.body.text})
	}else{
		return res.status(401).send('Unauthorized!')
	}
})
module.exports = router;
