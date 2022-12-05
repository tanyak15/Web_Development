'use script';

// Coding Challenge #1
// 374316450623405907072x86976
// 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=374316450623405907072x86976'
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/


//////-------------------------------------------------------------------------------------------------------------------------------//////

const getJSON = function (url, errorMsg = 'something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
}

//*******************************************//

const countriesContainer = document.querySelector('.countries');

const renderCountry = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`).then(res => {
        let data = res[0];

        let currencies = [];
        let languages = [];

        for (const currencyKey of Object.keys(data.currencies)) {
            currencies.push(currencyKey);
        }
        for (const languageKey of Object.keys(data.languages)) {
            languages.push(languageKey);
        }
        let html = `
    <article class="country">
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
    });

}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}


//////-------------------------------------------------------------------------------------------------------------------------------//////

const whereAmI = function (lat, lng) {
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=374316450623405907072x86976`)
        .then(res => {
            if (!res.ok) throw new Error(`Something went Wrong!`)
            return res.json();
        })
        .then(data => {
            console.log(`I live in ${data.region}`)
            return data.country
        })
        .catch(err => console.error(`${err.message}`));
}

// whereAmI('26.872611', '75.759074').then(res => renderCountry(res));

// whereAmI('19.037', '72.873');
// const country2 = whereAmI('-33.933', '18.474');
// renderCountry(country2);


//////-------------------------------------------------------------------------------------------------------------------------------//////


// 018_coding challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/

const createImage = function(imgPath){
    return new Promise(function(resolve , reject){
       const img = document.createElement('img');
       img.src = imgPath;

    img.addEventListener('load' ,function(){
        countriesContainer.append(img);
        resolve(img);
    });
    img.addEventListener('error' ,function(){
        reject(`Can't open image`);
    });
    });
  
};
let currentImg ;
// createImage('./img/img-1.jpg').then(function(data){
//     currentImg = data;
//     return wait(2);
// })
// .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
// })
// .then((data) => {
//     currentImg = data;
//     return wait(2);
// })
// .then(() => {
//     currentImg.style.display = 'none';
//     createImage('./img/img-3.jpg');
// })
// .catch(err => console.error(err.message));

const wait = function(sec){
return new Promise(function(resolve){
    setTimeout(resolve , sec*1000);
})
}

// coding challenge 3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).
TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
GOOD LUCK 😀
*/

const loadNPause = async function(){
    try{
        const currImg1  = await createImage('./img/img-1.jpg');
        console.log(currImg1);
        await wait(2);
        // console.log('I waited for 2 sec');
        currImg1.style.display = 'none';
        const currImg2 = await createImage('./img/img-2.jpg');
        console.log(currImg2);
        await wait(2);
        currImg2.style.display = 'none';
        const currImg3 = await createImage('./img/img-3.jpg');
        console.log(currImg3);
        await wait(2);
    }
    catch(err){
        console.error(err.message);
    }
    
    
};
loadNPause();

// const  = [];
const loadAll = async function(imgArr){
   const promiseArr = [];
    for(const imgPath of imgArr){
    promiseArr.push(createImage(imgPath));
   }
   Promise.all(promiseArr);  

}
loadAll(['./img/img-1.jpg' ,'./img/img-2.jpg' , './img/img-3.jpg']);