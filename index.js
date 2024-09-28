let form = document.getElementById("form");
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
    return "validation successful";
   }
}
button.addEventListener("click", function(event){
    event.preventDefault();
    let validationMessage = formValidation();
    alert(validationMessage);

   if (validationMessage === "validation successful"){
    form.reset();
}
});
 
