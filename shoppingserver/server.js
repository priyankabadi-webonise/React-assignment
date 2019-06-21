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
var products=[ {
    item : "gray tabby",
    discription :"The name gray tabby describes not a breed but a coat color and pattern. The sporty looks of the gray tabby are peerless. ",
    price : 2000,
    img : "item1"
  },
  {
    item : "Persian",
    discription :"known for the pushed-in Pekingese nose that many are bred for, arguably the best part of these cats is their pettability. All that fur needs a lot of daily grooming, ",
    price : 5000,
    img  : "item2"
  },
  {
    item : "Norwegian Forest Cat",
    discription :"A big cat with big paws and lots of fur, the Norwegian is like a Maine Coon cat’s Viking cousin.",
    price : 3000,
    img  : "item3"
  }];
var cartList = null;
var visitors = [];
var visitorId = 0;
app.get("/", function(req, res) {
  res.send("Hey Deepak!");
});

app.get("/products", function(req, res) {
  res.json(products);
});

app.post("/cartList", function(req, res) {
  let data={item: req.body.item};
  if(cartList == null){
        cartList=[];
  }
  var getItemToAdd = products.find((prod)=> prod.item == data.item);
  var checkItemExists = cartList.find((prod)=> prod.item==getItemToAdd.item);
  if(checkItemExists){
    cartList.map((prod)=>{
    if(prod.item === getItemToAdd.item){
      prod.quantity += 1;
      prod.Total += prod.price;
    }
    })
  }else{
     getItemToAdd.quantity = 1;
     getItemToAdd.Total = getItemToAdd.price;
  }
  res.json(data);
});


app.post("/cartListDelete", function(req, res) {
  let data={item: req.body.item};
  var getItemTodel = products.find((prod)=> prod.item == data.item);
  var checkItemExistss = cartList.find((prod)=> prod.item==getItemTodel.item);
      if(checkItemExistss){
        if(checkItemExistss.quantity === 1){
          cartList.filter((prod) => prod.item != getItemTodel.item);
        }else{
          cartList.map((prod)=>{
            if(prod.item === getItemTodel.item){
              prod.quantity -= 1;
              prod.Total -= prod.price;
            }
          });
        }
        
      }
  res.json(data);
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
