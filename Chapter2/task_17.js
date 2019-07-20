function Dog(name, color){
    this.name = name;
    this.color = color;
}

Dog.prototype.numLegs = 4;

var terrier = new Dog();
var hound = new Dog();


console.log(terrier.numLegs); 
console.log(hound.numLegs);






