import { getId, creEle } from "./shortcuts.js";

///////////////////// navbar ///////////////////////
////////////////////////////////////////////////////
import navbar from "../components/navbar.js";
document.getElementById("master_navbar").innerHTML = navbar();




import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();



let url="http://localhost:3000/cart";

let main_url ="http://localhost:3000"
let get_data=async()=>{

    let res=await fetch(`${url}`)
    let data= await res.json();
    console.log(data)
    append_data(data)
}

get_data();



const append_data=(data)=>{
let cont = document.getElementById("cart");
cont.innerHTML=null;
data.forEach((el,id)=>{
    let div =document.createElement("div");
    div.setAttribute("class","pro_div");
    
    let image = document.createElement("img");
    image.setAttribute("class","p_image");
    image.src=el.image_url;

    let details =document.createElement("p");
    details.setAttribute("class","details")
    details.innerText=el.detail;


    let price =document.createElement("p");
    price.setAttribute("class","price");
    price.innerHTML=`<span id="mrp">MRP:</span><span id="strike"><del style="color:red">${el.strike}</del>&nbsp;&nbsp;</span><span id="price">RS.${el.price}</span>`;


    let div4=document.createElement("div");
    div4.setAttribute("class","div4");
    div4.innerHTML=`<button id="minus">-</button>&nbsp;&nbsp;${el.quant}&nbsp;&nbsp;<button id="plus">+</button>`
    
    let remo=document.createElement("button");
    remo.setAttribute("class","remove");
    remo.innerText="Remove";
    remo.onclick=()=>{
        removeproduct(id);
    }
    // <button class="add">Add</button>`
    
  

    //div2.append(price,div4)
    div.append(image,details, price,div4,remo);
    cont.append(div);
})




let removeproduct= async(id)=>{
    let res=await fetch(`${url}/${id}`,{
        method:"DELETE",
        
    });
 
    get_data();
}

}
