//Lab 5

//Function that creates prompt and captures the text entered then displays it in the HTML file
function myFunction(){
    //Creates the prompt and saves the content as "person"
    let person = prompt("Enter your name:");
    //Links the phrase to a variable to be used in the HTML
    document.getElementById("PerName").innerHTML = 
    //What is displayed to the user. Person is sued to diplay the prompts content
    "Hello " + person + ", welcome to my website!"
}

//Function that links to my image and creates a onclick funtion
function large(element){
    //this calls for the css attribute "large" to be used
    //the class then scales the image 2x and uses the cursor as a zoom out point
    element.classList.toggle("large");
}
//Function for my dropdown menu
function myMenu(){
    //When the button is clicked the menu is displayed
    document.getElementById("myDropdown").classList.toggle("show");
}

//The menu is closes when the display is clicked off
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
    }
    }
    }

//Function for mouseover
function mOver(obj){
obj.innerHTML = "Suprise!"
}
//Function for mouseout
function mOut(obj){
    obj.innerHTML = "Home to reset!";
}