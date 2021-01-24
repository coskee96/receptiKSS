var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const fs = require('fs');




const path = 'C:\\Users\\PC\\Desktop\\recepti\\public\\food_images\\';
let logO;
let logI;
let cL;
let user="";
let userLink="";
let id="";
let photo=""
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
        getRecepies();
    }else{
        logO='Login';
        logI='/login';
        cL=0;
        user="Join now!";
        userLink="/register";

    }
id=req.params.id;
    async function getRecepies() {
        let sql = `SELECT * FROM food_recepies  where id = '${req.params.id}';`;

       let data=await executeQuery(sql);
 photo=data[0].photo;
        res.render('edit', {log:{logI:logI,logO:logO,user:user,uL:userLink},dataR:data});
    }

});




router.post('/update',function (req,res,next) {



    async function updateRecepies() {
        let sql;
        if(req.files==null){
            sql = `UPDATE food_recepies SET  name='${req.body.name}', type='${req.body.type}', description='${req.body.desc}' where id = '${id}';`;

        }else{
            fs.unlinkSync(path+photo);

           sql = `UPDATE food_recepies SET  name='${req.body.name}', type='${req.body.type}', description='${req.body.desc}', photo='${req.files.photos.name}' where id = '${id}';`;
            req.files.photos.mv('C:\\Users\\PC\\Desktop\\recepti\\public\\food_images\\'+req.files.photos.name,function (err) {

            });

        }

       await executeQuery(sql);

        res.redirect('/edit/'+id);
    }
    updateRecepies();
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