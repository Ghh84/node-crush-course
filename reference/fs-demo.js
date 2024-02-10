const fs = require('fs');
const path = require('path');

// Create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
   //if (err) throw err;
   //console.log('Folder created...');
 //});
 // Create folder
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello nice to meet you!', err => {
    if (err) throw err;
    console.log('File written...');
  });
  //append to
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Lets discuse about nodejs!', err => {
    if (err) throw err;
    console.log('File is updated...');
  });

  // Reading from file
  fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  
