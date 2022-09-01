function fruitJuice(apples ,oranges){
    const juice=(`we have ${apples} apples and ${oranges} oranges.`);
    return juice;
}

const res=fruitJuice(4,6);
console.log(res);

//function declaration
// const age1=caclAge1(1991);  can also call the function before declaration
function caclAge1(birthYear){
    return 2037-birthYear;
}
const age1=caclAge1(1991);
console.log(age1);

//function expression
const caclAge2 =function (birthYear){
    return 2037-birthYear;
}
const age2=caclAge2(1997);
console.log(age2); 

//arrow function
const caclAge3 = birthYear => 2037-birthYear;
const age3=caclAge3(1997);
console.log(age3);

const yearsUntilRetirment =(birthYear ,firstName) =>{
    const age = 2037-birthYear;
    const reteriment = 65-age;
    // return reteriment;
    return (`${firstName} will retire in ${reteriment} years!`);
}
console.log(yearsUntilRetirment(1991 ,'jonas'));
console.log(yearsUntilRetirment(1980 ,'bob'));


//function calling another function

function cutFruits(pieces){
    return 4*pieces;
}

function fruitJuice(apples ,oranges){
    const applePieces = cutFruits(apples);
    const orangePieces = cutFruits(oranges);
    const juice=(`we have ${applePieces} apples and ${orangePieces} oranges.`);
    return juice;
}

console.log(fruitJuice(2,3));



//coding challenge #1
const toCaclcAvg = (a , b , c)=> (a+b+c)/3;


// const avgDolphins = toCaclcAvg(44,23,71);
// console.log(avgDolphins);
// const avgKolas = toCaclcAvg(65,54,49);
// console.log(avgKolas);
const avgDolphins = toCaclcAvg(85,54,41);
console.log(avgDolphins);

const avgKolas = toCaclcAvg(23,34,27);
console.log(avgKolas);

function checkwinner(avgDolphins , avgKolas){
if(avgDolphins >=2*avgKolas){
    console.log(`Team DOLPHINS wins the trophy! ${avgDolphins} vs. ${avgKolas}`);
}
else if(avgKolas >=2*avgDolphins){
    console.log(`Team KOLAS wins the trophy! ${avgKolas} vs. ${avgDolphins}`);
}
else{
    console.log("No team wins the trophy!");
}
}

checkwinner(avgDolphins,avgKolas);

// const toCaclcAvgdol = calcAverage => {
//     return (44+23+71)/3;
    
// }
// const toCaclcAvgKolas = calcAverage => {
//     return (65+54+49)/3;
    
// }



