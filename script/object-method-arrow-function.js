
/*
 - Sebelumnya kita sudah bahas tentang Arrow function
 
 - Arrow function juga bisa kita gunakan sebagai object method

 - Namun perlu diketahui, Arrow function tidak bisa digunakan untuk mengakses 'arguments' object,
   function generator, kata kunci this,dan kata kunci super (di bahas di OOP)

- Jadi pastikan kita menggunakannya ketika kita tidak butuh fitur fitur diatas.

*/

const person = {

  nama : "Imam",
  sayHello : (nama) =>{

      console.info(this);//ketika menggunakan arrow function, hasilnya akan mengacu pada window
      console.info(`Hello ${nama}, my name is ${this.nama}`);//hasil property nama = undefined

  }

}

person.sayHello("Suranda");