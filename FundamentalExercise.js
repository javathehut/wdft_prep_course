//Exercise 1
var name = "Angelique";
console.log("Hello" + " " + name);

//Exercise 2
var x = 1125;
var answer = x % 2;
console.log(answer);

//Exercise 3
var a = true;
var b = false;
var c = true;
console.log(a||b||c);

//Exercise 4
var a = true;
var b = true;
var c = true;
console.log(a&&b&&c);

//Exercise 5
var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer1);
console.log(answer2);

//Exercise 6
toString(12);
parseInt("113");
parseFloat("1.12356");
var x = parseInt("Hello World");
console.log(x);

//Diving Deeper RegEx
//Match "BrainStation"
var str = "I am a BrainStation student.";
var str2 = "I am a student.";
var n = str.search("BrainStation");
var n2 = str2.search("BrainStation");

console.log(n);
console.log(n2);

//Replace String
var n3 = str.replace("BrainStation student" , "Junior Developer");
console.log(n3);