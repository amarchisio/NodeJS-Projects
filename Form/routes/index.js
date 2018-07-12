var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
module.exports = router;
