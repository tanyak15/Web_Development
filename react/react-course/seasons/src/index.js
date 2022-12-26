import React from "react";
import ReactDOM  from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const root = ReactDOM.createRoot(document.getElementById('root'));

// functional based component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position.coords) , (err) => console.log(err)
//         );
//     return <div>Latitude : </div>
// }

// converting functional to class based components

// Class based components
class App extends React.Component{

    // // to intialise state - 1st method using constructor
    // constructor(props){
    //     super(props);
    //     // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
    //     this.state = { lat : null , errMsg : '' }

        
    // }

    // 2nd method to initialize state
    state = { lat : null , errMsg : '' }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // To update our state obj , we call setState
                this.setState( {lat : position.coords.latitude} )

                // we will NEVER do this
                // this.state.lat = position.coords.latitude

            } , (err) => {
                this.setState({ errMsg : err.message})
            }
            );
    }
// helper method
    renderContent(){
        if(this.state.errMsg && !this.state.lat){
            return <div>Error : {this.state.errMsg}</div>
        }
        if(!this.state.errMsg && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        // return <div >Loading!</div>
        return <Spinner message="Please accept location request!"/>

    }

    // React says we have to define render!!
    render(){ 
        // now if we want a red border   
        return (
        <div className="border red">
            {this.renderContent()}
        </div> 
        ) 
        
    }
}

root.render(<App/>)