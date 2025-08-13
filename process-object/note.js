// Menampilkan informasi tentang proses Node.js
// Informasi ini mencakup versi Node.js, platform, dan lainnya.
Object.getOwnPropertyNames(global);


// Menampilkan informasi memori yang digunakan oleh proses Node.js
// Informasi ini mencakup penggunaan heap, penggunaan eksternal, dan lainnya.
const memoryInformation = process.memoryUsage();
 
console.log(memoryInformation);


// property process.env adalah objek yang berisi variabel lingkungan yang tersedia untuk proses Node.js
// node app.js "harry" "potter"
const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);
// output: Hello harry potter


