// assignment 1
console.log("this is program 1");
function int(n){
    if(n>0){
        console.log(n + ": this is positive number");
    }else if(n<0){
        console.log(n + ": this is negative number");
    }else{
        console.log(n + ": this is Zero number");
    }  
};
int(-1);

//program 2
console.log("this is program 2");
positiveInt=(positiveInt)=>{
    if(positiveInt>=1 ){
        console.log("this is positive integer : "+positiveInt);       
        var x =1  ;
        for(n=1; n<=positiveInt ; n++){            
            x=x*n; 
         }
        console.log("factorial of "+positiveInt+ " is " +x);    

    }else{
        console.log(positiveInt +"this is not positive number");
    };
};
positiveInt(5);

//program 3
console.log("this is program 3");
function greater(a,b){
    if(a > b) console.log(a + " is greater")
    else console.log(b + " is greater")
}
greater(10,5)

//program 4
console.log("this is program 4");
function checkpalindrome(str){
   // let l=Math.floor(str.length/2);
    
    let cleanedStr = str.replace(/\s+/g, '').toLowerCase();
 
   let reverse="";
   for(let i=cleanedStr.length-1; i>=0;i--){
        reverse=reverse + cleanedStr[i]
   }
   if(reverse == cleanedStr) console.log(str+" is a palindrome")
   else console.log(str+" is not a palindrome")

}
checkpalindrome("12 321")

//program 5
//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
console.log("this is program 5");

const findPrimeNum = (n) =>{
    if(num <= 1){
        return false;
    }
    for(let i=2; i < n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
let num = 50;

for(let i=2; i<= num; i++){
    if(findPrimeNum(i)){
        console.log(i);
    }
}

//program 6
//Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

console.log("this is program 6");

function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operator";
    }
}
console.log(simpleCalculator(2,10,'*'));


// program 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
console.log("this is program 7");

const countVowels = (str) =>{
    const vowels = "aeiou";
    let stringArray = str.split('')
    let count = 0;
    for (let char of stringArray) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

 console.log(countVowels('jaishree'));



//program 8:
//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
console.log("this is program 8");

const findPerfectNumber = (num) =>{
    if (num <= 1) {
        return false;
    }
    let sum = 1; // 
    for(let i=1; i<num; i++){
        if(num%i == 0){
            sum += i;
        }
    }
    return sum == num ? true : false;
}
let result = findPerfectNumber(28)
console.log(result);

//program 9:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
console.log("this is program 9");

const fibonacciSeries = (num) =>{
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    for(let i=1; i<=num; i++){
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    console.log("fibonacci series :" +nextTerm)
}

 fibonacciSeries(30);

//program 10:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
console.log("this is program 10");

const printMultiplicationTable = (num) => {
        for(let i=1; i<=10; i++){
            console.log(num + "*" + i + "="+num*i);
        }
    }
    printMultiplicationTable(9)