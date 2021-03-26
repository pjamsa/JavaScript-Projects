function my_Dictionary() {  //This is my KVP dictionary.  I'm using it to keep define what kind of bicycle I have
    var Bicycle = {
        Terrain:"Trail",
        Color:"Black",
        Brand:"Surly",
        Size: 56,
        Material:"Steel",
    };
    delete Bicycle.Color;  // deletes bicycle color from dictionary 
    document.getElementById("Dictionary").innerHTML = Bicycle.Color; //result = undefined.
}