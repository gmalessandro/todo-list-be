var mysql = require('mysql2');
module.exports = function (req, res) {

    console.log(req.body);
    var body = req.body;
    var daEliminare = body.todo_item;

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password1',
        database: 'todolist'
    });

    con.connect(function (err) {
        if (err) throw err;
        var sql = "DELETE FROM todo WHERE todo_item = ?";
        if(daEliminare){
            con.query(sql, [daEliminare], (err,result,fields)=>{
                if(err) throw err;
                console.log(result);
                res.send(result);
            });
        }
    });
}
