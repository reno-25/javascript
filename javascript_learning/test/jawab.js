function categorizeNumber(input) {
  if (typeof input !== 'number' || !Number.isInteger(input)) {
    throw new Error("Input harus berupa bilangan bulat");
  }

  if (input === 0) return "Nol";
  if (input < 0) return "Negatif";

  // Cek apakah input adalah bilangan prima
  if (isPrime(input)) return "Prima";

  // Jika bukan prima, cek ganjil/genap
  if (input % 2 === 0) return "Genap";
  return "Ganjil";
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Contoh penggunaan
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0));  // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
