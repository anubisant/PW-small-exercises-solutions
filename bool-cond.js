// ASSIGNMENT 1:
// Define two string variables and compare them so you can print out which one has more characters, 
// or they have an equal number of characters

// SOLUTION 1:

let student1 = "ana";
let student2 = "max";

if(student1.length > student2.length){
  console.log(`Student 1 - ${student1} has longer name.`)
} else if (student1.length < student2.length){
  console.log(`Student 2 - ${student2} has longer name.`)
} else {
  console.log(`Both, ${student1} and ${student2} have names of eaqual length.`)
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// ASSIGNMENT 2:

// Given the word, check if it exists in the given sentence and print out if it does or it doesn’t:

let word = "web";
let sentence = "I enrolled Ironhack because I love web development.";

// SOLUTION 2:

if(sentence.includes(word)){
    console.log(`The given sentence includes the word: ${word}.`);
} else {
    console.log(`The given sentence doesn't include the word: ${word}.`);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// ASSIGNMENT 3:

// Given the number, print if the number is odd or even:
let num = 219;

// SOLUTION 3:

if(num % 2 === 0){
    console.log(`The given number, ${num} is even!`);
} else {
    console.log(`The given number, ${num} is odd!`);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// ASSIGNMENT 4:

// Given the year, print out the century:
// 2019; // => 21
// 111; // => 2
// 44; // => 1

// SOLUTION 4:

let year = 2019;
// let year = 111; // un-comment when want to check, and comment out all the others
// let year = 44; // un-comment when want to check, and comment out all the others


let yearToString = year.toString();
if(yearToString.length === 4){
    let twoFirst = year.toString().slice(0,2); // we are getting the string back ("20");
    // we have to turn it into the number:
    console.log(`The century is ${Number(twoFirst)+1}.`);  
} else if(yearToString.length === 3){
    let theFirst = year.toString().slice(0,1); // we are getting the string back ("1");
    console.log(`The century is ${Number(theFirst)+1}.`); 
} else if(yearToString.length === 2){
    console.log(`The century is 1.`)
} else {
    console.log("Provided year is not in the scope of this program. Sorry!")
}