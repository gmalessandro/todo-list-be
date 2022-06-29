var mysql = require('mysql2');

/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 */
module.exports = function (req, res) {
  var body = req.body;
  var todoarray = body.todoarray;

  if(!todoarray || todoarray.length <= 0){
    res.status(400).send("Errore dati invalidi");
    return;
  }

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password1",
    database: "todolist"
  });

  con.connect(function (err) {
    if (err) throw err;
    var sql = `REPLACE INTO todo (todo_item, status_item) VALUES`;
    for(var i=0; i<todoarray.length; i++){
      sql += "('"+todoarray[i].todo_item+"', "+todoarray[i].status_item+")";
      if(i < todoarray.length-1){
        sql += ",";
      }
    }
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
}