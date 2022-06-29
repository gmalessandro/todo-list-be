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
        var sql = "UPDATE todo SET todo_item=?, status_item=? WHERE todo_item = ?";
        con.query(sql, [todoItem.todo_item, todoItem.status_item, todoItem.todo_item], (err, result, fields) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
}