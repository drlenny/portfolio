const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.json());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
};
app.listen(port, function () {
  console.log(`Server started on ${port} succesfully`);
});