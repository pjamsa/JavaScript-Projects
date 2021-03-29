function sentence() {
    var part_1 = "I think, ";
    var part_2 = "Therefore I am.";
    var whole_sentence = part_1.concat(part_2); // adding part 1 and part 2 together
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Mark my words, Billy!"; // sentence we want to splice
    var Section = Sentence.slice(8,13);  // selects only the word, "words"
    document.getElementById("Slice").innerHTML = Section;
}

function search_Method() {
    var str = "Taco Salad!"; 
    var search = str.search("Salad"); // tells us how many characters is in a string = 5
    document.getElementById("demo").innerHTML = search;
}

function upper_Method() {
    var str = "i'm tired of sports on tv!";
    var up = str.toUpperCase();// returns all letters to uppercase
    document.getElementById("upper").innerHTML = up;
}

function string_Method() { //turns number into a string
    var x = 354;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {//will only pull up the first five numbers
    var x = 47893.1948023948
    document.getElementById("Precision").innerHTML = x.toPrecision(5);
}

function my_Function() { 
    var num = 5.239348;
    var n = num.toFixed(2); // brings up the first two numbers after the decimal
    document.getElementById("fixed").innerHTML = n;
}

function my2() {
    var str = "Don't be stupid";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res; //returns primitive value
}