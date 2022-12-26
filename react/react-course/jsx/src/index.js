import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = function(){
    return(
        <div>
             <label className='label' htmlFor='name'>Enter name : </label>
             <input id='name' type='text'></input>
             <button style={{backgroundColor : 'blue' , color : 'white'}}>Submit</button>
        </div>
    )
}
root.render(<App/>);
// ReactDOM.render(<App/> , document.getElementById('root'));