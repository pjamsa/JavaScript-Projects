function Vote_Function() { // this function will help business determine if someone can drink
    var Age, Can_vote; //establishes variables 
    Age = document.getElementById("Age").value; //input id from HTML code
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote.";
}

function Bicycle(Make, Model, Year, Color) { //bicycle is the object constructor
    this.Bicycle_Make = Make;  
    this.Bicycle_Model = Model; 
    this.Bicycle_Year = Year;
    this.Bicycle_Color = Color;
}
var Paul = new Bicycle("Surly", "Karate Monkey", 2020, "Black"); //new keywords indicating properties of new bicycles
var Kaki = new Bicycle("Trek", 830, 1970, "Orange");
var John = new Bicycle("Santa Cruz", "Chameleon", 2019, "Blue");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "John rides a " + John.Bicycle_Color + "-colored " + John.Bicycle_Model + //this will be the sentenced returned in the browser
    " manufactured in " + John.Bicycle_Year;
}

function add_Function () { //Main function
    document.getElementById("Nested_Function").innerHTML = Add(); //returns to HTML
    function Add() {
        var Start = 100;
        function Plus_five() {Start += 5;} //Plus_five is the nested function
        Plus_five();
        return Start; 
    }
}



