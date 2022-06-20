// data
let data=JSON.parse(localStorage.getItem('cartLSS'));
let total = 0;
displayCart(data);
 
 function displayCart(data){
 
 data.map(function(elem ,index){
 // quantity adding and reducing for add quantity
 document.querySelector("tbody").innerHtml="";
 elem.quantity=1;
 
 // table data first ------->
 let tr = document.createElement("tr");
 let td1 = document.createElement("td");
 let divm = document.createElement("div");
 divm.setAttribute("id","td1");
 let divc1 = document.createElement("div");
 let img = document.createElement("img");
 img.src=elem.image_url;
 let divc2 = document.createElement("div");
 let anchor = document.createElement("a");
 let span = document.createElement("span");
 span.innerText="Black";
 anchor.innerText=elem.name;
 anchor.setAttribute("href",elem.image_url);
 let divcsub =document.createElement("div");
 let sprice=document.createElement("span");
 divcsub.setAttribute("id", "sprice");
 sprice="₹"+elem.price;
 divcsub.append(sprice);
 divc2.append(anchor,span,divcsub);
 divc1.append(img);
 divm.append(divc1,divc2);
 td1.append(divm);
 // table data second ------->
 let td2 = document.createElement("td");
 let divm2 = document.createElement("div");
 divm2.setAttribute("id","td2");
 let minus = document.createElement("button");
 minus.addEventListener("click",function(){
 reducing(elem);
 
 if(elem.quantity>=1 ){
 squantity.innerText=elem.quantity;
 p.innerText="₹"+elem.price*elem.quantity;
 
 
 }else{
 squantity.innerText=1;
}
 
});
minus.innerText="-";
let squantity = document.createElement("span");
squantity.innerText=1; 
let plus = document.createElement("button");
plus.addEventListener("click",function(){
adding(elem);

if(elem.quantity>1){
squantity.innerText=elem.quantity;
p.innerText="₹"+elem.price*elem.quantity;


}else{
squantity.innerText=1;
}

});
plus.innerText="+";
let removed = document.createElement("button");
removed.setAttribute("id","btn");
removed.innerText="Remove";
removed.addEventListener("click",function(){
elemRemove(index);
});
divm2.append(minus,squantity,plus)
td2.append(divm2,removed);
// table data third ------->


let td3 = document.createElement("td");
let p = document.createElement("p");
td3.append(p);
p.innerText="₹"+elem.price;

tr.append(td1,td2,td3);
document.querySelector("tbody").append(tr);
});


}
data.map(function(element){
total+=element.price;
});

function reducing(elem){

event.preventDefault();
for(let i=0; i<data.length;i++){
if(elem==data[i]&&elem.quantity>1){
    elem.quantity--;
    total-=elem.price;
    document.querySelector("#total").innerHTML="₹"+total;
 } 
 }
 
 }
function adding(elem){
 event.preventDefault();
 for(let i=0; i<data.length;i++){
 if(elem==data[i]){
 elem.quantity++;
 total+=elem.price;
 document.querySelector("#total").innerHTML="₹"+total;
 }
 } 
 
}
function elemRemove(index){
 event.preventDefault();
 data.splice(index,1);
 localStorage.setItem('cartLSS',JSON.stringify(data));
 displayCart(data); 
 window.location.href='cart.html';
}
// checkout all item price total
document.querySelector("#total").innerHTML="₹"+total;
document.querySelector('#payment').addEventListener('click', goToPayment);
function goToPayment(){
    window.location.href='payment_page.html';
}