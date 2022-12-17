///////////// footer ///////////////////////
/////////////////////////////////////////////
import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();

let url="http://localhost:3000/fruitsVeg";

let main_url ="http://localhost:3000"

let heading =document.getElementById("heading");
let f_v =document.getElementById("f&v");

let bb_combo=document.getElementById("bb_combo");
let fresho=document.getElementById("fresho");
let bb_royal=document.getElementById("bb_royal");
let fortune=document.getElementById("fortune");
let sunpure=document.getElementById("sunpure");
let cont = document.getElementById("container");

let p20=document.getElementById("p20");
let p21_50=document.getElementById("p21_50");
let p51_100=document.getElementById("p51_100");
let p101_200=document.getElementById("p101_200");
let p201_500=document.getElementById("p201_500");
let p501=document.getElementById("p501");

let d10_15=document.getElementById("d10_15");
let d15_25=document.getElementById("d15_25");
let d25=document.getElementById("d25");

let page = document.getElementById("page");

let get_data=async()=>{
 let base_url=`${url}`;
    let res=await fetch(`${url}`)
    let data= await res.json();
    console.log(data)
    let len =data.length;
    append_data(data,base_url,len)
    f_v.innerText=`(${data.length})`
}

get_data();

const append_data=(data,base_url,len)=>{

cont.innerHTML=null;
f_v.innerText=`(${data.length})`;
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
    rating.innerText="Rating: "+el.rate;

    let select =document.createElement("select");
    select.setAttribute("class","select");
    select.innerHTML=el.select;

    let div2 =document.createElement("div");
    div2.setAttribute("class","div2");

    let price =document.createElement("p");
    price.setAttribute("class","price");
    price.innerHTML=`<span class="mrp">MRP:</span><span class="strike">${el.strike} </span><span class="o_price">RS ${el.price}</span>`;

    let delivery =document.createElement("p");
    delivery.setAttribute("class","delivery");
    delivery.innerText=el.common;

    let div4=document.createElement("div");
    div4.setAttribute("class","div4");
    div4.innerHTML=`<div class="qty">Qty</div><input class="quant" type="text" value="${el.quant}">`
    
    let add=document.createElement("button");
    add.setAttribute("class","add");
    add.innerText="ADD";
    
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
 let n=Math.ceil(data.length/5);
 page.innerHTML=null;
 for(let i=0;i<n;i++)
 {
    let pbtn=document.createElement("button");
    pbtn.setAttribute("class","pbtn");
    pbtn.innerText=i+1;
    page.append(pbtn);
    let p=i+1;
    pbtn.onclick=()=>{
        pagination(p,base_url,n)
    }
   
 }
 
}

let fruit =document.getElementById("fruit");
fruit.onclick=()=>{
    get_data();
    
   
    heading.innerText=`Fruits & Vegetables (${36})`;
}

let sprouts =document.getElementById("sprouts");

sprouts.onclick=async ()=>{
    let base_url=`${main_url}/grainsMasala`;
 let res =await fetch (`${main_url}/grainsMasala`);

 let data = await res.json();

 console.log(data);

 append_data(data,base_url);

 heading.innerText=`Cuts & Sprouts (${data.length})`
 
}


let veggies =document.getElementById("veggies");

veggies.onclick=async ()=>{

    let base_url=`${main_url}/bakeryCake`;
 let res =await fetch (`${main_url}/bakeryCake`);

 let data = await res.json();

 console.log(data);

 append_data(data,base_url);

 heading.innerText=`Exotic Fruits & Veggies (${data.length})`
}

let bunches =document.getElementById("bunches");

bunches.onclick=async ()=>{

  let base_url=  `${main_url}/beverages`;

 let res =await fetch (`${main_url}/beverages`);

 let data = await res.json();

 console.log(data);

 append_data(data,base_url);

 heading.innerText=`Flower Bouquets, Bunches (${data.length})`
}

let ff =document.getElementById("ff");

ff.onclick=async ()=>{

    let base_url=`${main_url}/cleaningHouse`;
 let res =await fetch (`${main_url}/cleaningHouse`);

 let data = await res.json();

 console.log(data);

 append_data(data,base_url);

 heading.innerText=`Fresh Fruits (${data.length})`

}

