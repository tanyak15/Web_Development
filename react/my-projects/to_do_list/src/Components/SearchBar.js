import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      text: this.state.term,
      date: new Date(),
      isCompleted: false,
    };

    this.props.onSubmit(taskData);
    // console.log(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="ui segment" style={{ border: "3px solid purple" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Add a task</label>
            <input
              type="text"
              placeholder="Enter the text here..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>

            <div>
              <br />
              <button className="ui basic button green">submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
