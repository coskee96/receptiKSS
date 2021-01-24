var express = require('express');
var router = express.Router();


var passwordHash = require('password-hash');
var router = express.Router();
var mysql = require('mysql');
const parser=require('body-parser');

const con = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'recepies', port:3306

});



router.get('/', function(req, res, next) {

    res.render('login',{warning:''});
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


router.get('/logout', function(req, res, next){
    res.clearCookie("log");
    res.redirect('/index');
});





router.post('/log', function(req, res, next) {

    let sqlCheckUsername = `SELECT count(*)  AS result FROM users WHERE username='${req.body.username.toLocaleLowerCase() }';`;
    let checkQ = `SELECT *  FROM users WHERE username='${req.body.username}';`;
    async function pokreni() {
        var checkU = await executeQuery(sqlCheckUsername);

        if(checkU[0].result==1){
            var check = await executeQuery(checkQ);

            if(passwordHash.verify(req.body.password, check[0].password)){

                res.cookie('log',req.body.username);
                res.redirect('/userrecepies/1');
            }else{
                warning="The password you entered is incorrect";
                res.render('login',{warning:warning});
            }



        }else if(checkU[0].result==0){
            warning="This username doesn't exist";
            res.render('login',{warning:warning});
        }

    }

    pokreni();





});





module.exports = router;
