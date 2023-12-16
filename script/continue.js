
/**
 * Namun berbeda dengan break, continue digunakan untuk menghentikan perulangan saat ini. 
   Lalu melanjutkan ke perulangan selanjutnya. 
 */


   for(let i=1; i<=100; i++){

    if(i%2==0){

        continue;
    }

    document.writeln(`<p> Bilangan ganjil ke- ${i}`);

   }