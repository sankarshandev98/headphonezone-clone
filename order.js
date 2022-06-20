let data = JSON.parse(localStorage.getItem("signupData"));
  let fname = "";
  data.forEach(function (elem) {
    fname = elem.userFname;
    document.querySelector("#hname").innerHTML = " HELLO  " + fname.toUpperCase();
  });