'use script';

// class expression
// const personCl = class{

// }

// class declaration
class personCl {
    // 1. create constructor 
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // 2. create methods
    // these will be on the prototype of the object nd not on the object itself
    // METHODS WILL BE ADDED TO .prototype PROPERTY
    // INSTANCE METHODS
    calcAge(){
        console.log(2037-this.birthYear);
    }
    
    // STATIC METHODS
    static hey(){
        console.log("hii there!!!");
    }
}

const jessica  = new personCl("Jessica",1989);
// this new will call the constructor and the constructor will return a object and it will be stored in jessica
console.log(jessica);
// console.log(jessica.__proto__);
jessica.calcAge();
console.log(personCl.prototype === jessica.__proto__);
console.log(personCl.prototype);
console.log("_____________");
personCl.hey();


// 011_setters_and_getters

const accounts ={
    owner : 'Jonas' ,
    movements : [20,78,500,70],

    get latest(){
        return this.movements.slice(-1).pop();
    } ,

    set latest(mov){
        this.movements.push(mov);

    }
};
console.log(accounts.latest);
accounts.latest = 600;
console.log(accounts.movements);

// 012-Object.create
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    } ,

    init(firstName , birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.firstName = "steve";
steven.birthYear = 2001;
steven.calcAge();

// 014-#coding challenge

class car {
constructor(make , speed){
    this.make=make;
    this.speed=speed;
}
accelerate(){
    this.speed += 10;
    console.log(`${this.make} is going at speed ${this.speed} km/h`);
}
brake(){
    this.speed -= 5;
    console.log(`${this.make} is going at speed ${this.speed} km/h`);
}

get speedUs(){
    return this.speed/1.6;
}

set speedUs(speed){
    this.speed = this.speed * 1.6;
}
}

const ford = new car("ford", 120);
console.log(ford.speedUs);
ford.speedUs = 50;
console.log(ford);
ford.accelerate();
ford.brake();

// 015_Inheritance between classes(constructor fn)

const Person = function (firstName, birthYear) {   
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear , course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this ,firstName , birthYear);
    this.course=course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
console.log(`I am ${this.firstName} and I study ${this.course}`);
}
const mike = new Student("mike" ,2005 , "computer science");
mike.introduce();
mike.calcAge();

console.log(mike instanceof Person);
console.log(mike instanceof Student);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// 016_challenge 03
const Car = function(make , speed){
    this.make = make;
    this.speed = speed;
    };
    
    Car.prototype.acceleration = function(){
        this.speed += 10;  
        console.log(`${this.make} is going at speed ${this.speed} km/h`);
    };
    
    Car.prototype.brake = function(){
        this.speed -= 5;
        console.log(`${this.make} is going at speed ${this.speed} km/h`);
    };

    const EV = function(make , speed , charge){
        Car.call(this,make , speed);
        this.charge = charge;
    };

    EV.prototype = Object.create(Car.prototype);

    EV.prototype.chargeBattery = function(chargeTo){
        this.charge = this.chargeTo;    
    }

    EV.prototype.accelerate = function(){
        this.speed += 20;
        this.charge -= 0.22*this.charge;
        console.log(`Tesla is going at ${this.speed}km/h , with a charge of ${this.charge} `);
    };


    const Tesla = new EV("Tesla",120,23);
    Tesla.accelerate();

    // 017_inheritance between classes-ES6 classes

    // we'll use here personCl class here line no. 9
    class PersonCl {
        // 1. create constructor 
        constructor(fullName, birthYear) {
            this.fullName = fullName;
            this.birthYear = birthYear;
        }
        // INSTANCE METHODS
        calcAge(){
            console.log(2037-this.birthYear);
        }  
        
        get age(){
            return 2037 - this.fullName;
        };

        set fullName(name){
            if(name.includes(" ")){
                this._fullName = name;
            }
            else{
                alert(`${name} is not a full name.`)
            }
        }
        get fullName(){
            return this._fullName;
        }
        // STATIC METHODS
        static hey(){
            console.log("hii there!!!");
        }

    }

    // to implement  
    class StudentCl extends PersonCl{
        constructor(fullName,birthYear,course){
            // always need to do first
            super(fullName , birthYear);
            this.course = course;

        }

        introduce(){
            console.log(`I am ${this.fullName} and I study ${this.course}.`);
        }
        calcAge(){
            console.log(`I am ${ 2037-this.birthYear} years old an i am persuing ${this.course}`);
        }  
    }
    
    const martha = new StudentCl("martha davis" , 2001 , "MCA");
    martha.introduce();
    martha.calcAge();


    // 018_inheritance between classes-object.create

    // const PersonProto = {
    //     calcAge(){
    //         console.log(2037 - this.birthYear);
    //     } ,
    
    //     init(firstName , birthYear){
    //         this.firstName = firstName;
    //         this.birthYear = birthYear;
    //     }
    // }
    
    // const steven = Object.create(PersonProto);

    StudentProto = Object.create(PersonProto);
    StudentProto.init = function(firstName,birthYear,course){
        PersonProto.init.call(this , firstName,birthYear );
        this.course = course;
    }
    StudentProto.introduce = function(){
        console.log(`I am ${this.firstName} and I study ${this.course}.`);
    }

    const jay = Object.create(StudentProto);
    jay.init('Jay' ,2010 ,'BCA');
    jay.introduce();
    jay.calcAge();

    