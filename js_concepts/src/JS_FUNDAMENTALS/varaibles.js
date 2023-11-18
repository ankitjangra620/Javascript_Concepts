// "use strict"
function showVariables(){
    
    let a  = 10;
    console.log("The simple let variable -> ", a);


    try {
        let b = 10;
        console.log("Not defined b variable -> ", b);

        let c = 10;   
        console.log("Not defined c variable -> ", c);
    } catch (error) {
        console.log("Error in c declaration -> ", error);
    }

    const z  = 10;
    console.log("The constant z  ->  ", z);

    const num = {
        a: 10,
        b: 16
    }

    num.a = 19;

    console.log("The constant num (changed) -> ", num);
}

module.exports = showVariables;