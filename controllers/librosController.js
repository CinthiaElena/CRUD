var conexion=require('../config/conexion');
var libro=require("../model/libro");
var borrar= require("fs");

module.exports={

    index:function(req,res){

        libro.obtener(conexion, function(err,datos){
            console.log(datos);
            res.render('libros/index', { title: 'Aplicación', libros:datos });
        });

    },
    crear:function(rec, res){
        res.render('libros/crear');
    },
    guardar:function(req,res){

        console.log(req.body);

        console.log(req.file.filename);

        libro.insertar(conexion,req.body, req.file, function(err){
             res.redirect("/libros");

        });

    },
    eliminar:function (req,res){
        console.log("Recepcion de datos");
        console.log(req.params.id);
        libro.retornarDatosID(conexion, req.params.id, function (err, registros){
            var nombreImagen="public/images"+(registros[0].imagen);

            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);
            }

            res.send(nombreImagen);

        });
    }

}