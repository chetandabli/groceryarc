
///////////// footer ///////////////////////
/////////////////////////////////////////////
import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();


const Login_btn = document.querySelector("#login form");
Login_btn.addEventListener("submit",LoginFunction);

async function LoginFunction(event){
    try {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let p = document.getElementById("password").value;
        let login_request = await fetch(`http://localhost:3000/user?q=${username}`);
        login_request = await login_request.json()
        localStorage.setItem("loggedName", login_request[0].name)
        let pass = login_request[0].password;
        tempFunction(p, pass)
    } catch (error) {
		console.log(error);
        alert("user not exist please create account first!.");
    }
}

function tempFunction(p, pass){
    if(p == pass){
        alert("Login successful!")
    }else{
        alert("please enter correct password!")
    }
}
