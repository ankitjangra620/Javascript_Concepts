<!-- Tasks that i have studied. -->

Q1: What can JS do and what it cannot do?
<!-- JS Code is called as scripts(ECMAScripts) -->
<!-- JS Fundamentals -->
Q2: How does the script tag works and its attributes(type, src, language);
Q3: "use Strict" work in JS?
Q4: What is a variable?. Differences between var and let?  How can we change the value of a const variable?
<!-- Data Type in JS -->
Q5: What are the data types in Javascript?.
Q6: What is the difference between staticaly typed language and dynamicaly typed language?
Q7: What is NaN? and output of NaN == NaN and NaN*0 == 1;
Q8: What is the difference between null & undefined data type?
<!-- Type Conversion in JS. -->
Q9: What is the difference between implicit and explicit type conversion?
Q10: What is the output of number conversions Number(undefined) = NaN, Number(null) = 0?
<!-- Operators in JS -->
Q11: Difference between unary +,- operator and binary +, - operator?. Ouptut of -> 1+"2"+2 and 1+ + "2" + 9;
Q12: What does the = operator in javacript returns?
<!-- Comparision in JS -->
Q13: What is the string comparision algorithm in JS?
Q14: Comparision of null and undefined with 0 using the comparision operators?
<!-- Functions in JS -->
Q15: What is functional programing in javascript? and what is the difference between local variable and gobal variable?
Q16: What is the difference between ?? and || operator?
Q17: What is the difference between Function declaration and Function Expressions.
<!-- JS Debugging and Code Quality -->
Q18: What is the difference between a Breakpoint and a conditional breakpoint?
Q19: What is mocha and chai framework and why is they used for?
Q20: What is transpiler and why they are used in JS. What are Babel and webpack?. What is their difference?
<!-- Polyfills in Javascript -->
Q21: What are polyfills and write a polyfill for map, some function?
Q22: Write polyfills for call, apply and bind method in javascript?
Q23: What is the difference between call, apply and the bind method?
<!-- Objects in Javascript -->
Q24: When the const type of variables can be updated in js and how?
Q25: What is the difference between methods structuredClone and Object.assign methods for object? When structeredClone function fails?
Q26: What are the methods for grabage collector to delete and allcate the memory?
Q27: What is a constructor method in javascript and what are its properties and what does it return? What will be type of new Number(3);
Q28: What is the concept of optional chaining (?.) ?
Q29: How JS objects can be converted into a primitive data type?
<!-- Data Types and Methods in JS -->
Q30: How JS primitive Data Type allows to call the function like an object (i.e. str.toUpperCase()) as str is a string type? How can primitive data type behave as an object?
Q31: What are imprecise calculation mean in JS. What is the output of 0.1 + 0.2 == 0.3;
Q32: Are strings are immutable in javascript and why?
Q33: What are the methods available in JS to create the substring? What is the difference between .slice and .substring and    .substr function in JS?
Q34: Explain some of the array methods push, pop, shift, unshift? Compare the performance of shift/unshift with the push/pop operations?
Q35: What is the output of this statement -> alert( [1,2] + 1 ); -> "1,21"
Q36: Explain the working and syntax of arr.reduce function.
<!-- Iteratables in javascript -->
Q37: What are iterables in javascript and what is next() in iterables and what does it return?
<!-- Map and Set in JS -->
Q38: What is .get and .set method in javascript?
Q39: What is the difference between Object.entries and Object.fromEntries() function?
Q40: Write a function aclean(arr) that returns an array cleaned from anagrams.
Q50: What will the statement returns :  Array.from(map.values()) and [...map.values(), "more"];
Q51: What are WeakMap and WeakSet and what are their usecase (i.e, Additional Data Storage, Caching);
Q52: Explain the given statement in javascript -> 
    let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])

<!-- Destructuring in JS -->
Q54: What is the difference between the Object destructuring and Array destructuring? How Object destructuring works for the nested objects?
Q55: What is new Date and what is known as timestamp?  Explain about Date.parse method in JS?
Q56: When will the JSON.stringifyb function will fail?
Q57: What is the exact syntax of JSON.stringify  -> JSON.stringiyf(value,function(key, value){}, space);
Q58: What is a toJSON method and why it is used? 