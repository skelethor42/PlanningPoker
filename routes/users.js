var mysql = require('mysql');
var connection = mysql.createConnection({ host: 'localhost', user: 'root',
  password: 'uR1in!!?', database: 'PlanningPoker'});


exports.add = function(req, res){

    console.log(req.body);

    if (connection) {

      connection.query('INSERT INTO users SET ?', req.body, function (err, rows, fields) {


          if (err) throw err;
       res.contentType('text');
      res.write("User added");
      res.end();
    });
  } else {
    res.contentType('text');
    res.write("No Connection");
    res.end();
  }
};

exports.del = function(req, res){

    if (connection) {
        connection.query('DELETE FROM Users WHERE id = ?', [req.params.idToDelete], function (err, rows, fields) {

            if (err) throw err;
            res.contentType('text');
            res.write("User deleted");
            res.end();
        });
    } else {
        res.contentType('text');
        res.write("No Connection");
        res.end();
    }
};

exports.all = function(req, res){
    res.write(req.params.id)
    if (connection) {
        connection.query('select * from users order by username', function (err, rows, fields) {
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