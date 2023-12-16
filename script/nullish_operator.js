

/**

- Nullish coalescing operator => memiliki value null dan undefined

- Nullish coalescing operator (??) => mirip dengan ternary operator, yang membedakan adalah
  pada kondisi, jika bernilai null atau undefined, baru value default-nya diambil.

  misal nilai bernilai null/undefined, maka ganti nilai defaultnya menjadi 1

 */


//Contoh Nullish operator menggunakan If

let parameter;

let data = parameter;

if(data === undefined || data === null){

  data = "Nilai Default"
}

document.writeln(`<p>${data}</p>`);



//Contoh Nullish opeartor sebenarnya (??)
/** cara baca = jika nilai data = parameter, dan nilai parameter bernilai null/undefined,
    maka cetak nilai default (di sebelah kanan)*/ 
data = parameter ?? "1";
document.writeln(`<p>${data}</p>`);