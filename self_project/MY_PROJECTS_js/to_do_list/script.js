const heading = document.querySelector(".heading");
const add_button = document.querySelector("#add-button");
const text_field = document.querySelector("#text-box");
const tasks = document.querySelector(".tasks");

// yeh array me  task objects store krr rahe h
const array_task = [];

// object k andar kya hoga
// 1.text
// 2.created on date nd time
// 3.completed on date nd time

const createTask = function (title) {
  // create task ek object create kr raha h jisko array me dal rahe h
  const task = {
    createdOn: new Date(),
    taskName: title,
    isCompleted: false,
    completeDate: null,
  };
  return task;
};

// array k andar jo bhe task stored h or kab create ya complete hue h yeh "str bataega"
const calcTime = function (task, str) {
  let time = "---";
  // console.log(time);
  if (task[`${str}`]) {
    time = `${task[`${str}`]?.getHours()} : ${task[
      `${str}`
    ]?.getMinutes()} : ${task[`${str}`]?.getSeconds()}`;
  }
  return time;
};
// human?.human1?.dob
// we will pass task in calcDate function
const calcDate = function (task, str) {
  let date = "---";
  if (task[`${str}`]) {
    date = `${task[`${str}`]?.getMonth()} / ${task[
      `${str}`
    ]?.getDate()} / ${task[`${str}`]?.getFullYear()}`;
  }
  return date;
};

const deleteObj_addEventListners = function () {
  const deleteBtns = document.querySelectorAll(".delete-button");

  for (const [i, del] of deleteBtns.entries()) {
    del.addEventListener("click", function () {
      // task ko corrosponding index se select kr rahe h
      const selectedTask = document.getElementById(`task-${i}`);

      // 1. object ko array se remove krna h

      // del.remove();  yeh sirf delete button ko remove krta h pure task ko nhi isliye task ko select krna padega or usko remove krna hota
      selectedTask.remove();

      // or isko array se bhe hata rahe h
      array_task.splice(i, 1);

      // 2. update the UI
      updateUI();
    });
  }
};


const checkBox_addEventListner = function () {
  const checkBoxes = document.querySelectorAll(".check");
  for (const [i, check] of checkBoxes.entries()) {
    check.addEventListener("change", function (e) {
      e.preventDefault();
      if (e.target.checked === true) {
        array_task[i].isCompleted = true;
        array_task[i].completeDate = new Date();

        // console.log(e.target.checked);
        // console.log(`${i} is being checked`);
        updateUI();
      } else {
        array_task[i].isCompleted = false;
        array_task[i].completeDate = null;
        // console.log(e.target.checked);
        // console.log(`${i} is being unchecked`);
        updateUI();
      }
    });
  }
};

const updateUI = function () {
  // agar yeh nhi dalenge to jo obj already present obj h vo har baar repete hoga jab bhe apn naya obj insert krenge
  //extra cheeze remove krta h
  tasks.innerHTML = "";
  //wapis se array ke objeects ko GUI me convert krta h 
  for (const [i, taskObj] of array_task.entries()) {
    let html = createHtml(taskObj, i);

    // isse GUI(box) create hora h , with 2 arguments ek to kaha pe dalna h (i.e position) or ek kya dalna h
    tasks.insertAdjacentHTML("beforeend", html);
    if (array_task[i].isCompleted) {
      document.querySelector(`#task-${i}`).classList.remove("task");
      document.querySelector(`#task-${i}`).classList.add("completed-task");
      document.querySelector(`#checkId-${i}`).checked = true;
    } else {
      document.querySelector(`#task-${i}`).classList.add("task");
      document.querySelector(`#task-${i}`).classList.remove("completed-task");
      document.querySelector(`#checkId-${i}`).checked = false;
    }
  }

  if (array_task.length >= 1) {
    deleteObj_addEventListners();
    checkBox_addEventListner();
  }
};


// har task obj k liye new html create krne the isliye createHtml banaya h
const createHtml = function (taskObj, indx) {
  const html = `<div class="task" id="task-${indx}">
            <input type="checkbox" class="check" id="checkId-${indx}" unchecked >
            <div class="task-sentence">
                ${taskObj.taskName}
                <div class="date-time-container1">
                    <div class="created1">Created On :</div>
                    <div class="created-date">${calcDate(
      taskObj,
      "createdOn"
    )}</div>
                    <div class="created-time">${calcTime(
      taskObj,
      "createdOn"
    )}</div>
                </div>
                <div class="date-time-container2">
                    <div class="completed">Completed On :</div>
                    <div class="created-date">${calcDate(
      taskObj,
      "completeDate"
    )}</div>
                    <div class="created-time">${calcTime(
      taskObj,
      "completeDate"
    )}</div>
                </div>
            </div>
            <button type="button" class="delete-button">Delete</button>
        </div>`;
  return html;
};

add_button.addEventListener("click", function (e) {
  e.preventDefault();
  //   task: object dikhega kese usko structure kese karungi
  let title = text_field.value;
  text_field.value = "";

  if (title == "") {
    return;
  } else {
    array_task.push(createTask(title));
    // console.log(array_task);
  }
  updateUI();

  // this will select all the delete buttons

  //   to-do 1 : object create hoga
  //   to-do 2 : us object ko array me dalenge
});
