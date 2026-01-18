function My_First_Function() {
    var str = "This is the button text!";

    document.getElementById("Button_Text").innerHTML = str
}

const myBox = document.getElementById('myBox');

            myBox.onmouseover = function() {
                myBox.innerHTML = "I AM WARNING YOU"
            };

            myBox.onmouseout = function() {
                myBox.innerHTML = "DO NOT TOUCH"
            };

            myBox.click = function() {
                myBox.innerHTML = "RUDE!"
            };

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}