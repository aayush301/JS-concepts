// Hoisting: Declarations are moved to the top of current scope before execution.
// In this case, fun1() is such. So, it can be called before it is declared.

// JS functions can be described as objects also.
// !!! JS functions have both properties and methods.

// Parameters: names listed in fn definition.
// Arguments: real values passed to (and received by) fn.
// Fn can be called with less or many arguments than declared parameters.
// If a fn is called with missing arguments (less than declared), the missing values are set to undefined.
// Changes to arguments will not be reflected outside the function.
// But, changes to object properties will be reflected outside the function.

function fun1(a,b)
{
	return a+b;
}
console.log(typeof fun1)


const fun2 = function(a,b) {
	return a+b;
};


const fun3 = new Function("a", "b", "return a+b");


(function(a,b){
	console.log("I am self invoked.");
})(5,2);

console.log(fun1.toString())


// Arrow functions
// They do not have their own this. So, they are NOT well suited for defining OBJECT METHODS.
// they are not hoisted. They must be defined before use.
// return and curly brackets can be omitted only when fn is single statement.
const fun4 = (x,y) => x+y;


// Arguments object
// JS functions have a built-in object called arguments object.

console.log("SumAll:", fun5(1,4,10))
function fun5()
{
	let sum=0;
	for(let i=0;i<arguments.length;i++)
		sum+=arguments[i];
	return sum;
}




// call() and apply()
// obj1.method1a.call(obj2)  OR  obj1.method1a.apply(obj2):
// method1a of obj1 is invoked and "this.property" inside method1a will now refer to property inside obj2 instead of obj1.
console.log("\ncall() and apply()")

const obj1 = {
	x:5,
	fun1a: function(){ console.log(this.x); },
	fun1b: function(val1, val2){ console.log(this.x, val1, val2); }
}

const obj2 = {
	x:"hello"
}

obj1.fun1a.call(obj2)
obj1.fun1a.apply(obj2)
obj1.fun1b.call(obj2, 50, 100)
obj1.fun1b.apply(obj2, [50, 100])


// Applications of call()/apply()
console.log([].slice.call([10,20,30,40], 1,3))
console.log(Array.prototype.slice.call([10,20,30,40], 1,3))



// bind()
// const newmethod = obj1.method.bind(obj2)
// newmethod when called will refer this.property as property of obj2.
console.log("\nbind()")
const ob1 = {
	x: 55,
	funA: function(){ console.log(this.x); },
	funB: function(val1,val2){ console.log(this.x, val1, val2); }
}
const ob2 = {
	x: 100
}

const funnA = ob1.funA.bind(ob2);
const funnB = ob1.funB.bind(ob2);
funnA();
funnB(5,6);
