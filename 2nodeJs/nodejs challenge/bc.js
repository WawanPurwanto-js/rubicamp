const fs = require('fs');

let content;
fs.readFile('File1.txt', 'utf-8', (err, data) => {
  if (err) {
    throw new Error('Error in reading source');
  }

  content = data;
});

console.log(content);