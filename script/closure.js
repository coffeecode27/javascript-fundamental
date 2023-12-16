
/* 
  - closures adalah inner function yang punya hak akses ke scope di dalam function di mana dia bernaung,
    dan scope-scope di function luar lain nya.

  - Kita tahu bahwa local scope tidak bisa diakses diluar scope-nya

  - Dengan kemampuan closure kita bisa membuat sebuah function di local scope
    dan referensi ke data di sekitar local scope tersebut, keluar dari scope-nya 

*/


// contoh
function createAdder(value){

    const owner = "Imam";

    return function (param){

        console.info(owner);

        return value + param;
    }

   

}

const tmbh=createAdder(2); //function createadder baru dijalankan setengahnya 

console.info(tmbh(4)); //lalu kita panggil sisanya disini 
console.info(tmbh(7)); //lalu kita panggil sisanya disini 