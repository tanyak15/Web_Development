'use strict';

// 019 and 020 abstraction and encapsulation
class Account {
    // 1. public fields
    locale = navigator.language;

    // 2. private fields
    #movements = [];
    #pin; //empty variable

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;
        // we can also add thode that are not given in parameteres
        // this._movements = [];
        // this.locale = navigator.language;
        console.log(`Thanks for opening an account ,${owner}`);
    }

    // 3. public methods
    // Public interface

    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        // this.movements.push(-val);
        this.deposit(-val);
        return this;
    }

    _approveLoan(val) {
        return true;
    }

    requestLoad(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }


    }

    // it doesnt work on isntances
    static helper() {
        console.log('Helper');
    }

    // 4. private methods
    // useful to hide the implementation details
    // write now not working in google chrome
    // #approveLoan(val){
    //     return true;
    // }
}
const acc1 = new Account("Jonas ", 'EUR', 1111);

acc1.deposit(500);
acc1.withdraw(200); // abstraction in this case as we hide the minus from user
acc1.requestLoad(-1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);

// 022_channing methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoad(25000).withdraw(4000);
console.log(acc1.getMovements());


// 024_coding challenge#4

class carCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    acceleration() {
        this.speed += 10;
        console.log(`${this.make} is going at speed ${this.speed} km/h`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at speed ${this.speed} km/h`);
        return this;
    }
}

class EVCl extends carCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
        
    }

    acceleration(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going with a speed ${this.speed} , having charge ${this.#charge}`);
        return this;
    }



}

const rivian = new EVCl('rivrian', 120, 23);
console.log(rivian);
rivian.acceleration();

console.log("____________-");
rivian.acceleration().brake().chargeBattery(40).acceleration();
