var express = require('express');
var router = express.Router();
const fs = require('fs');

var mysql = require('mysql');



const path = 'C:\\Users\\PC\\Desktop\\recepti\\public\\food_images\\';
let logO;
let logI;
let uL;
let user="";
let userLink="";




const con = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'recepies', port:3306

});


router.get('/:id', function(req, res, next) {
    if(req.cookies["log"]!=undefined){
        logO='Logout';
        logI='/login/logout';
        uL=1;
        user=req.cookies["log"];

        getRecepies(req.params.id);
    }else{
        logO='Login';
        logI='/login';
        uL=0;
        user="";
        res.end();
    }



    async function getRecepies(id) {
        let sqlRecepies = `SELECT * FROM food_recepies where author='${req.cookies["log"]}';`;
        switch (id) {
            case 'a' :
                sqlRecepies = `SELECT * FROM food_recepies where author='${req.cookies["log"]}' ORDER BY name ASC;`;
                break;
            case 'd' :
                sqlRecepies = `SELECT * FROM food_recepies where author='${req.cookies["log"]}' ORDER BY name DESC;`;
                break;
            case 'r' :
                sqlRecepies = `SELECT * FROM food_recepies where author='${req.cookies["log"]}' ORDER BY rate DESC;`;
                break;
            case 'u' :
                sqlRecepies = `SELECT * FROM food_recepies where author='${req.cookies["log"]}' ORDER BY date_at DESC;`;
                break;
            default:
                break;

        }


       let data= await executeQuery(sqlRecepies);

        res.render('userrecepies',{log:{logI:logI,logO:logO,user:user,uLog:uL},dataR:data});
    }


});



router.get('/delete/:id',function (req,res,next) {


    async function deleteR() {
        fs.unlinkSync(path+req.query.photo);
        let sql=`DELETE FROM food_recepies WHERE id='${req.params.id}';`;
        await executeQuery(sql);


        res.redirect('/userrecepies/1');


    }
    deleteR();

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
