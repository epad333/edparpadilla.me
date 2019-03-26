var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"))

app.get("/", function(req,res){
    

    
    res.render("home", {page:"about"});
    


    
});

app.get("/projects", function(req,res){
    res.render("projects", {page: "projects"});
});

app.get("/contact", function(req,res){
    res.render("contact", {page: "contact"});
});

app.get("/resume", function(req,res){
    res.render("resume", {page:"resume"});
});



app.get('*', function(req, res){
  res.render("404")
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});