var slider = document.getElementById("myRange");
slider.step = "1000";
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

document.querySelector("button").addEventListener("click", goTo);
function goTo() {
  window.location.href = "product_page.html";
}