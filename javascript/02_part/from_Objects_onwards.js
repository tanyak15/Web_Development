const jonas = {
    firstName: 'steven',
    lastName: 'jones',
    age: 2022 - 2001,
    job: 'programmer',
    friends: ['michael', 'haley', 'nia']
};
console.log(jonas);

console.log(jonas.age);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const intrestedIn = prompt("choose between first name ,last name ,age ,job and friend's!");

// if(jonas[intrestedIn]){
//     console.log(jonas[intrestedIn]);
// }
// else{
//     console.log('wrong ques!');
// }

jonas.location = 'india';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends , his bestfriend is ${jonas.friends[0]}`);


const jonas1 = {
    firstName: 'steven',
    lastName: 'jones',
    birthYear: 2001,
    job: 'programmer',  //string value
    friends: ['michael', 'haley', 'nia'],  //array value
    hasDriversLiscence: true,        //boolean value

    // calcAgeNew : function(birthYear){
    //     return 2022-birthYear;
    // }    //function value

    // calcAgeNew : function(){
    //     console.log(this);
    //         return 2022-this.birthYear;
    //     } 

    calcAgeNew: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return (`${this.firstName} is a ${this.calcAgeNew()} years old ${this.job} ,and he has ${this.hasDriversLiscence ? 'a' : 'no'} driver's license!`)
    }
};

console.log(jonas1.calcAgeNew());

console.log(jonas1.age);
console.log(jonas1.age);

console.log(`${jonas1.firstName} is a ${jonas1.age} years old ${jonas1.job} ,and he has ${jonas1.hasDriversLiscence ? 'a' : 'no'} driver's license!`);

console.log(jonas1.getSummary());

//coding challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};
const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};
console.log( mark.calcBMI() , John.calcBMI());
if (John.BMI > mark.BMI) {
    console.log(`${John.fullName} BMI ${John.calcBMI()} is higher than ${mark.fullName} (${mark.calcBMI()})`);
}
else {
    console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${John.fullName} (${John.calcBMI()})`);
}
