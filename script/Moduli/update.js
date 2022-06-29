var mysql = require('mysql2');
module.exports = function (req, res) {

  console.log(req.body);
  var body = req.body;
  var todoItem = body.todoItem;

  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password1',
    database: 'todolist'
  });

  con.connect(function (err) {
    if (err) throw err;

    query(todoItem, con).then((x)=>{

      res.status(200);
      res.send(x);

    }).catch((e)=>{
      throw e;
    });
  });
}

/**
 * 
 * @param {*} todoItem 
 * @param {import('mysql2').Connection} con 
 * @returns 
 */
var query = (todoItem, con)=>{
  
  var sql = `UPDATE todo SET todo_item=?, status_item = ? WHERE id=?`;
  return new Promise((resolve, reject)=>{
    con.query(sql, [todoItem.todo_item, todoItem.status_item, todoItem.id], function (err, result, fields) {
      if (err) reject(err);
      console.log(result);
      resolve(result);
    });
  });
}