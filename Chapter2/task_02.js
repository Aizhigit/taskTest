function findLeter( stroka, bukva ){
    var sumOfB = 0;
    for( var i = 0; i <= stroka.length-1; i++ ){
        if(stroka[i] == bukva){
            sumOfB++;
        }
    }
    console.log(sumOfB);
}
findLeter('Aizhigit', 'i');