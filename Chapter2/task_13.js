function Dog(name, color, numLegs){
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
}
var hound = new Dog("Albert", "gray", 4 );
console.log(hound.name);//=> Albert
console.log(hound.color);// => gray
console.log(hound.numLegs); // => 4
