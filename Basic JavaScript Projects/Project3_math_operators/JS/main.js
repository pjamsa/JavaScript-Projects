function subtraction_Function() { //this function subtracts my two numbers
    var Subtraction = 98 - 29;
    document.getElementById("Math").innerHTML = "98 - 29 = " + Subtraction;
}

function addition_Function() { //this function adds my two numbers
    var Addition = 0 + 1;
    document.getElementById("add").innerHTML = Addition;
}

function multiplication() { //this function multiplies two numbers
    var simple_Math = 29 * 25;
    document.getElementById("multiply").innerHTML = "29 * 25 = " + simple_Math;
}

function division() { //this function divides two nubmers
    var simple_Math = 29 / 25;
    document.getElementById("divide").innerHTML = "29 / 25 = " + simple_Math;
}

function more_Math() { //this function allows me to do multiple equations at once
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("multiple").innerHTML = "1 plus 2, multipled by 10 divided in half and then subtracted by 5 equals " 
    + simple_Math;
}

function modulus_Operator() { //modulus opertor shows me the remainder after I divide two numbers
    var simple_Math = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {  // this function turns my variable into a negative number
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}


function increment() { //the increment ++ adds 1 to my variable
    var x = 5;
    x++;
    document.getElementById("inc").innerHTML = x;
}


function decrement() { // the decrement -- minuses 1 from my variable 5.25 - 1 = 4.25
    var x = 5.25
    x--;
    document.getElementById("dek").innerHTML = x;
}

function getRandom() {
    document.getElementById("rando").innerHTML = Math.random();
}



document.write(Math.ceil(8.2)); // this function will round my number up to the nearest whole number


