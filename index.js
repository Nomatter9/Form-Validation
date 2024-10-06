let form = document.getElementById("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("btn");
let firstNameError =document.getElementById("firstNameError");
let lastNameError =document.getElementById("lastNameError");
let phoneError =document.getElementById("phoneError");
let emailError =document.getElementById("emailError");
let passwordeError =document.getElementById("passwordError")

function formValidation(){
    let isValid  = true;
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

   if(firstName.value == ""){

    firstNameError.textContent = "FirstName required "
    isValid = false;
   } 
   if( lastName.value == ""){ 

    lastNameError.textContent = "LastName required "
    isValid = false;
   }
   if( phone.value == "" ){
    phoneError.textContent = "Phone required "
    isValid = false;

   }
   if( email.value == "" ){
    emailError.textContent = "Email required "
    isValid = false;

   }
   if( password.value == ""){
    passwordError.textContent = "Password required "
    isValid = false;

   }else{
   return isValid
   }
}
function showSnackbar(message) {
    let snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.className = "show"; 
  
    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
        firstNameError.textContent = "";
    lastNameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    
    }, 3000);
}
button.addEventListener("click", function(event){
    event.preventDefault();
   

    if (formValidation()) {
        showSnackbar("Form Submitted Successfully!"); 
       
    } else {
        showSnackbar("Please fill out all fields!"); 
       
    }
    
    form.reset(); 
});
 
