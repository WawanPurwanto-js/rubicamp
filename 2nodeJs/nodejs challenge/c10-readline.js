// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,

// });
// console.log("Selamat datang di Permainan Tebak Kata,silahkan isi dengan jawaban yang benar ya");

// rl.question("Siapakah Presidem Kita saat ini? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });


// const readline = require('readline');
// let lastAnswer = '';
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     //prompt: 'Selamat Datang di permainan Tebak Kata, Silahkan isi dengan jawaban yang benar ya '
// });
// // console.log('Selamat Datang di permainan Tebak Kata, Silahkan isi dengan jawaban yang benar ya '
// //);
// //rl.prompt();
// console.log('Selamat Datang di permainan Tebak Kata, Silahkan isi dengan jawaban yang benar ya ')

// rl.on('line', (line) => {
//      )
//     switch (line.trim()) {
//        case 'yes':
//            lastAnswer = 'yes';
//            console.log('selamat Anda benar');
//            rl.setPrompt('Would you like to see which cars are available? Please type yes/no: ');
//            break;
//        case 'no':
//            if (lastAnswer === 'no') {
//                lastAnswer = '';
//                rl.close();
//            }
//            lastAnswer = 'no';
//            rl.setPrompt('Would you like to search by latitude or longitude instead? If yes, please type latitude and longitude: ');
//            break;
//        default:
//            lastAnswer = '';
//            console.log(`Pertanyaan siapakah presiden kita saat ini ? '${line.trim()}'`);
//            break;
//     }
//     rl.prompt();
// }).on('close', () => {
//     console.log('Have a great day!');
//     process.exit(0);
// });


//   const readline = require('readline'); 
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,

// });
// console.log("Selamat Datang di Game Tebak Kata,silahkan isi dengan benar ya!");

// rl.question("pertanyaan : siapakah presiden kita ? ", function(answer)
// {


//     if (answer === 'jokowi') {
//         console.log("Selamat anda benar");
//     // if yes do something
//     } else if(answer !='jokowi') {
//         console.log("Wkwkwk Anda Kurang Beruntung ");
//      } 
//      rl.question("tahun berapa kemerdekaan indonesia ? ", function(answer){

//      if (answer === '1945') {
//         console.log("anda benar");
//     // if yes do something
//     } else if(answer !='1945') {
//         console.log("Wkwkwk Anda Kurang Beruntung  ");
//      } 

//      rl.question("Pertanyaan : sebutkan kota yang memiliki julukan kota Intan ? ", function(answer){

//         if (answer === 'garut') {
//            console.log("anda benar");
//        // if yes do something
//        } else if(answer !='garut') {
//            console.log("Wkwkwk Anda Kurang Beruntung  ");
//         } 

//     else {
//     console.log(answer);
//      }

//     rl.close();
//     console.log('Have a great day!');
// });
// });
// });


//buatlah sebuah fungsi untuk memanipulasi kalimat dengan mengikti aturan pada tantangan sebelumnya (tantangan ke-5)

// function stringManipulation(word) {

//   if (word.charAt(0).toLowerCase() == 'a' ||
//     (word.charAt(0).toLowerCase()) == 'i' ||
//     (word.charAt(0).toLowerCase()) == 'e' ||
//     (word.charAt(0).toLowerCase()) == 'o') {
//     return word;
//   } else {
//     return word.slice(1) + word[0] + ('nyo')
//   }
// }

//  function stringManipulation(word){
//     if(word.charAt(0).match(/[aeiouAEIOU]/)){
//       return word;
//     }else{
//       var newWord = word.slice(1,word.length).concat(word.charAt(0)).concat('nyo');
//       return newWord;
//     }
//   }

// function sentenceManipulation(setence) {


//   var araysetence = setence.split(" ");
//   for (var i = 0; i < araysetence.length; i++) {
//     araysetence[i] = (stringManipulation(araysetence[i]));
//   }
//   var newSen = araysetence.toString().replace(/,/g, " ");
//   return newSen;
// }


// function readline() {
//   var readline = require('readline');
//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: 'tulis kalimatmu di sini > '
//   });
//   rl.prompt();
//   rl.on('line', (input) => {
//     console.log("hasil konversi: " + sentenceManipulation(`${input}`));
//     rl.prompt();
//   });
// }

// readline();


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: 'tulis kalimat mu di sini >'
// })

// rl.prompt();

// rl.on('line', (jawab) => {
//   //console.log(`hasil konversi : ${sentencesManipulation(jawab)}`);
//   console.log(`hasil konversi:  ${stringManipulation(jawab)}`);

//   rl.prompt();
// }).on('close', () => {
//   console.log('good Bye');
//   process.exit(0);
// })

// //buatlah sebuah fungsi untuk memanipulasi kalimat dengan mengikti aturan pada tantangan sebelumnya (tantangan ke-5)

// function stringManipulation(word) {

//   if (word.charAt(0).toLowerCase() == 'a' ||
//     (word.charAt(0).toLowerCase()) == 'i' ||
//     (word.charAt(0).toLowerCase()) == 'e' ||
//     (word.charAt(0).toLowerCase()) == 'o') {
//     return word;
//   } else {
//     return word.slice(1) + word[0] + ('nyo')
//   }
// }

// function sentencesManipulation(setence) {
//   // //write your code here

//   let words = setence.split(" ");
//   let result = [];
//   for (var i = 0; i < words.length; i++) {
//     result.push(stringManipulation(words[i]))
//   }
//   return result.join(" "); //fungsiya mengembalikan nilai
// }

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini>'
});
rl.prompt();
rl.on('line', (jawab) => {
  console.log(`hasil konversi :${sentencesManipulation(jawab)}`);
  rl.prompt();
}).on('close', () => {
  console.log('Good By!');
  process.exit(0);
});

function stringManipulation(word) {

  if (word.charAt(0).toLowerCase() == 'a' ||
    (word.charAt(0).toLowerCase()) == 'i' ||
    (word.charAt(0).toLowerCase()) == 'e' ||
    (word.charAt(0).toLowerCase()) == 'o') {
    return word;
  } else {
    return word.slice(1) + word[0] + ('nyo')
  }
}

function sentencesManipulation(setence) {
  // //write your code here

  let words = setence.split(" ");
  let result = [];
  for (var i = 0; i < words.length; i++) {
    result.push(stringManipulation(words[i]))
  }
  return result.join("  ")
}