let fv =document.getElementById("fv");

fv.onclick=async ()=>{

    let base_url=`${main_url}/kitchenGarden`;
    
 let res =await fetch (`${main_url}/kitchenGarden`);

 let data = await res.json();

 console.log(data);

 append_data(data,base_url);
 heading.innerText=`Fresh Vegetables (${data.length})`
}

let hs =document.getElementById("hs");

hs.onclick=async ()=>{

    let base_url=`${main_url}/eggMeat`;
 let res =await fetch (`${main_url}/eggMeat`);

 let data = await res.json();

 console.log(data);

 append_data(data,base_url);
 heading.innerText=`Herbs & seasonings (${data.length})`
}

let ofv =document.getElementById("of&v");

ofv.onclick=async ()=>{

    let base_url=`${main_url}/gourmetFood`;
 let res =await fetch (`${main_url}/gourmetFood`);

 let data = await res.json();

 console.log(data);

 append_data(data,base_url);
 heading.innerText=`Organic Fruits & Vegetables (${data.length})`
}





// carry_bag.onchange=(event)=>{
//     if(event.target.checked)

bb_combo.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?proName_like=bb Combo`;
        let result =await fetch (`${url}?proName_like=bb Combo`);

        let fdata = await result.json();
       
        
       
        append_data(fdata,base_url);
        if(fdata.length==0)
       {
        cont.innerHTML=`<h1>No Item Found</h1>`;
       }
    }
    else
    {
        get_data();
    }
}


fresho.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?proName_like=Fresho`;
        let result =await fetch (`${url}?proName_like=Fresho`);

        let fdata = await result.json();
       
        
       
        append_data(fdata,base_url);
        if(fdata.length==0)
        {
         cont.innerHTML=`<h1>No Item Found</h1>`;
        }
    }
    else
    {
        get_data();
    }
}


bb_royal.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?proName_like=BB Royal`;
        let result =await fetch (`${url}?proName_like=BB Royal`);

        let fdata = await result.json();
       
       
        append_data(fdata,base_url);
        if(fdata.length==0)
        {
         cont.innerHTML=`<h1>No Item Found</h1>`;
        }
       
    }
    else
    {
        get_data();
    }
}

fortune.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?proName_like=Fortune`;
        let result =await fetch (`${url}?proName_like=Fortune`);

        let fdata = await result.json();
       
       
       
        append_data(fdata,base_url);
        if(fdata.length==0)
        {
         cont.innerHTML=`<h1>No Item Found</h1>`;
        }
    }
    else
    {
        get_data();
    }
}

sunpure.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?proName_like=Sunpure`;
        let result =await fetch (`${url}?proName_like=Sunpure`);

        let fdata = await result.json();
        
        append_data(fdata,base_url);
        if(fdata.length==0)
       {
        cont.innerHTML=`<h1>No Item Found</h1>`;
       }
       
    }
    else
    {
        get_data();
    }
}

p20.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?price_lte=19`;
        let result =await fetch (`${url}?price_lte=19`);

        let fdata = await result.json();
       
        
       
        append_data(fdata,base_url);
        if(fdata.length==0)
       {
        cont.innerHTML=`<h1>No Item Found</h1>`;
       }
    }
    else
    {
        get_data();
    }
}


p21_50.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?price_gte=21&price_lte=50`;
        let result =await fetch (`${url}?price_gte=21&price_lte=50`);

        let fdata = await result.json();
       
        
       
        append_data(fdata,base_url);
        if(fdata.length==0)
        {
         cont.innerHTML=`<h1>No Item Found</h1>`;
        }
    }
    else
    {
        get_data();
    }
}


p51_100.onchange=async (event)=>{
    if(event.target.checked)
    { 
        let base_url=`${url}?price_gte=51&price_lte=100`;
        let result =await fetch (`${url}?price_gte=51&price_lte=100`);

        let fdata = await result.json();
       
       
        append_data(fdata,base_url);
        if(fdata.length==0)
        {
         cont.innerHTML=`<h1>No Item Found</h1>`;
        }
       
    }
    else
    {
        get_data();
    }
}

p101_200.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?price_gte=101&price_lte=200`;
        let result =await fetch (`${url}?price_gte=101&price_lte=200`);

        let fdata = await result.json();
       
       
       
        append_data(fdata,base_url);
        if(fdata.length==0)
        {
         cont.innerHTML=`<h1>No Item Found</h1>`;
        }
    }
    else
    {
        get_data();
    }
}

