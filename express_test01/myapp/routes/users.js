var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource02');
});

router.get('/test02', function (req, res, next) {
    res.send('respond with a test02');
});

module.exports = router;
