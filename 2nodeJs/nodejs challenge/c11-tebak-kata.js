// function tebakKata() {
//     var data = getJson('data.json');
//     var readline = require('readline');
//     var i = 0;
//     var rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//         prompt: 'Tebakan:'
//     });
//     console.log("Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n");
//     console.log("Pertayaan: " + data[i].definition);
//     rl.prompt();
//     rl.on('line', (input) => {
//         if (data[i].term == `${input}`) {
//             console.log("Selamat Anda Benar!");
//             i++;
//             if (i < data.length) {
//                 console.log("\nPertayaan: " + data[i].definition);
//                 rl.prompt();
//             } else {
//                 console.log("\nHore Anda Menang!");
//                 rl.close();
//             }
//         } else {
//             console.log("wkwkwkwk, Anda kurang beruntung!\n");
//             rl.prompt();
//         }
//     });
// }

// function getJson(file) {
//     const fs = require('fs');
//     let rawdata = fs.readFileSync(file);
//     let data = JSON.parse(rawdata);
//     return data;
// }

// tebakKata();

//buatlah sebuah permainan tebak kata,gunakan file data.json untuk 
//menyimpan daftar pertanyaan dan jawaban.
//file data.json sudah di sertakan di github

const readline = require('readline');
const fs = require('fs');
const soal = JSON.parse(fs.readFileSync('data.json', 'utf8')); //bentuk array cara akses nya pakai index
//console.log(soal[0].definition); //untuk melihat data kebaca tidak 
//keluar [  string keluaran fs string bukan objek
//json parse dirubah string ke objek
//definition untuk pertanyaan

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan>'
});

let count = 0; //buat variable dan untuk pertanyaan selanjutnya
console.log('selamat datang di permainan tebak kata\n'); // \n atau console.log untuk baris baru
console.log(soal[count].definition);
rl.prompt();
rl.on('line', (jawab) => {
    if (jawab.toLocaleLowerCase() == soal[count].term.toLowerCase()) { //term untuk jawaban dari string ke objek dan tolowecase() untuk masalah huruf besae dan kecil
        console.log('selamat anda benar');
        count++; //untuk pertanyaan selanjutnya
        if (count == soal.length) {
            console.log('Selamat Anda Menang');
            rl.close();
        }
        console.log(soal[count].definition);
    } else {
        console.log('wwkwkwkw anda kurang beruntung');
    }


    rl.prompt();
}).on('close', () => {
    console.log('Good By!');
    process.exit(0);
});


// const readline = require('readline');
// const fs = require('fs');
// const soal = JSON.parse(fs.readFileSync('data.json', 'utf8'))



// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: 'tebakan>'
// });
// let count = 0;
// console.log('selamat datand di permainan tebak kata, seilahkan isi dengan jawaban yang benar ya!\n');

// console.log(soal[count].definition);

// rl.prompt();
// rl.on('line', (jawab) => {
//     if (jawab.toLocaleLowerCase() == soal[count].term.toLowerCase()) {
//         console.log('selamat anda benar');
//         count++;
//         if (count == soal.length) {
//             console.log('selamat anda menang');
//             rl.close();
//         }
//         console.log(soal[count].definition);
//     } else {
//         console.log('wkwkwkwkwkw anda kurang beruntung');
//     }
//     rl.prompt();
// }).on('close', () => {
//     console.log('Good By!');
//     process.exit(0);
// });