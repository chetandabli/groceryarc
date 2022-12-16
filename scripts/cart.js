




import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();




let url=" http://localhost:3000/cart";

let main_url ="http://localhost:3000";

let get_data=async()=>{

    let res=await fetch(`${url}`)
    let data= await res.json();
    console.log(data)
    append_data(data)
}

get_data();



const append_data=(data)=>{
    if(data.length==0){
        document.getElementById("cart").innerHTML=` <div id="init">
        <div >
            <img src="https://img.freepik.com/premium-vector/shopping-cart-with-products-illustration-buying-food-supermarket-grocery-store-trolley-fresh-fruits-vegetables-purchase-dairy-products-cereals-healthy-diet-nutrition_276875-342.jpg?w=2000" alt="">
            <p><h style="color:rgb(6, 63, 6)">Let's fill the empty</h>&nbsp;<h style="color:green">Basket</h></p>
            <a href="./index.html"><button id="conti">Continue Shopping</button></a>
        </div>
    </div>`

    }else{
        let cont = document.getElementById("cart");
cont.innerHTML=null;
data.forEach((el)=>{
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
    price.innerHTML=`<span id="mrp"><del style="color:red">${el.strike}</del></span>&nbsp;&nbsp;<spam id="bol"><span id="mrp">&#8377</span>${el.price}</spam>`;


    let div4=document.createElement("div");
    div4.setAttribute("class","div4");
    div4.innerHTML=`<button id="minus">-</button>&nbsp;&nbsp;${el.quant}&nbsp;&nbsp;<button id="plus">+</button>`
    
    let remo=document.createElement("button");
    remo.setAttribute("class","remove");
    remo.innerText="Remove";
    remo.onclick=()=>{
        removeproduct(el.id);
    }

    div.append(image,details, price,div4,remo);
    cont.append(div);
})




//delete

let removeproduct= async(id)=>{
    let res=await fetch(`${url}/${id}`,{
        method:"DELETE",
        
    });
 
    get_data(data);
}

}
    }


