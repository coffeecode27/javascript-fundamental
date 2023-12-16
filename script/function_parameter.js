
/*
 * Kita bisa mengirim informasi ke function yang ingin kita panggil

 * Untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument
   di function yang talah kita buat.
 
 * Parameter ditempatkan didalam kurung(), di deklarasi method.

 * Parameter bisa lebih dari satu, dan jika lebih dari satu, harus dipisah menggunakan tanda koma

 */

    // membuat function dengan parameter
   function sayHello(firstName, lastName){

        document.writeln(`<p> Hello, ${firstName} ${lastName}`);

   }


//Memanggil function dengan parameter
   sayHello("T.Imam", "Suranda")