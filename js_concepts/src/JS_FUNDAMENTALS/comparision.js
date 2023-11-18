function comparision(){

    console.log("Undefined comparision with 0 -> ", undefined == 0, undefined === 0, undefined > 0, undefined >=0, undefined<0);

    console.log("Null comparision with 0 -> ", null == 0, null ===0 , null > 0, null >= 0, null <0);

    console.log("Null comparision with undefined -> ", null == undefined, null === undefined, null >= undefined, null<= undefined);

    console.log("Other Expressions -> ",5 > 4,
    "apple" > "pineapple",
    "2" > "12",
    undefined == null,
    undefined === null,
    null == "\n0\n",
    null === +"\n0\n",)
}   

module.exports = comparision;