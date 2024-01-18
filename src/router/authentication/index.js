const express = require('express')
const createToken = require('../../utils/createToken')
const getAllUsers = require('../../api/authentication/getAllUsers')
const usersLength = require('../../api/authentication/usersLength')
const allAllDeliveryMen = require('../../api/authentication/allAllDeliveryMen')
const removeToken = require('../../utils/removeToken')
const getRole = require('../../api/authentication/getRole')
const router = express.Router()

router.post("/jwt", createToken)
router.get("/users", getAllUsers)
router.get("/userLength", usersLength)
router.get("/allAllDeliveryMen", allAllDeliveryMen)
router.post("/jwt", removeToken)
router.get("/getRole/:email", getRole)

module.exports = router