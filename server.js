var express = require('express');
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./test.html', 'utf8');
var options = { format: 'Letter' };
var app = express();

const file = fs.writeFileSync('./pdfProj.pdf');
app.get('/', function (request, response) {
    pdf.create(html, options).toFile('./pdfProj.pdf', function (err, res) {
        if (err) return console.log(err);
        console.log(res);
        fs.readFile(file, function (err, data) {
            response.contentType("application/pdf");
            response.send(data);
        });
    });
});
app.listen(3000, function () {
    console.log("Server listening on port http://localhost:3000");
});