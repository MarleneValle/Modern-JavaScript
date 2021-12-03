//CONSTRUCTOR FUNCTION---CREATE OBJECTS WITH THE WORD "NEW"
// When we try to access a property or method on a primitive, data type (numbers, strings, booleans), JS wraps it temporarily in a wrapper object except for the primitive type of: NULL AND UNDEFINED (they never have access to any properties or methods)

//1.new Array
const age = new Array(20, 45, 50);
console.log(age);

//2. new object
const userOne = new Object();
console.log(userOne);

//3. new String
const name = new String("Marlene");
console.log(name);
