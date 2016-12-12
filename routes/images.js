var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:image', function(req, res, next) {
  res.sendFile(__dirname + `/images/${req.params.image}`);
});

module.exports = router;