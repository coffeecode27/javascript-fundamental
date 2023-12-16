
/* 
 - Kita sudah terbiasa membuat sebuah function dengan nama, akan tetapi,
   kita juga bisa membuat sebuah function tanpa menggunakan nama, atau istilahnya
   disebut 'Anonymous function'.

 - kita bisa membuat anonymous function ini dalam sebuah variable, atau kita juga bisa membuat
   ketika mengisi parameter

*/

//Anonymous function di dalam variable
const say = function(nama){

    document.writeln(`<p> Hello ${nama} </p>`);
}

say("Imam");


//Anonymous function di dalam function
function givemeName(callback){

//callback akan berubah menjadi function yang kita panggil, lalu mengirimkan nilai parameter yang telah di set
callback("Imam", "alue-bilie");

}

// Memanggil anonymous function sebagai nilai parameter
givemeName(function(nama, alamat){
   document.writeln(`<p> Nama : ${nama} </p>`); 
   document.writeln(`<p> Alamat : ${alamat} </p>`); 
})
