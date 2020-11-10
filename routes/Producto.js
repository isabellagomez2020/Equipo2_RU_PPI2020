const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
router.get('/Productos',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Producto',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

    //actulizar
router.put('/Productos/', (req, res) => {
    const { nombre, nombreproveedor, telefonoproveedor, preciocompra, precioventa } = req.body;
    const { codigo } = req.params;
    mysqlConnection.query(`UPDATE Producto SET codigo=?,nombreproveedor=?,telefonoproveedor=?,preciocompra=?,
        precioventa=?,, WHERE codigo=?`,
        [ nombreproveedor, nombre, telefonoproveedor, preciocompra, precioventa, codigo], (err, rows, fields) => {
            if (!err) {

                res.json({ status: 'Tabla Actualizada' });
            } else {
                console.log(err);
            }
        })//fin

        //buscar
router.get('/Productos/:codigo',(req,res)=>{
    const {codigo} = req.params; //codigo del producto
    mysqlConnection.query('SELECT * FROM Producto WHERE codigo =?', [codigo],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar

//crear un producto
router.post('/nuevo-producto', (req, res) => {
    const { producto, productoprefijo } = req.body;//1 Captura
    let productoArreglo = [producto, productoprefijo];// Arreglo json
    //Definir el scrip sql en una variable
    let nuevoProducto = 'SELECT * FROM Producto(modulo,mod) value(?,?)';
    mysqlConnection.query(nuevoProducto, productoArreglo, (err, results, fields) => {
        //Si hay error
        if (!err) {
            //Verdadero
            return console.error(err.message);
        } else {//Si no
            //Falso
            res.json({ message: 'usuario creado' });
        }//Fin Si
    })
})//Fin guardar user
});

module.exports =router;