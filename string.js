let str1 = "xyz";
console.log("str1:", str1)

let str2 = 'xyz';
console.log("str2:", str2)

let str3 = "It's a cup";
console.log("str3:", str3)

let str4 = 'It"s a cup';
console.log("str4:", str4)


// Escape characters- \' \" \\ \b \f \n \r \t \v
let str5 = "It\"s a cup";
console.log("str5:", str5)

let str6 = "OK\\Okay";
console.log("str6:", str6)


// Breaking long strings:
let str7 = "Hello \
world";
console.log("str7:", str7)

let str8 = "Hello " +
	"world";
console.log("str8:", str8)


// Strings as objects
let str9 = new String("XYZ");
console.log("str9:", str9)
console.log("str9:", str9.valueOf())



// String properties and methods
// length, [], charAt(i), slice(), substr(), substring(), replace()
// Strings are immutable. All string methods return a new string. They don't modify original string.
let str10 = "This is some text";
console.log("\nstr10:", str10);
console.log("Length:", str10.length);
console.log("Length:", "Some string".length);
console.log("str10[2]:", str10[2]);
console.log("str10[2]:", str10.charAt(2));
console.log("str10[2]:", str10.charCodeAt(2));

console.log("str[1..5]", str10.slice(1,6))
console.log("str[3..]", str10.slice(3))
console.log("str[-6..-3]", str10.slice(-6,-2))
console.log("str[-6..]", str10.slice(-6))

// substr() is similar to slice() but second parameter specifies length.
console.log("str[2..5]", str10.substr(2,4));
// substring() is similar to slice() but it can't accept -ve indexes.

console.log(str10.replace("some", "any"))
console.log(str10.toLowerCase())
console.log(str10.toUpperCase())
console.log("str1 ".concat("str2 ", "str3 ", "str4"))
console.log("str1 " + "str2 " + "str3 " + "str4")

console.log("  \n   hello    world   \n  ".trim())
console.log("  \n   hello    world   \n  ".trimLeft())
console.log("  \n   hello    world   \n  ".trimRight())

console.log("padStart:", "11".padStart(10,'$-'))
console.log("padEnd:", "11".padEnd(10,'$-'))

console.log("xyz".split())
console.log("xyz".split(""))
console.log("x,yza,,pq".split(","))

console.log("indexOf:", "abxyzabxy".indexOf("ab"))
console.log("indexOf:", "abxyzabxy".indexOf("ab",4))	// indexOf(str, startSearchPos)
console.log("lastIndexOf:", "abxyzabxy".lastIndexOf("ab"))
console.log("search:", "abxyzabxy".search("ab"))
console.log("match:", "abxyzabxy".match("ab"))
console.log("match:", "abxyzabxy".match(/ab/g))
console.log("includes:", "abxyzabxy".includes("ab"))
console.log("startsWith:", "abxyzabxy".startsWith("ab"))
console.log("startsWith:", "abxyzabxy".startsWith("ab", 1))
console.log("endsWith:", "abxyzabxy".endsWith("ab"))
console.log("endsWith:", "abxyzabxy".endsWith("ab",7))	// endsWith(str,lengthFromBeg)



// Template Literals/ Template Strings/ String templates/ Back-tics Syntax
console.log(`\nSome string`)
x=5
console.log(`Variable ${x}`)
console.log(`Variable ${x*2}`)

