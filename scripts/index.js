import { getId, creEle } from "./shortcuts.js";

///////////////////// navbar ///////////////////////
////////////////////////////////////////////////////
import navbar from "../components/navbar.js";
document.getElementById("master_navbar").innerHTML = navbar();
let navBaronScroll = getId("master_navbar");
let logo = getId("nav_logo");
let logonearbybutton = getId("scroll_time_menu_button");
let topminiBar = getId("nav_topmost_section");
let menu = getId("nav_menu");

window.onscroll = () => {
  if (window.pageYOffset >= menu.offsetTop) {
    logo.style.height = "60px";
    logonearbybutton.innerHTML = `<p> SHOP <span id="drop_down_menu_collaps">▽</span></p>`;
    topminiBar.innerHTML = null;
    topminiBar.style.height = "0px";
    menu.style.visibility = "hidden"
    getId("nav_offers_button").innerHTML = null
    menu.style.height = "0px"
    navBaronScroll.style.boxShadow = "0 0 2rem 0 rgba(0, 0, 0, 0.1)";
  } else if(window.pageYOffset==0){
    logo.style.height = "91px";
    logonearbybutton.innerHTML = null;
    topminiBar.style.height = "27px";
    menu.style.visibility = "visible"
    menu.style.height = "36px"
    getId("nav_offers_button").innerHTML = `<a href="/offers.html"><i class="bi bi-tag-fill" style="color: #DA251D;"></i>OFFERS</a>`
    topminiBar.innerHTML = `<img src="./images/logo heading.png" alt="">
        <p><i class="bi bi-telephone"></i> 1860 123 1000</p>
        <p><i class="bi bi-geo-alt"></i> Address <span id="nav_address_sign">▽</span></p>
        <p id="login_button_nav"><i class="bi bi-person"></i> Login/Sign Up </p>`;
  }
};

const categories = [
    {"Fruits & Vegatables": [
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
    ]},
    {"Foodgrains, Oil & Masala": [
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
    ]},
    {"Bakery, Cakes & Dairy": [
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
    ]},
    {"Beverages": [
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
    ]},
    {"Snacks & Branded Foods": [
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
      ]},
    {"Beauty & Hygiene": [
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
      ]},
    {"Cleaning & Household": [
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
      ]},
    {"Kitchen, Garden & Pets": [
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
      ]},
    {"Eggs, Meat & Fish": [
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
      ]},
    {"Gourmet & World Food": [
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
      ]},
    {"Baby Care": [
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
          "Water": ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"],
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
      ]},
];

const menusShow = () => {
    getId("firstMenus").innerHTML = null;
    getId("secondMenus").innerHTML = null;
    getId("thirdMenus").innerHTML = null;
    getId("lastMenus").innerHTML = null;
  categories.forEach((el) => {
      let p = creEle("a");
      p.href = "./product_pages/product.html"
      p.innerText = Object.keys(el)[0];
      console.log(el[`${Object.keys(el)}`])
      p.onmouseover = ()=>{
        secondMenus(el[`${Object.keys(el)[0]}`])
      }
      getId("firstMenus").append(p);
    
    let arrayThirdMenu = secondMenus(el[`${Object.keys(el)[0]}`])
    thirdMenus(arrayThirdMenu[0])
  });
  getId("lastMenus").innerHTML = `<p>Popular Searches</p></p><a href="#">Banana, Sapota &amp; Papaya</a><a href="#">Kiwi, Melon, Citrus Fruit</a><a href="#">Apples &amp; Pomegranate</a><a href="#">Seasonal Fruits</a><a href="#">Mangoes</a><a href="#">Fruit Baskets</a>`
};

function secondMenus(data){
    getId("secondMenus").innerHTML = null;
    let arrayThirdMenu = [];
    data.forEach((item) => {
        let p = creEle("a");
        p.href = "./product_pages/product.html";
        p.innerText = Object.keys(item)[0];
  
        p.onmouseover = ()=>{
          thirdMenus(item[`${Object.keys(item)[0]}`])
        }
  
        getId("secondMenus").append(p);
        arrayThirdMenu.push(item[`${Object.keys(item)[0]}`]);
      });
      return arrayThirdMenu
}

function thirdMenus(data){
    getId("thirdMenus").innerHTML = null;
    data.forEach((el)=>{
        let p = creEle("a");
        p.href = "./product_pages/product.html";
        p.innerText = el;
  
        getId("thirdMenus").append(p);
    })
}

getId("dropdown_menu").addEventListener("click", ()=>{
    console.log("fucked")
})

var isOnDiv = false;
var isInPopMenu = false;

getId("dropdown_menu").addEventListener("mouseover", ()=>{
    isOnDiv = true;
    menusShow()
})
getId("dropdown_menu").addEventListener("mouseleave", ()=>{
    isOnDiv = false;
    setTimeout(()=>{
        if(isInPopMenu){

        }else{
            isOnDiv = false;
            isInPopMenu = false;
            getId("firstMenus").innerHTML = null;
            getId("secondMenus").innerHTML = null;
            getId("thirdMenus").innerHTML = null;
            getId("lastMenus").innerHTML = null;
        }
    },1)
    
})
getId("menus_master").addEventListener("mouseover", ()=>{
    isInPopMenu = true;
})
getId("menus_master").addEventListener("mouseleave", ()=>{
    isInPopMenu = false;
    setTimeout(()=>{
        if(isOnDiv == true){
            
        }else{
            isInPopMenu = false;
            getId("firstMenus").innerHTML = null;
            getId("secondMenus").innerHTML = null;
            getId("thirdMenus").innerHTML = null;
            getId("lastMenus").innerHTML = null;
        }
    },1)
})

///////////// footer ///////////////////////
/////////////////////////////////////////////
import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();

//home section
{
  let id;
  let slide_div = document.getElementById("slide");
  const images = [
    "https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_121222_Bangalore.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dairy_460px-011222.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_GOURMETPL_SnackswithNoLimits_460px-011222.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/Cp_m_GM_EPBanner_460-051222.jpg",
  ];
  let imgElement = document.createElement("img");
  imgElement.src = images[0];
  slide_div.append(imgElement);
  let i = 1;
  function slide() {
    id = setInterval(function () {
      if (i === images.length) {
        i = 0;
      }
      imgElement.src = images[i];
      slide_div.append(imgElement);
      i++;
    }, 2000);
  }
  slide();

  let di;
  let show_div = document.getElementById("show");
  const img = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251122_400.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251122_400.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_251122_400.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_251122_400.jpg",
  ];

  let imgel = document.createElement("img");
  imgel.src = img[0];
  show_div.append(imgel);
  let j = 1;
  function show() {
    di = setInterval(function () {
      if (j === img.length) {
        j = 0;
      }
      imgel.src = img[j];
      show_div.append(imgel);
      j++;
    }, 2000);
  }
  show();
}
