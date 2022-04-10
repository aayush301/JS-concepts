// Arrays are a special type of objects, with numbered indexes.
// JS arrays can contain values of different types.

const arr1 = [10,20,30]
console.log("arr1:", arr1);
console.log(typeof arr1)
console.log(Array.isArray(arr1))
console.log(arr1 instanceof Array)

const arr2 = [];
arr2[0]=5
arr2[2]=15
console.log("arr2:", arr2);


const arr3 = new Array(100,200,300);
console.log("arr3:", arr3);


const arr4 = [10, "hello", 4.5]
console.log("arr4:", arr4);


arr4[2] ="world"
console.log("arr4:", arr4);


arr5 = [Date.now(), [1,2], {name: "xyz", age: 5}, function (k) {return "Hello" + k;}]
console.log("arr5:", arr5);
console.log(arr5[0]);
console.log(arr5[2].name);
console.log(arr5[3](100));


console.log("\n")



// Array looping
arr6 = [10,20,"pqr",40]
console.log("arr6:", arr6)


let str=""
for(i=0; i<arr6.length; i++)
{
	str+= " "+ arr6[i];
}
console.log(str)


str=""
arr6.forEach((val,index,arr) => str+= " "+ val)
console.log(str)


str=""
for(val of arr6)
{
	str += " "+val;
}
console.log(str)


console.log("\n")



// Array properties and methods
// length, toString(), join(), push(), pop(), unshift(), shift(), splice(), concat(), slice(), reverse(), sort()
// forEach(), map(), filter(), reduce(), reduceRight(), every(), some(), indexOf(), lastIndexOf(), includes(), find(), findIndex(), from(), keys()

arr7 = ["tuv", 10, 30]
console.log(arr7.length)
console.log(arr7.toString())
console.log(arr7.join("**"))
console.log([1,5,10].join("**"))


arr7.push("xyz")
console.log("arr7:", arr7);
console.log(arr7.pop());
console.log("arr7:", arr7);


arr7.unshift("lmn")
console.log("arr7:", arr7);
console.log(arr7.shift())
console.log("arr7:", arr7);


delete arr7[1];
console.log("arr7:", arr7);
arr7[1]=10;
arr7[arr7.length]="world";
console.log("arr7:", arr7);


console.log("")


console.log(arr7.splice(0,2))				// Removal			// splice(pos, num): removes num elements from pos
console.log("arr7:", arr7);
console.log(arr7.splice(0,1, "ab",10,20))	// Removal+Addition	// splice(pos, num, ele1,ele2,...): removes num elements from pos and inserts ele1,ele2,...
console.log("arr7:", arr7);
console.log(arr7.splice(2,0, 1.25))			// Addition			// splice(pos, 0, ele1,ele2,...)
console.log("arr7:", arr7);


console.log("")


arr8 = [1,2]
arr9 = [3,4]
console.log("concat:", arr8.concat(arr9));		// concat(): does not change arrays
console.log("arr8:", arr8)
console.log("concat:", arr8.concat(arr8,arr9));


console.log("")


arr10 = [10,20,30,40]
console.log(arr10.slice(2))		// slice(start)
console.log(arr10.slice(1,3))	// slice(start, end): slice from start to end-1


console.log("")


arr11 = [25, 100, 33, 40]
arr11.reverse()
console.log("arr11:", arr11)
arr11.sort()					// sorting as string
console.log("arr11:", arr11)
arr11.sort((a,b) => {return a-b})	// comparator: if result is negative, a then b. if positive, b then a.
console.log("arr11:", arr11)
arr12 = [{name:"xy",age:10}, {name:"pq",age:5}, {name:"ab",age:8}]
arr12.sort((a,b) => {return (a.name<b.name)?-1:1} )
console.log("arr12:", arr12)


console.log("")


console.log(Math.max.apply(null,[3,5,1]))
console.log(Math.min.apply(null,[3,5,1]))


console.log("\n")



// Array Iteration
console.log("Array Iteration")
arr13 = [10,2,9,10]
console.log("arr13:", arr13)

str = ""
function fun1(value, index, array) {str+=value+" "}
arr13.forEach(fun1)
console.log("forEach:", str)


function fun2(value,index,array) { return value*2; }
console.log("map:", arr13.map(fun2))			// original array remains unaffected


function fun3(value,index,array) { return value>5; }
console.log("filter:", arr13.filter(fun3))			// original array remains unaffected


function fun4(total,value,index,array) { return total+value; }
console.log("reduce:", arr13.reduce(fun4))			// original array remains unaffected
console.log("reduce:", arr13.reduce(fun4,100))
console.log("reduce:", arr13.reduce(fun4,""))


function fun5(total,value,index,array) { return total+value; }
console.log("reduceRight:", arr13.reduceRight(fun5))	// original array remains unaffected
console.log("reduceRight:", arr13.reduceRight(fun5,""))


function fun6(value,index,array) { return value<10; }
console.log("every:", arr13.every(fun6))


function fun7(value,index,array) { return value<10; }
console.log("some:", arr13.some(fun7))


console.log("indexOf:", arr13.indexOf(10))
console.log("lastIndexOf:", arr13.lastIndexOf(10))
console.log("includes:", arr13.includes(2))


function fun8(value,index,array) { return value>5; }
console.log("find:", arr13.find(fun8))
console.log("findIndex:", arr13.findIndex(fun8))


console.log("from:", Array.from("Xy12"))


let keys = arr13.keys();
txt=""
for(let x of keys) { txt += x+" "; }
console.log("keys:", txt);


console.log("")


// prototype- allows us to add new properties and methods to any object.
Array.prototype.multiplyAll = function(){
	let res=1;
	for(let i=0;i<this.length;i++)
		res = res*this[i];
	return res;
}
let nums = [3,1,5]
console.log(nums.multiplyAll())
