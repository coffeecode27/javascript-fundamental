/* 
- Saat kita menjalankan code javascript, secara default code program kita berjalan dalam mode tidak strict,
  atau istilahnya 'sloopy mode'

- Sejak ECMAScript 5, diperkenalkan yang namanya mode strict, yg mana ketika mode ini dijalankan maka akan
  merubah beberapa cara kerja di javascript, seperti :
    - Merubah pesan error yang tadinya silent error (tidak terlihat), menjadi throw error (terlihat)
    - Memperbaiki beberapa kesalahan engine javascript untuk optimasi
    - Menolak beberapa kode perintah yg kedepannya tidak akan digunakan lagi pada ECMAScript
*/

// Untuk menggunakan mode strict, kita cukup menuliskan sring 'use strict' pada awal kode javascript kita
function useStrictMode() {
    // 'use strict'
    const person = {
        firstName : "imam"
    }

    // misalnya kita akan menggunakan keyword 'with' yang sudah dilarang penggunaannya pada ECMAScript
    // maka akan error
    with(person){
        console.log(firstName);
    }
}

useStrictMode()