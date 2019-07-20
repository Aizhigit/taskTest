function palindrom( element ){
        var norm = [];
        var obr = [];
          norm = element.toString().split('');
          var norm1 = norm.join();
          obr = norm.slice(0).reverse();
          var obr1 = obr.join();
          {
        if( norm1 === obr1 ){
          return console.log('True');
        }else {
          return console.log('False');
        }
    }
  }
  palindrom("madam");