function Dog(name, color){
    this.name = name;
    this.color = color;
}

Dog.prototype.numLegs = 4;

var terrier = new Dog("Reks", "black");
var ownProps = [terrier];
var prototypeProps = [Dog.prototype];

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]