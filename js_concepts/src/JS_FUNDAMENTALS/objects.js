function objects (){

    function User (a, b) {
        this.firstName = a;
        this.lastName = b;
    }
    // Creating a new object with the constructor
    let user = new User("Ankit", "Jangra");

    console.log("Constructor Created User -> ", user);

    // What does the constructor function returns in javascript
    let num1 = new Number(3);
    let num2 = 3;

    console.log("Constructor Output -> " , num1 == num2, num1 === num2, typeof(num1) )
}

module.exports = objects;