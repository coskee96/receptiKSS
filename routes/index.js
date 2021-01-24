var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let logO;
let logI;
let uL;
let user="";
let userLink="";

const con = mysql.createConnection({
  host: 'localhost', user: 'root', database: 'recepies', port:3306

});

router.get('/', function(req, res, next) {
  if(req.cookies["log"]!=undefined){
    logO='Logout';
    logI='/login/logout';
    uL=1;
    user=req.cookies["log"];
    userLink="/userrecepies/1";
    getRecepies();
  }else{
    logO='Login';
    logI='/login';
    uL=0;
    user="Join now!";
    userLink="/register";
    getRecepies();
  }


  async function getRecepies() {
    let sql = `SELECT * FROM food_recepies  ORDER BY rate DESC LIMIT 3;`;
    let sqlR = `SELECT * FROM food_recepies   LIMIT 3;`;
    let data= await executeQuery(sql);
    let dataR = await executeQuery(sqlR);

    res.render('index', {log:{logI:logI,logO:logO,user:user,uL:userLink,uLog:uL},dataR:data,dataRandom:dataR});
  }

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
module.exports = router;
