
const fs = require('fs');

const { resolve } = require('path');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

// synchronous
/*
const data = fs.readFileSync(resolve(__dirname, 'notes.txt'), 'UTF-8');
console.log(data);
*/