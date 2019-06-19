var express = require("express");
var _ = require("lodash");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var todos = [
  {
    id: 1,
    desc: "learn node"
  }
];
var visitors = [];
var visitorId = 0;
var id = 1;
app.get("/", function(req, res) {
  res.send("Hey Deepak!");
});

app.get("/todos", function(req, res) {
  res.json(todos);
});

app.post("/todos", function(req, res) {
  let todo = {
    id: ++id,
    desc: req.body.desc
  };
  todos.push(todo);
  res.json(todo);
});

app.post("/tododelete", function(req, res) {
  let todo = {
    id: req.body.id,
  };
  var newarray = todos.filter((item) => item.id !== todo.id);
  todos = newarray;
  res.json(todos);
});

app.post("/todoupdate", function(req, res) {
  let utodo = {
    id: req.body.id,
    desc: req.body.desc
  };
  var objIndex = todos.findIndex((todo => todo.id == utodo.id));
  todos[objIndex].desc = utodo.desc;
  res.json(todos);
});

app.get("/todos/:id", function(req, res) {
  let todo = _.find(todos, todo => todo.id === parseInt(req.params.id));
  res.json(todo || {});
});

//------------start visitor api--------
app.get("/visitors",function(req,res){
  res.json(visitors);
});

app.post("/visitors", function(req,res){
  let visitor =  {
    id : ++visitorId,
    name: req.body.name,
    intime: req.body.intime
  };
  visitors.push(visitor);
  res.json(visitor);
});
//------------End visitor api--------
app.listen(5000, function() {
  console.log("listing on localhost:5000");
});
