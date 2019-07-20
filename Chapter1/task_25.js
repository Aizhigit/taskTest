function reverse (data) {
     var letters = [],
        l = data.length;
     while (l--) {
         letters.push(data[l]);
      }
        return letters.join('');
    }
    console.log(reverse('23453'));
    
   