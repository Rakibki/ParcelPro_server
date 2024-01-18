const express = require('express');
const createUser = require('../../api/users/createUser');
const getSimgleUser = require('../../api/users/getSingleUser');
const makeAdmin = require('../../utils/makeAdmin');
const makeDeliveryMan = require('../../utils/makeDelivertMan');
const getIdbyEmail = require('../../utils/getIdbyEmaul');
const updateProfile = require('../../api/users/updateProfile');
const topFiveFeliveryMan = require('../../utils/topFiveFeliveryMan');
const count = require('../../utils/count');
const router = express.Router()


router.post("/users", createUser)
router.get("/user/:email", getSimgleUser)
router.put("/makeAdmin/:id", makeAdmin)
router.put("/makeDeliveryMan/:id", makeDeliveryMan)
router.get("/getIdbyEmail/:email", getIdbyEmail)
router.put("/updateProfile/:email", updateProfile)
router.get("/topFiveFeliveryMan", topFiveFeliveryMan)
router.get("/count", count)

module.exports = router