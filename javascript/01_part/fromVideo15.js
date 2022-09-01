//type conversion
const inputYear ='1991';
console.log(Number(inputYear),inputYear)
console.log(Number(inputYear) +18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(45) ,45);

//type coersion
console.log('i am '+ 20 +' yeras old!'); //in '+' it converts into string
console.log('23'+'10'+3);
console.log('23'-'10'-3);    // while in '-' it converts values into numbers
console.log('23'/ '2');
console.log('23'>= 23);

const money=10;
if(money){
console.log("Don't spend it all :(");
}
else{
    console.log("You should get a job");
}

let height;
if(height){
    console.log("YAY!height is defined..");

}
else{
    console.log("Height is not defined.")
}

// const favourite =Number(prompt("What's your favourite number"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 43){
//     console.log("COOL! it is a good number");
// }


//coding challenge #3


// const dolphin_avg =(96+108+89)/3;
// const kolas_avg =(88+91+110)/3;
// console.log(dolphin_avg);
// console.log(kolas_avg);

// if(dolphin_avg>kolas_avg){
//     console.log("Team DOLPHINS wins!!!");
// }
// else if(dolphin_avg<kolas_avg){
//     console.log("Team KOLAS wins!!!");
// }
// else{
//     console.log("There was a DRAW!!!");
// }

// const dolphin_avg =(900+112+81)/3;
// const kolas_avg =(109+459+86)/3;
// console.log(dolphin_avg , kolas_avg);

// if(dolphin_avg>kolas_avg && dolphin_avg>=100){
//         console.log("Team DOLPHINS wins!!!");
//     }
//     else if(dolphin_avg<kolas_avg && kolas_avg>=100){
//         console.log("Team KOLAS wins!!!");
//     }
//     else if(dolphin_avg===kolas_avg && dolphin_avg>=100 && kolas_avg>=100){
//         console.log("There was a DRAW!!!");
//     }
//     else{
//         console.log("No one wins the Trophy")
//     }

    //coding challenge #4
    const billValue = 40;
    let tip ;
    tip=(billValue>=50 && billValue<=300)?billValue*.15 : (billValue*.20);
    console.log(`bill value : ${billValue}`);
    console.log(`tip given : ${tip}`);
    console.log(`total amount : ${billValue+tip}`);