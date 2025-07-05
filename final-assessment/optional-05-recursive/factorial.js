function factorial(n) {
  if (n <= 1) return 1;       // Basis rekursi: faktorial 0 atau 1 = 1
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
