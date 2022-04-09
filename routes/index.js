var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Site' });
});

/* GET notes page. */
router.get('/notes', function(req, res, next) {
  res.render('notes', { title: 'Notes' });
});

/* GET notes page. */
router.get('/notes/1', function(req, res, next) {
  res.render('notes/1');
});

module.exports = router;
