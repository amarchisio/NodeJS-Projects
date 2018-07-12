var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Website' });
});

var moment = require('moment');

// http://localhost:3000/session
router.get('/session', function(req, res) {
  // HTTP request has a session object
  var sess = req.session;
  // create a javascript variable views
  if (sess.views) {
    sess.views++;
  } else {
    // initialize the new variable to 1
    sess.views = 1;
  }
  // views/session.hbs
  res.render('session', {
    title: 'Counting session',
    views: sess.views,
    dates: moment().format('MMMM Do YYYY, h:mm:ss a')
  });
});


// http://localhost:3000/session.angular
router.get('/session.angular', function(req, res) {
var sess = req.session;
if (sess.views) {
    sess.views++;
}
else {
    sess.views = 1;
}
res.send({
    title: 'Counting session',
    firstTime: sess.views == 1,
    views: sess.views,
    dates: moment().format('MMMM Do YYYY, h:mm:ss a')
  });
});

router.get('/formHandler',	function(req,	res)	{
		res.render('form');
});
router.post('/formHandler',	function(req,	res)	{
		/*	alternative
				res.render('form',{
				 title:	req.body.title,
				 paragraph:	req.body.paragraph
		});
		*/

		//console.log(req.body);
		res.render('form',req.body);

    router.post('/formAngular',	function(req,	res)	{
		res.send({
				title:	req.body.title,
				paragraph:	req.body.paragraph,
				fromServer:	true
		});
		//res.send(req.body);
});
});


router.get('/madLibs',	function(req,	res)	{
		res.render('madLibs');
});
router.post('/madLibsOutput',	function(req,	res)	{
		/*	alternative
				res.render('form',{
				 title:	req.body.title,
				 paragraph:	req.body.paragraph
		});
		*/

		//console.log(req.body);
		res.render('madLibsOutput',req.body);

    router.post('/madLibsOutput',	function(req,	res)	{
		res.send({
      title:	req.body.title,
      paragraph:	req.body.paragraph,
			fromServer:	true
		});
		//res.send(req.body);
});
});

// Connect to process.env.DATABASE_URL when your app initializes:
// Read only reference value (const)
// get only Client class from pg package
const Client = require('pg').Client;
// create an instance from Client
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// connect to the DATABASE_URL
client.connect();

/* GET home page. */
router.get('/books', function(req, response, next) {
  // client object enables issuing SQL queries
  client.query('SELECT * FROM book', function(err, result){
    if (err) {
      next(err);
    }
    response.render('books',result);
  });
});




module.exports = router;
