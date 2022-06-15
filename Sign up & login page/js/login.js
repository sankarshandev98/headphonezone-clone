document.querySelector("#button").addEventListener("click",getData);

let userData = JSON.parse(localStorage.getItem("signupData"));

function getData(){
        let loginEmail = document.querySelector("#email").value;
        let loginPassword = document.querySelector("#password").value;
        let count=0;
    for(let i=0; i<userData.length; i++){
        if(userData[i].userEmail==loginEmail&& userData[i].userPassword==loginPassword){
            count++;
        }
    }
    if(count===1){
        alert("You are login sucessfully.");
        window.location.href="/index.html";
    }else{
        alert("Your email or password may wrong.");
    }
}

