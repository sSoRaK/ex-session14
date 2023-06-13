// bài 1: viết hàm tính tổng 3 số, gọi hàm tính tổng 3 số 5,10,15 và in ra kết quả
function add(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}
let total = add(5, 10, 15);
console.log("Tổng của 3 số là:", total);
// bài 2: sử dụng Expression Function, viết hàm in ra giá trị các phần tử của mảng
let arr = [1, true, "yes", 110, 9];
let printArr = function (array) {
  return array;
};
console.log(printArr(arr));

// bài 3: dùng arrow function, viết hàm tính tích 2 số, gọi hàm và in ra kết quả tích 2 số 5 và 10
let multiple = (num1, num2) => num1 * num2;
let res = multiple(5, 10);
console.log("Tích 2 số là:", res);
