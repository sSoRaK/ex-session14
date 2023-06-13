// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ thứ
// nhất tính từ năm 1 đến 100
function centuryCal(year) {
  let century = Math.floor(year / 100) + 1;
  return century;
}
let typeYear = Number(prompt("Nhập năm"));
let result = centuryCal(typeYear);
console.log(`Năm ${typeYear} thuộc về thế kỷ thứ ${result}`);
