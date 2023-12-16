/* 
 - Debugger digunakan untuk melakukan proses dubugging
 - Debugging adalah proses mencari bug(masalah) yang biasa terjadi pada kode program kita
 - Dengan debugger, kita bisa menghentikan kode program diposisi yg kita inginkan (breakpoint),
   lalu melihat semua isi variable yg ada pada saat kode program sedang berhenti.
*/

// contoh penggunaan debugger, lets code!!
const createFullName = (firstName, midName, lastName) => {
    debugger;
    const fullName = `${firstName} ${midName} ${lastName}`
    return fullName
}
console.log(createFullName("Teuku", "imam", "suranda"));