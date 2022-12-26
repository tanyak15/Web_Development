import React from "react";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import Filter from "./Filter";

class App extends React.Component {
  state = {
    stateBeforeFilter: [],
    tasks: [],
  };

  addTaskLocally = (tasks) => {
    const tasksToStore = JSON.stringify(tasks);
    window.localStorage.setItem("storedTasks", tasksToStore);
  };

  componentDidMount = () => {
    if (!window.localStorage.getItem("storedTasks")) {
      return;
    }
    const tasks = JSON.parse(window.localStorage.getItem("storedTasks"));
    if (tasks) {
      tasks.forEach((element) => {
        element.date = new Date(element.date);
      });
      this.setState({ tasks });
    }
  };

  //   to Add new Tasks
  onTaskAdd = (newTask) => {
    const taskList = this.state.tasks;
    // pushing new task into the array
    taskList.push(newTask);
    // console.log(task);
    // here updating the state of the tasks array on adding the new task
    this.addTaskLocally(taskList);

    this.setState({ tasks: taskList });
  };

  // when task gets completed
  // to see which complete button is pressed we compare the key date to the date of task
  //   if isCompleted is true then its completed
  onTaskCompleted = (date) => {
    const newTasks = this.state.tasks.map((taskObj) => {
      if (taskObj.date === date) {
        taskObj.isCompleted = true;
      }
      return taskObj;
    });
    this.addTaskLocally(newTasks);
    this.setState({ tasks: newTasks });
  };

  onTaskDeleted = (date) => {
    const delTasks = this.state.tasks.filter((taskObj) => {
      if (taskObj.date === date) {
        return false;
      }
      return true;
    });
    this.addTaskLocally(delTasks);
    this.setState({ tasks: delTasks });
  };

  onTaskEdit = (newTitle, date) => {
    const editTask = this.state.tasks.map((taskObj) => {
      if (taskObj.date === date) {
        taskObj.isCompleted = false;
        taskObj.text = newTitle;
      }
      return taskObj;
    });
    this.addTaskLocally(editTask);
    this.setState({ tasks: editTask });
  };

  onFilter = (date, text) => {
    const filterDate = this.state.tasks.filter((taskObj) => {
      const [year, month, day] = date.split("-");
      console.log(year, month, day);
      console.log(
        taskObj.date.getMonth() + 1,
        taskObj.date.getDate(),
        taskObj.date.getFullYear()
      );

      if (!date && taskObj.text.includes(text)) {
        return true;
      }
      if (
        !text &&
        taskObj.date.getMonth() + 1 === Number(month) &&
        taskObj.date.getFullYear() === Number(year) &&
        taskObj.date.getDate() === Number(day)
      ) {
        return true;
      }
      if (
        taskObj.text.includes(text) &&
        taskObj.date.getMonth() + 1 === Number(month) &&
        taskObj.date.getFullYear() === Number(year) &&
        taskObj.date.getDate() === Number(day)
      ) {
        return true;
      }
      return false;
    });
    this.setState({ stateBeforeFilter: this.state.tasks });
    this.setState({ tasks: filterDate });
  };

  onRemoveFilter = () => {
    if (this.state.stateBeforeFilter.length === 0) {
      return;
    }
    this.setState({
      tasks: this.state.stateBeforeFilter,
      stateBeforeFilter: [],
    });
  };

  render() {
    // this.addTaskLocally(this.state.tasks);
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onTaskAdd} />
        <Filter onFilter={this.onFilter} onRemoveFilter={this.onRemoveFilter} />

        <TaskList
          tasks={this.state.tasks}
          //   to get access of these in TaskList we need to pass it as props
          onTaskCompleted={this.onTaskCompleted}
          onTaskDeleted={this.onTaskDeleted}
          onTaskEdit={this.onTaskEdit}
        />
      </div>
    );
  }
}

export default App;
