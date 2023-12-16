

/**
 * With Statement merupakan fitur yang digunakan untuk menurunkan scope data.
 
 * Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data(object)
   tanpa harus menyebut datanya.
 */


   //Contoh mengakses property object tanpa with statement
    const person = {

        FirstName : "Teuku",
        MidName : "Imam",
        LastName : "Suranda"
    }

    console.info(person.FirstName);
    console.info(person.MidName);
    console.info(person.LastName);


     //Contoh mengakses property dengan menggunakan with statement
     with(person){

        console.info(FirstName);
        console.info(MidName);
        console.info(LastName);
     }