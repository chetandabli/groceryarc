import { getId, creEle } from "./shortcuts.js";

///////////////////// navbar ///////////////////////
////////////////////////////////////////////////////
import { navbar, mNavbar } from "../components/navbar.js";

// menu pop up functionality
var categories = [
  {
    "Fruits & Vegatables": [
      {
        "Fresh Vegatables": [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        "Herbs & Seasonings": [
          "Lemon, Ginger & Garlic",
          "Indian & Exotic Herbs",
        ],
      },
      {
        "Fresh Fruits": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        "Organic Fruits & Vegetables": ["Organic Vegetables", "Organic Fruits"],
      },
      {
        "Cuts & Sprouts": [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Exotic Fruits & Veggies": ["Exotic Vegetables", "Exotic Fruits"],
      },
      {
        "Flower Bouquets, Bunches": ["Marigold", "Other Flowers", "Roses"],
      },
    ],
  },
  {
    "Foodgrains, Oil & Masala": [
      {
        "Atta, Flours & Sooji": [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        "Rice & Rice Products": [
          "Lemon, Ginger & Garlic",
          "Indian & Exotic Herbs",
        ],
      },
      {
        "Dals & Pulses": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        "Organic Staples": ["Organic Vegetables", "Organic Fruits"],
      },
      {
        "Edible Oils & Ghee": [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Salt, Sugar & Jaggery": ["Exotic Vegetables", "Exotic Fruits"],
      },
      {
        "Masalas & Spices": ["Marigold", "Other Flowers", "Roses"],
      },
      {
        "Dry Fruits": [
          "Almonds",
          "Cashews",
          "Raisins",
          "Mukhwas",
          "Other Dry Fruits",
        ],
      },
    ],
  },
  {
    "Bakery, Cakes & Dairy": [
      {
        Dairy: [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        "Breads & Buns": ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
      },
      {
        "Non Dairy": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        "Gourmet Breads": ["Organic Vegetables", "Organic Fruits"],
      },
      {
        "Cookies, Rusk & Khari": [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Ice Creams & Desserts": ["Exotic Vegetables", "Exotic Fruits"],
      },
      {
        "Bakery Snacks": ["Marigold", "Other Flowers", "Roses"],
      },
      {
        "Cakes & Pastries": [
          "Almonds",
          "Cashews",
          "Raisins",
          "Mukhwas",
          "Other Dry Fruits",
        ],
      },
    ],
  },
  {
    Beverages: [
      {
        "Energy & Soft Drinks": [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        Water: ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
      },
      {
        "Health Drink, Supplement": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        Tea: ["Organic Vegetables", "Organic Fruits"],
      },
      {
        Coffee: [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Fruit Juices & Drinks": ["Exotic Vegetables", "Exotic Fruits"],
      },
    ],
  },
  {
    "Snacks & Branded Foods": [
      {
        "Fresh Vegatables": [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        "Herbs & Seasonings": [
          "Lemon, Ginger & Garlic",
          "Indian & Exotic Herbs",
        ],
      },
      {
        "Fresh Fruits": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        "Organic Fruits & Vegetables": ["Organic Vegetables", "Organic Fruits"],
      },
      {
        "Cuts & Sprouts": [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Exotic Fruits & Veggies": ["Exotic Vegetables", "Exotic Fruits"],
      },
      {
        "Flower Bouquets, Bunches": ["Marigold", "Other Flowers", "Roses"],
      },
    ],
  },
  {
    "Beauty & Hygiene": [
      {
        "Atta, Flours & Sooji": [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        "Rice & Rice Products": [
          "Lemon, Ginger & Garlic",
          "Indian & Exotic Herbs",
        ],
      },
      {
        "Dals & Pulses": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        "Organic Staples": ["Organic Vegetables", "Organic Fruits"],
      },
      {
        "Edible Oils & Ghee": [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Salt, Sugar & Jaggery": ["Exotic Vegetables", "Exotic Fruits"],
      },
      {
        "Masalas & Spices": ["Marigold", "Other Flowers", "Roses"],
      },
      {
        "Dry Fruits": [
          "Almonds",
          "Cashews",
          "Raisins",
          "Mukhwas",
          "Other Dry Fruits",
        ],
      },
    ],
  },
  {
    "Cleaning & Household": [
      {
        Dairy: [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        "Breads & Buns": ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
      },
      {
        "Non Dairy": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        "Gourmet Breads": ["Organic Vegetables", "Organic Fruits"],
      },
      {
        "Cookies, Rusk & Khari": [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Ice Creams & Desserts": ["Exotic Vegetables", "Exotic Fruits"],
      },
      {
        "Bakery Snacks": ["Marigold", "Other Flowers", "Roses"],
      },
      {
        "Cakes & Pastries": [
          "Almonds",
          "Cashews",
          "Raisins",
          "Mukhwas",
          "Other Dry Fruits",
        ],
      },
    ],
  },
  {
    "Kitchen, Garden & Pets": [
      {
        "Energy & Soft Drinks": [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        Water: ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
      },
      {
        "Health Drink, Supplement": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        Tea: ["Organic Vegetables", "Organic Fruits"],
      },
      {
        Coffee: [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Fruit Juices & Drinks": ["Exotic Vegetables", "Exotic Fruits"],
      },
    ],
  },
  {
    "Eggs, Meat & Fish": [
      {
        Dairy: [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        "Breads & Buns": ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
      },
      {
        "Non Dairy": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        "Gourmet Breads": ["Organic Vegetables", "Organic Fruits"],
      },
      {
        "Cookies, Rusk & Khari": [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Ice Creams & Desserts": ["Exotic Vegetables", "Exotic Fruits"],
      },
      {
        "Bakery Snacks": ["Marigold", "Other Flowers", "Roses"],
      },
      {
        "Cakes & Pastries": [
          "Almonds",
          "Cashews",
          "Raisins",
          "Mukhwas",
          "Other Dry Fruits",
        ],
      },
    ],
  },
  {
    "Gourmet & World Food": [
      {
        "Atta, Flours & Sooji": [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        "Rice & Rice Products": [
          "Lemon, Ginger & Garlic",
          "Indian & Exotic Herbs",
        ],
      },
      {
        "Dals & Pulses": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        "Organic Staples": ["Organic Vegetables", "Organic Fruits"],
      },
      {
        "Edible Oils & Ghee": [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Salt, Sugar & Jaggery": ["Exotic Vegetables", "Exotic Fruits"],
      },
      {
        "Masalas & Spices": ["Marigold", "Other Flowers", "Roses"],
      },
      {
        "Dry Fruits": [
          "Almonds",
          "Cashews",
          "Raisins",
          "Mukhwas",
          "Other Dry Fruits",
        ],
      },
    ],
  },
  {
    "Baby Care": [
      {
        "Energy & Soft Drinks": [
          "Potato, Onion & Tomato",
          "Cucumber & Capsicum",
          "Leafy Vegetables",
          "Root Vegetables",
          "Beans, Brinjals & Okra",
          "Cabbage & Cauliflower",
          "Gourd, Pumpkin, Drumstick",
          "Specialty",
        ],
      },
      {
        Water: ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
      },
      {
        "Health Drink, Supplement": [
          "Banana, Sapota & Papaya",
          "Kiwi, Melon, Citrus Fruit",
          "Apples & Pomegranate",
          "Seasonal Fruits",
          "Mangoes",
          "Fruit Baskets",
        ],
      },
      {
        Tea: ["Organic Vegetables", "Organic Fruits"],
      },
      {
        Coffee: [
          "Cut Fruit, Tender Coconut",
          "Cut & Peeled Veggies",
          "Fresh Salads & Sprouts",
          "Recipe Packs",
        ],
      },
      {
        "Fruit Juices & Drinks": ["Exotic Vegetables", "Exotic Fruits"],
      },
    ],
  },
];

const menusShow = () => {
  getId("firstMenus").innerHTML = null;
  getId("secondMenus").innerHTML = null;
  getId("thirdMenus").innerHTML = null;
  getId("lastMenus").innerHTML = null;
  categories.forEach((el) => {
    let p = creEle("a");
    p.href = "./product.html";
    p.innerText = Object.keys(el)[0];
    // console.log(el[`${Object.keys(el)}`]);
    p.onmouseover = () => {
      secondMenus(el[`${Object.keys(el)[0]}`]);
    };
    getId("firstMenus").append(p);

    let arrayThirdMenu = secondMenus(el[`${Object.keys(el)[0]}`]);
    thirdMenus(arrayThirdMenu[0]);
  });
  getId(
    "lastMenus"
  ).innerHTML = `<p>Popular Searches</p></p><a href="./product.html">Banana, Sapota &amp; Papaya</a><a href="./product.html">Kiwi, Melon, Citrus Fruit</a><a href="./product.html">Apples &amp; Pomegranate</a><a href="./product.html">Seasonal Fruits</a><a href="./product.html">Mangoes</a><a href="./product.html">Fruit Baskets</a>`;
};

function secondMenus(data) {
  getId("secondMenus").innerHTML = null;
  let arrayThirdMenu = [];
  data.forEach((item) => {
    let p = creEle("a");
    p.href = "./product.html";
    p.innerText = Object.keys(item)[0];

    p.onmouseover = () => {
      thirdMenus(item[`${Object.keys(item)[0]}`]);
    };

    getId("secondMenus").append(p);
    arrayThirdMenu.push(item[`${Object.keys(item)[0]}`]);
  });
  return arrayThirdMenu;
}

function thirdMenus(data) {
  getId("thirdMenus").innerHTML = null;
  data.forEach((el) => {
    let p = creEle("a");
    p.href = "./product.html";
    p.innerText = el;

    getId("thirdMenus").append(p);
  });
}

//cart items pop up
const cartPop = (data)=>{
  getId("cart_pop_up").innerHTML = null;
  console.log("loppppppp")
  let subtotal = 0;


  let granddiv = creEle("div");
  granddiv.classList = "granddiv"
  granddiv.setAttribute("id", "granddiv")
  getId("cart_pop_up").append(granddiv)

  if(data != undefined){
    data.forEach((el)=>{
      let w = ""
      for(let i = 3; i < el.strike.length; i++){
        w += el.strike[i]
      }
      let x = Number(w)-el.price;
      subtotal += el.price;
      // sample code for pop cart
  //     let tempDiv = `<div class="cart_pop_div">
  //     <img class="cart_pop_img" src="${el.image_url}">
  //     <div class="cart_pop_brand_name">
  //         <p>${el.proName}</p>
  //         <p>${el.detail}</p>
  //         <p>1 x ${el.price}</p>
  //     </div>
  //     <div class="last_div_pop_cart">
  //         <div class="cart_pop_price_div">
  //             <div>
  //                 <p>Rs ${el.price}</p>
  //                 <p style="text-decoration: line-through;">${el.strike}</p>
  //             </div>
  //             <p>Saved Rs${x}</p>
  //         </div>
  //         <p class="cart_pop_remove"><i class="bi bi-x-circle"></i></p>
  //     </div>
  // </div>`

      let cart_pop_div = creEle("div");
      cart_pop_div.classList = "cart_pop_div";

      let img = creEle("img");
      img.classList = "cart_pop_img"
      img.src = el.image_url;

      let cart_pop_brand_name = creEle("div");
      cart_pop_brand_name.classList = "cart_pop_brand_name";

      let p1 = creEle("p");
      p1.innerText = el.proName;
      let p2 = creEle("p");
      p2.innerText = el.detail;
      let p3 = creEle("p");
      p3.innerText = `1 x ${el.price}`;

      cart_pop_brand_name.append(p1, p2, p3);

      let last_div_pop_cart = creEle("div");
      last_div_pop_cart.classList = "last_div_pop_cart"

      let cart_pop_price_div = creEle("div");
      cart_pop_price_div.classList = "cart_pop_price_div";

      let div = creEle("div");

      let s1 = creEle("p");
      s1.innerText = `Rs ${el.price}`;
      let s2 = creEle("p");
      s2.innerText = el.strike;
      s2.style.textDecorationStyle = "line-through";

      div.append(s1, s2);

      let p = creEle("p");
      p.innerText = `Saved Rs${x}`

      cart_pop_price_div.append(div, p);

      let btn = creEle("p");
      btn.classList = "cart_pop_remove";
      btn.innerHTML = `<i class="bi bi-x-circle"></i>`;
      btn.onclick = ()=>{
        removeproduct(el.id);
      }

      last_div_pop_cart.append(cart_pop_price_div, btn)

      cart_pop_div.append(img, cart_pop_brand_name, last_div_pop_cart);

      getId("granddiv").append(cart_pop_div)
      // arr.push(tempDiv)
    })
  }else{
    let empty = creEle("p");
    empty.classList = "empty";
    empty.innerText = "Your basket is empty. Start shopping now!"
    getId("cart_pop_up").append(empty)
  }
    
    // getId("cart_pop_up").innerHTML = arr.join(" ");

    let div = creEle("div");
    div.classList = "pop_checkout_box";

    let div1 = creEle("div");
    let p = creEle("p");
    p.innerText = `**Actual Delivery Charges computed at checkout ⁉️`;
    div1.append(p);

    let div2 = creEle("div");
    let firstDiv = creEle("div");
    firstDiv.classList = "sub_total_pop_cart"

    let tempMaster = creEle("div")

    let temp1 = creEle("div");
    let s1 = creEle("p");
    s1.innerText = `Sub Total: `;
    let s2 = creEle("p");
    s2.innerText = `Rs${subtotal}`;
    temp1.append(s1, s2)

    let temp2 = creEle("div");
    let t1 = creEle("p");
    t1.innerText = `Delivery Charge : `;
    let t2 = creEle("p");
    t2.innerText = ` ** 😒`; 
    temp2.append(t1, t2);

    tempMaster.append(temp1, temp2)

    firstDiv.append(tempMaster);

    let secondDiv = creEle("button");
    secondDiv.innerText = `View Basket & Checkout`;
    secondDiv.classList = "cart_pop_button";
    secondDiv.setAttribute("id", "cart_button_pop");
    secondDiv.onclick = ()=>{
      location.href = "./cart.html";
    }

    div2.append(firstDiv, secondDiv);

    div.append(div1, div2);

    getId("cart_pop_up").append(div)

}

let url = "http://localhost:3000/";
//deleting product from pop cart
let removeproduct= async(id)=>{
  let res=await fetch(`${url}cart/${id}`,{
      method:"DELETE",
      
  });
}

var isOnDiv = false;
var isInPopMenu = false;

//debouncing, search functionality

let paths = [
  "fruitsVeg",
  "grainsMasala",
  "bakeryCake",
  "beverages",
  "cleaningHouse",
  "kitchenGarden",
  "eggMeat",
  "gourmetFood",
];
let id;

let debouncing = () => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(async (event) => {
    let q = getId("search").value;
    let results = [];
    let res = await Promise.all(
      paths.map(async (el) => {
        let x = await fetch(`${url}${el}?q=${q}`);
        let data = await x.json();
        if (data.length != 0) {
          results.push(...data);
        }
        return data;
      })
    );
    // console.log(results);
    append(results);
  }, 1000);
};

function append(data) {
  let i = 0;
  getId("search_results").innerHTML = null;
  let topMassage = creEle("p");
  topMassage.classList = "topMassage";
  topMassage.innerText = `Showing results for "${getId("search").value}"`;
  getId("search_results").append(topMassage);
  data.forEach((el) => {
    let masterDiv = creEle("div");
    masterDiv.classList = "search_res_box";

    let div = creEle("div");
    let img = creEle("img");
    img.src = el.image_url;

    let divName = creEle("div");
    divName.classList = "brand_name";
    let brand = creEle("p");
    brand.innerText = el.proName;
    let itemName = creEle("p");
    itemName.innerText = el.detail;
    divName.append(brand, itemName);

    div.append(img, divName);

    let div2 = creEle("div");
    let pricediv = creEle("div");
    pricediv.classList = "price_div";
    let p = creEle("p");
    p.innerText = `₹${el.price}`;

    let p2 = creEle("p");
    p2.innerText = `₹${el.strike}`;
    p2.style.textDecoration = "line-through";

    pricediv.append(p, p2);

    let btn = creEle("button");
    btn.classList = "search_res_button";
    btn.innerText = "ADD 🛒";
    btn.onclick = () => {
      addToCart(el);
    };

    div2.append(pricediv, btn);
    masterDiv.append(div, div2);
    if (i < 10) {
      getId("search_results").append(masterDiv);
      i++;
    } else {
      i++;
    }
  });
  let buttomMassage = creEle("p");
  buttomMassage.classList = "buttomMassage";
  buttomMassage.innerText = `VIEW ALL PRODUCTS(${i})`;
  getId("search_results").append(buttomMassage);
}

async function addToCart(el) {
  try {
    let res = await fetch(`${url}cart`, {
      method: "POST",
      body: JSON.stringify(el),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

//massive
// responsiveness for mobile devices
var flag;
const mediaQueryList = window.matchMedia("(max-width: 750px)");

if (mediaQueryList.matches) {
  flag = false;
  getId("master_navbar").innerHTML = mNavbar();
  getId("master_navbar").style.backgroundColor = "#7ED957";
  getId("search").addEventListener("input", ()=>{
    getId("search_results").style.zIndex = "-1"
    debouncing()
  });
  getId("mobile_menu_lines").addEventListener("click", () => {
    //menu fucntion
  });
  getId("top_menu_mobile_second").addEventListener("click", () => {
    location.href = "./signin.html";
  });
  getId("top_menu_mobile_third").addEventListener("click", () => {
    location.href = "./index.html";
  });
  getId("top_menu_mobile_fifth").addEventListener("click", () => {
    location.href = "./cart.html";
  });
  (async()=>{
    try{
      let res=await fetch(`${url}cart`)
      let data= await res.json();
      // console.log(data)
      getId("cart_count_mobile_tag").innerText = data.length
    }
    catch(err){
      getId("cart_count_mobile_tag").innerText = 0
      console.log(err)
    }
    
  })()
} else {
  flag = true;
  getId("master_navbar").innerHTML = navbar();
  getId("master_navbar").style.backgroundColor = "#fff";
  getId("nav_logo_img").addEventListener("click", () => {
    location.href = "./index.html";
  });
  getId("nav_cart").addEventListener("click", () => {
    location.href = "./cart.html";
  });
  getId("login_button_nav").addEventListener("click", () => {
    location.href = "./signin.html";
  });
  getId("search").addEventListener("input", debouncing);
  getId("search_results").addEventListener("mouseleave", () => {
    getId("search_results").innerHTML = null;
  });

  getId("dropdown_menu").addEventListener("mouseover", () => {
    isOnDiv = true;
    menusShow();
  });
  getId("dropdown_menu").addEventListener("mouseleave", () => {
    isOnDiv = false;
    setTimeout(() => {
      if (isInPopMenu) {
      } else {
        isOnDiv = false;
        isInPopMenu = false;
        getId("firstMenus").innerHTML = null;
        getId("secondMenus").innerHTML = null;
        getId("thirdMenus").innerHTML = null;
        getId("lastMenus").innerHTML = null;
      }
    }, 1);
  });
  getId("menus_master").addEventListener("mouseover", () => {
    isInPopMenu = true;
  });
  getId("menus_master").addEventListener("mouseleave", () => {
    isInPopMenu = false;
    setTimeout(() => {
      if (isOnDiv == true) {
      } else {
        isInPopMenu = false;
        getId("firstMenus").innerHTML = null;
        getId("secondMenus").innerHTML = null;
        getId("thirdMenus").innerHTML = null;
        getId("lastMenus").innerHTML = null;
      }
    }, 1);
  });

  //scroll functionality
  let navBaronScroll = getId("master_navbar");
  let logo = getId("nav_logo");
  let logonearbybutton = getId("scroll_time_menu_button");
  let topminiBar = getId("nav_topmost_section");
  let menu = getId("nav_menu");

  window.onscroll = () => {
    if (flag) {
      if (window.pageYOffset >= menu.offsetTop) {
        logo.style.height = "60px";
        logonearbybutton.innerHTML = `<p> SHOP <span id="drop_down_menu_collaps">▽</span></p>`;
        topminiBar.innerHTML = null;
        topminiBar.style.height = "0px";
        menu.style.visibility = "hidden";
        getId("nav_offers_button").innerHTML = null;
        menu.style.height = "0px";
        navBaronScroll.style.boxShadow = "0 0 2rem 0 rgba(0, 0, 0, 0.1)";
      } else if (window.pageYOffset == 0) {
        logo.style.height = "91px";
        logonearbybutton.innerHTML = null;
        topminiBar.style.height = "27px";
        menu.style.visibility = "visible";
        menu.style.height = "36px";
        getId(
          "nav_offers_button"
        ).innerHTML = `<a href="/offers.html"><i class="bi bi-tag-fill" style="color: #DA251D;"></i>OFFERS</a>`;
        topminiBar.innerHTML = `<img src="https://i.ibb.co/98XxQs0/logo-heading.png" alt="">
          <p><i class="bi bi-telephone"></i> 1860 123 1000</p>
          <p><i class="bi bi-geo-alt"></i> Address <span id="nav_address_sign">▽</span></p>
          <p id="login_button_nav"><i class="bi bi-person"></i> Login/Sign Up </p>`;
      }
    }
  };
  var belowData;
  (async()=>{
    try{
      let res=await fetch(`${url}cart`)
      belowData = await res.json();
      getId("nav_cart_item_count").innerText = `${belowData.length} items`
    }
    catch(err){
      getId("nav_cart_item_count").innerText = `0 items`
      console.log(err)
    }
    
  })()
  
  getId("nav_cart").addEventListener("mouseover", () => {
    cartPop(belowData)
});
  getId("cart_div_master").addEventListener("mouseleave", () => {
    getId("cart_pop_up").innerHTML = null;
  });

}
// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 750px)");
  mq.addEventListener("change", () => {
    WidthChange(mq);
  });
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    flag = false;
    getId("master_navbar").innerHTML = mNavbar();
    getId("master_navbar").style.backgroundColor = "#7ED957";
    getId("search").addEventListener("input", ()=>{
      getId("search_results").style.zIndex = "-1"
      debouncing()
    });
  getId("mobile_menu_lines").addEventListener("click", () => {
    //menu fucntion
  });
  getId("top_menu_mobile_second").addEventListener("click", () => {
    location.href = "./signin.html";
  });
  getId("top_menu_mobile_third").addEventListener("click", () => {
    location.href = "./index.html";
  });
  getId("top_menu_mobile_fifth").addEventListener("click", () => {
    location.href = "./cart.html";
  });
  (async()=>{
    try{
      let res=await fetch(`${url}cart`)
      let data= await res.json();
      // console.log(data)
      getId("cart_count_mobile_tag").innerText = data.length
    }
    catch(err){
      getId("cart_count_mobile_tag").innerText = 0
      console.log(err)
    }
    
  })()
  } else {
    flag = true;
    getId("master_navbar").innerHTML = navbar();
    getId("master_navbar").style.backgroundColor = "#fff";
    getId("search").addEventListener("input", debouncing);
    getId("nav_logo_img").addEventListener("click", () => {
      location.href = "./index.html";
    });
    getId("nav_cart").addEventListener("click", () => {
      location.href = "./cart.html";
    });
    getId("login_button_nav").addEventListener("click", () => {
      location.href = "./signin.html";
    });
    getId("search_results").addEventListener("mouseleave", () => {
      getId("search_results").innerHTML = null;
    });

    getId("dropdown_menu").addEventListener("mouseover", () => {
      isOnDiv = true;
      menusShow();
    });
    getId("dropdown_menu").addEventListener("mouseleave", () => {
      isOnDiv = false;
      setTimeout(() => {
        if (isInPopMenu) {
        } else {
          isOnDiv = false;
          isInPopMenu = false;
          getId("firstMenus").innerHTML = null;
          getId("secondMenus").innerHTML = null;
          getId("thirdMenus").innerHTML = null;
          getId("lastMenus").innerHTML = null;
        }
      }, 1);
    });
    getId("menus_master").addEventListener("mouseover", () => {
      isInPopMenu = true;
    });
    getId("menus_master").addEventListener("mouseleave", () => {
      isInPopMenu = false;
      setTimeout(() => {
        if (isOnDiv == true) {
        } else {
          isInPopMenu = false;
          getId("firstMenus").innerHTML = null;
          getId("secondMenus").innerHTML = null;
          getId("thirdMenus").innerHTML = null;
          getId("lastMenus").innerHTML = null;
        }
      }, 1);
    });

    //scroll functionality
    let navBaronScroll = getId("master_navbar");
    let logo = getId("nav_logo");
    let logonearbybutton = getId("scroll_time_menu_button");
    let topminiBar = getId("nav_topmost_section");
    let menu = getId("nav_menu");

    window.onscroll = () => {
      if (flag) {
        if (window.pageYOffset >= menu.offsetTop) {
          logo.style.height = "60px";
          logonearbybutton.innerHTML = `<p> SHOP <span id="drop_down_menu_collaps">▽</span></p>`;
          topminiBar.innerHTML = null;
          topminiBar.style.height = "0px";
          menu.style.visibility = "hidden";
          getId("nav_offers_button").innerHTML = null;
          menu.style.height = "0px";
          navBaronScroll.style.boxShadow = "0 0 2rem 0 rgba(0, 0, 0, 0.1)";
        } else if (window.pageYOffset == 0) {
          logo.style.height = "91px";
          logonearbybutton.innerHTML = null;
          topminiBar.style.height = "27px";
          menu.style.visibility = "visible";
          menu.style.height = "36px";
          getId(
            "nav_offers_button"
          ).innerHTML = `<a href="/offers.html"><i class="bi bi-tag-fill" style="color: #DA251D;"></i>OFFERS</a>`;
          topminiBar.innerHTML = `<img src="https://i.ibb.co/98XxQs0/logo-heading.png" alt="">
          <p><i class="bi bi-telephone"></i> 1860 123 1000</p>
          <p><i class="bi bi-geo-alt"></i> Address <span id="nav_address_sign">▽</span></p>
          <p id="login_button_nav"><i class="bi bi-person"></i> Login/Sign Up </p>`;
        }
      }
    };
    var belowData;
    (async()=>{
      try{
        let res=await fetch(`${url}cart`)
        belowData = await res.json();
        getId("nav_cart_item_count").innerText = `${belowData.length} items`
      }
      catch(err){
        getId("nav_cart_item_count").innerText = `0 items`
        console.log(err)
      }
      
    })()
    getId("nav_cart").addEventListener("mouseover", () => {
      cartPop(belowData)
  });
    getId("cart_pop_up").addEventListener("mouseleave", () => {
      getId("cart_pop_up").innerHTML = null;
    });
  }
}
