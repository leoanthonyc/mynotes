var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Site' });
});

/* GET home page. */
router.get('/notes', function(req, res, next) {
  res.render('notes', { title: 'Notes' });
});

module.exports = router;
