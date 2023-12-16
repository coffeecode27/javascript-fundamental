
/* 
  - Scope merupakan area akses sebuah data

  - Ada 2 jenis scope, yaitu global scope dan local scope

  - Setiap kita membuat fucntion, maka kita secara otomatis akan membuat local scope untuk function
    tersebut.
  
  - Data di global scope bisa diakses dari local scope, sedangkan data di local scope hanya bisa
    diakses di local scope itu saja, atau local scope di bawahnya(nested function case).

 - Semua yang terluar disebut global scope, dan yang di dalam disebut local scope
*/


// global scope
let counter = 0;

// global scope
function hitMe(){

    // local scope
    counter++;

}

hitMe();
hitMe();
hitMe();

console.info(counter);



function first(){

    // local scope first
    let firstVariable = "First";

    console.info(firstVariable);
}


function second(){
    
    // local scope second
    let secondVariable = "Second";

    console.info(secondVariable);
}

first();
second();


// Nested Function Scope
function nestedScope(){

    let contoh = "ini scope function";

    function inScope(){ 
    //Noted:nestedscope tidak bisa mengakses apapun yang di deklarasikan di dalam local scope inscope
        console.info(contoh);
        let contoh1 = "ini localscope inscope";
    }

console.info(contoh1);// Pasti error.
inScope();

}

nestedScope();