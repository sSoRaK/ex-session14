// 4. Cho chuổi dài hơn 15 kỹ tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu tiên
// và thêm vào dấu “…” ở cuối chuỗi
function cutString(array) {
  if (array.length > 15) {
    return array.split("").splice(0, 10).join("");
  }
}
let string = prompt("Nhập vào 1 chuỗi ký tự");
console.log(cutString(string) + "...");
// string = "Bạn abc rất đẹp trai";
// // Bạn abc rấ...
// console.log(string);
// let splitString;
// let joinString;
// // string.length luôn nó đếm được độ dài chuỗi đấy, không cần phải split() rồi mới đếm length của chuỗi
// // dùng split chỉ để mình muốn tách các ký tự trong chuỗi -> mảng mà thôi
// if (string.length > 15) {
//   splitString = string.split("").splice(0, 10);
//   joinString = splitString.join("");
// }
// console.log(splitString);
// console.log(joinString);
