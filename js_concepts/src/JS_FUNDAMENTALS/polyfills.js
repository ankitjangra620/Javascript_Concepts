function polyfills(){
    // Write the polyfills for the call apply and bind method in javascript?
    let globalThis = this;

    function calculateSum(a, b ){
        console.log("The sum value of this is - ", (this.a??0)+(this.b??0)); 
        console.log("The sum vlaue of function arguments is - ", a + b)
    }

    let myObject = {
        a : 10,
        b : 10,
    }

    console.log("The first normal function call - ")

    // calculateSum(10, 20);

    // calculateSum.call(myObject, 10, 20);

    // Creating a polyfill function to create the similar work as the call function : 

    // Function.prototype.functionName are the function which will be available to all the functions
    // The context is passed by object.
    Function.prototype.myCall = function(context, ...args){
        // Global this will refer to the current global execution context.
        let currentContext = context || globalThis;

        let randomProp = Math.random();

        while(currentContext?.[randomProp]!=undefined){
            randomProp = Math.random();
        }
        currentContext[randomProp] = this;

        let result = currentContext[randomProp](...args);
        delete currentContext[randomProp];
        return result;
    }

    // calculateSum.myCall(myObject, 10, 20);

    // The polyfill for the apply method.
    Function.prototype.myApply = function(context, args){
        let currentContext = context || globalThis;

        let uniqueProp = Math.random();

        while(currentContext?.[uniqueProp]!=undefined){
            uniqueProp = Math.random();
        }

        currentContext[uniqueProp] = this;

        let result = currentContext[uniqueProp](...args);

        delete currentContext[uniqueProp];
        return result;
    }

    // Simple function call to the calculationSum function using the simple apply method.
    // console.log("The Simple Apply function - > ")
    // calculateSum.apply(myObject, [10 , 20]);

    // console.log("The polyfill for the Apply function -> ");
    // calculateSum.myApply(myObject, [10,20]);

    
    // The polyfills function for the bind method in javasript.
    // The .bind method generally returns the fucntion

    Function.prototype.myBind = function(context, ...args){
        let currentContext = context || globalThis;
        let callback = this;
        return function(){
            callback.call(currentContext, ...args);
        }
    }

    let result  = calculateSum.myBind(myObject, 10 , 20);
    // console.log("Result -> ", result());



    // How to create the polyfills for the map function in javascript
    Array.prototype.myMap = function(args){
        let obj = this ?? [];
        let newResult = [];
        for(let i = 0; i < obj.length; i++){
            newResult[i] = args(obj[i]);
        } 
        return newResult;
    }

    let myDummyObject = [10, 20, 30, 40, 50];

    let dummyAnswer = myDummyObject.myMap((item) => {
        return item+2;
    });
    console.log("Map Polyfill Object -> ", dummyAnswer);
}

module.exports = polyfills;