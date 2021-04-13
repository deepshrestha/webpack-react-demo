const express = require("express")
const router = express.Router()
const customerController = require("./../controllers/customerController")

router.get('/customerdata', customerController.getCustomerData)
router.get('/customerdata/:id', customerController.getCustomerDataById)
router.post('/customerdata', customerController.postCustomerData)

module.exports = router