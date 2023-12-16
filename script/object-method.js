

/* 
 - Pada tipedata object, kita sudah membahas tentang property di object

 - Karena sebenarnya function juga merupakan tipedata, jadi function pun juga bisa
   ditambahkan sebagai properti di dalam object

 - Cara pembuatannya pun sama seperti "function sebagai value".

 - Function didalam object juga biasa disebut dengan object method.

*/


// contoh
const person = {

    nama : "Imam",
    alamat : function(alamat){

        document.writeln(`${alamat}`);
    }

};

person.alamat("Aluebilie");


// kita juga dapat menambah function yang sudah didefinisikan di awal
function alamat(alamat){

    document.writeln(`${alamat}`)

}

const person = {

    nama : "Imam",
    alamat : alamat,
}

person.alamat("aluebilie");


// Atau kita ingin menambahkan property function kedalam object yg telah dibuat di awal
const person = {

nama : "Imam",

}

person.alamat=function(alamat){

    document.writeln(`${alamat}`)

};


person.alamat("Darul makmur");