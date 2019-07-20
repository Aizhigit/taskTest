function sayLegs(line){
console.log("This" + " " + this.name + " " + "has" + " " + line + " " + "legs.");
}
say
var dog = { name: "Reks", legs: sayLegs};
dog.legs(4);





