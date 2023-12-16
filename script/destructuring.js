/* 
- Destructuring adalah fitur yang bisa digunakan untuk membongkar value-value didalam array atau object
  dan mengisinya kedalam variable

- Fitur ini sangat mempermudahkan kita saat ingin mengambil data dari array atau object tanpa harus melakukan
  pengambilan data secara satu persatu
*/

// Cara manual pengambilan data dalam array
// const dataArray = ["Teuku", "imam", "suranda"]
// const firstName = dataArray[0]
// const midName = dataArray[1]
// const lastName = dataArray[2]

// console.log(firstName, midName, lastName);

// Cara pengambilan data dalam array menggunakan destructuring
const dataArray = ["Teuku", "imam", "suranda"]
// didalam destructuring array berlaku urutan
// misalnya kita membuat variable firstName pada urutan pertama, itu artinya
// kita menampung nilai dari index pertama(0) pada array
const [firstName, midName, lastName] = dataArray;
console.log(firstName);


// Destructuring didalam object
// tidak berlaku urutan index, tapi nama variable harus sama persis dengan nama property didalam objectnya
const obj = {
    nama:"imam",
    alamat:"banda aceh",
    umur : 24,
    sayHello : function(nama) {
            console.log(`hai ${nama}`)
    }
}

const {nama, alamat, ...others} = obj;
console.log(others.sayHello(nama));