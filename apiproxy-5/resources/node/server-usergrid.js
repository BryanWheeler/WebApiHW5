var argo = require('argo');
var express = require('express');

var app = express();

var proxy = argo()
    .target('https://api.usergrid.com')
    .build();

app.get('/hello', function(req, res) {
    res.send('Hello from Express');
});

app.all('*', proxy.run);

app.listen(3000);