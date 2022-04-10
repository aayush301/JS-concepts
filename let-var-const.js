// Variables
// Can contain letters, digits, underscores, and dollars.
// Must begin with a letter, _ or $.
// Case sensitive. Keywords not allowed as names.


// 3 scopes: Global scope, Function scope, Block scope.
// In same scope, only one variable of given name exists.


// [no prefix]: undeclared variable
// Assigning value to a variable that has not been declared makes it a global variable.
// i.e. have global scope.

// var
// have function scope. (Can be accessed outside the block as well),
// Variables defined with var can be redeclared.


// let
// have block scope. (Can't be accessed outside the block)
// Variables defined with let can't be redeclared.


// const
// have block scope. (Can't be accessed outside the block)
// They must be assigned at the time of declaration.
// Variables defined with const can't be redeclared and reassigned.
// ** It does not define a const value. It defines a constant reference to a value. Because of this,
//		Although, we can't reassign a const. value,
//		we can't reassign a const array,
//		we can't reassign a const object, BUT
//		we can change the elements of a const array,
//		we can change properties of a const object.


// In the same scope, each group of declarations of the following are not allowed:
// var x; let x;
// var x; const x;
// let x; var x;
// let x; let x;
// let x; const x;
// const x; var x;
// const x; let x;
// const x; const x;

// In the same scope, the following are allowed:
// var x; var x;  // Just a redeclaration is there.


// 1 let in outer block and 1 var in inner block is not allowed.
// const-const in diff block is allowed.
// var-var in outer-inner block will be same (redeclaration, since they have function scope).

var x=3;
var x;
console.log(x)		// will print 3;