var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  
  	// load json data into an object
    var data = require("../data.json");

    // load a template file, then render it with data
    res.render('index', data);

});

module.exports = router;
