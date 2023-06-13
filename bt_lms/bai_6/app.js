// 6. Viết function trả ra giá trị lớn nhất trong một mảng số
// let arrInt = [6, 4, 8, 1, 7];
// function maxValueArray(array) {
//   let max = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// let result = maxValueArray(arrInt);
// console.log(result);

// 6. Viết function trả ra giá trị lớn nhất trong một mảng số
let arrInt = [];
let arrLength = Number(prompt("Nhập độ dài của mảng"));
for (let i = 0; i < arrLength; i++) {
  let num = Number(prompt("Type of value "));
  arrInt.push(num);
}
console.log(arrInt);

function maxNumber(array) {
  if (!array) return "Re-type of array number";
  else {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return `Max number in array ${max}`;
  }
}

let res = maxNumber(arrInt);
console.log(res);
