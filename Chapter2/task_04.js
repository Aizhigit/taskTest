var myR = [];
 function myRange(item1,item2){
    for( var i = item1+1; i < item2; i++ ){
      myR.push(i);
    }
    console.log(myR);
}
myRange(2,9);// print [3, 4, 5, 6, 7, 8]