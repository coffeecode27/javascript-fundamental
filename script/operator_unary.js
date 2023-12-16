/**
 operator unary 

 + (menandakan nilai positif)
 - (menandakan nilai negatif)
 ++ (increment, menaikkan 1 angka)
 -- (decrement, menurunkan 1 angka)

 */


 let hasil = +1; //sama saja dengan menuliskan angka 1 saja, karna angka/number itu bernilai positif secara default 
document.writeln("<p>" + hasil + "</p>");

hasil --; //hasil = hasil -1; hasil-=1; 0
document.writeln("<p>" + hasil + "</p>");

hasil ++; //hasil = hasil + 1; hasil+=1; 1
document.writeln("<p>" + hasil + "</p>");


hasil = - hasil; // -1
document.writeln("<p>" + hasil + "</p>");

