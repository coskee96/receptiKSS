var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var router = express.Router();
var mysql = require('mysql');

let logO;
let logI;
let cL;
let user="";
let userLink="";

let data1={};
data1.warning="";
data1.name="";
data1.type="";
data1.desc="";
const con = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'recepies', port:3306

});


router.get('/', function(req, res, next) {

    if(req.cookies["log"]!=undefined){
        logO='Logout';
        logI='/login/logout';
        cL=1;
        user=req.cookies["log"];
        userLink="/userrecepies/1";
    }else{
        logO='Login';
        logI='/login';
        cL=0;
        user="Join now!";
        userLink="/register";
    }

    res.render('recepienew', {log:{logI:logI,logO:logO,user:user,uL:userLink,data1:data1}});
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

router.post('/addnew', function(req, res, next) {

    var datetime = new Date();


    // var d=start.getDate();
    // var m=start.getMonth()+1;
    // var g=start.getFullYear();


    console.log(req);
    let sqlQChImage=`SELECT count(*)  AS result FROM food_recepies WHERE photo='${ req.files.photos.name }';`;
    let sql = "INSERT INTO food_recepies (name, type, description, photo,author,date_at) VALUES (";
    sql += "'" + req.body.name + "', ";
    sql += "'" + req.body.type + "', ";
    sql += "'" + req.body.desc + "', ";
    sql += "'" + req.files.photos.name + "', ";
    sql += "'" + req.cookies['log'] + "', ";
    sql += "'" +datetime.toISOString().slice(0,10) + "'); ";


    async function pokreni() {
        let ch=await  executeQuery(sqlQChImage);

        if(ch[0].result == 0){
            console.log(sql);
            await executeQuery(sql);

            req.files.photos.mv('C:\\Users\\PC\\Desktop\\recepti\\public\\food_images\\'+req.files.photos.name,function (err) {

            });

            res.redirect('/recepienew');
        }else {

            data1.warning="This name of photo is already exist. Please type another one";
            data1.name=req.body.name;
            data1.type=req.body.type;
            data1.desc=req.body.desc;

            res.render('recepienew',{log:{logI:logI,logO:logO,user:user,uL:userLink,data1:data1}});
        }

    }
    pokreni();


});


module.exports = router;
