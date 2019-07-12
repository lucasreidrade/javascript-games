var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
/* GET game page */
router.get('/ttt/hard', ctrlMain.ttt_hard);

/* GET game page */
router.get('/ttt', ctrlMain.ttt);

/* GET game page */
router.get('/ttt2', ctrlMain.ttt2);

/* GET home page */
router.get('/', ctrlMain.index);
module.exports = router;
