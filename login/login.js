// Biến - variable
// var - let - const
// let number = 3

// const name = 'Tuan'

// console.log(number + 2)

// console.log(number - 3)

// console.log(number * 3)

// console.log(number ** 3)

// console.log(number / 3)

// console.log(number % 3)

// const isBoy = false

// Câu điều kiện
// if (3 === 2) {
//   console.log('3 bang 2')
// } else if (3 > 2) {
//   console.log('3 lon hon 2')
// } else {
//   console.log('3 nho hon 2')
// }

// Hàm - Function (Nhà máy)

// // Khởi tạo hàm
// function sayHello() {
//   console.log('Hello cac ban')
//   return 3
// }

// // Gọi hàm
// const test = sayHello()
// console.log(test > 2)

// function soSanh(number, abc, zyx) {
//   if (number > 5) {
//     return 'So nay lon hon 5'
//   } else {
//     return 'So nay khong lon hon 5'
//   }
// }

// const testNumber = 3
// const ketQua = soSanh(testNumber, 2, 4)
// console.log(ketQua)

// function soSanh(num1, num2) {
//   if (num1 > num2) {
//     console.log('So thu 1 lon hon so thu 2')
//   } else if (num1 === num2) {
//     console.log('So thu 1 bang so thu 2')
//   } else {
//     console.log('So thu 1 nho hon so thu 2')
//   }
// }

// soSanh(2, 4)
// soSanh(2, 2)
// soSanh(3, 4)
// soSanh(8, 4)

/////////////////////////////////////////////////
// Lấy ra phần tử (element)
const loginBtn = document.getElementById("login-btn");
// loginBtn.innerHTML = 'Dang xuat abc xyz'
// console.log(loginBtnText)

// Xu ly khi nguoi dung bam nut Dang nhap

loginBtn.onclick = function () {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const loginError = document.getElementById("login-error");
  // console.log(usernameError, passwordError, loginError)

  // kiem tra

  if (username.value === "") {
    usernameError.innerHTML = "Vui lòng nhập tên đăng nhập";
  } else {
    usernameError.innerHTML = "";
  }
  if (password.value === "") {
    passwordError.innerHTML = "Vui lòng nhập mật khẩu";
  } else {
    passwordError.innerHTML = "";
  }
  if (username.value !== "phong" || password.value !== "123456") {
    loginError.innerHTML = "Sai tên đăng nhập hoặc mật khẩu";
  } else {
    loginError.innerHTML = "";
    window.location.href = "/body/index.html";
  }
};
