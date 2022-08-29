var mysql=require("mysql");
var con= mysql.createConnection({
    host:'us-cdbr-east-06.cleardb.net',
    user:'b6dd65c7505df8',
    password: 'ad233d50',
    database: 'heroku_cec25afef1b3f28'
}
);

con.connect(
    (err)=>{
        if(!err){
            console.log('Conexión establecida');
        } else{
        console.log('Error de conexión'); 
     }
    }
);

module.exports=con; 