// untuk menggunakan string template, caranya kita harus menggunakan backtick (``) 


// subtitusi di dalam backtick
const nama = "Teuku Imam Suranda";
const template = `Nama : ${nama}`;

console.info(template);

const nilai = 90;
const template2 = `Nama : ${nama}, Lulus : ${nilai > 80}`;
console.info(template2);


// Di dalam String Template, kita juga bisa membuat multiline string

const multiline = `Nama Saya imam, sekarang ini saya sedang coba coba multiline string
mau push rank, tapi sinyal indihomo lagi bapuk, yaudah lanjutin belajar aja wkwkwk ` ;

document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");