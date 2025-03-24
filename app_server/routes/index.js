var express = require('express');
var router = express.Router();
const crtlMain = require('../controllers/main');
const ctrlTravel = require('../controllers/travel');

/* GET home page. */
router.get('/', crtlMain.index);

/* GET travel page */
router.get('/travel', ctrlTravel.travel);

module.exports = router;
