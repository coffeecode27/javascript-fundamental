
/*
  - Getter dan Setter adalah kemampuan membuat function yang berbeda untuk mengambil data(Getter),
    dan mengubah data(Setter) pada sebuah property di object

  - Dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun dalam function sebelum
    sebuah property di akses atau di ubah, misalnya menambah validasi dan lain-lain.

*/

const person = {

    firsName : "Teuku",
    midName : "Imam",
    lastName : "suranda",
    
    // Contoh Getter (untuk mengambil data)
    get fullname(){
        return `${this.firsName} ${this.midName} ${this.lastName}`;
    },

    // Contoh Setter (untuk mengubah data)
    set fullname(value){
        const namaArray = value.split(" ");
        this.firsName = namaArray[0];
        this.midName  = namaArray[1];
        this.lastName  = namaArray[2];

    }

}


person.fullname="Teuku angga suranda";
// document.writeln(`<p>${person.fullname}</P>`);
console.table(person);

person.fullname="Teuku muazzin suranda";
document.writeln(`<p>${person.fullname}</P>`);
console.table(person);


