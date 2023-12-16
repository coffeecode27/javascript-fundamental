

/**
 * Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin
   kita bisa membuat sebuah function mengembalikan value
 
 * Agar function bisa mengembalikan value, kita bisa menggunakan kata kunci return
   di dalam functionnya, lalu diikuti dengan data yang ingin kita hasilkan

 * Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus,
   kita bisa menggunakan array sebagai return value-nya.
    
 * Saat kita menggunakan kata kunci return, maka kode setelah return tidak akan dieksekusi lagi 

 * kita bisa menggunakan return untuk menghentikan eksekusi sebuah function

*/


// Membuat function dengan parameter dan return value
   function sayHello(firstName, lastName){

    const hello =`<p>Hello ${firstName} ${lastName}`;
       
    return hello;
   }


// Memanggil function dan menangkap return value-nya
   const hasil = sayHello("Imam", "Suranda");
   document.writeln(`<p> ${hasil} </p>`);


//Membuat function dengan return value lebih dari satu
   function nilaiFinal(nilai){

        if(nilai >= 90){

            return "Nilai A";
        
        }else if(nilai >=85 ){

            return "Nilai B";
        
        }else if(nilai >=70){

            return "Nilai C";
        
        }else if(nilai >= 50){
            
            return "Nilai D";
        
        }else{

            return "Nilai E";
        }


   }


   const hasilUjian = nilaiFinal(80);
   document.writeln(`<p> ${hasilUjian} </p>`);




   //Function mencari angka dalam array
    function isContains(array, searcValue){

        for(const element of array){

            console.info(`Iterasi element ${element}`);

            if(element===searcValue){

               return `<p> Yap, element dangan angka ${element} ditemukan </p>`;

            }

        }

        return `<p> Tidak ada element yang cocok! </p>`;
    }



    const arr=[1, 12, 23, 45, 45 ,78, 356, 0, 74, 10];
    const search = 356;
    const found = isContains(arr, search);
    document.writeln(`<p> ${found} </p>`);