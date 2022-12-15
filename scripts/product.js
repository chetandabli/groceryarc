///////////// footer ///////////////////////
/////////////////////////////////////////////
import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();

let url="http://localhost:3000/fruitsVeg";

let main_url ="http://localhost:3000"
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
    div4.innerHTML=`<div class="qty">Qty</div><input class="quant" type="text" value="${el.quant}">`
    
    let add=document.createElement("button");
    add.setAttribute("class","add");
    add.innerText="Add";
    
    add.onclick= async()=>{

        let res =await fetch(`${main_url}/cart`,{
            method :"POST",
            body: JSON.stringify(el),
            headers:{
                "Content-Type":"application/json"
            }
        })

        let daat = await res.json();
        console.log(daat)
    }
    // <button class="add">Add</button>`
     
    div4.append(add)

    div2.append(price, delivery,div4)
    div.append(discount, image, proname, details, rating, select, div2);
    cont.append(div);
})



}

