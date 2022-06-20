let userData = JSON.parse(localStorage.getItem("signupData"));
    document.querySelector("#button").addEventListener("click", getData);
    function getData() {
      let loginEmail = document.querySelector("#email").value;
      let count = 0;
      let password = "";
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].userEmail == loginEmail) {
          count++;
          password = userData[i].password;
        }
      }
      if (count === 1) {
        alert("Your recovery password send to Email.");
        window.location.href = "/index.html";
      } else {
        alert("Your email or password may wrong.");
        window.location.href = "index.html";
      }
    }