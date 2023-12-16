
/**
 - Recursive function adalah kemampuan function memanggil function dirinya sendiri
 
 - Kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive function
   contohnya seperti kasus factorial.
 */

   function factorial (value){

        let result = 1;

        for(let i = 1; i<=value; i++){

            result= result*i;

        }

        return result;

   }
   console.info(factorial(5));


//function recursive
function recursiveFactorial(value){

    if(value===1){

        return 1;
    }else{

        return value * recursiveFactorial(value - 1);
        
        
    }

}

console.info(recursiveFactorial(5));
