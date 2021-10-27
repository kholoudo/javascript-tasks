/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:



"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
let numOfChildren,partnerName,location1,job;
function tellFortune(numOfChildren,partnerName,location1,job){
  document.write("You will be an " + job + " in " + location1 + " and married to " + partnerName+ " with " + numOfChildren +" kids");
}
 tellFortune(5,"muna","jordan","engineer");

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(dogAge){
  
    return `Your doggie is ${dogAge * 7} years old in dog years!`;
  }
  


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  const totalAmount = (maxAge - age) * 365 * amountPerDay;
  return `You will need ${totalAmount} cups of tea to last you until the ripe old age of ${maxAge}`;
}

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
let name;
function greet(name){
  document.write("hello "+name);

}
greet("kholoud");

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
x is not defined

function double(7) {
  return 2 * 7;
}
parameter must be variable

function double('7') {
  return 2 * 'x';
}
x is a string, cant be multiplied
*/



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}


functiondouble2 x)
return 2 * x;
}



function (x) double3 {
  return 2 * x;
 

*/
function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3(x)  {
  return 2 * x;}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
let x;
function cube(x){
return x^3;
}


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
let a,b;
function multiply(a,b){
return a*b;
}


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
let myAge;
let x=20-myAge;
function canIGetADrivingLicense(myAge){
if(myAge>=20){
  document.write("yes you can");
}else {
  document.write("please come back after"+x+"years to get one");
}
}




/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
let x,y;
function sameLength(x,y){
  if(x.length===y.length){
return true;
  }else{
    return false;
  }
}

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
let a,b;
function largerNumber(a,b){
if (a>b){
  return a;
}else{
  return b;
}
}

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
let a,b,c;
function smallerNumber(a,b,c){
  if(a>b && a>c){
    return a;
  }else if (b>a && b>c){
    return b;
  }else {
    return c;
  }
}

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
let a,b,c,d,e;
function shorterString(a,b,c,d,e){





}

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1, str2, str3, str4) {
  if (str1.length > str2.length && str1.length > str3.length && str1.length > str4.length) {
    return str1;
  } else if (str2.length > str1.length && str2.length > str3.length && str2.length > str4.length) {
    return str2;
  } else if (str3.length > str1.length && str3.length > str2.length && str3.length > str4.length) {
    return str3;
  } else {
    return str4;
  }
}

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
let a;
function isEven(a){
if (a%2==0){
  return true;
}else {return false;}
}


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(a){
  if(a%2==1){
    return true;
  }else{return false;}
}


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(a){
if(a>0){
  return a;
}else{
  return -a;
}

}


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
let firstName,lastName;
function fullName(firstName,lastName){
document.write("firstName "+"lastName ");
}

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(a,b,c,d,e){
let sum=a+b+c+d+e;
let average1=sum/5;
return average;
}

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  let value1=Math.random();
  return value1;
}

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
let min,max;
function randomBetweenNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value2 = randomBetweenNumbers(2, 10);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(num) {
  if (num >= 95) {
    return 'A';
  } else if (num >= 85) {
    return 'B';
  } else if (num >= 70) {
    return 'C';
  } else if (num >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

function counter() {
  var count = 0;
  return function() {
    count++;
    return count;
  }
}
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter() {
  var count = 0;
  return function() {
    count++;
    return count;
  }
}