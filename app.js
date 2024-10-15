//Chap 10 (Functions)

//Ans 1

function addNumbers(num1,num2){
    return num1 + num2
}
 let result = addNumbers(5,10)
 console.log(result);
 
 //Ans 2

 function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

let fahrenheit = celsiusToFahrenheit(25);
console.log(fahrenheit); 

//Ans 3

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  //Ans 4

  function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

let originalString = "Hello, Iqra!";
let reversedString = reverseString(originalString);
console.log(reversedString); 

//Ans 5

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

let result2 = factorial(5);
console.log(result2); 

//Ans 6 

function greet() {
  alert("Hello, Welcome!");
}

greet();

//Ans 7 

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Iqra");

//Ans 8 

function addNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addNumbers(5, 10);
console.log("The sum is: " + sum);

//Ans 9 

function generateRandomNumber() {
  return Math.floor(Math.random() * 101); 
}

const randomNum = generateRandomNumber();
console.log("Random number: " + randomNum);

//Ans 10 

function isEligibleToVote(age) {
  return age >= 18; 
}

console.log(isEligibleToVote(20));
console.log(isEligibleToVote(17)); 



//Chap 11 (Arrow Function)

//Ans 1

const square = (num) => num * num;
console.log(square(5));


//Ans 2 

const getEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);

const array = [1, 2, 3, 4, 5, 6];
const evenNumbers = getEvenNumbers(array);
console.log(evenNumbers); 


//Ans 3 

const concatenateStrings = (str1, str2) => str1 + str2;

const result3 = concatenateStrings("Hello, ", "world!");
console.log(result3); 

//Ans 4

const findMax = (numbers) => Math.max(...numbers);
const numArray = [1, 5, 3, 9, 2];
const maxValue = findMax(numArray);
console.log(maxValue);

//Ans 5

const sumArray = (numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);

const result4 = sumArray([1, 2, 3, 4, 5]);
console.log(result4); 

//Ans 6 

const sayHello = () => {
  console.log("Hello world");
};
sayHello();


//Ans 7

const square1 = (num) => num * num;
const result5 = square1(5);
console.log(result5); 


//Ans 8

const isPositive = (num) => num > 0;

console.log(isPositive(10));
console.log(isPositive(-5)); 
console.log(isPositive(0)); 

//Ans 9

const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;

const randomNum2 = getRandomNumber();
console.log(randomNum2); 

//Ans 10

const minutesToSeconds = (minutes) => minutes * 60;

const seconds = minutesToSeconds(5);
console.log(seconds); 

//Chap 12 (Annoynumus Function)

//Ans 1

(function() {
  console.log("Hello");
})();


//Ans 2

const sum2 = function(num1, num2) {
  return num1 + num2;
};

const result6 = sum2(10, 7);
console.log(result6); 


//Ans 3

const numbers = [5, 2, 6, 1, 4];
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // Output: [1, 2, 4, 5, 6]


//Ans 4

(function(name) {
  console.log(`Hello, ${name}!`);
})("Iqra"); 

//Ans 5

const checkEvenOdd = function(num) {
  if (num % 2 === 0) {
      console.log(`${num} is even.`);
  } else {
      console.log(`${num} is odd.`);
  }
};
checkEvenOdd(7);
checkEvenOdd(4); 

//Ans 6

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = numbers3.filter(function(num) {
    return num % 2 !== 0; 
});

console.log(oddNumbers);

//Ans 7
//const factorial = function(n) {
 // if (n === 0 || n === 1) {
 //     return 1; 
 // }
 // return n * factorial(n - 1); 
//};

//console.log(factorial(5)); // Output: 120
//console.log(factorial(4)); // Output: 24
//console.log(factorial(0)); // Output: 1
//console.log(factorial(1)); // Output: 1

//Ans 8

setTimeout(function() {
  console.log("Time's up!");
}, 2000);

//Ans 9

const numbers4 = [1, 2, 3, 4, 5];
const sum4 = numbers4.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; 
}, 0); 

console.log(sum4); 

//Ans 10

(function(age) {
  if (age >= 18) {
      console.log(`Age ${age}: Eligible to vote.`);
  } else {
      console.log(`Age ${age}: Not eligible to vote.`);
  }
})(20);

(function(age) {
  if (age >= 18) {
      console.log(`Age ${age}: Eligible to vote.`);
  } else {
      console.log(`Age ${age}: Not eligible to vote.`);
  }
})(15); 

(function(age) {
  if (age >= 18) {
      console.log(`Age ${age}: Eligible to vote.`);
  } else {
      console.log(`Age ${age}: Not eligible to vote.`);
  }
})(18); 











