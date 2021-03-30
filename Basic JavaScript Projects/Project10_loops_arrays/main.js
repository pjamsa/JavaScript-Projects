function Call_Loop() {
    var Digit = "";
    var Y = 1;
    while (Y < 31) { //counts until it reaches 30
        Digit += "<br>" + Y;
        Y++ //++ = 1;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction() {
    var str = "I'm going to lose my mind!";
    var result = str.length; //determines how many characters are in a string
    document.getElementById("long").innerHTML = result;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute",];
var Content = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++) { //instrument length is 7.  Our loop goes through all instruments until it has counted all 7
    Content += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { // name of function
    var Sun_Position = [];
    Sun_Position[0] = "rising"; // arrays always starts with 0 not 1 
    Sun_Position[1]= "overhead"; //
    Sun_Position[2]= "setting";
    document.getElementById("Array").innerHTML = "At this time of day the sun is " + Sun_Position[2] + 
    ".";
}

function constant_Function() {
    const Bicycle = {terrain:"mountain bike", brand:"Surly", color:"purple"}; // const variable stays the same
    Bicycle.color = "pink";//changed the color to pink
    Bicycle.price = "$1600";// added a new property and value

    document.getElementById("Constant").innerHTML = "Johnny took his " + Bicycle.price + " " + Bicycle.terrain +
     " to Los Angeles and hoped his friends wouldn't make fun of it's " + Bicycle.color + " color." // combines strings
}

function this_Function() {
    return Math.PI;
}
document.getElementById("demo").innerHTML = this_Function();

var X = 99;
document.write(X);
{
    let X = 100;
    document.write("<br>" + X);
}
document.write("<br>" + X);




