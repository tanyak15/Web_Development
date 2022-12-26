import React from "react";

class SearchBar extends React.Component{

    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    state = {term : ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);

    }

    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className=" ui field">
                    <label>Image search</label>
                <input type="text" placeholder="Search here..."
                value={this.state.term} 
                onChange={e => this.setState({term : e.target.value})}/>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;
