// //class ban
// class Tyre {
//     constructor(merek, ukuran) {
//         this.merek = merek;
//         this.ukuran = ukuran;
//     }
// }
// //class car atau mobil
// class Car {
//     constructor(ukuranban, merekban, pintu, kursi, nomesin, tahun) {
//         this.ban = new Tyre(ukuranban, merekban);
//         this.pintu = pintu;
//         this.kursi = kursi;
//         this.nomesin = nomesin;
//         this.tahun = tahun;
//     }
// }

// //class extends car oop internship
// class hondabrio extends Car {
//     constructor(nomesin, tahun) {
//         super("honda", "19inch", 5, 7, nomesin, tahun)
//         this.varian = "hondabio";
//         this.warranty = 1;
//     }
// }
// //class extends car oop internship
// class hondaJazz extends Car {
//     constructor(nomesin, tahun) {
//         super("honda", "15inch", 5, 5, nomesin, tahun)
//         this.varian = "hondajazz";
//         this.warranty = "1";
//     }
// }

// //class carfacroty
// class CarFactory {
//     constructor() {
//         this.cars = [];
//         this.count = 1;

//     }
//     //metode atau pakai algoritma random
//     static getRandom() {
//         return Math.floor(Math.random() * (9 - 2)) + 2;
//     }

//     //metode pertahun pakai fungsi looping for

//     produce(year) {
//         //hondabrio
//         for (let index = 0; index < CarFactory.getRandom(); index++) {
//             this.cars.push(new hondabrio(year, this.count++));

//         }
//         //hondajazz
//         for (let index = 0; index < CarFactory.getRandom(); index++) {
//             this.cars.push(new hondaJazz(year, this.count++));

//         }
//     }

//     //garansi car menggunkan foreach
//     Garansi(tahun) {
//         console.log(`hasil produksi sat ini :`);
//         this.cars.forEach(item => {
//             console.log(`
//         no.mesin : ${item.nomesin}
//         varian : ${item.nomesin}
//         tahun pembuatan : ${item.nomesin}
//         jumlah pintu : ${item.nomesin}
//         jumlah kursi : ${item.nomesin}
//         spesifikasi ban : ${item.nomesin}
//         status garansi pada tahun : ${item.nomesin} adalah :${item.warranty}
//         ---------------------------------------------------------------
//         `);

//         })

//     }

//     //hasil produksi menggunakan for each
//     hasilProduksi() {
//         console.log(`hasil poroduksi saat ini :`);
//         this.cars.forEach(item => {
//             console.log(`
//         no mesin : ${item.nomesin}
//         varian : ${item.varian}
//         tahun pembuatan : ${item.tahun}
//         jumlah pintu : ${item.pintu}
//         jumlah kursi : ${item.kursi}
//         spesifikasi baru : ${item.ban.merek} (${item.ban.ukuran})
//         ------------------------------------------------------------------------        
//         `);

//         })

//     }

// }
// //untuk menampilkan menggunkan variable baru dan internship
// let honda = new CarFactory();
// honda.produce(2016);
// honda.produce(2019);
// honda.hasilProduksi();

//challenge 16 oop
// SIMPLE OOP
// buatlah class-class untuk mengolah proses pembuatan mobil
// disebuah pabrik mobil data yang diolah adalah sebagai beriku
// 1 berapa banyak mobil yang dihasilkan dari proses produksi didalam
// pabril tersebut perbulan. gunakan algoritma random dijavascript
// 2 tiap merek mobil dibuat perkelas
// 3 dari satu mobil terdapat atribut seperti ban,kursi,pintu dan seterusnya
// 4 lakukan perhitungan garansi setiap mobilnya dengan melakukan
// simulasi penambahan umur mobil nilai yang di tambahkan random



class Tyre {
    constructor(merek, size) {
        this.merek = merek;
        this.size = size;
    }
}
class car {
    constructor(merekban, ukuranban, pintu, kursi, nomesin, tahun) {
        this.ban = new Tyre(merekban, ukuranban);
        this.pintu = pintu;
        this.kursi = kursi;
        this.nomesin = nomesin;
        this.tahun = tahun;
    }
}
class hondabrio extends car {
    constructor(nomesin, tahun) {
        super("federal", "20inch", 7, 9, nomesin, tahun);
    }
}

class hondaJazz extends car {
    constructor(nomesin, tahun) {
        super("federal", "20inch", 7, 9, nomesin, tahun);
    }
}

class CarFactory {
    constructor() {}
    static getRandom() {
        return Math.floor(Math.random() * (4 - 2)) + 2;
    }
    produce(year) {
        for (let i = 0; i < CarFactory.getRandom(); i++)
            this.car.push(new hondabrio(year, this.i++))
    }
    garansi(tahun) {
        console.log(`hasil produksi ini :`);
        this.car.forEach(item => {
            console.log(`
    no mesin        :   ${item.nomesin}
    tahun pembuatan :   ${item.tahun}
    jumlah pintu    :   ${item.pintu}
    jumlah kursi    :   ${item.kursi}
    spesifikasi ban :   ${item.ban.merek}
    Status garansi di tahun ${tahun}
    `);

        });

    }
    hasilProduksi() {
        console.log(`hasil produksi ini :`);
        this.car.forEach(item => {
            console.log(`
    no mesin        :   ${item.nomesin}
    tahun pembuatan :   ${item.tahun}
    jumlah pintu    :   ${item.pintu}
    jumlah kursi    :   ${item.kursi}
    spesifikasi ban :   ${item.ban.merek}
    Status garansi di tahun ${tahun}
    `);

        });
    }
}

let honda = new CarFctory();
honda.produce(2015);
honda.produce(2017);
honda.hasilProduksi();