// Lấy ra phần tử (element)
const loginBtn = document.getElementById("register-btn");
// loginBtn.innerHTML = 'Dang xuat abc xyz'
// console.log(loginBtnText)

// Xu ly khi nguoi dung bam nut Dang nhap

loginBtn.onclick = function () {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const repassword = document.getElementById("repassword");

  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const repasswordError = document.getElementById("repassword-error");
  const registerError = document.getElementById("register-error");
  // console.log(usernameError, passwordError, loginError)

  // kiem tra

  if (username.value === "") {
    usernameError.innerHTML = "Vui lòng nhập tên đăng ký";
  } else {
    usernameError.innerHTML = "";
  }
  if (password.value === "") {
    passwordError.innerHTML = "Vui lòng nhập mật khẩu";
  } else {
    passwordError.innerHTML = "";
  }
  if (repassword.value !== password.value) {
    repasswordError.innerHTML = "Mật khẩu không giống";
  } else if (username.value == "phong") {
    registerError.innerHTML = "Tên này đã được sử dụng";
  } else {
    registerError.innerHTML = "";
    window.location.href = "/body/index.html";
  }
  // if (username.value !== "phong") {
  //   registerError.innerHTML = "";
  //   window.location.href = "/body/index.html";
  // } else {
  //   registerError.innerHTML = "";
  // }
};
