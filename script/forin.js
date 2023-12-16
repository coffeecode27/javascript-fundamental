
/**
 *  For In merupakan perulangan for yang digunakan untuk meng-iterasi seluruh data property(tidak termasuk valuenya)
    di object atau index array
 
*   Walaupun For In bisa digunakan untuk array, namun tidak di rekomendasikan untuk array,
    karena biasanya kita jarang sekali butuh data index untuk array. dan kita bisa menggunakan For of
    jika untuk array.
 */

    // For in untuk Object
    const person = {
            // property / attribut
            firstname: "Teuku",
            middlename: "Imam",
            lastname: "Suranda"
    };


    for(const attribut in person){
                                            // untuk mengambil value dari attribut di dalam person
        document.writeln(`<p> ${attribut} : ${person[attribut]}</p>`);
    }


    // For in untuk Array
    const names = ["Teuku", "Imam", "Suranda"];
        
        for(const index in names){
                                             // untuk mengambil value dari index di dalam names
            document.writeln(`<p> ${index} : ${names[index]}</p>`);
        }
