const express = require('express');
const getBookings = require('../../api/bookings/getBookings');
const createBook = require('../../api/bookings/createBook');
const getSingleParcel = require('../../api/bookings/getSingleBook');
const getMyParcel = require('../../api/bookings/getMyParcel');
const deleteBook = require('../../api/bookings/deleteBooking');
const updateBook = require('../../api/bookings/updateBook');
const updateParcelStatus = require('../../utils/updateParcelStatus');
const delivert = require('../../api/bookings/delivert');
const allBookings = require('../../api/bookings/allBooking');
const updateParcel = require('../../api/bookings/updateParcel');
const myDelivery = require('../../api/bookings/myDelivery');
const router = express.Router()

router.get("/parcels", getBookings)
router.post("/bookings", createBook)
router.get("/getSingleParcel/:id", getSingleParcel)
router.get("/myParcel/:email", getMyParcel)
router.get("/myDelivery/:id", myDelivery)
router.delete("/myParcel/:id", deleteBook)
router.put("/booking/:id", updateBook)
router.put("/updateParcelStatus/:bookingId", updateParcelStatus)
router.put("/handleDeliverd", delivert)
router.get("/allBookings", allBookings)
router.put("/updateParcel/:id", updateParcel)

module.exports = router;
