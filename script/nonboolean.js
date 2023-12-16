

/**
 Sebelumnya kita sudah tau bahwa operator logika AND (&&) dan OR (||) digunakan untuk
 dua data boolean.
 Namun berbeda di javascript, kita bisa menggunakan logika Anda dan OR untuk tipedata nonboolean
 
 Operator OR (||) di non-boolean
 
 - Logika OR(||), membaca dari kiri ke kanan
 - Operator ini akan mencari nilai pertama yang truthy
 - ketika nilai truthy pertama didapatkan, maka nilai tersebut akan diambil dan operator OR berhenti
 - Jika tidak ada nilai yang truthy, maka nilai yang terakhir yang akan diambil (artinya nilai false)



Operator AND (&&) di non-boolean
 
 - Logika AND(&&), membaca dari kiri ke kanan
 - Operator ini akan mengecek nilai pertama yang falsy 
 - ketika nilai falsy pertama didapatkan, maka nilai tersebut akan diambil dan operator AND berhenti
 - Jika tidak ada nilai yang falsy, maka nilai yang terakhir yang akan diambil (artinya nilai true)


 */

//OR(||)
 console.info("hello" ||"" );
 console.info("" ||[] );
 console.info("0" ||"Nol" );
 console.info("" || -0 );

// contoh penggunaan non-boolean OR (||)
const orang = {
            firstname:"",
            lastname:"Suranda"
};

const nama = orang.firstname || orang.lastname;
console.info(nama);




//AND(&&)
console.info("hello" && "" ); 
 console.info("" && [] );
 console.info("0" && "Nol" );
 console.info("min satu" && -0 );
