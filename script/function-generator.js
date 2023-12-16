
/* 
  - Function generator => function yang digunakan untuk membuat data generator
  
  - Generator => adalah Data yang bisa di iterasi seperti array

  - Untuk membuat function generator, kita perlu menggunakan tanda bintang(*) setelah kata function

  - Dan untuk mengembalikan data di tiap iterasi, kita bisa menggunakan kata kunci "yield" diikuti datanya 
  
  NOTED : Walaupun "seperti" array, bukan berarti kita bisa mengakses indexnya. 
          data di dalamnya hanya bersifat iterable saja, bukan seutuhnya array.

*/

// Membuat function generator(gunakan tanda bintang(*))
function* createName(){
// untuk mengembalikan nilai didalamnya, gunakan kata kunci "yield"
yield "Teuku";
yield "Imam";
yield "Suranda";
}
const names = createName();
for (const name of names){

    console.info(name);
}


 /**
        ****LAZY EVALUATION****

    - Gnerator itu bersifat lazy

    - Artinya, jika datanya belum kita ambil dari generator, maka yield selanjutnya tidak akan di eksekusi.


     */


// Contoh function generator yang lebih kompleks


// Lazy (generator)
function* angkaGanjil(value){

    for(let i=1; i<=value; i++){

        if(i%2===0){

            console.info(`yield ${i}`);
            yield i;
        }

    }

}

// Eager (array biasa)
function angkaGanjilarray(value){

    const result = []
    
    for(let i=1; i<=value; i++){

        if(i % 2 === 1){

            console.info(`Yield ke  ${i}`);
            result.push(i);
        }

    }
     
    return result;
}

// const ganjils = angkaGanjil(100);

//     for(const ganjil of ganjils){

//         console.info(ganjil);
//     }


   
    //Lazy (generator) menggunakan function bawaan(next();) dari generator
    function* bikinGanjil(value){

        for(let i = 1; i<=value; i++){
            
            if(i % 2 ===1){
                
                console.info(`Angka Ganjil ke ${i}`);
                yield i;
            }
        }


    }

    const nomerGanjil = bikinGanjil(100);

        console.info(nomerGanjil.next().value);
        console.info(nomerGanjil.next().value);

    

    