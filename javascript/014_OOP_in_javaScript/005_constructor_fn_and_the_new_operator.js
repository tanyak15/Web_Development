

'use script';

const Person = function (firstName, birthYear) {
    // console.log(this);   // this creates an empty object

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // NEVER CREATE A METHOD INSIDE A CONSTRUCTOR FUNCTION
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // };
    Person.hey = function(){
        console.log("Hey there!!!");
    }
};

// this(jonas) is an object
const jonas = new Person('jonas', 1991);
console.log(jonas);
Person.hey();

// 1. New {} is created
// 2. function is called , this ={}
// 3. {} is linked to prototype
// 4. function automatically return {}

const matilda = new Person('matilda', 1998);

const jack = new Person('jack', 1971);
console.log(matilda, jack);

// we created three objects from constructor functions --> therefore we can say -- jonas,matilda,jack is an instance of person 

// const jay = 'Jay';
// console.log(jay instanceof Person);    ---false

console.log(jonas instanceof Person);  //true

// 006_Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));


// 007_
Person.prototype.species = 'Homo Sapiens';
// console.log(jonas , matilda);
console.log(jonas.species , matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


// 008_Protypal inheritance on build in objects

console.log(jonas.__proto__);

// Object.prototype(top od the chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);            //null

console.log(Person.prototype.constructor);
//output -->
// ƒ (firstName, birthYear) {
//     // console.log(this);   // this creates an empty object

//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // NEVER C…

console.dir(Person.prototype.constructor);
// output -->
// ƒ Person(firstName, birthYear)

const arr = [2,4,6,4,8];
const newArr = new Array(7 ,9 ,4);
console.log(newArr.__proto__); 
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(arr.__proto__ === Array.prototype);



// 09_#coding challenge 1

const Car = function(make , speed){
this.make = make;
this.speed = speed;
};
const bmw = new Car("BMW" , 120);
const mercedes = new Car("Mercedes" , 95);
console.log(bmw , mercedes);

Car.prototype.acceleration = function(){
    this.speed += 10;  
    console.log(`${this.make} is going at speed ${this.speed} km/h`);
};

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at speed ${this.speed} km/h`);
}


bmw.acceleration();
mercedes.acceleration();

bmw.brake();
bmw.brake();





