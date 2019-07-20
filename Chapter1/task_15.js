var dog = ("dog");
var a = [];
var b = [];
var dogs=[];
for(var i = 0; i < dog.length; i++ ){
   a[i] = dog.substring(0, 1 + i)
}
for(i = 0; i < dog.length; i++){
    b[i] = dog.substring(1, i + 1)
}

dogs = a.concat(b);
console.log(dogs);