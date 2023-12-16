
/**
 undefined => adalah sebuah kata kunci didalam javascript untuk memberitahukan kita kalau ada sebuah
              variable yang belum ditambahkan nilai
 */

let name;

if(name === undefined){

    console.info("UNDEFINED");
}else{
    console.info("DEFINED");
}


const names = ["imam", "suranda"];
if(names[2] === undefined){

    console.info("ARRAY UNDEFINED");
}else{

    console.info(`halo ${names[2]}`);
}



const person = {};

if(person.name === undefined){

    console.info("OBJECT UNDEFINED");
}else{

    console.info(`halo ${person.name}`);
}