function add_produc(){
    alert("New product added to tha database")
}
function delete_product(){
    alert("Selected product has been deleted from the database")
}
function update_pric(){
    alert("New price has been updated on the product")
}




let btn=document.getElementById("add_product");
btn.onclick =()=>{
    createPost();
    
}

const createPost = async()=>{
let proName=document.getElementById("proName").value;
let detail=document.getElementById("detail").value;
let rate=document.getElementById("rate").value;
// let select=document.getElementById("select").value;
let price=document.getElementById("price").value;
let off=document.getElementById("of").value;
let strike=document.getElementById("strike").value;
// let common=document.getElementById("common").value;
// let quant=document.getElementById("quant").value;
let category=document.getElementById("category").value;
let image_url=document.getElementById("image_url").value;

let send_this_data={
    
off,
image_url,
proName,
detail,
rate,
select:"<option>3 kg Pack - Rs. 420</option>",
price,
strike,
common:"Standard Delivery:Tomorrow 9:00AM-1:30PM",
quant:"1",
category
    

}
let res=await fetch(" http://localhost:3000/user", {
    method: 'POST',
    body: JSON.stringify(send_this_data),
    headers: {
        'Content-Type': 'application/json'
    }
   

});
let data=await res.json();
console.log('data', data);
// window.location.href=""
}

let dele_btn=document.getElementById("delete_btn")
dele_btn.onclick=()=>{
    deletePost()
    
}

const deletePost =async () =>{
    let delete_id=document.getElementById("delete_id").value

    let res = await fetch(` http://localhost:3000/user/${delete_id}`,{

        method:"DELETE",

        headers : {
            'Content-Type' : 'application/json',
        },
    })
    let data= await res.json()
    console.log(data)
    // window.location.href=""

}

let update_btn=document.getElementById("update_btn")
update_btn.onclick=()=>{
    updatePost()
    
}

const updatePost = async() => {

    let update_id=document.getElementById("update_id").value
    let new_price=document.getElementById("update_price").value
    let send_this_data={
        
        price:new_price
    }
    let res = await fetch(` http://localhost:3000/user/${update_id}`,{

        method:"PATCH",
        body:JSON.stringify(send_this_data),
        headers : {
            'Content-Type' : 'application/json',
        },
    })
    let data= await res.json()
    console.log(data)
    // window.location.href=""
}