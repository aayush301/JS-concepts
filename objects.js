const obj1 = {
	name: "xy",
	age: 10,
	color: "red",
	nameAge: function() {
		return this.name + this.age;
	}
}

obj1.name = "xyz"
obj1.gender = "male"
obj1.genderAge = function () { return this.gender + this.age }
delete obj1.color;

console.log(obj1.name, obj1.age, obj1.gender, obj1.nameAge(), obj1.genderAge());
console.log(obj1["name"], obj1["age"], obj1["gender"], obj1["nameAge"]);
console.log(Object.values(obj1))
console.log(JSON.stringify(obj1))

console.log('')
for(let x in obj1)
{
	console.log(x,obj1[x])
}

console.log('')


// Another way
const obj2 = new Object()
obj2.name = "pqr"
obj2.age = 20
obj2.gender = "male"
obj2.nameAge = function() { return this.name + this.age; }

console.log(obj2.name, obj2.age, obj2.gender, obj2.nameAge());



// Objects are mutable. They are addressed by reference, not by value
const obj3 = obj2	// Reference, not a copy



// Object constructors (Alternative to classes)
function Fun(name, age)
{
	this.name = name
	this.age = age
	this.name = function() { return name }
}
const obj4 = new Fun("jkl", 4)
const obj5 = new Fun("rst", 5)
obj4.gender = "male"			// Adding new property/method to an object
Fun.prototype.color = "green"	// Adding new property/method to the constructor

console.log(obj4.gender, obj5.gender, obj4.color, obj5.color)
