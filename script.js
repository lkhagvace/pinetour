const names = ["Бат", "Сараа", "Ану"];
const steps = [
  [8000, 6500, 10000],
  [12000, 9000, 7000],
  [5000, 4000, 6000],
];

const result = [];

for (let personIndex = 0; personIndex < names.length; personIndex++) {
  let total = 0;
  for (let walkIndex = 0; walkIndex < steps[personIndex].length; walkIndex++) {
    total += steps[personIndex][walkIndex];
  }
  result.push(total);
}
console.log(typeof result[0]);
console.log(Math.max(result));
