console.log(Date.now())		// Static method

const d1 = new Date();
console.log("d1", d1);
console.log("d1", d1.toLocaleString());

const d2 = new Date(2015, 11, 31, 24, 60, 60, 1000);
console.log("d2", d2.toLocaleString());

const d3 = new Date("October 13, 2014 11:33:00");
console.log("d3", d3.toLocaleString());

const d4 = new Date(0);
console.log("d4", d4.toLocaleString());

// Date to string Methods
console.log("\nDate Methods")
console.log("d1", d1.toString())
console.log("d1", d1.toDateString())
console.log("d1", d1.toTimeString())
console.log("d1", d1.toLocaleString())
console.log("d1", d1.toLocaleDateString())
console.log("d1", d1.toLocaleTimeString())


// get date methods
console.log("\nGet Date Methods")
console.log(d1.getTime())
console.log(d1.getFullYear())
console.log(d1.getMonth())
console.log(d1.getDay())
console.log(d1.getDate())
console.log(d1.getHours())
console.log(d1.getMinutes())
console.log(d1.getSeconds())
console.log(d1.getMilliseconds())


// set date methods
console.log("\nSet Date Methods")
d1.setFullYear(2000);
d1.setMonth(0);
d1.setDate(2);
d1.setHours(10)
d1.setMinutes(20)
d1.setSeconds(30)
d1.setMilliseconds(100)
console.log(d1.toString())


// date formatting
console.log("\nDate formatting");
let date = new Date();
let options1 = { year: "numeric", month: "short", day: "numeric", weekday: "short" };
let options2 = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
let options3 = { year: "numeric", month: "numeric", day: "numeric", weekday: "narrow"};
let options4 = { day: "numeric", month: "short"};
let options5 = { day: "numeric", month: "short", year: "numeric"};
let options6 = { day: "numeric", month: "short", year: "numeric", hour: "numeric"};
let options7 = { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric"};
let options8 = { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric"};
let options9 = { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"};
let options10 = { dateStyle: "medium", timeStyle: "short"};

// console.log(date.toLocaleString());
console.log(date.toLocaleString("en-IN", options1));
console.log(date.toLocaleString("en-IN", options2));
console.log(date.toLocaleString("en-IN", options3));
console.log(date.toLocaleString("en-IN", options4));
console.log(date.toLocaleString("en-IN", options5));
console.log(date.toLocaleString("en-IN", options6));
console.log(date.toLocaleString("en-IN", options7));
console.log(date.toLocaleString("en-IN", options8));
console.log(date.toLocaleString("en-IN", options9));
console.log(date.toLocaleString("en-IN", options10));
