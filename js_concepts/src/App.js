import logo from './logo.svg';
import {useEffect} from 'react';
import './App.css';

const showVariables = require("./JS_FUNDAMENTALS/varaibles")
const typeConversion = require("./JS_FUNDAMENTALS/typeConversion")
const comparision = require('./JS_FUNDAMENTALS/comparision');

function App() {
  
  const learningJS = () => {
    // to illustrate the variables.
    // showVariables();

    // To illustrate the type conversion
    // typeConversion();

    // to illustrate the comparision in Js
    comparision();
  }

  useEffect(()=>{
    learningJS();
  })

  return (
    <div className="App">
      <h1>Learning Javascript</h1>
    </div>
  );
}

export default App;
