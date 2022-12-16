

///////////// footer ///////////////////////
/////////////////////////////////////////////
import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();



// Take out the form-input button using DOM.
const Register_btn = document.querySelector("#register form");
Register_btn.addEventListener("submit",RegisterFunction);

// Make API request to server for registering the new user.
async function RegisterFunction(event) {
  try {
    event.preventDefault();
    let all_input_tags = document.querySelectorAll("#register input");
    let userObj = {};
    for (let i = 0; i < all_input_tags.length - 1; i++) {
      userObj[all_input_tags[i].id] = all_input_tags[i].value;
    }
    let register_request = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj)
    });
    if(register_request.ok){
        alert("Hurry, User has been created !!");
         window.location.assign("signin.html")
    }else{
        alert("Bad request has been made.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  }
}


