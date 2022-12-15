const categories = [
    {
        "Fruits & Vegatables": [
            {
                "Fresh Vegatables": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Herbs & Seasonings":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Fresh Fruits":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Organic Fruits & Vegetables":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Cuts & Sprouts": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Exotic Fruits & Veggies":["Exotic Vegetables", "Exotic Fruits"]
            },
            {
                "Flower Bouquets, Bunches":["Marigold", "Other Flowers", "Roses"]
            }
        ],
        "Foodgrains, Oil & Masala": [
            {
                "Atta, Flours & Sooji": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Rice & Rice Products":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Dals & Pulses":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Organic Staples":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Edible Oils & Ghee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Salt, Sugar & Jaggery":["Exotic Vegetables", "Exotic Fruits"]
            },
            {
                "Masalas & Spices":["Marigold", "Other Flowers", "Roses"]
            },
            {
                "Dry Fruits":["Almonds","Cashews", "Raisins", "Mukhwas", "Other Dry Fruits"]
            }
        ],
        "Bakery, Cakes & Dairy": [
            {
                "Dairy": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Breads & Buns":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Non Dairy":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Gourmet Breads":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Cookies, Rusk & Khari": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Ice Creams & Desserts":["Exotic Vegetables", "Exotic Fruits"]
            },
            {
                "Bakery Snacks":["Marigold", "Other Flowers", "Roses"]
            },
            {
                "Cakes & Pastries":["Almonds","Cashews", "Raisins", "Mukhwas", "Other Dry Fruits"]
            }
        ],
        "Beverages": [
            {
                "Energy & Soft Drinks": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Water":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Health Drink, Supplement":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Tea":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Coffee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Fruit Juices & Drinks":["Exotic Vegetables", "Exotic Fruits"]
            }
        ],
        "Snacks & Branded Foods": [
            {
                "Energy & Soft Drinks": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Water":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Health Drink, Supplement":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Tea":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Coffee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Fruit Juices & Drinks":["Exotic Vegetables", "Exotic Fruits"]
            }
        ],
        "Beauty & Hygiene": [
            {
                "Energy & Soft Drinks": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Water":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Health Drink, Supplement":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Tea":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Coffee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Fruit Juices & Drinks":["Exotic Vegetables", "Exotic Fruits"]
            }
        ],
        "Cleaning & Household": [
            {
                "Energy & Soft Drinks": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Water":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Health Drink, Supplement":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Tea":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Coffee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Fruit Juices & Drinks":["Exotic Vegetables", "Exotic Fruits"]
            }
        ],
        "Kitchen, Garden & Pets": [
            {
                "Energy & Soft Drinks": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Water":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Health Drink, Supplement":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Tea":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Coffee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Fruit Juices & Drinks":["Exotic Vegetables", "Exotic Fruits"]
            }
        ],
        "Eggs, Meat & Fish": [
            {
                "Energy & Soft Drinks": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Water":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Health Drink, Supplement":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Tea":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Coffee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Fruit Juices & Drinks":["Exotic Vegetables", "Exotic Fruits"]
            }
        ],
        "Gourmet & World Food": [
            {
                "Energy & Soft Drinks": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Water":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Health Drink, Supplement":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Tea":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Coffee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Fruit Juices & Drinks":["Exotic Vegetables", "Exotic Fruits"]
            }
        ],
        "Baby Care": [
            {
                "Energy & Soft Drinks": ["Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vegetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower", "Gourd, Pumpkin, Drumstick", "Specialty"]
            },
            {
                "Water":["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"]
            },
            {
                "Health Drink, Supplement":["Banana, Sapota & Papaya", "Kiwi, Melon, Citrus Fruit", "Apples & Pomegranate", "Seasonal Fruits", "Mangoes", "Fruit Baskets"]
            },
            {
                "Tea":["Organic Vegetables", "Organic Fruits"]
            },
            {
                "Coffee": ["Cut Fruit, Tender Coconut", "Cut & Peeled Veggies", "Fresh Salads & Sprouts", "Recipe Packs"]
            },
            {
                "Fruit Juices & Drinks":["Exotic Vegetables", "Exotic Fruits"]
            }
        ],
    },
]

import { getId, creEle } from "./shortcuts.js";

const menusShow = ()=>{
    let menus = getId("menus_main");
    menus.innerHTML = null;
    categories.forEach((el)=>{
        let main = creEle("div");
        main.onmouseover = ()=>{

        };
        let p = creEle("p");
        p.innerText = el[0]
    })
}

