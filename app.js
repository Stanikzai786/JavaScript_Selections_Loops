console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 99; i +=2) {
    console.log(i);
}
//More implemantation
//for (let i = 0; i < 100; i++) {
  //  if (i % 2 == 0) {
    //    continue;
    //} else {
      //  console.log(i);
    //}
//}

//for (let i = 1; i < 100; i++) {
  //  console.log(i);
//}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
 for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % 5 == 0) {
        console.log(i, "BUZZ");
    } else if (i % 3 == 0) {
        console.log(i, "FIZZ");
    }
 }
//Exercise 3 Done Do while Loop

//Exercise 4 

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i  <= n; i++) {
    console.log(`found ${numberToFind}!`);
    break; 

}
if (i == n){
    console.log(`Did not find ${numberToFind} within 1-$(n)..`);
}
 
//Exercise 5 

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor == 0){
    output += "BUZZ";
    }
    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);
