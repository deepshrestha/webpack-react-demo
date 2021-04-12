const customerDB = require("./../models/customerModel")

exports.getCustomerData = () => {
    customerDB.find({}, (err, result) => {        
        console.log(result)
        if(err)
            throw new Error(err)
        return result
    })
} 