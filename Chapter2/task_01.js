function films(element){
    var max = [];
    var long;
    for(var i = 0; i <= element.length-1; i++ ){
        if( element[i].length > max ){
            max = element[i].length;
            long = element[i];
        }
    }
    console.log(long);
}
films(["Brazil","Kyrgyzstan","Germany","Spain","Russia"]);

       
