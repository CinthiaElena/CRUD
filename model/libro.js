module.exports={
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM libros", funcion); 
    },
    insertar:function(conexion,datos, funcion){
        conexion.query("INSERT INTO libros (nombre, fecha, paginas, sinopsis, categoria, autor) VALUES (?,?,?,?,?,?)",[datos.nombre, datos.fecha, datos.paginas, datos.sinopsis, datos.categoria, datos.autor], funcion); 
    },
    retornarDatosID:function(conexion, id, funcion){
        conexion.query("SELECT * FROM libros WHERE id=?", [id], funcion);
    },
    borrar:function(conexion, id, funcion){
        conexion.query("DELETE FROM libros WHERE id=?", [id], funcion);
    },
    actualizar:function(conexion, datos, funcion){
        conexion.query("UPDATE libros SET nombre=?, fecha=?, paginas=?, sinopsis=?, categoria=?, autor=? WHERE id=?",[datos.nombre, datos.fecha, datos.paginas, datos.sinopsis, datos.categoria, datos.autor, datos.id], funcion); 
     },
     actualizarArchivo:function(conexion, datos, archivo, funcion){
         conexion.query("UPDATE libros SET imagen=? WHERE id=?",[archivo.filename, datos.id], funcion); 
    }  
}
