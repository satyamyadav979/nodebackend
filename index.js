//const fs = require('fs');

// const data = fs.readFileSync('file.txt');
// console.log('File content:', "" + data);

// fs.writeFileSync('file.txt', 'Hello, world by by yby !', 'utf8',(err)=>{
//     console.log('file modified');
// });

// fs.appendFileSync('file.txt', 'new text after appending !', 'utf8',(err)=>{
//     console.log('file modified');
// });

// // fs.mkdirSync('newDir');
// // fs.rmdirSync('newDir');

// fs.mkdir('newDir', (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//         return;
//     }
//     console.log('Directory created successfully!');
//     }
// );
// fs.rmdir('newDir', (err) => {
//     if (err) {
//         console.error('Error deleting directory:', err);
//         return;
//     }
//     console.log('Directory deleted successfully!');
//     }
// );

// const source = __dirname + "/newFile.txt";
// const destination = __dirname + "/copy.txt";
// fs.copyFile(source, destination, (err) => {
//     if (err)
//         console.error(err);
//     console.log('File copied successfully')
// });
const http = require('http');

const server = http.createServer((req, res) => {   
    res.write('<html> <head> <title>My First Web Server</title> </head> <body> <h1>Hello, world!</h1> </body> </html>');
    res.end();
});


const port = 3000;
const host = 'localhost';
server.listen(port,host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});