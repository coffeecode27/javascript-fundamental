// operator logika adalah operator untuk dua buah data boolean
// hasil dari operator logika dalah boolean lagi

/**
 operator logika yang di support oleh javascript

 && AND (Dan)
 || OR (Atau)
 !  (kebalikan/tidak)
 */


 const nilaiAgus = 80;
 const nilaiAbsenAgus = 70;

 const nilaiLulus = nilaiAgus > 75;
 const lulusAbsen = nilaiAbsenAgus > 75;
 
 const lulus = nilaiLulus || lulusAbsen;
 document.writeln("<p>" + lulus + "</p>");
