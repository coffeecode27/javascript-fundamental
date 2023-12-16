
/**
 
Switch => adalah statement percabangan yang sama dengan if, namun lebih sederhana pembuatannya,
          dan kondisi di switch statement hanya untuk perbandingan (==)

 */

const nilai = '';

switch (nilai){

    case "A":
        document.writeln("<p> Anda Lulus dengan Nilai 100 </p>");
        break;

   
        case "B":
        document.writeln("<p> Anda Lulus dengan Nilai 85 </p>");
        break;


    case "C":
        document.writeln("<p> Anda Lulus dengan Nilai 60 </p>");
        break;


    case "D":
        document.writeln("<p> Anda Tidak Lulus </p>");
        break;

    default:
        document.writeln("<p> Anda bukan dari jurusan ini ! </p>");
        break;
}