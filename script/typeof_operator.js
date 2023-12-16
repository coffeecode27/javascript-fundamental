
/**
typeof => merupakan operator yang bisa kita gunakan untuk melihat/mengecek tipedata dari sebuah variable/value.
          hasil dari operator typeof adalah nama dalam bentuk string dari tipedata nya. 
 

typeof Undifined = "undefined" 
 
typeof Null = "object" 
 
typeof Boolean = "boolean" 
 
typeof Number = "number" 
 
typeof BigInt = "bigint" 
 
typeof String = "string" 
 
typeof Symbol = "symbol" 
 
typeof Function = "function" 
 
lainnya = "object" 
 
*/

let namadata = function(){};

const TypeData = typeof namadata;

document.writeln(`<p>ini adalah jenis data ${TypeData} </p>`)
