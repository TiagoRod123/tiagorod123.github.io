

window.onload=function(){
    var user = document.getElementById("Firstname");
    console.log(user.value); // the user input value. 
}

// this captures the values of the form after the submit buton is clicked
//it stores it into local storage
function myfunction()
{
    //sets a variable for one of the form questions {in this case FirstName} It is all the same going down
    //The variable names  and ID names are changed in regard to the variable being captured
var Firstname = document.getElementById("Firstname").value;
localStorage.setItem("Firstname", Firstname);
var Lastname = document.getElementById("Lastname").value;
localStorage.setItem("Lastname", Lastname);
var Email = document.getElementById("Email").value;
localStorage.setItem("Email", Email);
var Radio = document.getElementById("Radio").value;
localStorage.setItem("Radio", Radio);
var Other = document.getElementById("other").value;
localStorage.setItem("other", Other);
var Experience = document.getElementById("experience").value;
localStorage.setItem("experience", Experience);
var Checkbox = document.getElementById("checkbox").value;
localStorage.setItem("checkbox", Checkbox);
var Range = document.getElementById("range").value;
localStorage.setItem("range", Range);
var Message = document.getElementById("message").value;
localStorage.setItem("message", Message);
}

//removes the input buttons 
//this is activated by the reset button
function remove()
{
    document.getElementById("form").reset();
}
