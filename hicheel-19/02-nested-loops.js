const seats = [
  ["🟩", "🟩", "🔴", "🟩"],
  ["🔴", "🟩", "🟩", "🟩"],
  ["🟩", "🟩", "🟩", "🔴"],
];

// 1. Нүд бүрээр — r мөр, c багана (ялгаатай нэр!)
for (let r = 0; r < seats.length; r++) {
  for (let c = 0; c < seats[r].length; c++) {
    console.log(r, c, seats[r][c]);
  }
}

// 2. Хүснэгт хэвлэх — мөр бүрт шинэ line
for (let r = 0; r < seats.length; r++) {
  let line = "";
  for (let c = 0; c < seats[r].length; c++) {
    line = line + seats[r][c];
  }
  console.log(`${r + 1}: ${line}`);
}

// 3. Тоолох — давталт дотор давталт + if
let booked = 0;
for (let r = 0; r < seats.length; r++) {
  for (let c = 0; c < seats[r].length; c++) {
    if (seats[r][c] === "🔴") {
      booked++;
    }
  }
}
console.log(`🔴 ${booked} зарагдсан · 🟩 ${3 * 4 - booked} сул`);

// 4. Үржүүлэх хүснэгт 5 × 5 — матрицгүйгээр ч давталт дотор давталт
for (let a = 1; a <= 5; a++) {
  let line = "";
  for (let b = 1; b <= 5; b++) {
    line = `${line}${a * b}\t`;
  }
  console.log(line);
}
