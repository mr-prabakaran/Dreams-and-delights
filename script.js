//Show Password
function showPwd() {
  pwd = document.getElementById("pwd");
  eye = document.getElementById("eye");
  if (pwd.type == "password") {
    pwd.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    pwd.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
}

//Scroll
function whileScroll() {
  backtotop = document.getElementById("backtotop");
  scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition > 100) {
    backtotop.style.display = "flex";
  } else {
    backtotop.style.display = "none";
  }
}
