const express = require('express');
const router = express.Router();

const {index, create} = require('../app/controllers/UserController');

router.get('/', index);
router.post('/create', create);

module.exports = router;