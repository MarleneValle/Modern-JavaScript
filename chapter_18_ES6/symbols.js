//SYMBOLS is unique, not two symbols can ever be equal to each other.
const symbolOne = Symbol("name");
const symbolTwo = Symbol("name");
console.log(symbolOne, symbolTwo, typeof symbolTwo);
console.log(symbolOne == symbolTwo);

//Symbols can be use as key or a property names in objects to make them unique

const ninja = {};
ninja.name = "chris";
//belt property is overwrite
ninja["belt"] = "orange";
ninja["belt"] = "black";

//using symbols properties are uniques
ninja[symbolOne] = "ryu";
ninja[symbolTwo] = "mario";

console.log(ninja);

//SO USING A SYMBOL AS AN OBJECTS MEANS THAT ALL THE KEYS IN AN OBJECT ARE DEFINITELY UNIQUE
