'use strict';


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector("#section--1");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector(".nav");
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  // this we have written so that the page does not jump back to prev as we click "OPEN ACCOUNT"
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


// ******************************************************************************************************************************************************

// 007 --> Implementing smooth scrollling

// Learn more scrolling button
btnScrollTo.addEventListener("click" , function(e){
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log("current scroll : " ,window.pageXOffset , pageYOffset);

  // console.log("height/width of viewport" , document.documentElement.clientHeight , document.documentElement.clientWidth);

  // scrolling
  // 👇this is not right completely as if we scroll the page a bit then the dist from top changes .nd thus does'nt work properly
  // window.scrollTo(s1Coords.left  , s1Coords.top );

  // window.scrollTo(s1Coords.left + window.pageXOffset , s1Coords.top + window.pageYOffset);

  // for smooth Scrolling
  // window.scrollTo({
  //   left : s1Coords.left + window.pageXOffset , 
  //   top : s1Coords.top + window.pageYOffset ,
  //   behavior : "smooth" ,
  // });

  // new and easy way of doing the above things
  section1.scrollIntoView({behavior : "smooth"});
})
// *********************************************************************************************************************************************

// 011 EVENT DELEGATION - Implementing page navigation

// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click' , function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior : "smooth"})
//   });
// });

//doing the above thing using "EVENT DELEGATION"

// 1.Add event listner to common parent element (i.e nav__links in this case)
// 2.Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click' , function(e){
  e.preventDefault();
  // ☝️this selects the whole nav_links bar but we need only the nav link(section1 /2/ 3).therefore we'll use a matching strategy

  // Matching Strategy - to ignore those clicks that are not on the given 3 links (features,operations,testimonials)
  if(e.target.classList.contains('nav__link')){
    console.log("LINK");
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior : "smooth"})
  }

})
// *********************************************************************************************************************************************




// **********************************************************************************************************************************************************************************************************************************************************************************************

// 003 --> 
 // btnsOpenModal is a node list as it is the result of querySelectorAll therefore forEach method can be applied on it.

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


// for (let i = 0; i<btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// *****************************************************************

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// *********************************************************************************************************

// 005 --> selecting , creating , deleting elements

// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
// returns a nodeList of elements that are selected
console.log(allSections);

document.getElementById("section--1");

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
// it returns a LIVE HTMLCollection

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
// message is the element that we created manually
const message = document.createElement('div');
message.classList.add("cookie-message");
message.textContent = "We use cookie for improved functionaltiy";
message.innerHTML = `We use cookie for improved functionaltiy <button class = "btn btn--close-Cookie">Got it!</button>` ;


header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// delete elements
document.querySelector(".btn--close-Cookie").addEventListener("click" , function(){
  // new way to remove element
  message.remove();

  // old method to remove elemnt
  // message.parentElement.removeChild(message);
})

// *********************************************************************************************************

// 006 --> style, attributes and classes
// STYLE

message.style.backgroundColor = "#80246d";
message.style.width = "120%";

console.log(message.style.width);

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + "px";

document.documentElement.style.setProperty('--color-primary' , 'salmon');

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = "minimalistic logo";


// non-standard
console.log(logo.designer);

console.log((logo.getAttribute('designer')));

logo.setAttribute('company' , 'bankist');

console.log((logo.getAttribute('src')));


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute(" "));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// Don't use
logo.className = 'jonas';

// *********************************************************************************************************


// 008 --> types of events and event handlers

const h1 = document.querySelector("h1");

const alerth1 =  function(e){
  // alert('we have entered the area!');

  // to remove it after evemt is completed once
  // h1.removeEventListener('mouseenter',alerth1);
  
};

h1.addEventListener('mouseenter',alerth1);

// to remove it after a certain period of time
setTimeout(() => h1.removeEventListener('mouseenter',alerth1),3000);

// old way of doing

// h1.onmouseenter =  function(e){
//   alert('onmouseenter : we have entered the area!');
// };

// *********************************************************************************************************

// 010 --> event propogation in practice

// rgb(255 ,255 ,255)
const randomInt = (max , min) =>Math.floor(Math.random() * (max-min+1)+min);
const randomColor = () => 
`rgb(${randomInt(0 ,255)} , ${randomInt(0 ,255)} , ${randomInt(0 ,255)})`;
// console.log(randomColor(0 , 255));

// document.querySelector('.nav__link').addEventListener('click' , function(e) {

//   // in an event handler "this" only points to that element on which the event handler is attached --(i.e document.querySelector('.nav__link') )
//   this.style.backgroundColor = randomColor();

//   // the target element remains same i.e nav__link for all three
//   console.log('LINK' , e.target , e.currentTarget);
//   console.log(this === e.currentTarget);

//   // STOP PROPAGATION
//   // e.stopPropagation();
//   // the propagation stops here only nd the color of CONTAINER nd NAV does'nt change
// } , false);

// document.querySelector('.nav__links').addEventListener('click' , function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER' , e.target , e.currentTarget);
//   console.log(this === e.currentTarget);
  
// } , false);

// document.querySelector('.nav').addEventListener('click' , function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('WHOLE LINK' , e.target , e.currentTarget);
//   console.log(this === e.currentTarget);
// } , true);
// here we've written "true" as it is listining to capturing phase while others are in bubbling phase , here default is "false" only

// *********************************************************************************************************************************************
// 012 --DOM Traversing

// going downwards --> child
// const h1 = document.querySelector("h1");
// already uppr declare kr rakha h 

console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);

console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

h1.firstElementChild.style.color = "pink";
h1.lastElementChild.style.color = "purple";

