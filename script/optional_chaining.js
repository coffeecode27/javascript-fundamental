

/**
 
- optional chaining operator (?) => merupakan operator yang digunakan untuk mengamankan 
  ketika kita ingin mengakses property sebuah object dari data yang Nullish (Undefined/Null)

- jika kita mencoba mengakses property dari sebuah object dari data Nullish tanpa menggunakan
  optional chaining operator, maka akn terjadi error

 */

  
  const person = {

    address:{
        
        country : "indonesia",
        // home : "Banda Aceh"
    },

  };

//Pengecekan Optional Chaining
// tanda tanya (?) => yang dibaca "jika tidak nullish, maka akses property berikutnya"
 let country = person?.address?.country;
 let home = person?.address?.home;


  //pengecekan menggunakan IF

// if(person.address != undefined && person.address != null){

//     country = person.address.country;
// }

document.writeln(`SUKSES`);
document.writeln(`<p> ${country}</p>`);
document.writeln(`<p> ${home}</p>`);
document.writeln(`SUKSES`);