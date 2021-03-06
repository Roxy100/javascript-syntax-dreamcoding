// Looping
const items = [1, 2, 3, 4, 5, 6];

// β Bad Code π©
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

function multiplyByFour(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

function sumArray(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// β Good Code β¨
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// β Good Code β¨
// λ£¨νλ₯Ό 3λ² λκΈ° λλ¬Έμ μ© μ’μ μ½λλ μλλ€.
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);

// β Better Code β¨
// λ£¨νλ μ΅μνμμΌμ νλ²λ§ λλ¦¬λ κ²μ΄ λ μ’λ€. κΌ­ μ¬νμ©μ΄ νμνμ§ μλλ€λ©΄ λ°°μ΄ APIλ νλλ§ μ°λ κ²μ΄ μ’λ€!!!
// κ° μμλ³λ‘ 2μ λλ¨Έμ§κ° μλμ§ νμΈνκ³  2μ λλ¨Έμ§(1)κ° μλ νμλ λνμ§ μκ³  κΈ°μ‘΄ ν©μ κ·Έλλ‘ λ€μ μμλ‘ λκΈ°κ³  λλ¨Έμ§(0)κ° μλ μ§μλ ν©μμ μμμ 4λ₯Ό κ³±ν κ°μ λνκ³  λκΉλλ€.
// 2λ²μ§Έ μΈμμ 0μ μ΄κΈ°κ°μΌλ‘ μ²« μμμμλ ν©μ κ°μ 0μΌλ‘ λ°μ΅λλ€. μ΄κΈ°κ°μ μ€μ νμ§ μμΌλ©΄ μ²« μμκ° ν©μΌλ‘ λμ΄κ°μ λλ²μ§Έ μμλΆν° λ°λ³΅μ λλλ€.
// λ§μ§λ§ μμκΉμ§ μ°μ°μ΄ λλλ©΄ λ§μ§λ§μ λκΈ΄ κ°μ΄ λ°νλ©λλ€.
const result = items.reduce((sum, num) => (num % 2 ? sum : sum + num * 4), 0);
console.log(result);
