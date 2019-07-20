function Dog(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
var terier = new Dog("Albert", "gray");

    console.log(Dog.prototype.isPrototypeOf(terier));