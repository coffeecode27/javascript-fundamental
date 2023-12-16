
/**
 *  Jika for digunakan untuk melakukan iterasi property atau index, berbeda dengan For Of
    yang digunakan untuk melakukan iterasi terhadap isi value dari objek iterable, seperti array
    string dan lain-lain.

 *   For Of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.
 */


    // Contoh for of di array
    const names = ["Teuku", "Imam", "Suranda"];

        for(const nama of names){

            document.writeln(`<p> ${nama} </p>`);
        }


    // Contoh for of di string
    const string = "Teuku Imam Suranda";

        for(const char of string){

            document.writeln(`<p> ${char} </p>`);
        }