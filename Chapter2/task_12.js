var dog = {
    name: "Reks",
    legs: 4,
    sayLegs: function(){
    delete this.name;
    delete this.legs;
    }
}
dog.sayLegs();
