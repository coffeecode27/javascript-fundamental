/**
 
- Tipedata object mirip dengan tipedata array
- Yang membedakan adalah index pada tipedata object bisa menggunakan string
- index di tipedata object biasanya disebut attributes atau properties, bukan index

 */

// cara membuat object kosong
const objectkosong = {};

// cara menambah atau mengubah attribute/properti dalam object
const orang = {};

orang ["Nama"] = "Teuku Imam Suranda";
orang ["Alamat"] = "Alue - bilie";
orang ["Umur"] = 23;

console.table(orang);

// menghapus data/attribute object
delete orang["Umur"];
console.table(orang);

// membuat object dengan properties secara langsung
const orang1 = {
    "nama panjang" : "Agus Grab",
    alamat : "lampaseh",
    umur : 24

};

console.table(orang1);

orang1 ["universitas"] = "Serambi Mekkah";
console.table(orang1);

// untuk mengakses property didalam object, langsung saja $namavariable.namaattribute
console.info(`Nama : ${orang1["nama panjang"]}`);
console.info(`Alamat : ${orang1.alamat}`);
console.info(`Umur : ${orang1.umur}`);