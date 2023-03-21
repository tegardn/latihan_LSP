const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nilai A: ", (nilaiA) => {
  rl.question("Masukkan nilai B: ", (nilaiB) => {
    rl.question("Masukkan nilai C: ", (nilaiC) => {
      nilaiA = parseInt(nilaiA);
      nilaiB = parseInt(nilaiB);
      nilaiC = parseInt(nilaiC);

      // Mengurutkan angka dengan ascending
      const ascending = [nilaiA, nilaiB, nilaiC].sort(function (a, b) {
        return a - b;
      });
      console.log("Pengurutan angka secara ascending: " + ascending.join(", "));

      // Mengurutkan angka dengan descending
      const descending = [nilaiA, nilaiB, nilaiC].sort(function (a, b) {
        return b - a;
      });
      console.log("Pengurutan angka secara descending: " + descending.join(", "));

      // Menampilkan nilai maksimum
      const max = Math.max(nilaiA, nilaiB, nilaiC);
      console.log("Nilai maksimum: " + max);

      // Menampilkan nilai minimum
      const min = Math.min(nilaiA, nilaiB, nilaiC);
      console.log("Nilai minimum: " + min);

      // Menampilkan rata-rata
      const rata = (nilaiA + nilaiB + nilaiC) / 3;
      console.log("Rata-rata: " + rata);

      rl.close();
    });
  });
});