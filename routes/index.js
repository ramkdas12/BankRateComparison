var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/sendDetails.json', function(req, res, next) {
  console.log("sendDetails.json");
  console.log(req.body);
  var resultData = {};
  resultData.details = req.body;
  resultData.details.seniorCitizen = req.body.age >= 60 ? "true" : "false";
  resultData.bankDetails = [
    {
      "bankName": "ICICI",
      "bankInterestRate": 10,
      "bankLink": "www.icicionline.com"
    },{
      "bankName": "Axis",
      "bankInterestRate": 10.5,
      "bankLink": "www.axis.com"
    },{
      "bankName": "PNB",
      "bankInterestRate": 10.23,
      "bankLink": "www.pnbonline.com"
    },{
      "bankName": "SBI",
      "bankInterestRate": 10.15,
      "bankLink": "www.sbionline.com"
    },{
      "bankName": "IDBI",
      "bankInterestRate": 10,
      "bankLink": "www.idbi.com"
    }
  ];
  console.log(resultData);
  res.send(resultData);
});

module.exports = router;
