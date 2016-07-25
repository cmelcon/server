"use strict";

const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.end("<h1>This a calculator Server!</h1>");
});

app.get('/user/:id', function(req, res){
  res.end();
});

app.get("/add/:num1/:num2", (req, res) => {
  let result = Number(req.params.num1) + Number(req.params.num2)
  res.end("" + result);
});

app.get("/sub/:num1/:num2", (req, res) => {
  let result = Number(req.params.num1) - Number(req.params.num2)
  res.end("" + result);
});

app.get("/mult/:num1/:num2", (req, res) => {
  let result = Number(req.params.num1) * Number(req.params.num2)
  res.end("" + result);
});

app.get("/div/:num1/:num2", (req, res) => {
  let result = Number(req.params.num1)/Number(req.params.num2)
  res.end("" + result);
});


app.listen(12345, () => console.log("Server listening on port " + 12345));
