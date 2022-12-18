



import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();



let url_later="http://localhost:3000/save_later";

let url=" http://localhost:3000/cart";

let main_url ="http://localhost:3000";

let get_data=async()=>{
    
    let res=await fetch(`${url}`)
    let data= await res.json();
    console.log(data)
    append_data(data)
}




const append_data=(data)=>{
    let total_amount=0;
    if(data.length==0){
        localStorage.setItem("order_value", total_amount);
        document.getElementById("cart").innerHTML=` <div id="init">
        <div >
            <img src="https://img.freepik.com/premium-vector/shopping-cart-with-products-illustration-buying-food-supermarket-grocery-store-trolley-fresh-fruits-vegetables-purchase-dairy-products-cereals-healthy-diet-nutrition_276875-342.jpg?w=2000" alt="">
            <p><h style="color:rgb(6, 63, 6)">Let's fill the empty</h>&nbsp;<h style="color:green">Basket</h></p>
            <a href="./product.html"><button id="conti">Continue Shopping</button></a>
        </div>
    </div>`

    }else{
        

        let cont = document.getElementById("cart");
cont.innerHTML=null;
data.forEach((el)=>{

    total_amount+=el.price;

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
    
    let later=document.createElement("button");
    later.setAttribute("class","savelater");
    later.innerText="Save as Later";
    
    later.onclick=async()=>{
    
   
        let res =await fetch(`${main_url}/save_later`,{
            method :"POST",
            body: JSON.stringify(el),
            headers:{
                "Content-Type":"application/json"
            }
        })
        localStorage.setItem("save",el.id)
        
        let daat = await res.json();
        console.log(daat)
    }
   

    div.append(image,details, price,div4,remo,later);
    cont.append(div);
})
console.log(total_amount)
document.getElementById("cart_total").innerText=`Subtotal: ₹${total_amount}`;

document.getElementById("total_items").innerText=`Items: ${data.length}`;
localStorage.setItem("order_value", total_amount);

}
}

get_data();


  

      let removeproduct= async(id)=>{
        let res=await fetch(`${url}/${id}`,{
            method:"DELETE",
            
        });
        
        
    }
  
if(localStorage.getItem("save")){
    let x=localStorage.getItem("save");
    localStorage.removeItem("save")
    removeproduct(x);
}



// SAVE LATER



    let getdata=async()=>{
    
        let res=await fetch(`${url_later}`)
        let data= await res.json();
        console.log(data)
        append_dat(data)
    }
    
    
    
    
    const append_dat=(data)=>{
        let total_amount=0;
        if(data.length==0){
            document.getElementById("save_as_later").innerHTML=` <div id="init">
            <div >
                
        </div>`
    
        }else{
            
    
            let cont = document.getElementById("save_as_later");
    cont.innerHTML=null;
    data.forEach((el)=>{
    
        total_amount+=el.price;
    
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
        remo.innerText="Delete";
        remo.onclick=()=>{
            removeproduc(el.id);
        }
        
        let later=document.createElement("button");
        later.setAttribute("class","saveA");
        later.innerText="Add";
        
        later.onclick=async()=>{
           
      
       
            let res =await fetch(`${main_url}/cart`,{
                method :"POST",
                body: JSON.stringify(el),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            localStorage.setItem("savereturn",el.id)
    
         
           
        }
       
    
        div.append(image,details, price,div4,later,remo);
        cont.append(div);
    })
    console.log(total_amount)
    
    
    document.getElementById("total_item").innerText=`Items: ${data.length}`;
   
    
    
    
    
    
    
    
    
    }
    }
    
    getdata();
    
    
      
    
          let removeproduc= async(id)=>{
            let res=await fetch(`${url_later}/${id}`,{
                method:"DELETE",
                
            });
         
            
        }
    
        if(localStorage.getItem("savereturn")){
            let y=localStorage.getItem("savereturn");
            localStorage.removeItem("savereturn")
            removeproduc(y);
        }
        

  


    