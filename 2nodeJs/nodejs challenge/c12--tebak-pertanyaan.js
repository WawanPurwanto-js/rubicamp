// // manggil si json
// let fs = require('fs');
// let a = fs.readFileSync('soal.json', 'utf8');
// let data = JSON.parse(a)
// let count = 0
// var wrong = 1

// if (process.argv[2] == 'data.json') {


//     // console.log(data)
//     // readline mencetak tampilan per l
//     const readline = require('readline');
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//         prompt: 'tebakan :'
//     });
//     console.log(process.argv);
//     console.log('Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini "data.json", untuk bermain, jawablah dengan jaawaban yang sesuai ')
//     console.log("gunakan 'skip' untuk menangguhkan pertanyaan dan di akhir pertanyaan akan di tanyakan lagi")
//     console.log(`${data[count].pertanyaan}`); // implementasi objek (manggil data json objek ke ..)
//     rl.prompt();
//     rl.on('line', (line) => {
//         if (line === data[count].tebakan) {
//             console.log('Selamat Anda Benar')
//             count++

//             if (count === data.length) {
//                 console.log('Hore Anda Menang')
//                 rl.close()
//             } else {
//                 console.log(`${data[count].pertanyaan}`); // implementasi objek (manggil data json objek ke ..)
//                 rl.prompt()
//             }
//         } else if (line === 'skip') {
//             data.push(data[count])
//             count++
//             console.log(`${data[count].pertanyaan}`)
//             rl.prompt()
//         } else {
//             console.log(`Anda kurang beruntung, anda telah salah ${wrong} kali, SILAHKAN COBA LAGI ! `)
//             rl.prompt()
//             wrong++
//         }
//     })


// } else {
//     console.log('Tolong sertakan nama file sebagai inputan')
// }


// const readline = require('readline');
// const fs = require('fs');
// //console.log(process.argv[2]); //untuk melihat data argv boleh berjalan apa tidea

// if (!process.argv[2]) {
//     console.log('tolong sertakan nama file');
//     process.exit(1);

// }

// let soal = JSON.parse(fs.readFileSync('soal.json', 'utf8'));

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: 'Jawaban :'
// });
// let count = 0;
// let wrong = 0;
// console.log('selamat datang di permainan tebak-tebakan, kamu akan di berikan pertanyaan dari file ini `data.json` untuk bermain, jawablah dengan jawaban yang sesuai. silahkan isi dengan jawaban yang benar ya!\n Gunakan `skip` untuk menangguhkan pertanyaanya, dan di akhir pertanyaan akan ditanyakan lagi\n');
// console.log(soal[count].definition);

// rl.prompt();
// rl.on('line', (jawab) => {
//     if (jawab.toLocaleLowerCase() == 'skip') {
//         soal.push(soal[count])
//         count++;
//         console.log(soal[count].definition);
//     } else {

//         if (jawab.toLocaleLowerCase() == soal[count].term.toLowerCase()) {
//             console.log('Anda Beruntung!\n');
//             wrong = 0;
//             count++;
//             if (count == soal.length) {
//                 console.log('selamat anda menang');
//                 rl.close();
//             }
//             console.log(soal[count].definition);
//         } else {
//             //console.log('Anda Burang beruntung');
//             wrong++;
//             console.log(`Anda kurang Beruntung Anda telah banyak salah sebanyak ${wrong},silahkan coba lagi`);
//         }
//     }
//     rl.prompt();
// }).on('close', () => {
//     console.log('Anda Berhasil');
//     process.exit(0);
// });

const readline = require('readline');
const fs = require('fs');

//console.log(soal[2]);

if (!process.argv[2]) {
    console.log('tolong sertakan nama file');
    process.exit(1);
}
let soal = JSON.parse(fs.readFileSync('soal.json', 'utf8'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban :'
});
let count = 0;
let salah = 0;
console.log('selamat datang di permainan tebak-tebakan, kamu akan diberikan pertanyaan dari file `soal.json`.\n untuk bermain, jawablah dengan jawaban yang sesuai.\n Gunakan `skip` untuk menangguhkan pertanyaanya, dan di akhir pertanyaan akan ditanyakan lagi.\n');
console.log(soal[count].definition);

rl.prompt();
rl.on('line', (jawab) => {
    if (jawab.toLocaleLowerCase() == 'skip') {
        soal.push(soal[count])
        count++;
        console.log(soal[count].definition);
    } else {

        if (jawab.toLocaleLowerCase() == soal[count].term.toLocaleLowerCase()) {
            console.log('Anda Beruntung \n');
            salah = 0;
            count++;

            if (count == soal.length) {
                console.log('selamat anda menang');
                rl.close();
            }
            console.log(soal[count].definition);
        } else {
            salah++;
            console.log(`Anda kurang beruntung! Anda  telah salah ${salah}, Silahkan coba lagi`);

        }
    }
    rl.prompt();
}).on('close', () => {
    console.log('Anda Berhasil!');
    process.exit(0);

});