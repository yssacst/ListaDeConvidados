const mysql = require('./conexao/conn');

const conn = mysql.open('localhost','3306','festa','root','');


exports.getConvidado = (req,res)=>{
    var sql = 'select * from convidados';

    conn.query(sql,(err, result) => {
        res.render('index',{ convidado: result}); 
  });
}
exports.setConvidado = (convidado)=>{    
    conn.query("insert into convidados set ?", convidado); 
}
exports.deleteConvidado = (idConvidado)=>{    
    conn.query("delete from convidados where id = ?", idConvidado); 
}