var express = require("express");
var path = require("path");
var app = express();

app.set("port", 3000)
/*home page*/
app.get("/", function(request, response){
    console.log("Get homepage");
    response
        .status(200)
        .sendFile(path.join(__dirname, "public", "index.html"));
});
/*getting json example*/
app.get("/json", function(request, response){
    console.log("Get json");
    response
        .status(200)
        .json({"json_data":"Json yourself!!!"});
});
/*getting file*/
app.get("/file", function(request, response){
    console.log("Get file");
    response
        .status(200)
        .sendFile(path.join(__dirname, "app.js"));
});

var server = app.listen(app.get("port"), function(){
    var port = server.address().port;
    console.log("Magic happens on port "+ port)
});

