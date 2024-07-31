const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

app.use(express.static("public"))
// app.get("/", (req, res) => {
//   res.send("home");
// });

app.get("/about", (req, res) => {
  res.send(`<h1>about</h1>`);
});

// Read File 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created");
    }
  });
});



// PARAMS
// http://localhost:8080/wish/sam
app.get("/wish/:name", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Hi! ${req.params.name}</h1>`);
});

// http://localhost:8080/wish/sam/noon
app.get("/wish/:name/:day", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Hi! ${req.params.name} , Good ${req.params.day}</h1>`);
});
// Query Parameters
// http://localhost:8080/greet?name=aman
// http://localhost:8080/greet?name=aman&day=noon
// http://localhost:8080/greet?name=aman&day=noon&age=18

app.get("/greet", (req, res) => {
  console.log(req.query);
  if(req.query.age>=18){
    res.send(`<h1>Hi! ${req.query.name} , 
        Good ${req.query.day} . You are Eligible</h1>`)
  }
  else{
    res.send(`<h1>Hi! ${req.query.name} , 
        Good ${req.query.day} . You are not Eligible</h1>`)
  }

});

app.listen(PORT, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(`Listening on Port ${PORT}`);
  }
});
