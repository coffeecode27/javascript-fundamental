
/**
 setiap menambah data ke array, otomastis disimpan pada urutan terakhir

    Operasi pada Array

array.push(value) => Menambah data ke array
array.length => untuk mendapatkan panjang array
array[index] => mengakses data dengan index spesifik
array[index] = value //mengubah data pada index yang spesifik
delete array[index] => mengahpus data dengan nomor index spesifik, namun index tidak bergeser
array.pop(); => akan menghapus data array pada urutan terakhir
 */


let arraykosong = [];

let arraynama = ["Teuku", "Imam", "Suranda"];

const names = [];
names.push("Teuku");
names.push("Imam");
names.push("Suranda");

console.table(names);

console.info(names[0]);
console.info(names[1]);
console.info(names[2]);

names[1] = "muflihun";
console.table(names);

delete names[1];
console.table(names);

names[1] = "Angga";
console.table(names);

console.info(names.length);

// array multidimensi pada javascript

const anggota = [

["imam suranda", "jiden bangsat"],

["agus buldad", "deni"],

["alpin", "pikimak", "sepol"]
];

console.table(anggota);
console.info(anggota[0][0])
