var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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



module.exports = router;
