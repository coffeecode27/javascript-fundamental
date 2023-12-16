/** Mengkonversi tipedata sting to number, dan sebaliknya
 
    Function untuk konversi

    parseInt(string) => konversi string ke number (dalam bentuk bilangan bulat)
    parseFloat(string) => konversi string ke number (dalam bentuk pecahan)
    Number => konversi string ke number (dalam bentuk bilangan bulat atau pecahan)
    number.toString => konversi dari number ke string 


*/ 

const nilai1 = parseInt("1");
const nilai2 = 1;
const jumlah = nilai1 + nilai2;

document.writeln(`<p> ${jumlah} </p>`);

document.writeln(`<p> ${parseInt("1.1")}</p>`);
document.writeln(`<p> ${parseFloat("1.1")}</p>`);
document.writeln(`<p> ${Number("1.1")}</p>`);


const a = 1;
const b = 1;

const total = a.toString() + b; //menghasilkan string + Int

document.writeln(`<p>${total}</P>`);

// NaN (Not a Number)
// akan menjadi NaN jika input yang dimasukkan berupa huruf semua, atau di awali dengan huruf
// namun parseInt dan parseFloat akan tetap mentolerir jika kesalahan (NaN) yg di input berada setelah angka
document.writeln(`<p> ${parseInt("salah")}</p>`);
document.writeln(`<p> ${parseFloat("1.1imam")}</p>`);

/** 
Number() tidak akan mentolerir segala kesalahan, jika ada satu inputan huruf, 
tidak peduli itu didepan atau belakang, maka akan menghasilkan Nan
*/ 
document.writeln(`<p> ${Number("1imam")}</p>`);
document.writeln(`<p> ${Number("1.1popo")}</p>`);


/**
 jika sebuah data/inputan adalah NaN, maka ketika kita melakukan
 segala bentuk operasi pada data tersebut, hasilnya akan tetap NaN
 */
 const value1 = Number("NaN"); //Nan
 const value2 = 100; //angka
 const sum = value1 + value2;

 document.writeln(`<p>${sum}</p>`);



// isNan(number) => function untuk mengecek apakah sebuah data NaN atau bukan
document.writeln(`<p>${isNaN(value1)}</p>`);
document.writeln(`${isNaN(value2)}`);