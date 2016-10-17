var express = require('express');   //Express framework (Webframework)
var users = require('./routes/users');  //Meine Api Logik
var bodyParser = require('body-parser')
var app = express();  //Inititalisiert den Webserver
app.use(bodyParser.json())



app.get('/users', users.all);  // Definition Get Ebene 1

app.post('/users', users.add);

app.delete('/users/:idToDelete', users.del)

app.listen(3001);  // Welcher Port
console.log('Listening on port 3001...');   //Ultrakrasse Debugausgabes