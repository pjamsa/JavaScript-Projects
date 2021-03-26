document.write(typeof "Gone Fishing"); // type of operator

document.write("10" + 5); //coercion will result in 105

function my_Function() { // will result in NaN BECAUSE 0/0 = IS NOT A NUMBER
    document.getElementById("Test").innerHTML = 0/0;
}

function my2() { // Will result in true because a string = isNAN / IS NOT A NUMBER
    document.getElementById("true").innerHTML = isNaN('I am a hippo!');
}

function my3() { // false because 005 is a number
    document.getElementById("false").innerHTML = isNaN('005');
}

document.write(2E310); // writing infinit

document.write(-3E310); //-infinty

document.write(100 > 2); //boolean logic, true

document.write(100 > 200);// boolean logic, false

function my4() { //
    document.getElementById("no").innerHTML = (10 < 2);
}

function my5() {
    document.getElementById("yes").innerHTML = (10 > 2);
}

console.log(2 * 80); // displays in dev tools in the browser

console.log(10 < 2); 

document.write(2 == 2); //double equals == compares both times being analyzed

document.write(3 == 6);

x = 3;
y = 3;
document.write(x === y); //=== checks data is equal on left side and right side and that it's the same type of data on the right side

x = 3;
y = 2;
document.write(x == y);

x = 10;
y = "ten";
document.write(x === y);

x = "yes";
y = "no";
document.write(x === y);

document.write(5 > 2 && 10 > 4); //and

document.write(5 < 2 && 10 < 4);

document.write(5 > 2 || 10 < 4); // or

document.write(10 < 4 || 5 < 3);

function not_Function() { //not 
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_function() {
    document.getElementById("si").innerHTML = !(5 < 2);
}

