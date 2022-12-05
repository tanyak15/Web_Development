'use strict';
const inputBox = document.querySelector('#text-box');
const addButton = document.querySelector('#add-button');
const content = document.querySelector('.content');

const arrays = [];

// add button dabane pe kyaa hoga
// 1.input read krega 
// 2.then check krega ke jo input dala h vo empty to nhi h
// 2.a-if empty --> kuch nhi krnai.e return kr do
// 2.b-if not empty --> 2.b.2 - object banega , 
// 2.b.2 -then vo aaray me add hoga ,
// 2.b.3 - or UI change hoga

// ques : UI me render kese hoga object ya array?
// --> array ke har object(for each loop use karenge) pe insertAdjacentHTML lagaenge
// fir html create krenge js me or usme ${objects.properties } ko interpolate krenge

// ques :  how to delete an element?
// --> sare delete buttons ko select kr liya
// --> sabpe event listner laga diya using for each loop
// --> object ko array me se remove kiya 
// --> update kiya UI ko

// ques : how to update completed button
// --> sare complete buttons ko select kr liya
// --> sabpe event listner laga diya using for each loop
// -->then condition dekheneg ke isCompleted true h ya false(or is completed kaha se aaya??? --> arrays[i].isCompleted se)
// ----> agar false hua to usko true bana denge the UI ko update krenege (par UI ko update kese kiya????? --> html me gae or datas wali class me ek or class add kr de with ternary operator i.e if true the class "completed-task will be added(whose css is written) otherwise no class is added")

const createHtml = function (obj) {
    let html = `<div class="datas ${obj.isCompleted?'completed-task':''}" id="task-1">
    <div class="input-text">${obj.text}</div>
    <div class="date-time-container">
        <div class="created-on">Created On :</div>
        <div class="created-date">${calculateDate(obj.createdOn)}</div>
        <div class="created-date">${calculateTime(obj.createdOn)}</div>
    </div>

    <div class="status">
        <button type="button" class="completed">COMPLETED</button>
        <button type="button" class="delete">DELETE</button>
    </div>
    </div>`;

    return html;

};


const createTaskObj = function (inputString) {
    const task_object = {
        text: inputString,
        isCompleted: false,
        createdOn: new Date(),
    };
    return task_object;
};

const calculateDate = function (date) {
    let calcdate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    // console.log(calcdate);
    return calcdate;
}
const calculateTime = function (time) {
    let calcTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

    return calcTime;
}

const updateUI = function () {
    content.innerHTML = "";

    arrays.forEach(function (obj, i, _) {
        let str = createHtml(obj);
        content.insertAdjacentHTML('beforeend', str);

    }


    );
    const deleteButtons = document.querySelectorAll('.delete');
    const completedButtons = document.querySelectorAll('.completed');

    deleteButtons.forEach(function (del, i, _) {
        del.addEventListener('click', function (e) {

            arrays.splice(i, 1);
            updateUI();

        });
    });
    completedButtons.forEach(function (comp, i, _) {
        comp.addEventListener('click', function () {
            if (!arrays[i].isCompleted) {
                arrays[i].isCompleted = true;

            }
            else {
                arrays[i].isCompleted = false;
            }
            updateUI();
        });
    });

}

addButton.addEventListener('click', function (e) {
    e.preventDefault();
    let inputString = inputBox.value;
    if (inputString === '') {
        return;
    }
    else {
        // console.log(inputString);

        arrays.push(createTaskObj(inputString));

        updateUI();




    }

    inputBox.value = "";


});






