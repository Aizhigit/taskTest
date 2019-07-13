var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];

if(array1.length < array2.length){
    array1.push(0);}
    else {
       array2.push(0);
    }
var sumOfArray = array1.map(function(element, index){
    return sumOfArray = element + array2[index]
});
console.log(sumOfArray);
