
/*
  - Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada
    satu parameter, dan secara otomatis akan di konversi menjadi array.

  - Untuk membuat rest parameter ada ketentuannya, dimana rest parameter hanya boleh ada satu function
    (tidak boleh lebih)

  - Rest Parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah,
    kecuali memang cuma ada 1 parameter

  - Di bahasa pemrogramman lain, ada yang menyebut (rest parameter) sebagai variable argument. 


*/

function sum(buah, ...jumlah){

    let total = 0;
    
    for(const item of jumlah){

        total+=item;
    }

    document.writeln(`<p> Total ${buah} = ${total}`);


}

sum("Jeruk", 20, 20, 40, 40, 50);


/*

 ===== SPREAD SYNTAX =====

 - Kadang kita terlanjur memiliki data berupa Array, yang tidak bisa kita kirimkan begitu saja pada
   rest parameter 

 - Tapi untungnya di dalam javascript ada yang namanya spread syntax, yang di tandai dengan ...(titik tiga kali)
   dan diikuti dengan data array yang ingin kita kirimkan ketika memanggil function.

*/

const spread_syntax = [10, 20, 30, 10, 50];

sum("Spread syntax", ...spread_syntax);


/*
  - Sebelum ada fitur rest parameter, di Javascript sudah ada fitur yang bernama arguments object

  - ini adalah fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan
    object bernama 'arguments'.

  - Arguments secara otomatis bisa digunakan di dalam function (tanpa bisa menentukan parameter yang dinginkan)

  - Namun untuk javascript sekarang ini lebih disarankan menggunakan rest parameter

*/


function oldSum(){

    let total = 0;
    
    for(const argumen of arguments ){ //otomatis sudah dalam bentuk array

        total+=argumen;
    }

    document.writeln(`<p> Total = ${total}`);

}

oldSum(1,2,3,4,5)

