/**
 
 - Operasi perbandingan adalah operasi yang membandingkan dua nilai
 - Operasi perbandingan adalah operasai yang menghasilkan nilai boolean (benar atau salah)
 
 --- Operator Perbandingan ---

 > (lebih dari)
 < (kurang dari)
 >= (lebih dari atau sama dengan)
 <= (kurang dari atau sama dengan)
 == (sama dengan)
 === (sama dengan dan sama tipe)
 != (tidak sama dengan)
 !== (tidak sama dengan dan tidak sama tipe)
 
 
 */ 


 let hasil = 5 == "5"; //true
 document.writeln("<p>" + hasil + "</P>");

 hasil = 5 === "5"; //false
 document.writeln("<p>" + hasil + "</P>");
 
 hasil = 5 > 2; //true
 document.writeln("<p>" + hasil + "</P>");
 
 hasil = 5 < 2; //false
 document.writeln("<p>" + hasil + "</P>");

 hasil = 5 >= 2; //true
 document.writeln("<p>" + hasil + "</P>");

 hasil = 5 <= 2; //false
 document.writeln("<p>" + hasil + "</P>");

 hasil = 5 !== "5"; //true
 document.writeln("<p>" + hasil + "</P>");