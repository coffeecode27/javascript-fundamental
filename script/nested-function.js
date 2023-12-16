

/* 
  - Tidak ada batasan saat kita ingin membuat function itu harus ada dimana

  - Termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya

  - Untuk function yang berada didalam (function), di sebut inner function

  - Inner function hanya bisa diakses di tempat kita membuat functionnya (outer function), 
    dan tidak bisa diakses dari luar outer function itu berada.
*/

// outer function
function outer(){

    // inner function
    function inner(nama){

       document.writeln(nama); 
    }

    inner("T.imam Suranda");//noted; inner hanya bisa di panggil di dalam outer

}


outer();

inner(); //Hasilnya pasti error.