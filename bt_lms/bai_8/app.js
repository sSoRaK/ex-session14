// 8. viết function tính trung bình cộng của 1 mảng số
let arrInt = [];
let arrLength = Number(prompt("Nhập độ dài của mảng"));
for (let i = 0; i < arrLength; i++) {
  arrInt[i] = Number(prompt("Nhập giá trị của mảng"));
}
console.log(arrInt);
function calAverage(array) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    average = sum / arrLength;
  }
  return `Trung bình cộng của 1 mảng số là: ${average}`;
}
let result = calAverage(arrInt);
console.log(result);
