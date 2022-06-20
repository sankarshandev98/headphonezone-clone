let productPreLS = JSON.parse(localStorage.getItem("cartLS")) || [];
  displayProduct(productPreLS);

  function displayProduct(data) {
    data.map(function (elem, index) {
      document.querySelector("#smlmdl").innerHTML = elem.name;
      document.querySelector(".b").innerHTML = elem.brand;
      document.querySelector(".n").innerHTML = elem.name;
      document.querySelector(".c").innerHTML = elem.category;
      document.querySelector(".a").src = elem.image_url;
      document.querySelector(".pr").innerHTML = "₹" + elem.price;
      document.querySelector(".stpr").innerHTML ="₹ MRP" + elem.delprice;
      document.querySelector(".d").src = elem.short_url1;
      document.querySelector(".e").src = elem.short_url3;
      document.querySelector(".f").src = elem.short_url2;
      document.querySelector(".g").src = elem.short_url1;
      document.querySelector(".h").src = elem.short_url3;
      document.querySelector(".smlico").src = elem.image_url;
    });
  }
  document.querySelector("button").addEventListener("click", cartPage);
  function cartPage() {
    localStorage.setItem("cartLSS", JSON.stringify(productPreLS));
    window.location.href = "cart.html";
  }