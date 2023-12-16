
// if => salah satu kata kunci yang digunakan untuk percabangan
// else => kata kunci ketika kita ingin mengeksekusi program tertentu jika kondisi if bernilai false
// else if => dibutuhkan untuk membuat/menambah beberapa kondisi


const nilai = 59;

if(nilai > 80){

    document.writeln("<p>Lulus : Nilai A</p>");

}else if(nilai > 70){

    document.writeln("<p>Lulus : Nilai B</p>");

}else if(nilai > 60){

    document.writeln("<p>Lulus : Nilai C</p>");

}else{
    document.writeln("<p>Kamu Tidak Lulus !</P>");
}


