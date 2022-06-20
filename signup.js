document.querySelector("#button").addEventListener("click", getData);

let userData = JSON.parse(localStorage.getItem("signupData")) || [];

function getData(event) {
  let signupObj = {
    userFname: document.querySelector("#firstName").value,
    userLname: document.querySelector("#lastName").value,
    userEmail: document.querySelector("#email").value,
    userPassword: document.querySelector("#password").value,
  };
  validateDuplicate(signupObj);
}
let blanck = { userEmail: "", userPassword: "" };
function validateDuplicate(elem) {
  let Data = userData.filter(function (element) {
    return elem.userEmail !== element.userEmail;
  });
  if (
    blanck.userEmail == elem.userEmail &&
    blanck.userPassword == elem.userPassword
  ) {
    alert("Please fill required field for signup.");
  } else if (Data.length !== userData.length) {
    alert("This email id already exist");
  } else {
    userData.push(elem);
    localStorage.setItem("signupData", JSON.stringify(userData));
    window.location.href = "login.html";
    alert("You are successfully signup.");
  }
}