// ASSIGNMENT 1:
// Find out if there’s a specific word in a string:

const str1 = "Web Dev is amazing!"; 
    // => look for each of these separately:
    // - "development", 
    // - "Development", 
    // - "web", 
    // - "ing", 
    // - "Web" 

// SOLUTION 1:
console.log(str1.includes("development")); // false
console.log(str1.includes("Development")); // false
console.log(str1.includes("web")); // false
console.log(str1.includes("ing")); // false
console.log(str1.includes("Web")); // true

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// ASSIGNMENT 2:
// Concatenate the following strings:
// a) str2: Hey! - str3: How are you?
// b) str4: 10 - str5: 99

// SOLUTION 2a:
let str2 = "Hey!";
let str3 = "How are you?";
let concat = str2 += str3;
console.log(concat); // Hey!How are you?

// SOLUTION 2b:
let str4 = "10";
let str5 = "99";
let numConcat = str4 += str5;
console.log(numConcat); // 1099

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// ASSIGNMENT 3:
let sentence = "This is one meaningless sentence which needs to be cut in half.";
// end result: This is one meaningless sentence
// ***hint: first calculate the length of 
// the sentence so you can calculate its half

// SOLUTION 3:
const halfLength = sentence.length/2;
const half = sentence.slice(0, halfLength);
console.log(half); // => This is one meaningless sentence

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// ASSIGNMENT 4:

// Capitalize:
    // a) the whole name of the city where you are now
    // b) the first letter of the city
    // c) capitalize the middle letter if the city has an odd number of letters or 
    // two middle letters if the city has even number of letters 
    // (hint: you can use .charAt() and .slice())

// SOLUTION 4a:
let city = "miami";
console.log(city.toUpperCase()); // MIAMI

// SOLUTION 4b:
// long version:
let capsFirstLetter = city.slice(0,1).toUpperCase(); // M
let restOfTheWord = city.slice(1); // iami
let theWholeWord = capsFirstLetter + restOfTheWord;
console.log(theWholeWord); // Miami

// short version:
console.log(city.slice(0,1).toUpperCase() + city.slice(1)); // Miami

// SOLUTION 4c:

let result; 
let h = city.length/2;

if (city.length % 2 === 0){
  result = city.slice(0,h-1)+city.charAt(h-1).toUpperCase() + city.charAt(h).toUpperCase()+ city.slice(-h+1);
  // return result;
} else {
  let midPos = Math.round(h);
  result = city.slice(0,midPos-1)+city.charAt(h).toUpperCase() + city.slice(-midPos+1);
}
console.log(result); // miAmi

// GIVE IT A TRY WITH SOME OTHER CITY THAT HAS EVEN NUMBER OF LETTERS
