var express=require("express");
var mysql = require('mysql');
var bodyParser = require('body-parser')

var app=express();
var urlencodeParser= bodyParser.urlencoded({extended:false});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "welovegame"
  });

app.listen(3000);

app.get("/signup",function(req,res){
    var name=req.query.name;
    /*var name=req.query.mail;
    var name=req.query.phone;
    var name=req.query.account;
    var name=req.query.password;
    var name=req.query.mod;*/   
    //connectDB(con,"select * from account",res);
    console.log(name);

    res.send(name);
})
app.post("/signup",urlencodeParser,function(req,res){
    var name=req.body.name;
    //connectDB(con,"select * from account where account="+name);
    console.log(name);
    res.send(name);
})

app.get("/login",function(req,res){
    var account=req.query.account;
    var password=req.query.password;
})
//---------------------------------------------//
function connectDB(con,query,res){
    con.connect();
    con.query(query, function(err , result , fields){
        if(err) throw err
        console.log(result);
        res.send(result);
    });
    con.end();
}