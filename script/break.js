
/**
 * Pada Switch statement, kata kunci break digunakan untuk menghentikan case dalam switch

* Break juga digunakan untuk menghentikan seluruh perulangan
 
 */


  let counter = 1;

  while(true){

    document.writeln(`<p>Ini perulangan ke ${counter}</p>`);
    counter++;


    if(counter>10){
      break;
    }
  
  }