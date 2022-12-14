import {getId, creEle} from "./shortcuts.js"

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

let url="http://localhost:3000/fruitsVeg";

let get_data=async()=>{

    let res=await fetch(`${url}`)
    let data= await res.json();
    console.log(data)
    append_data(data)
}

get_data();

const append_data=(data)=>{
let cont = document.getElementById("container");
cont.innerHTML=null;
data.forEach((el)=>{
    let div =document.createElement("div");
    div.setAttribute("class","product_div");
    let discount =document.createElement("div");
    discount.setAttribute("class","discount");
    discount.innerText=el.off;
    let image = document.createElement("img");
    image.setAttribute("class","p_image");
    image.src=el.image_url;

    let proname =document.createElement("p");
    proname.setAttribute("class","proname");
    proname.innerText = el.proName;

   
    let details =document.createElement("p");
    details.setAttribute("class","details")
    details.innerText=el.detail;

    let rating =document.createElement("p");
    rating.setAttribute("class","rating");
    rating.innerText=el.rate;

    let select =document.createElement("select");
    select.setAttribute("class","select");
    select.innerHTML=el.select;

    let div2 =document.createElement("div");
    div2.setAttribute("class","div2");

    let price =document.createElement("p");
    price.setAttribute("class","price");
    price.innerHTML=`<span id="mrp">MRP:</span><span id="strike">${el.strike}</span><span id="price">RS.${el.price}</span>`;

    let delivery =document.createElement("p");
    delivery.setAttribute("class","delivery");
    delivery.innerText=el.common;

    let div4=document.createElement("div");
    div4.setAttribute("class","div4");
    div4.innerHTML=`<div class="qty">Qty</div><input id="quant" type="text" value="${el.quant}">
    <button id="add">Add</button>`
   

    div2.append(price, delivery,div4)
    div.append(discount, image, proname, details, rating, select, div2);
    cont.append(div);
})



}

