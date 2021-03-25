

function My_First_Function() { //this function is turning my font color red when I hit the above button
    var x =
    document.getElementById("Red_Text");//gets the element
    x.style.color = "red"; //change the color of the element
}


function myFunction() { //this function changes the sentence when I click the paragraph.
    var sentence = "Rage rage rage"; 
    sentence += " against the dying of the light."; 
    document.getElementById("Concatenate").innerHTML = sentence;
}

