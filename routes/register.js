var express = require('express');
var router = express.Router();


var passwordHash = require('password-hash');
var router = express.Router();
var mysql = require('mysql');
const parser=require('body-parser');

const con = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'recepies', port:3306

});

var data;

/* GET home page. */
router.get('/', function(req, res, next) {

     data = {
        username : '',
        name : '',
        email : '',

    };
    res.render('register',{warning:'',data:data});
});





function executeQuery(sql){
    return  new Promise((resolve, reject) => {

        con.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                reject(err.message);
            }

            resolve(result);

        });

    });

}


router.post('/reg',function (req,res) {
    var checkUsername=`SELECT count(*) as result  FROM users WHERE users.username='${req.body.username.toLocaleLowerCase() }'`;
    var checkEmail=`SELECT count(*)  as result FROM users WHERE users.email='${req.body.email.toLocaleLowerCase() }'`;
    var addAcc=`INSERT INTO users(username,name,email,password) VALUES ('${req.body.username.toLocaleLowerCase() }','${req.body.name}','${req.body.email.toLocaleLowerCase() }','${passwordHash.generate(req.body.password )}')`;
    data.username=req.body.username;
    data.name=req.body.name;
    data.email=req.body.email;
    async function start() {
    var  warrning='';
    var status;
     var checks = [
         await executeQuery(checkUsername),
         await executeQuery(checkEmail)
     ];
       if(checks[0][0].result==1){
           status='username';
       }else if(checks[1][0].result==1){
           status='email';
       }else if(req.body.cPassword!=req.body.password) {
           status = 'pass';
       }else{
           status='ok';
       }
          switch (status) {
              case 'username':
                  warrning="username already exists.Please try with another one";
                break;
              case 'email':
                  warrning="email already exists.Please try with another one";
                  break;
              case 'pass':
                  warrning="Passwrd doesn't match";
                  break;
              case 'ok':
                  warrning='SUCCESS';
                   executeQuery(addAcc);
                  data = {
                      username : '',
                      name : '',
                      email : '',
                  }; break;
              default:
                  break;
         }
        res.render('register',{warning:warrning,data:data});
    }
    start();
});



module.exports = router;
