document.querySelector("#button").addEventListener("click",getData);

let userLogin = JSON.parse(localStorage.getItem("signupData"));

function getData(){
        let loginEmail = document.querySelector("#email").value;
        let loginPassword = document.querySelector("#password").value;
        let count=0;
    for(let i=0; i<userLogin.length; i++){
        if(userLogin[i].userEmail==loginEmail&& userLogin[i].userPassword==loginPassword){
            count++;
        }
    }
    if(count===1){
        alert("You are login sucessfully.");
        localStorage.setItem("userLogin",JSON.stringify(loginEmail));
        window.location.href="/index.html";
    }else{
        alert("Your email or password may wrong.");
        
    }
}

