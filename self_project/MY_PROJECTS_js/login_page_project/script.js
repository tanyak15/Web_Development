"use strict";
const section1 = document.querySelector(".section-1");
const section2 = document.querySelector(".section-2");
const section3 = document.querySelector(".section-3");
const section4 = document.querySelector(".section-4");
const section5 = document.querySelector(".section-5");
const section6 = document.querySelector(".section-6");
const section7 = document.querySelector(".section-7");

const userRegister = document.querySelector(".user-register");
const userLogin = document.querySelector(".user-login");
const submit_login = document.querySelector(".submit1");
const submit_register = document.querySelector(".submit2");
const username = document.querySelector("#username");
const password1 = document.querySelector("#password1");

//***********************************************************************************//

const userNameLabel = document.querySelectorAll(".user-name");
const userContactId = document.querySelector(".user-contact-id");
const userContactNo = document.querySelector(".user-contact-no");
const userId = document.querySelector(".user-id");
const userPassword = document.querySelector(".user-password ");

//***********************************************************************************//
const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const contactNoInput = document.getElementById("contactNo");
const password2Input = document.getElementById("password2");
const confirmpasswordInput = document.getElementById("confirmpassword");
const discriptionInput = document.getElementById("discription");

//***********************************************************************************//
//***********************************************************************************//

// global variable
const users = [
  {
    firstname: "Tanya",
    lastname: "khandelwal",
    contact_id: "tanyak15112001@gmail.com",
    contact_no: 6375296274,
    user_id: "Tk",
    password: "1234",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa soluta inventore neque, et porro aliquid atque molestiae esse eum quia! Vel suscipit molestiae neque totam? Molestiae sunt tenetur quibusdam!`,
  },
  {
    firstname: "Pulkit",
    lastname: "jain",
    contact_id: "pjswarnpath@gmail.com",
    contact_no: 7413063210,
    user_id: "Pj",
    password: "1234",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa soluta inventore neque, et porro aliquid atque molestiae esse eum quia! Vel suscipit molestiae neque totam? Molestiae sunt tenetur quibusdam!`,
  },
];

//***********************************************************************************//

for (let i = 2; i <= 6; i++) {
  document.querySelector(`.section-${i}`).classList.add("hidden");
}

//***********************************************************************************//
const check_registered_user = function (user_name, password) {
  for (const user of users) {
    if (user.user_id === user_name && user.password === password) {
      return user;
    }
  }
  return undefined;
};

//***********************************************************************************//

const validateUser = function (
  firstname,
  lastname,
  email,
  contactNo,
  password,
  confirmpassword,
  description
) {
  let entries =
    firstname !== "" &&
    lastname !== "" &&
    email !== "" &&
    contactNo !== "" &&
    password !== "" &&
    confirmpassword !== "" &&
    description !== "";
  if (entries && password === confirmpassword) {
    return true;
  } else {
    return false;
  }
};

//***********************************************************************************//
// CREATING USER ID FUNCTION HERE
const createUserId = function (first, last) {
  const id = `${first.slice(0, 1).toUpperCase()}${last.slice(0, 1)}`;
  return id;
};

//***********************************************************************************//
// CREATING OBJECT FUNCTION
const createUser = function (
  firstname,
  lastname,
  email,
  contactNo,
  password,
  description
) {
  const user = {
    firstname: firstname,
    lastname: lastname,
    contact_id: email,
    contact_no: contactNo,
    user_id: createUserId(firstname, lastname),
    password: password,
    description: description,
  };
  return user;
};

//***********************************************************************************//

userLogin.addEventListener("click", function (e) {
  e.preventDefault();
  if (!section6.classList.contains("hidden")) {
    section6.classList.add("hidden");
  }
  if (!section4.classList.contains("hidden")) {
    section4.classList.add("hidden");
  }
  section1.classList.add("hidden");
  section2.classList.remove("hidden");
});

//***********************************************************************************//

userRegister.addEventListener("click", function (e) {
  e.preventDefault();
  if (!section6.classList.contains("hidden")) {
    section6.classList.add("hidden");
  }
  if (!section4.classList.contains("hidden")) {
    section4.classList.add("hidden");
  }
  section1.classList.add("hidden");
  section3.classList.remove("hidden");
});

//***********************************************************************************//

submit_login.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("submit clicked");

  let userName = username.value;
  let passWord1 = password1.value;
  console.log(userName, passWord1);

  const entered_user = check_registered_user(userName, passWord1);

  if (entered_user) {
    section7.classList.add("hidden");
    section6.classList.remove("hidden");
    section2.classList.add("hidden");
    section1.classList.remove("hidden");

    for (const name of userNameLabel) {
      name.textContent = entered_user.firstname + " " + entered_user.lastname;
    }
    userContactId.textContent = entered_user.contact_id;
    userContactNo.textContent = entered_user.contact_no;
    userId.textContent = entered_user.user_id;
    userPassword.textContent = entered_user.password;
  } else {
    alert("Check username or password!");
  }
});

//***********************************************************************************//

submit_register.addEventListener("click", function (e) {
  e.preventDefault();

  section7.classList.add("hidden");
  section4.classList.remove("hidden");
  section3.classList.add("hidden");
  section1.classList.remove("hidden");

  let _firstname = firstnameInput.value;
  let _lastname = lastnameInput.value;
  let _email = emailInput.value;
  let _contactNo = contactNoInput.value;
  let _password2 = password2Input.value;
  let _confirmpassword = confirmpasswordInput.value;
  let _description = discriptionInput.value;

  //   what all conditions to be checked
  // 1. all fields should be filled
  // 2. should not exist phele se he
  // 3. confirm password nd password should match each other

  if (
    validateUser(
      _firstname,
      _lastname,
      _email,
      _contactNo,
      _password2,
      _confirmpassword,
      _description
    )
  ) {
    // 1. function to create username
    // 2. make an function of the above fields that returns object
    // 3. add the object in users array
    const registeredUser = createUser(
      _firstname,
      _lastname,
      _email,
      _contactNo,
      _password2,
      _description
    );
    users.push(registeredUser);
    // 4. update the right side page
    for (const name of userNameLabel) {
      name.textContent =
        registeredUser.firstname + " " + registeredUser.lastname;
    }

    // all the fields should me made empty after registering
    firstnameInput.value = "";
    lastnameInput.value = "";
    emailInput.value = "";
    contactNoInput.value = "";
    password2Input.value = "";
    confirmpasswordInput.value = "";
    discriptionInput.value = "";
  } else {
    alert(`Either field is empty or password is not correct!`);
  }
});

//***********************************************************************************//
