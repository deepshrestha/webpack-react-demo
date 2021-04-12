const mongoose = require("mongoose")
mongoose.connect(
    "mongodb://localhost:27017/customer",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const customerSchema = mongoose.Schema(
    {
        _id: String
    },
    {
        City: String
    },
    {
        CustomerID: Number
    },
    {
        Zone: String
    },
    {
        CustomerName: String
    }
)

module.exports = mongoose.model('customer', customerSchema)