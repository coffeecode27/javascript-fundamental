
/**
 * Do While loop adalah perulangan yang hampir sama dengan while loop  
 
* Perbedaannya hanya pada pengecekan kondisi
 
 * Pengecekan kondisi di while loop dilakukan di awal, sebelum perulangan
   Sedangkan di Do While loop dilakukan setelah perulangan

 * Oleh karena itu dalam Do while, minimal akan melakukan sekali perulangan,
   walaupun nilai tidak bernilai true
 */

   let counter = 1;

   // eksekusi minimal sekali
  do {
    document.writeln(`<P>ini perulangan ke ${counter}</p>`);
    counter++ // lakukan increment / decrement
} while(counter<=10); // cek kondisi