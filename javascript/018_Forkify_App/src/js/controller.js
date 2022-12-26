import * as model from './model.js';
import recipeView  from './views/recipeView.js';

import 'core-js/stable'; //polyfilling everything else
import 'regenerator-runtime/runtime'; //for polyfilling async-await


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//  

///////////////////////////////////////


const controlRecipe = async function(){
  try{
    // way to get the hash id
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return;
    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);
      /* this loadRecipe is an async fn therefore we need to await here
      and async fn returns a promise */

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);

    
  }
  catch(err){
    alert(err);
  }
}
// showRecipe();

// 006_adding Evenet listners
window.addEventListener('hashchange' , controlRecipe)
window.addEventListener('load' , controlRecipe)