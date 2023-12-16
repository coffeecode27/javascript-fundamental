
// popup (confirm) => digunakan untuk meminta input boolean dari pengguna browser dalam bentuk input pilihan

// const masuk = confirm("Apakah Anda Berumur 18+ ?");

// if (masuk){
    
//     const umur = prompt("berapa umur anda ?");

//     if(umur >= 18){

//         alert("silahkan menikmati konten kami")


//     }else{
//         alert("Masih bocil :)")
//     }

// }else{
//     alert("Balik lagi pas udah 18 tahun ya :)")
// }


const main = confirm("Ingin bermain ?");

if(main){

    alert("Kamu harus melengkapi kata-kata ungkapan berikut ini !");

    let jawaban = prompt(`Halo gasss, bidadari aku gass .....`);

    let jawaban1 = "apalah dia ni, manja kali dia";
   

    if(jawaban===jawaban1){

        alert("Yeayy Kamu benar :)");

    }else{
        alert("Yahhh, Masih salah cuk :(");

    }


       
}else{
    alert("Have a nice day :)");
}
