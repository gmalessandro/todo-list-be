var mysql = require('mysql2'); //DA CHIAMARE SOLO QUANDO HTML ELIMINI OGGETTI SELEZIONATI
module.exports = function (req, res) {

    console.log(req.body);
    var body = req.body;
    var todoarray = body.todoarray;

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password1',
        database: 'todolist'
    });

    con.connect(function (err) {
        if (err) throw err;
        var sql = "DELETE FROM todo WHERE status_item = true";
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });

}