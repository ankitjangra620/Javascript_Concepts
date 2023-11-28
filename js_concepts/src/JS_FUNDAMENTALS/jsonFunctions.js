function jsonFunction(){

    // The JSON.stringify function misses -> 1.function, 2. undefined values 
    // The simple JSON.stringify function;

    let name = {
        "first": "Ankit",
        "lastName" : "Jangra",
        "age" : "Hello"
    }

    let ans1 = JSON.stringify(name);

    console.log("ANS VALUE1 => ", ans1);

    // What if the object have the circular references
    let role = {
        "roleName" : "Admin",
    }

    name.role = role;
    role.user = name;

    // -> This will create circular references
    try {
        JSON.stringify(name);
    } catch (error) {
        console.log("The Circular references error !!")
    }
    
    // ->To resolve the above error we just need to pass some of the parameters to the JSON.stringify function  
    // -> It will tell the function just to encode these values only and will not get into the circular references
    let ans2 = JSON.stringify(name, ["first", "lastName", "age", "role"]);

    console.log("ANS VALUE 2 => ", ans2);

    // Or we can also pass a function at this place as the list can get long enough?
    let ans3 = JSON.stringify(name, function(key, value){
        if(key == "user") return undefined;

        return value;
    }, 10)


    console.log("ANS VALUE3  ->  ", ans3);
    // the third arguments to the JSON.stringify function tells about the spaces for encoding purposes.


    // -------------------------------------------------------------------------------------//
    // -------------------------------------------------------------------------------------//

    // JSON.parse function

    console.log("ANS VLAUE 4 => ", JSON.parse(name, function(key, value){
        return value;
    }))

    // The section arguments in this function will tell about the custom function we want to have for the certain keys

    // -------------------------------------------------------------------------------------//
    // -------------------------------------------------------------------------------------//



}

module.exports = jsonFunction;