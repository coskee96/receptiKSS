var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let logO;
let logI;
let cL;
let user="";
let userLink="";
let edit;
const con = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'recepies', port:3306

});

router.get('/:id',function (req,res,next) {
    edit=0;
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

        let sql = `SELECT * FROM food_recepies  where id = '${req.params.id}';`;
        let sql1 = `SELECT rate FROM rate  where id_recepies = '${req.params.id}' and u_Assessor='${req.cookies["log"]}';`;
        let data= await executeQuery(sql);
        let dataU= await executeQuery(sql1);
    if(data[0].author===req.cookies["log"]){
    edit=1;
    }
        if(dataU.length==0){

            dataU=[
                {rate:null}
            ];


        }

        res.render('recepie', {log:{logI:logI,logO:logO,user:user,uL:userLink,cl:cL,edit:edit},dataR:data,dataU:dataU});
    }
});
function updateRate(id){
    let sql =`SELECT AVG(rate) as average FROM rate WHERE id_recepies='${id}'`;
    async function execute() {
        let rez= await executeQuery(sql);

       let uQ= `UPDATE  food_recepies SET rate='${rez[0].average}' where id='${id}';`;
       console.log(uQ);
      await executeQuery(uQ);
    }
    execute();
}


router.post('/rate/:id',function (req,res,next) {

     let sql1 = "INSERT INTO rate (u_Assessor,id_recepies,rate)value(";
        sql1 += "'" + req.cookies["log"] + "', ";
        sql1 += "'" + req.params.id + "', ";
        sql1 += "'" + req.body.mark + "');";

        let sql = `SELECT  count(*)  AS checkA from rate where id_recepies='${req.params.id}' and u_Assessor='${ req.cookies["log"]}';`;

         let sqlU = `UPDATE  rate SET rate='${req.body.mark}' where id_recepies='${req.params.id}' and u_Assessor='${ req.cookies["log"]}';`;

        async function startExecute() {

    let check= await executeQuery(sql);

    if(check[0].checkA==0){
                await executeQuery(sql1);
                updateRate(req.params.id);
                res.redirect('/recepie/'+req.params.id);
            }else{

                await executeQuery(sqlU);
                updateRate(req.params.id);
                res.redirect('/recepie/'+req.params.id);
            }


    await executeQuery(sql);
    res.redirect('/recepie/'+req.params.id);
            }
    startExecute();

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