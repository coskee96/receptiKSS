var express = require('express');
var router = express.Router();

var mysql = require('mysql');

let logO;
let logI;
let cL;
let user="";
let userLink="";

const con = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'recepies', port:3306

});
router.get('/:id', function(req, res, next) {

    if(req.cookies["log"]!=undefined){
        logO='Logout';
        logI='/login/logout';
        cL=1;
        user=req.cookies["log"];
        userLink="/userrecepies/1";
        getRecepies(req.params.id);
    }else{
        logO='Login';
        logI='/login';
        cL=0;
        user="Join now!";
        userLink="/register";
        getRecepies(req.params.id);
    }
    async function getRecepies(id) {


       let  sqlRecepies=``;
        switch (id) {
            case 'a' :
                sqlRecepies = `SELECT * FROM food_recepies ORDER BY name ASC;`;
                break;
            case 'd' :
                sqlRecepies = `SELECT * FROM food_recepies  ORDER BY name DESC;`;
                break;
            case 'r' :
                sqlRecepies = `SELECT * FROM food_recepies  ORDER BY rate DESC;`;
                break;
            case 'u' :
                sqlRecepies = `SELECT * FROM food_recepies ORDER BY date_at ASC;`;
                break;
            default:
                 sqlRecepies = `SELECT * FROM food_recepies;`;
                break;


        }

        let data= await executeQuery(sqlRecepies);


        res.render('recepies',{log:{logI:logI,logO:logO,user:user,uL:userLink},dataR:data});
    }




});



router.post('/find',function (req,res,next) {


    if(req.cookies["log"]!=undefined){
        logO='Logout';
        logI='/login/logout';
        cL=1;
        user=req.cookies["log"];
        userLink="/userrecepies/1";
        getRecepies();
    }else{
        logO='Login';
        logI='/login';
        cL=0;
        user="Join now!";
        userLink="/register";
        getRecepies();
    }

    async function getRecepies() {

        let sql = `SELECT * FROM food_recepies where name LIKE '%${req.body.name}%' and rate = '${req.body.rate}' and type = '${req.body.type}';`;
        console.log(sql);
        let data= await executeQuery(sql);


        res.render('recepies', {log:{logI:logI,logO:logO,user:user,uL:userLink},dataR:data});
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
