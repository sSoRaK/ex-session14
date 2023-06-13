// 7. Viết function kiểm tra số chẵn - lẻ
function checkOddOrEvenNumber(number) {
  if (number % 2 === 0) {
    return `${number} là số chẵn`;
  } else {
    return `${number} là số lẻ`;
  }
}
let num = Number(prompt("Nhập 1 số nguyên"));
let result1 = checkOddOrEvenNumber(num);
console.log(result1);
// 7. Viết function kiểm tra số nguyên tố
function checkPrimeNumber(number) {
  if (number < 2) {
    return `${number} không là số nguyên tố`;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return `${number} không là số nguyên tố`;
    }
  }
  return `${number} là số nguyên tố`;
}
let result2 = checkPrimeNumber(num);
console.log(result2);
// 7. Viết function kiểm tra số hoàn hảo 6 = 1 + 2 + 3 {1 + 2 + 3}
function checkPerfectNumber(number) {
  let checkSum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      checkSum += i;
    }
    if (checkSum === number) {
      return `${number} là số hoàn hảo`;
    }
  }
  return `${number} không là số hoàn hảo`;
}
let result3 = checkPerfectNumber(num);
console.log(result3);
