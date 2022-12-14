import {getId, creEle} from "./sortcuts.js"

// navbar
import navbar from "../components/navbar.js";
document.getElementById("master_navbar").innerHTML = navbar()
let navBaronScroll = getId("master_navbar")
let logo = getId("nav_logo")
let logonearbybutton = getId("scroll_time_menu_button")
let topminiBar = getId("nav_topmost_section");
let menu = getId("nav_menu")

window.onscroll = ()=>{
    if(window.pageYOffset>= menu.offsetTop){
        logo.style.height = "60px"
        logonearbybutton.innerHTML = `<p> SHOP <span id="drop_down_menu_collaps">▽</span></p>`
        topminiBar.innerHTML = null;
        topminiBar.style.height = "0px"
        menu.innerHTML = null;
        menu.style.height = "0px"
        navBaronScroll.style.boxShadow = "0 0 2rem 0 rgba(0, 0, 0, 0.1)"
    }else{
        logo.style.height = "91px"
        logonearbybutton.innerHTML = null;
        topminiBar.style.height = "27px";
        topminiBar.innerHTML = `<img src="./images/logo heading.png" alt="">
        <p><i class="bi bi-telephone"></i> 1860 123 1000</p>
        <p><i class="bi bi-geo-alt"></i> Address <span id="nav_address_sign">▽</span></p>
        <p id="login_button_nav"><i class="bi bi-person"></i> Login/Sign Up </p>`
        menu.style.height = "36px"
        menu.innerHTML = `<div id="dropdown_menu">
        <p>SHOP BY CATEGORY</p>
        <P>▽</P>
    </div>
    <div id="nav_offers_button">
        <a href="/offers.html"><i class="bi bi-tag-fill" style="color: #DA251D;"></i>OFFERS</a>
    </div>`
    }
}


//footer
import { footer } from "../components/footer.js";
let footer_new=document.getElementById("footer");
footer_new.innerHTML=footer();


