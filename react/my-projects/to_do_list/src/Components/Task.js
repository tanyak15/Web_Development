import React from "react";

class Task extends React.Component {
  onCompButtonClick = () => {
    // to get acces to the props
    // ans as parameter we pass it on a date
    // Task data is an object of TaskList.js
    this.props.onTaskCompleted(this.props.taskData.date);
  };
  onDelButtonClick = () => {
    this.props.onTaskDeleted(this.props.taskData.date);
  };
  onEditButtonClick = () => {
    const newTitle = prompt("Enter new title");

    this.props.onTaskEdit(newTitle, this.props.taskData.date);
  };

  render() {
    const style = {
      border: "1px solid black",
      backgroundColor: this.props.taskData.isCompleted
        ? "rgb(252, 245, 229)"
        : "",
    };

    return (
      <div className="ui segment" style={style}>
        <div className="content">
          <div className="ui grid">
            <div className="row">
              <div className="fourteen wide column">
                <div className="ui header">{this.props.taskData.text}</div>
              </div>
              <div
                className="two wide column aligned center "
                style={{ fontSize: "15px" }}
              >
                {this.props.taskData.date.toLocaleDateString()}
              </div>
            </div>
          </div>
          <br />
          <button
            onClick={this.onCompButtonClick}
            className={` ui blue button  ${
              !this.props.taskData.isCompleted ? "" : "disabled"
            } `}
          >
            Complete
          </button>

          <button onClick={this.onDelButtonClick} className={`ui red button }`}>
            delete
          </button>

          <button
            onClick={this.onEditButtonClick}
            className={`ui purple button }`}
          >
            edit
          </button>
        </div>
      </div>
    );
  }
}
export default Task;
