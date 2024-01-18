const express = require('express');
const myMessage = require('../../api/message/myMessage');
const router = express.Router()

router.get('/mayMassage/:email', myMessage)

module.exports = router;