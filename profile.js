let data = JSON.parse(localStorage.getItem("signupData"));
let loginData = JSON.parse(localStorage.getItem("userLogin"));
let fname = "";
let lname = "";
let email = "";

data.forEach(function (elem) {
  if (elem.userEmail === loginData) {
    fname = elem.userFname;
    lname = elem.userLname;
    email = loginData;
  }
});

document.querySelector("#log").addEventListener("click", logOut);
function logOut() {
  window.location.href = "signup.html";
}
document.querySelector("#fname").innerHTML = fname.toUpperCase();
document.querySelector("#lname").innerHTML = lname.toUpperCase();
document.querySelector("#email").innerHTML = email;
document.querySelector("#hname").innerHTML = " HELLO  " + fname.toUpperCase();