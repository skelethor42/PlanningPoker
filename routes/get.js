/**
 * Created by thorstenrimkus on 14.09.16.
 */

var mysql = require('mysql');
var connection = mysql.createConnection({ host: 'localhost', user: 'root',
    password: 'uR1in!!?', database: 'PlanningPoker'});



exports.test = function(req, res){
    if (connection) {
        connection.query('select username from users order by username', function (err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify(rows));
            res.end();
        });
    } else {
        res.contentType('text');
        res.write("No Connection");
        res.end();
    }
};
