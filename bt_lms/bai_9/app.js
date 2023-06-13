// 9. Nhập vào một số n, in ra n số nguyên tố tăng dần
// hàm check số nhập vào có phải là SNT
function primeNumberIncrease(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
let num = Number(prompt("Nhập 1 số n"));
console.log("Số nguyên tố tăng dần đến", num, "là:");
for (let i = 0; i <= num; i++) {
  if (primeNumberIncrease(i)) {
    console.log(i);
  }
}
