const express = require("express")
const router = express.Router()
const getCustomerData = require("./../controllers/customerController")

router.get('/customerdata', (req, res, next) => {
    res.json(getCustomerData)
})


module.exports = router