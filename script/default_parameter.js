
/**
 - Kita tau bahwa parameter itu bersifat optiomal, artinya kita bisa tidak memberi value terhadap parameter
 
 - parameter juga bisa diberi nilai default, artinya jika kita tidak mengirim data ke parameter
   maka secara otomatis parameter akan diisi oleh default value (yang telah di set)
 */

   function register(nama, gender = "UNKNOWN"){

    console.info(nama);
    console.info(gender);
   }

   register();
   register("imam");
   register("imam", "Laki-laki");