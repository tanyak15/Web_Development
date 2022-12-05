'use script';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className) {
    let currencies = [];
    let languages = [];

    for (const currencyKey of Object.keys(data.currencies)) {
        currencies.push(currencyKey);
    }
    for (const languageKey of Object.keys(data.languages)) {
        languages.push(languageKey);
    }
    let html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 100000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣</span>${data.languages[`${languages[0]}`]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[`${currencies[0]}`].name}</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}


//////-------------------------------------------------------------------------------------------------------------------------------//////




const getCountryAndNeighbour = function (country,) {
    // AJAX CALL (country 1)
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);

        // Get neighbour country (2)
        const neighbour = data.borders[0];

        if (!neighbour) return;

        // AJAX CALL (country 2)
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);
            renderCountry(data2, 'neighbour');
        })

    });
};


// getCountryAndNeighbour('republic of india');


// 008_Promises and fetch API

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){ //'then'--> to handeled fulfilled promise
//     return response.json();
//     })
//     .then(function(data){
// console.log(data);
// renderCountry(data[0]);

// }

const getJSON = function (url, errorMsg = 'something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
}

//'then'--> to handeled fulfilled promise
// const getCountryData = function(country){
//     // country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//         console.log(response);

//         // to reject promise manually
//         if (!response.ok)
//         throw new Error(`Country not found (${response.status})`); 
//         return response.json();

//         } )
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if(!neighbour) return;

//         // Country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0] , 'neighbour'))
//     .catch(err => {
//         console.error(`${err} 🤯🤯`);
//     renderError(`something went wrong 🤯🤯 ${err.message} . Try again!`); 
//     })
//     // whether the callback fn is rejected or accepted it will be called
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })       
// };


// const getCountryData = function(country){

//     // country 1
//     getJSON(`https://restcountries.com/v3.1/name/${country}` , `Country not found`)
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if(!neighbour) throw new Error('No neighbour found');

//         // Country 2
//         return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}` , 'Country not found');
//     })
//     .then(data => renderCountry(data[0] , 'neighbour'))
//     .catch(err => {
//         console.error(`${err} 🤯🤯`);
//     renderError(`something went wrong 🤯🤯 ${err.message} . Try again!`); 
//     })
//     // whether the callback fn is rejected or accepted it will be called
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })


// };


// btn.addEventListener('click' , function(){
//     getCountryData('india');
// });

// getCountryData('australia');

// ***************************************//

// 015_Event loop in practice

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer') ,0 );
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(
//     res => {
//     for(let i=0;i<10000000;i++){}
//     console.log(res);
// });
// console.log('Test end');

// ***************************************//

// 016_building a simple promise

// const lotteryPromise = new Promise(function(resolve , reject){
//     console.log('Lotterey draw is happening');

//     setTimeout(function(){
//         if(Math.random() >= 0.5){
//             resolve('You Win!');
//         }
//         else{
//             reject(new Error('You lost your money!'))
//         }
//     } ,2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// ***************************************//

// Promisifying setTimeout
// const wait = function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve , seconds * 1000);
//     });
// };
// // consuming promise
// wait(1)
// .then(() => {
//     console.log('1 second passed'); 
//     return wait(1);   
// })
// .then(() => {
//     console.log('2 second passed'); 
//     return wait(1);   
// })
// .then(() => {
//     console.log('3 second passed'); 
//     return wait(1);   
// })
// .then(() => console.log('4 second passed'));

// ***************************************//

// 013_coding challenge 1
// 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=374316450623405907072x86976'

// const whereAmI = function(lat , lng){
//     fetch(`https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=374316450623405907072x86976`)
//     .then(res => console.log(res));
// }
// ***************************************//

// 017_promisifying the geolocation API

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);

    });
};
// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//     getPosition()
//       .then(pos => {
//         const { latitude: lat, longitude: lng } = pos.coords;
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//       })
//       .then(res => {
//         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//         return res.json();
//       })
//       .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);
//         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//       })
//       .then(res => {
//         if (!res.ok) throw new Error(`Country not found (${res.status})`);
//         return res.json();
//       })
//       .then(data => renderCountry(data[0]))
//       .catch(err => console.error(`${err.message} 💥`));
//   };

//*****************************************//

// _019_Consuming promises with async_await

// const whereAmI = async function () {
//     try {
//         // Geolocation
//         const pos = await getPosition();
//         const { latitude: lat, longitude: lng } = pos.coords;

//         // Reverse Geocoding
//         const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=3947149957586860255x111041`);

//         if (!resGeo.ok) throw new Error(`Problem getting location!`);
//         const dataGeo = await resGeo.json();
//         // console.log(dataGeo);  

//         // Country data
//         const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//         if (!res.ok) throw new Error(`Problem country!`);

//         const data = await res.json();
//         // console.log(data);
//         renderCountry(data[0]);
//         return `You are in ${dataGeo.city} , ${dataGeo.country}`
//     }
//     catch (err) {
//         console.log(err);
//         renderError(`${err.message} 🤯`);

//         // Reject promise returned from async function
//         throw err;
//     }
// };
// whereAmI();

// console.log('FIRST');

// 021_returning values from Async fn

console.log('1. Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
// .then(city => console.log(`2. ${city}`))
// .catch(err => console.error(`2. ${err.message} 🤯`))
// .finally(() => console.log('3. Finished getting location'))

(async function () {
    try {
        const city = await whereAmI();
        console.log(`2. ${city}`)
    }
    catch (err) {
        console.error(`2. ${err.message} 🤯`);
    }
    // it is always going to be executed no matter what
    console.log('3. Finished getting location');

})();


// 022_Running promises in parallel

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//         // console.log([data1.capital , data2.capital , data3.capital]);

//         // promises running paralley
//         const data = await Promise.all([
//         getJSON(`https://restcountries.com/v3.1/name/${c1}`) ,
//         getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//         getJSON(`https://restcountries.com/v3.1/name/${c3}`),

//     ]);
//     console.log(data.map(d => d[0].capital));

//     }
//     catch (err) {
//         console.log(err);
//     }

// }
// get3Countries('portugal' ,'india' , 'canada');

// 023_Other promise compinators
// 1. Promise.race

(async function(){
const res = await Promise.race([ getJSON(`https://restcountries.com/v3.1/name/italy`) ,
getJSON(`https://restcountries.com/v3.1/name/mexico`) ,
getJSON(`https://restcountries.com/v3.1/name/berlin`) ,
]);
console.log(res[0].name);
})();

const timeout = function(sec){
    return new Promise(function(_ , reject){
        setTimeout(function(){
            reject(new Error('Request took too long!'));
        } , sec*1000);
    });
}
Promise.race([getJSON(`https://restcountries.com/v3.1/name/berlin`) ,
timeout(3),
])
.then(res => console.log(res[0]))
.catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
]).then(res => console.log(res))
.catch(err = console.error(err));

// Promise.any
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
]).then(res => console.log(res))
.catch(err = console.error(err));