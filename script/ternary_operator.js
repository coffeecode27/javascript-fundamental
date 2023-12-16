
/**
  
-Ternary operator => operator sederhana dari if statement

-Ternary operator terdiri dari kondisi yang dieveluasi, jika nilainya true
  maka nilai pertama yang akan diambil, jika false maka nilai kedua yang akan diambil

 */

//Contoh kondisi mengunakan If statement
const nilai = 10;
let ucapan;

if(nilai >= 75){

    ucapan = "Selamat Anda Lulus";

}else{
    ucapan = "Maaf, anda tidak lulus";

}

document.writeln(`<p>${ucapan}</p>`);


// Contoh Mengunakan Ternary operator
//akan mengeksekusi bagian kiri jika true, dan yang kanan jika false
ucapan = nilai >=80 ? "Selamat Anda Lulus" : "Maaf, anda tidak lulus";
document.writeln(`<p>${ucapan}</p>`);