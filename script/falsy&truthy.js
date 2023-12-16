

/**
 
- Falsy atau kadang ditulis falsy, adalah value ketika dalam konteks boolean, dia dianggap false.

- Falsy merupakan salah satu fitur unik dari javacript, yang berguna, namun juga membingungkan.

- Di javascript, kondisi itu tidak hanya bisa boolean saja, diluar boolean pun bisa,
  namun kita harus tau terlebih dahulu beberapa data falsy, atau yang dianggap false.


**KETERANGAN DATA FALSY**

- False => Boolean false

- 0, -0 => Number 0 dan -0 dianggap false

- "", '', `` => Semua string kosong dianggap false

- null => null dianggap false

- undefined => undefined dianggap false

NaN => Not a Number dianggap false



- Sedangkan Truthy adalah kebalikan dari falsy, dimana datanya dianggap bernilai true

- Untuk mengetahui data itu adalah truthy atau true, yaitu ketika data itu bukan bernilai falsy 

 */

let data = 0;

if(data){

    document.writeln("TRUE");
}else{

    document.writeln("FALSE");
}