// going upwards --> parents
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest(".header"));
// h1.closest(".header").style.background = "teal";

// going sideways --> sibilings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);


// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(ele){
//   if(ele != h1){
//     ele.style.transform = 'scale(0.5)';
//   }
// })


// *********************************************************************************************************************************************
// 013 --> building a tabbed content
  
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// tabs.forEach(t => t.addEventListener( 'click' , () => console.log("TAB")
// ));

tabsContainer.addEventListener('click' ,
function(e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  // guard clause
  if(!clicked) return;

// Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
// to change the content on clicking the tabs
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // active tabs
  clicked.classList.add('operations__tab--active')

  // activate content area
  document
  .querySelector(`.operations__content--${clicked.dataset.tab}`).classList
  .add('operations__content--active');


 
} );

// 014 --> passing agguments to event handler

// menu fading animation

const handleHover = function(e ){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
  
    siblings.forEach(el => {
      if (el !== link){
        // here this denotes the opacity 
        el.style.opacity = this;
      }
    });
     logo.style.opacity = this;
  }
}

// nav.addEventListener('mouseover' , function(e){
//   e.preventDefault();
//     handleHover(e , 0.5);
// });
// new method👇 to do the above thing☝️
nav.addEventListener('mouseover' ,handleHover.bind(0.5) 
);

nav.addEventListener('mouseout' , handleHover.bind(1) );


// *********************************************************************************************************************************************

// 015 --> sticky navigation

// scroll event is avaiable on window and not on document

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  }
  else {
    nav.classList.remove('sticky');
  }
});

// *********************************************************************************************************************************************

// 015 --> sticky navigation : Intersection observer API

// const obsCallBack = function(entries , observer){
//   entries.forEach(entry => console.log(entry));

// };

// const obsOptions = {
//   root : null ,
//   threshold : [0 , 0.2]
// }

// const observer = new IntersectionObserver(obsCallBack,obsOptions);
// observer.observe(section1);

// header const  = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  // when target is not intersecting the root we want sticky class to be applied
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};


const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, //since we r intrested in whole view port
  threshold: 0,
  // rootmargin -- it is as if a box of 90px is applied jst outside of our target element
  rootMargin: `-${navHeight}px` ,
  /////////////////not working

});
headerObserver.observe(header);

// *********************************************************************************************************************************************

// 017_reaveling elemets as we scroll
// const allSections = document.querySelectorAll('.section');


const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: .15,

});
// since uupr we have selected all the sections therefore yaha forEach loop lagaya h
allSections.forEach(function (section) {
  sectionObserver.observe(section);

  // to add hidden class to all sections
  section.classList.add('section--hidden');
});

// *********************************************************************************************************************************************

// 018 -- lazy loading images
const imgTarget = document.querySelectorAll('img[data-src]');

// here is the functionality nd logic is
const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0 ,
  rootMargin : '200px'

});

imgTarget.forEach(img => imgObserver.observe(img));

// 019 -- building a slider component

const sliderFunction = function(){
  const slides = document.querySelectorAll('.slide');
  const leftbtn = document.querySelector('.slider__btn--left');
  const rightbtn = document.querySelector('.slider__btn--right');
  
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';
  
  // __________________FUNCTION_________________
  
  // GO TO SLIDE FN
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
  };
  
  // CREATE DOTS FN
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `<button class = "dots__dot" data-slide ="${i}" ></button>`);
  
    });
  
  };

const dotContainer = document.querySelector('.dots');
  // ACTIVATE DOT
  const activateDot = function (slide) {
    // sir wala👇 --(hard)
    // document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  
    // document
    // .querySelector(`.dots__dot[data-slide="${slide}"]`)
    // .classList.add('dots__dot--active');
  
    // easy wala👇
    dotContainer.childNodes.forEach((ele, i) => {
      if (i === slide) {
        ele.classList.add('dots__dot--active');
      }
      else {
        ele.classList.remove('dots__dot--active');
      }
    });
  };
  
  // NEXT SLIDE FN
  const nextSlide = function () {
    if (currSlide == maxSlides - 1) {
      currSlide = 0;
    }
    else {
      currSlide++;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };
  
  // PREVIOUS SLIDE FN
  const prevSlide = function () {
    if (currSlide == 0) {
      currSlide = maxSlides.length - 1;
    }
    else {
      currSlide--;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };
  
  // _____________ENDS OF FUNCTIONS______________
  
  // initially what we do to initialise our slider
  createDots();
  goToSlide(0);
  activateDot(0);
  
  let currSlide = 0;
  const maxSlides = slides.length;
  
  // goToSlide(0);
  // -100% , 0% , 100% , 200%
  
  rightbtn.addEventListener('click', nextSlide);
  leftbtn.addEventListener('click', prevSlide);
  
  // *********************************************************************************************************************************************
  
  // 0_20 --> building slider component-PART 2
  
  // to use keyboad left nd right arrow keys to move the images
  
  // event handlers
  // to use keyboad left nd right arrow keys to move the images
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const slide = e.target.dataset.slide;
      // OR
      // const { slide } = e.target.dataset;
      currSlide = Number.parseInt(e.target.dataset.slide);
  
      goToSlide(currSlide);
      activateDot(currSlide);
  
    }
  
  });
  };
  sliderFunction();
  
  // 021_lifecycle DOM events
  document.addEventListener('DOMContentLoaded' , function(e){
console.log("dom is loaded" , e);
  });

  window.addEventListener('load' , function(e){
console.log(e);
  });
  
  // window.addEventListener('beforeunload' , function(e){
  //   e.preventDefault();
  //   console.log(e);
  //   e.returnValue = '';

  // });