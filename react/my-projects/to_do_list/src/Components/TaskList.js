import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    const renderTasks = this.props.tasks.map((taskData) => {
      // console.log(taskData);
      return (
        <div key={taskData.date}>
          <Task
            taskData={taskData}
            // to get access of these in Task component we pass it as props
            // and they are recieved as a prop therefore, this.props.onTaskCompleted
            onTaskCompleted={this.props.onTaskCompleted}
            onTaskDeleted={this.props.onTaskDeleted}
            onTaskEdit={this.props.onTaskEdit}
          />
          <br />
        </div>
      );
    });
    return <div className="container">{renderTasks}</div>;
  }
}

export default TaskList;
