import React, { useEffect, useState } from "react";
import Accordion from './components/Accordion'
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import Link from "./components/Link";

const items = [
    {
        title : 'What is React ?' ,
        content : 'React is a frontend Java framework.'
    } ,
    {
        title : 'Why to use React?' ,
        content : 'React is a favourite js library among developers.'
        
    } ,
    {
        title : 'How do you use React?' ,
        content : 'You use react by creating components.'
        
    }
]

const options = [
    {
        label : 'The Color Red' ,
        value : 'red'
    },
    {
        label : 'The Color Green' ,
        value : 'green'
    },
    {
        label : 'A Shade of Blue' ,
        value : 'blue'
    }
]

// BETTER WAY TO DO THIS IS TO MAKE A SEPERATE Route.js component
// const showAccordian = () =>{
//     if(window.location.pathname === '/'){
//         return <Accordion items={items}/>;
//     }
// }
// ...for all components


const App = () =>{
    
const [selected , setSelected] = useState(options[0]);
 
    return (
        <div>  
            <Header/>  
            <Route path = '/'>
                <Accordion items={items}/>
            </Route>
            <Route path = '/list'>
                <Search/>
            </Route>
            <Route path = '/dropdown'>
                <Dropdown
                label="Select the colour"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path = '/translate'>
                <Translate/>
            </Route>
        </div>
    )
};
 
export default App;
