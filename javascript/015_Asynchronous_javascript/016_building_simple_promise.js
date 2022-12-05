'use script';

// 016_building a simple promise

const lotteryPromise = new Promise(function(resolve , reject){
    console.log('Lotterey draw is happening');

    setTimeout(function(){
        if(Math.random() >= 0.5){
            resolve('You Win!');
        }
        else{
            reject(new Error('You lost your money!'))
        }
    } ,2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve , seconds * 1000);
    });
};
// consuming promise
wait(1)
.then(() => {
    console.log('1 second passed'); 
    return wait(1);   
})
.then(() => {
    console.log('2 second passed'); 
    return wait(1);   
})
.then(() => {
    console.log('3 second passed'); 
    return wait(1);   
})
.then(() => console.log('4 second passed'));


// 017_promisifying the geolocation API
const getPosition = function(){
    return new Promise(function(resolve , reject){
        navigator.geolocation.getCurrentPosition(resolve , reject);

    });
};
getPosition().then(pos => console.log(pos));