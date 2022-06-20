document.querySelector("#button").addEventListener("click", getData);

let userLogin = JSON.parse(localStorage.getItem("signupData"));

function getData() {
  let loginEmail = document.querySelector("#email").value;
  let loginPassword = document.querySelector("#password").value;
  let count = 0;
  for (let i = 0; i < userLogin.length; i++) {
    if (
      userLogin[i].userEmail == loginEmail &&
      userLogin[i].userPassword == loginPassword
    ) {
      count++;
    }
  }
  if (count === 1) {
    localStorage.setItem("userLogin", JSON.stringify(loginEmail));
    window.location.href = "MY_PROFILE.html";
    alert("You are login sucessfully.");
  } else {
    alert("Your credentials are wrong or You don't have any account");
    window.location.href = "signup.html";
  }
}