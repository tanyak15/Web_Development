import React from "react";

class Filter extends React.Component {
  state = { text: "", date: "" };

  onFilterClick = (e) => {
    e.preventDefault();
    console.log("filtered");

    this.props.onFilter(this.state.date, this.state.text);
  };

  onRemoveFilterClick = (e) => {
    e.preventDefault();

    this.props.onRemoveFilter();
  };

  render() {
    return (
      <div className="ui segment" style={{ border: "1px solid black" }}>
        <form className="ui form">
          <div className="field">
            <div className="ui grid">
              <div className="row">
                <div className="eight wide column">
                  <input
                    type="text"
                    placeholder="Enter title here..."
                    value={this.state.text}
                    onChange={(e) => this.setState({ text: e.target.value })}
                  ></input>
                </div>
                <div className="eight wide column">
                  <input
                    type="date"
                    value={this.state.date}
                    onChange={(e) => this.setState({ date: e.target.value })}
                  ></input>
                </div>
              </div>
            </div>
            <br />
            <button
              className="ui basic button pink"
              onClick={this.onFilterClick}
            >
              Filter
            </button>
            <button
              className="ui basic button teal"
              onClick={this.onRemoveFilterClick}
            >
              Remove Filter
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
