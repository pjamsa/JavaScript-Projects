function run() { //local variable because variable is in function
    var x = 500;
    console.log(500 + x + "<br>");
}

function run2() {
    console.log(800 - x); // will not run because x is undefined; (local variable)
}
run();
run2();



var Z = 800;  //global variable because var. is outside of function
function add3() {
    document.write(Z + 5 + "<br>");
}

function sub4() {
    document.write(Z - 200);
}
add3();
sub4();

function Hours() { 
    if (new Date().getHours() < 23) {
    document.getElementById("date").innerHTML = "There's still time in the day to accomplish something!";
    }
}
function sat() {
    if (new Date().getDay() < 5) { //get day determines the day of the week
    document.getElementById("day_off").innerHTML = "It's not saturday yet.  Keep working."; //requests id from HTML sends info to browser
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Vote = "You are old enough to purchase alcohol"; //if age is 21 or older
    }
    else {
        Vote = "You are not old enough to purchase alcohol!"; //if age is less than 21 
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //gets html id and pushes info to browser
}

function Time_function() {
    var Time = new Date().getHours();  //function to determine time of day based on computers internal clock
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply= "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;// diplays correct sentence depending on the time.
}


