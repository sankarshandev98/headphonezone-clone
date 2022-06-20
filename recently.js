 let data = JSON.parse(localStorage.getItem("signupData"));
  let fname = "";
  data.forEach(function (elem) {
    fname = elem.userFname;
    document.querySelector("#hname").innerHTML =
      " HELLO  " + fname.toUpperCase();
  });
  document.querySelector('#pro').addEventListener('click',prom);
  function prom(){
    window.location.href='product_page.html';
  }