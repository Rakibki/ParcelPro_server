const express = require('express');
const getAllServices = require('../../api/services/getAllServices');
const router = express.Router()

router.get('/services', getAllServices)

module.exports = router