
/**
 * Secara default, parameter di function itu optional. 
 
 * Kita tidak wajib mengisi valuenya ketika memanggil function.

 * Jika tidak ada value yang kita kirim ke parameter ketika memanggil function,
   maka secara otomatis parameter tersebut bernilai undefined.
 */

   function sayHello(firstName, middleName, lastName){

        console.info(firstName);
        console.info(middleName);
        console.info(lastName);

   }

   sayHello();//tidak akan terjadi error, karna dalam javascript parameter bersifat optional
   sayHello("Teuku");
   sayHello("Teuku","imam");
   sayHello("Teuku","imam","Suranda");