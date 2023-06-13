// 5. Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên. Ví dụ:
// rIkKEi -> Rikkei
function capitalizeString(array) {
  if (!array) {
    return "Nhập lại một từ";
  } else {
    // charAt() -> trả về giá trị char của chuỗi tại vị trí index được chỉ định
    let firstLetter = array.toLowerCase().charAt(0).toUpperCase();
    let anotherLetter = array.toLowerCase().slice(1);
    return firstLetter + anotherLetter;
  }
}
string = prompt("Nhập một từ");
let result = capitalizeString(string);
console.log(result);
