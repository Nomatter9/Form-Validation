let form = document.getElementById("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("btn");
let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let phoneError = document.getElementById("phoneError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let dataList = document.getElementById("dataList");

function formValidation() {
    let isValid = true;
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (firstName.value === "") {
        firstNameError.textContent = "First Name required";
        isValid = false;
    }
    if (lastName.value === "") {
        lastNameError.textContent = "Last Name required";
        isValid = false;
    }
    if (phone.value === "") {
        phoneError.textContent = "Phone required";
        isValid = false;
    }
    if (email.value === "") {
        emailError.textContent = "Email required";
        isValid = false;
    }
    if (password.value === "") {
        passwordError.textContent = "Password required";
        isValid = false;
    }

    return isValid;
}

function showSnackbar(message, isSuccess) {
    var snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.className = "";
    if (isSuccess) {
      snackbar.classList.add("show", "success");
    } else {
      snackbar.classList.add("show", "error");
    }

    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
        firstNameError.textContent = "";
        lastNameError.textContent = "";
        phoneError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
    }, 3000);
};

function saveData() {
    let formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
    };

    let storedDataArray = JSON.parse(localStorage.getItem("formDataList")) || [];
   
    storedDataArray.push(formData);
  
    localStorage.setItem("formDataList", JSON.stringify(storedDataArray));

    
    displayStoredData();
};
function displayStoredData() {
    let storedDataArray = JSON.parse(localStorage.getItem("formDataList")) || [];
    let tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = ""; 

    storedDataArray.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
        `;
        tableBody.appendChild(row);
    });
}

button.addEventListener("click", function(event) {
    event.preventDefault();

    if (formValidation()) {
        showSnackbar("Form Submitted Successfully!", true); 
        saveData(); 
        form.reset(); 
    } else {
        showSnackbar("Please fill out all fields!", false);
    }
});

window.onload = displayStoredData;
