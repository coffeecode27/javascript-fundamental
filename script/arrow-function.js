
/* 
  - Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya

  - Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi

  - Dinamakan arrow function karena menggunakan tanda seperti panah(=>)

  - Berikut contoh beberapa kekurangan arrow function:
    
        * Tidak memiliki fitur arguments object
        * tidak bisa menggunakan function generator
        * tidak bisa mengakses "this"(yang akan dibahas di function di object)
        * tidak bisa mengakses super (yang akan dibahas di javascript OOP)

*/


// Arrow function
const nomerAngka = (angka) => {

    const nomer = (`Angka ${angka}`)

    console.info(nomer);

}

nomerAngka(3);


/* 
                        ****NOTE****

- Jika sebuah function isinya sederhana, misalnya hanya satu baris saja
- Kita bisa membuat membuat arrow function tanpa harus menggunakan block

*/

// Arrow function sebaris/tanpa block
const sayHello = (nama) => console.info(`Hello ${nama}`);
sayHello("Imam");



/* 

        ****NOTE****

- Arrow function bisa mengembalikan value, sama seperti function biasanya

- Jika function yang kita buat menggunakan block, maka kita perlu menambahkan kata kunci return
  untuk mengembalikan nilai

- Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return 

*/


// Arrow function sebaris/tanpa block, dan tanpa return untuk mengembalikan nilai
const sum = (first, second)=> first + second;
console.info(sum(30,50));


/* 
        ****NOTE****

- Jika parameter di arrow function hanya satu, kita bisa tidak menggunakan kurung pada parameter
*/

// contoh
const hello = nama => console.info(nama);
hello("Teuku");



/* 
        ****NOTE****

- Karena arrow function sama seperti anonymous function, kita bisa menggunakan arrow function
  sebagai parameter di function lain
*/

// contoh
function bikinNama(callbackName){

    callbackName("Suranda");
}

bikinNama(nama => console.info(`Hello ${nama}`));