p201_500.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?price_gte=201&price_lte=500`;
        let result =await fetch (`${url}?price_gte=201&price_lte=500`);

        let fdata = await result.json();
        
        append_data(fdata,base_url);
        if(fdata.length==0)
       {
        cont.innerHTML=`<h1>No Item Found</h1>`;
       }
       
    }
    else
    {
        get_data();
    }
}

p501.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url= `${url}?price_gte=501`;
        let result =await fetch (`${url}?price_gte=501`);

        let fdata = await result.json();
        
        append_data(fdata,base_url);
        if(fdata.length==0)
       {
        cont.innerHTML=`<h1>No Item Found</h1>`;
       }
       
    }
    else
    {
        get_data();
    }
}


// let popularity =document.getElementById("popularity");
// let sortlth =document.getElementById("sortlth");
// let sorthtl =document.getElementById("sorthtl");
// let alpha =document.getElementById("alpha");

// 


let sorty = document.getElementById("sorty");

sorty.onchange=async()=>{
   let base_url;
 if(sorty.value=="Price-Low to High")
 {
     base_url=`${url}?_sort=price&_order=asc`;
   let res =await fetch(`${url}?_sort=price&_order=asc`)

   let data =await res.json();

   append_data(data,base_url);
 }
 else if(sorty.value=="Price-High to Low")
 {
    base_url =`${url}?_sort=price&_order=desc`;
    let res =await fetch(`${url}?_sort=price&_order=desc`)

   let data =await res.json();

   append_data(data,base_url);
 }
 else if(sorty.value=="alphabetical")
 {
    base_url=`${url}?_sort=detail&_order=asc`;
    let res =await fetch(`${url}?_sort=detail&_order=asc`)

   let data =await res.json();

   append_data(data,base_url);
 }
 else{
    get_data();
 }
 

}


d10_15.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?off_like=11%`;
        let result =await fetch (`${url}?off_like=11%`);

        let fdata = await result.json();
       
       
       
        append_data(fdata,base_url);
        if(fdata.length==0)
        {
         cont.innerHTML=`<h1>No Item Found</h1>`;
        }
    }
    else
    {
        get_data();
    }
}

d15_25.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?off_like=20%`;
        let result =await fetch (`${url}?off_like=20%`);

        let fdata = await result.json();
        
        append_data(fdata,base_url);
        if(fdata.length==0)
       {
        cont.innerHTML=`<h1>No Item Found</h1>`;
       }
       
    }
    else
    {
        get_data();
    }
}


d25.onchange=async (event)=>{
    if(event.target.checked)
    {
        let base_url=`${url}?off_like=30%`;
        let result =await fetch (`${url}?off_like=30%`);

        let fdata = await result.json();
        console.log(fdata)
        append_data(fdata,base_url);
        if(fdata.length==0)
       {
        cont.innerHTML=`<h1>No Item Found</h1>`;
       }
       console.log("25")
       
    }
    else
    {
        get_data();
    }
}


let pagination= async(p,base,n)=>{
    
    let base_url=`${base}?_page=${p}&_limit=5`;

    let res=await fetch(`${base}?_page=${p}&_limit=5`);

    let data =await res.json();

    append_data(data,base_url);
    page.innerHTML=null;
    for(let i=0;i<n;i++)
 {
    let pbtn2=document.createElement("button");
    pbtn2.setAttribute("class","pbtn");
    pbtn2.innerText=i+1;
    page.append(pbtn2);
    let k=i+1;

    pbtn2.onclick=async()=>{
        console.log("kingkong")
        let base_url=`${base}?_page=${k}&_limit=5`;

        let res=await fetch(`${base}?_page=${k}&_limit=5`);
    
        let data =await res.json();
        append_data(data,base_url);
        pagination(k,base_url,n)
    }

}
}

