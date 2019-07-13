function palindrom(element){
   var norm = '';
   norm = element.toString().split('');
  
   var obr = norm.slice(0);
   obr.reverse();
     if ( norm == obr){
       console.log(true);
   } else {
    console.log(false);
   }

palindrom('madak');


    