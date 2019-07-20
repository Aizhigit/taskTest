function Dog(name) {
    this.name = name; 
    }
    Dog.prototype = {
        NumLegs: 4,
        eat: function(){
        },
        describe: function(){
        }
    };
    var newObj = new Dog();

    console.log(newObj);
