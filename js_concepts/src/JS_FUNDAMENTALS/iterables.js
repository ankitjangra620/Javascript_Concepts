function iterables(){

    // Create a iterables that will return 1, 2, 3, ,4 5;

    let range = {
        from : 1,
        to : 10,
    }

    range[Symbol.iterator] = function(){

        return{
            current : this.from,
            last: this.to,

            next(){
                if(this.current < this.last){
                    return {done: false, value: this.current++}
                }else 
                    return {done: true};
            }
        }

    }

    for(let num of range){
        console.error(num);
    }


    // Strings have their inbuilt iterables also we can create one
    // There is one concept in JS arraylikes and Array.from() -> used for iterables.

}


// Function to find all the unique elements from the array of strings
function unique(str){

    let s = new Set(str);
    return Array.from(s);

  }

module.exports = iterables;