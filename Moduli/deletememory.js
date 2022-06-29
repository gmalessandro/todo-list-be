var mysql = require('mysql2');
module.exports = function (req, res) {

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password1',
        database: 'todolist'
    });

    con.connect(function (err) {
        if (err) throw err;
        con.query("DELETE FROM todo", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });


}