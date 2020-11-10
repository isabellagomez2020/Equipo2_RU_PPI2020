const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
router.get('/usuario',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Usuario',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin
// Por probar a ver

module.exports =router;