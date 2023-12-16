

/*
  - Kata kunci this adalah referensi ke object milik siapa

  - Tiap lokasi kata kunci this, bisa berbeda-beda referensi pemiliknya

  - Dalam Object method, this merupakan referensi ke object pemilik functionnya

  - Di global scope, this merupakan referensi ke global object (di browser biasanya window)
  
  - Dalam function global scope, this merupakan referensi ke global object (di browser biasanya window)

  - Di function dengan strict mode(akan dibahas nanti), this adalah undefined

  - Dalam event, this merupakan referensi ke element yang menerima event(akan di bahas di mater DOM)

*/


console.info(this);//Pemilik dari this ini adalah window


function test(){

    function test1(){

        console.info(this);//Pemilik dari this ini adalah window

    }
    
    test1();
}

test();


const person = {
    
    //ketika kita ingin memanngil atau menggunakan property yang lain di dalam sebuah property lainnya
    // kita harus menggunakan kata kunci this untuk mengakses property tersebut
    // karena this di dalam object, telah mengacu pada object itu sendiri 
    nama : "Imam",
    alamat : function(alamat){
        //Pemilik dari this didalam sini adalah object
        console.info(`Hallo ${this.nama}, kamu beralamat di ${alamat}.`);
    }
}

person.alamat("aluebilie");