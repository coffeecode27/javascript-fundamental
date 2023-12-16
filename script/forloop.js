

/**
    == Sintaks perulangan for ==

    for(init statement; kondisi; post statement){

        //block perulangan
    }

- Init statement akan di eksekusi hanya sekali diawal, sebelum perulangan
- kondisi akan mengecek, jika true perulangan akan dilakukan, jika false akan berhenti
- Post statement akan di eksekusi setiap kali di akhir perulangan
- Init statement, kondisi dan post statement, tidak wajib diisi. jika kondisi tidak diisi
  maka kondisi selalu bernilai true.
 */


  for(let counter = 1; counter <=10 ;counter++){

    document.writeln(`<P>ini perulangan ke ${counter}</p>`);
   

  }