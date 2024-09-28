let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("btn");

function formValidation(){
   if(firstName.value == "" || lastName.value == "" || phone.value == "" || email.value == "" || password.value == ""){
    return "validation failed:  all fields are required";
   } else {
    return "validation successfull";
   }
}
button.addEventListener("click", function(event){
    event.preventDefault();
    alert(formValidation());
});