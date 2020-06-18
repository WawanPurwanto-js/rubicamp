// const fs = require('fs');
// const params = process.argv;
// const readData = () => JSON.parse(fs.readFileSync('data13.json', 'utf8'));
// const writeData = (data) => fs.writeFileSync('data13.json', JSON.stringify(data, null, 3), 'utf8');
// let number = parseInt(params[3] - 1);
// let data = readData();

// const help = () => console.log(`
//    >>> JS TODO <<<
//    $ node todo.js <command>
//    $ node todo.js list
//    $ node todo.js task <task_id>
//    $ node todo.js add <task_content>
//    $ node todo.js delete <task_id>
//    $ node todo.js complete <task_id>
//    $ node todo.js uncomplete <task_id>
//    $ node todo.js list:outstanding asc|desc
//    $ node todo.js list:completed asc|desc
//    $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
//    $ node todo.js filter:<tag_name>
// `);

// switch (params[2]) {
//     case 'add':
//         const output = params.slice(3).join(' ');
//         data.push({
//             'task': output,
//             'complete': false,
//             'tags': []
//         });
//         writeData(data);
//         console.log(`'${output}', telah ditambahkan.`);
//         break;

//     case 'delete':
//         console.log(`'${data[number].task}' telah dihapus dari daftar!`);
//         data.splice(number, 1);
//         writeData(data);
//         break;

//     case 'complete':
//         const completeTask = number;
//         data[completeTask].complete = true;
//         data[completeTask].tags = 'x';
//         console.log(`'${data[completeTask].task}' telah selesai.`);
//         writeData(data);
//         break;

//     case 'uncomplete':
//         const uncompleteTask = number;
//         data[uncompleteTask].complete = false;
//         data[uncompleteTask].tags = ' ';
//         console.log(`'${data[uncompleteTask].task}' telah selesai.`);
//         writeData(data);
//         break;

//     case 'list':
//         console.log('Daftar Pekerjaan:');
//         data.forEach((item, index) => {
//             console.log(`${index +1 }. ${item.complete ? '[x]': '[ ]'} ${item.task}`)
//         });
//         break;

//     case 'list:outstanding':
//         console.log('Daftar Pekerjaan\n');
//         if (params[3] == 'desc') {
//             for (let a = data.length - 1; a >= 0; a--) {
//                 if (!data[a].complete) {
//                     console.log(`${a + 1}.${data[a].complete ? '[x]' : '[ ]'}${data[a].task}`);
//                 };
//             };
//         } else if (params[3] == 'asc') {
//             for (let b = 0; b < data.length; b++) {
//                 if (!data[b].complete) {
//                     console.log(`${b + 1}.${data[b].complete ? '[x]' : '[ ]'} ${data[b].task}`);
//                 };
//             };
//         };
//         break;

//     case 'list:completed':
//         console.log('Daftar Pekerjaan\n')
//         if (params[3] == 'desc') {
//             for (let a = data.length - 1; a >= 0; a--) {
//                 if (data[a].complete) {
//                     console.log(`${a + 1}.${data[a].complete ? '[x]' : '[ ]'}${data[a].task}`);
//                 };
//             };
//         } else if (params[3] == 'asc') {
//             for (let b = 0; b < data.length; b++) {
//                 if (data[b].complete) {
//                     console.log(`${b + 1}.${data[b].complete ? '[x]' : '[ ]'} ${data[b].task}`);
//                 };
//             };
//         };
//         break;

//     case 'tag':
//         data[number].tag = params.slice(4)
//         writeData(data)
//         console.log(`Tag '${params.slice(4)}' telah ditambahkan ke daftar '${data[params[3] - 1].task}'.`);
//         break;

//     default:
//         help();
//         break;
// };

const fs = require('fs'); //
const params = process.argv; //mendapatkan argumen dilewatkan di node.js pada baris cli
const readData = () => JSON.parse(fs.readFileSync('data13.json', 'utf8')); //membaca file .json readfile
const writeData = (data) => fs.writeFileSync('data13.json', JSON.stringify(data, null, 3), 'utf8'); //untuk menulis data 
let number = parseInt(params[3] - 1); // merubah  ke parse integer
let data = readData();

const help = () => console.log(`
>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete<task_id>
$ node todo.js list:outstanding asc | desc
$ node todo.js list:comp;eted asc| desc
$ node todo.js tag <task_id> <tag_name_1><tag_name_2>...<tag_name_N>
$ node todo.js filter:<tag_name>
`); //pakai ` backlip untuk menampilkan di cli

//pakai switch case untuk menentukan pengecekan lebih dari satu nilai
switch (params[2]) {
    case 'add':
        const output = params.slice(3).join('');
        data.push({
            'task': output,
            'complete': false,
            'tags': []
        });
        writeData(data);
        console.log(`'${output}',telah ditambahkan`);
        break;

    case 'delete':
        console.log(`'${data[number].task}'telah diapus dari daftar! `);
        data.splice(number, 1);
        writeData(data);
        break;

    case 'complete':
        const completeTask = number;
        data[completeTask].complete = true;
        data[completeTask].tags = 'x';
        console.log(`'${data(completeTask).task}'telah selesai.`);
        writeData(data);
        break;
    case 'uncomplete':
        const uncompleteTask = number;
        data[uncompleteTask].complete = false;
        data[uncompleteTask].tags = '';
        console.log(`'${data[uncompleteTask].task}'telah selesai.`);
        writeData(data);
        break;

    case 'list':
        console.log('Daftar Pekerjaan:');
        data.forEach((item, index) => {
            console.log(`${index +1}.${item.complete ? '[x]':'[ ]'}${item.task}`);
        });
        break;
    case 'list:outstanding':
        console.log('Daftar Pekerjaan\n');
        if (param[3] == 'desc') {
            for (let a = data.length - 1; a >= 0; a--) {
                if (!data[a].complete) {
                    console.log(`${a + 1}.${data[a].complete ? '[x]':'[ ]'}${data[a].task}`);
                };
            };
        };
        break;

    case 'list:completed':
        console.log('Daftar Pekerjaan\n');
        if (param[3] == 'desc') {
            for (let a = data.length - 1; a >= 0; a--) {
                if (data[a].complete) {
                    console.log(`${a + 1}.${data[a].complete ? '[x]' : '[]'}${data[a].task}`);
                };
            };
        } else if (param[3] == 'asc') {
            for (let b = 0; b < data.length; b++) {
                if (data[b].complete) {
                    console.log(`${b + 1 }.${data[b].complete ? '[x]': '[ ]'} ${data[b].task}`);
                };
            };
        };
        break;
    case 'tag':
        data[number].tag = params.slice(4)
        writeData(data)
        console.log(`Tag '${params.slice(4)}' telah ditambahkan ke daftar '${data[params[3]-1].task}',`);
        break;

    default:
        help();
        break;
}