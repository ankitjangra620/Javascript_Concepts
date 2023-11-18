
const express = require('express')
const app = express()
const port = 3000

const showVariables = require("./js_concepts/src/JS_FUNDAMENTALS/varaibles")
const typeConversion = require("./js_concepts/src/JS_FUNDAMENTALS/typeConversion")
const comparision = require('./js_concepts/src/JS_FUNDAMENTALS/comparision');

app.get('/', (req, res) => {

    // to illustrate the variables.
    // showVariables();

    // To illustrate the type conversion
    // typeConversion();

    // to illustrate the comparision in Js
    comparision();

  res.send("Hello MF")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
