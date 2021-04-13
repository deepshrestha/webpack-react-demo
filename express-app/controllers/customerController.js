const customerDB = require("./../models/customerModel")

exports.getCustomerData = (req, res, next) => {
    customerDB.find({}, (err, result) => {        
        if(err)
            throw new Error(err)
        res.json(result)
    })
}

exports.getCustomerDataById = (req, res, next) => {
    const id = parseInt(req.params.id)
    customerDB.find({CustomerID: id }, (err, result) => {        
        if(err)
            throw new Error(err)
        res.json(result)
    })
} 

exports.postCustomerData = (req, res, next) => {
    customerDB.create(
        {_id: '789', City: "TEST123", CustomerID: 7, Zone: "Bagmati", CustomerName: "Hari"}
        , (err => {
            if(err)
                throw new Error(err)
            /* else {
                customerDB.find({}, (err, result) => {        
                    if(err)
                        throw new Error(err)
                    res.json(result)
                })
            } */
        })
    )
    
    ({CustomerID: id }, (err, result) => {        
        if(err)
            throw new Error(err)
        res.json(result)
    })
} 