

/**
  Null => merupakan representasi dari data kosong. Null berbeda dengan Undefined,
          Null berarti variable sudah diberi nilai/value nya, hanya saja bernilai Null
          sedangkan Undefined adalah varible yang belum ditambahkan nilai apapun  
 */

let FirstName = null;

if(FirstName === undefined){

    alert("THE RESULT IS UNDEFINED");

}else if(FirstName === null){
    alert("THE RESULT IS NULL")

}else{
    alert(`Halo ${FirstName}`);
}