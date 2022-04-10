// this alone => this refers to the global object
let x = this;
console.log(x);


// this in a function => this refers to the global object
function fun()
{
	let t=5;
	console.log(this);
}
fun()


// this in a method => this refers to the owner object
const obj1 = {
	name: "xyz",
	print: function() {
		console.log(this.name);
	}
}
obj1.print()



// this in a function to be used as a constructor => this is bound to the new object being constructed
function fun2()
{
	a = 2
	this.b=3
	this.fun = function(){return a;}
}
let obj2 = new fun2()
console.log(obj2.a, obj2.b, obj2.fun());


function fun3()
{
	this.m = 5		// No effect
	return {n:10, o:15}
}
let obj3 = new fun3()
console.log(obj3.m, obj3.n, obj3.o);



// this in functions to be used as DOM event handlers => this is set to element on which listener is placed
function fun4()
{
	this.style.color = "yellow"
}
// element.addEventListener('click',fun4)


// this in inline HTML event handlers => this refers to HTML element that received the event
/**
 * <button onclick="this.style.display='none'"> Click </button>
 */
