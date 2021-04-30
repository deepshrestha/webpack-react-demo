const customerDB = require("./../models/customerModel");

exports.getCustomerData = (req, res, next) => {
  customerDB.find({}, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });

  /* let data = []
    customerDB.find({}, (err, result1) => {
        if (err) throw new Error(err);
        customerDB.countDocuments((err, result) => {
            data.push(result, result1)
            res.json(data)
        })        
    }); */
};

exports.getCustomerDataById = (req, res, next) => {
  const id = parseInt(req.params.id);
  customerDB.find({ CustomerID: id }, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
};

exports.editCustomerDataById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  //console.log(data)
  customerDB.updateOne({ CustomerID: id }, { $set: data }, (err, result) => {
    if (err) throw new Error(err);
    customerDB.find({}, (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    });
  });
};

exports.postCustomerData = (req, res, next) => {
  //console.log(req.body);

  customerDB.create(
    {
      _id: req.body.CustomerID,
      City: req.body.City,
      CustomerID: req.body.CustomerID,
      Zone: req.body.Zone,
      CustomerName: req.body.CustomerName,
    },
    (err) => {
      if (err) throw new Error(err);
      else {
        customerDB.find({}, (err, result) => {
          if (err) throw new Error(err);
          res.json(result);
        });
      }
    }
  );
};

exports.getTotalCustomerData = (req, res) => {
  customerDB.countDocuments((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
};

exports.deleteCustomerDataById = (req, res) => {
  const id = parseInt(req.params.id);
  customerDB.deleteOne({ CustomerID: id }, (err, result) => {
    if (err) throw new Error(err);
    customerDB.find({}, (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    });
  });
};
