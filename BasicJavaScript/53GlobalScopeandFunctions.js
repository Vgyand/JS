/*Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.
 */

// Declare the myGlobal variable below this line
let myGlobal = 10;
let oopsGlobal = 5

function fun1() {
    // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}