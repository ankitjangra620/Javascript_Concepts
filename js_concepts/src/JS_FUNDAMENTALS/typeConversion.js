function typeConversion(){

    console.log("Number Conversion -> ", Number(undefined), Number(null), Number("sdfkjsbdlf"), Number("987"));

    // Mathematical operations supports the implicit type of conversions.

    console.log("Multiplication -> " , undefined*null, undefined*"dsfhkds", 5*null, "6"*null, "5"*"6");

    console.log("Addition -> ", undefined+null, undefined+"fbiwgrksd", "5"+"6", 6+null, 6+Number("7"), +"7"+ +"8");

    console.log("Subtraction -> ", undefined - null, undefined - "asdfjnlkd", "6"-"5", 6-"3", 5-null, "5"-null);

}

module.exports = typeConversion;