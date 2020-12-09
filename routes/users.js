var express = require('express');
var router = express.Router();
var db = require('../database.js');
var bodyParser = require('body-parser');

/* GET users listing. */
// router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
// });

router.get('/form', (req, res, next) => {
  res.render('users');
  console.log('/form route passed')
});

router.use(bodyParser.urlencoded({ extended: true}));


router.post('/create', (req, res, next) => {
  //store all the user input data
  // console.log(`req.body is : ${req.body}`);
  let userDetails = req.body;
  // console.log(`userDetails: ${userDetails.task}`)
  // var fullName = req.body.firstName;
  // var city = req.body.city;

  //insert user data into users table
  let sql = 'INSERT INTO users SET ?';
  db.query(sql, userDetails, (err, data) => {
    if(err) throw err;
    console.log(data,'--->User data inserted!');
  
  });
  
  //redirect to user form page after inserting data
  res.redirect('/users/form');

});



/*
router.post('/create', function(req, res, next) {
  console.log('Got body: '+ req.body);
  var fullName     = req.body.firstName;
  var emailAddress = req.body.emailAddress;
  var city         = req.body.city;
  var country      = req.body.country;
  
 var sql = `INSERT INTO users (fullName, emailAddress, city, country ) VALUES ('${fullName}', '${emailAddress}', '${city}', ${country} )`;
 db.query(sql,function (err, data) {
    if (err) throw err;
         console.log("record inserted");
     });
 res.redirect('/users/form');
});
*/
module.exports = router;
