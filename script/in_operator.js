
/**
 
In => merupakan operator yang bisa digunakan ketika kita ingin mengecek
      apakah sebuah property ada di dalam object atau tidak.
      jika ada, maka akan mengembalikan nilai True, jika tidak, maka False.
      dan tidak hanya obejct, In juga bisa dipakai untuk mengecek index array 

Note : Operator in hanya akan mengecek apakah sebuah property atau index(array) ada atau tidak
       jadi, walaupun nilai property/index bernilai undefined atau null, selama peroperty/indexnya ada
       maka akan tetap dianggap ada.

 */


const person = {

    firstName : undefined,
    lastName : "Imam"
};


if("firstName" in person){

    alert(`Hi, ${person.firstName}`);

}else{

    alert(`there's no firstName in person`);

}