
/*
  - function tidak hanya digunakan sebagai kode program yang di eksekusi, tapi juga sebagai value

  - Artinya, function bisa disimpan di variable, bisa juga di kirim melalui parameter ke function lainnya

*/

function sayHello(nama){

    document.writeln(`<p> Hello ${nama} </p>`);

}

sayHello("Imam");

// Menyimpan function ke dalam variable
const value = sayHello;

value("Suranda");



//Memanggil function di dalam function
function giveMefunction(callback){

    //function disini akan di gantikan dengan function yang di panggil sebagai parameter
    callback("Imam Suranda");

}

giveMefunction(sayHello);