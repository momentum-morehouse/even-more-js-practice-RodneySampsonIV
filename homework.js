// Problem 1
// declare a variable called fruit
// assign your variable the value 6
// console log your variable
let fruit = 6;
console.log(fruit);


// write a function called product that accepts two numbers and 
// logs the product in the console and then
// returns the answer when you multiply them both together
// call that function on the numbers 4 & 689 to test it

// creates a function called product that takes the arguements a and b
function product(a, b) {
    // returns a multiplied by b    
    return a * b;
}

let result = product(4, 689)
console.log(result)

// Problem 2
// write a function called evens that takes an array of numbers, removes 
// all the numbers that are odd and returns a new array with only the even numbers
// remember that even numbers have a remainder of 0 when you divide them by 2
// call your function on this array of numbers [4, 37, 18, 29, 52, 103, 22]

// creates a function named evens that takes the arguement list
function evens(numbers) {
    // creates a variable named evenNumbers that points to a empty array
    let evenNumbers = []
    // create a for loop that loops through each number in the array list
    for (let number of numbers) {
        // creates a if statement that checks for even numbers
        if ((number % 2) === 0) {
            // if the number is even it pushes the number to the array, evenNumbers
            evenNumbers.push(number)
        }
    }
    // returns evenNumbers 
    return evenNumbers;
}

let testNumbers = [4, 37, 18, 29, 52, 103, 22]
console.log(evens(testNumbers))

//Problem 3
// write a function called five that takes a word and prints it in the console
// five times
// call your function on the word "pineapple" to test it
function five(word) {

    console.log(word);
    console.log(word);
    console.log(word);
    console.log(word);
    console.log(word);
}
five("pineapple");
//Problem 4
// write a function called shortWords that takes an array of words and then
// returns a new array with only the words that are 3 letters long or less
// call your function on this array

// creates a function named shortWords that takes a arguement called words
function shortWords(words) {
    // creates a empty array called threeWords
    let threeWords = []
    // creates a for loop that checks each word in the array words
    for (let word of words){
        // creates an if statement that checks the length of each word in the array Words
        if (word.length <= 3) {
            // this pushes word to threeWords array if the word length is less than or equal to 3
            threeWords.push(word)
        }
    }
    return threeWords;    
}

let arrayWords = ["basin", "pit", "cheese", "bun", "river"]
console.log(shortWords(arrayWords))