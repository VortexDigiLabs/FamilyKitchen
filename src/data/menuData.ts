export const categories = [
  "All",
  "Classic Pizzas",
  "Gourmet Pizzas",
  "Toasties",
  "Rolls",
  "Grilled Chicken Meals",
  "Everyday Mains",
  "Pizza/Sides Extras",
  "Kiddos Meals",
  "Kiddos Pizza Combos",
  "Regular Combos",
  "Limited Stock Promotions",
  "Friday Braai Day",
  "Sunday Lunch & Dessert"
];

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image?: string;
  isMealOfDay?: boolean;
}

export const menuItems: MenuItem[] = [
  // Classic Pizzas
  {
    id: "1",
    name: "Margherita",
    description: "Tomato base and loads of 3 cheeses.",
    price: 65,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text-to-image?prompt=Artisan%20Margherita%20pizza%20San%20Marzano%20tomato%20buffalo%20mozzarella%20fresh%20basil%20extra%20virgin%20olive%20oil%20wood-fired%20rustic%20restaurant%20quality&image_size=square_hd"
  },
  {
    id: "2",
    name: "Hawaiian Delight",
    description: "Ham, pineapple & 3 cheeses.",
    price: 75,
    category: "Classic Pizzas"
  },
  {
    id: "3",
    name: "Bacon & Cheese Feast",
    description: "Crispy bacon & 3 cheeses.",
    price: 80,
    category: "Classic Pizzas"
  },
  {
    id: "4",
    name: "Chicken Mayo Supreme",
    description: "Creamy chicken mayo & 3 cheeses.",
    price: 85,
    category: "Classic Pizzas"
  },
  {
    id: "5",
    name: "BBQ Chicken Pizza",
    description: "BBQ chicken with melted 3 cheeses.",
    price: 85,
    category: "Classic Pizzas"
  },
  {
    id: "6",
    name: "Italian Stallion",
    description: "Bolognese mince & 3 cheeses.",
    price: 85,
    category: "Classic Pizzas"
  },
  {
    id: "7",
    name: "Mexican Fiesta",
    description: "Spicy mince, peppers & 3 cheeses.",
    price: 90,
    category: "Classic Pizzas"
  },
  {
    id: "8",
    name: "Salami Passion",
    description: "Salami & extra 3 cheeses.",
    price: 90,
    category: "Classic Pizzas"
  },
  {
    id: "9",
    name: "Sweet Chilli Chicken",
    description: "Chicken strips, sweet chilli sauce & feta.",
    price: 95,
    category: "Classic Pizzas"
  },
  {
    id: "10",
    name: "Bacon Garlic Feta",
    description: "Bacon, feta & crushed garlic.",
    price: 95,
    category: "Classic Pizzas"
  },
  {
    id: "11",
    name: "Rib & BBQ Blast",
    description: "BBQ rib strips with 3 cheeses.",
    price: 100,
    category: "Classic Pizzas"
  },
  {
    id: "12",
    name: "Steakhouse Special",
    description: "Steak strips, onion & mushroom.",
    price: 100,
    category: "Classic Pizzas"
  },
  {
    id: "13",
    name: "The Family Kitchen Beast",
    description: "Russian, ham, cheese griller, bacon & 3 cheeses.",
    price: 110,
    category: "Classic Pizzas"
  },

  // Gourmet Pizzas
  {
    id: "14",
    name: "Full House",
    description: "Ham, bacon, mushroom, peppers, olives & 3 cheeses.",
    price: 105,
    category: "Gourmet Pizzas"
  },
  {
    id: "15",
    name: "Triple Cheese Explosion",
    description: "Mozzarella, cheddar & feta.",
    price: 95,
    category: "Gourmet Pizzas"
  },
  {
    id: "16",
    name: "Chicken Peri Peri",
    description: "Peri peri chicken with peppers & 3 cheeses.",
    price: 95,
    category: "Gourmet Pizzas"
  },
  {
    id: "17",
    name: "Breakfast Pizza",
    description: "Egg, bacon, 3 cheeses & grilled tomato.",
    price: 90,
    category: "Gourmet Pizzas"
  },
  {
    id: "18",
    name: "Veggie Lovers",
    description: "Mushroom, peppers, onion, olives, feta & 3 cheeses.",
    price: 85,
    category: "Gourmet Pizzas"
  },

  // Toasties
  {
    id: "19",
    name: "Cheese Toastie",
    price: 15,
    category: "Toasties"
  },
  {
    id: "20",
    name: "Ham & Cheese Toastie",
    price: 25,
    category: "Toasties"
  },
  {
    id: "21",
    name: "Bacon & Cheese Toastie",
    price: 28,
    category: "Toasties"
  },
  {
    id: "22",
    name: "Bacon Egg & Cheese Toastie",
    price: 35,
    category: "Toasties"
  },
  {
    id: "23",
    name: "Beef Burger Toastie",
    price: 35,
    category: "Toasties"
  },
  {
    id: "24",
    name: "Chicken Burger Toastie",
    price: 30,
    category: "Toasties"
  },
  {
    id: "25",
    name: "Bacon & Egg Toastie",
    price: 28,
    category: "Toasties"
  },

  // Rolls
  {
    id: "26",
    name: "Wors Roll & Chips",
    price: 35,
    category: "Rolls"
  },
  {
    id: "27",
    name: "Wors Roll (Standalone)",
    price: 35,
    category: "Rolls"
  },
  {
    id: "28",
    name: "Russian Roll & Chips",
    price: 53,
    category: "Rolls"
  },
  {
    id: "29",
    name: "Russian Roll (Standalone)",
    price: 38,
    category: "Rolls"
  },

  // Grilled Chicken Meals
  {
    id: "30",
    name: "Grilled Chicken 1/4 with Chips",
    price: 42,
    category: "Grilled Chicken Meals"
  },
  {
    id: "31",
    name: "Grilled Chicken 1/4 with Pap",
    price: 40,
    category: "Grilled Chicken Meals"
  },
  {
    id: "32",
    name: "Grilled Chicken 1/4 with Rice",
    price: 42,
    category: "Grilled Chicken Meals"
  },

  // Everyday Mains
  {
    id: "33",
    name: "300g Aged Ribeye Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 120,
    category: "Everyday Mains"
  },
  {
    id: "34",
    name: "250g Sirloin Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 85,
    category: "Everyday Mains"
  },
  {
    id: "35",
    name: "30cm Monster Burger",
    description: "Beef burger patties, eggs, fried onions, bacon bits, creamed & grated cheese, sliced gherkins, lettuce, tomatoes, and signature Family Kitchen Sauce.",
    price: 150,
    category: "Everyday Mains"
  },

  // Pizza/Sides Extras
  {
    id: "36",
    name: "Extra 3 Cheeses",
    price: 15,
    category: "Pizza/Sides Extras"
  },
  {
    id: "37",
    name: "Feta Cheese Portion",
    price: 15,
    category: "Pizza/Sides Extras"
  },
  {
    id: "38",
    name: "Jalapeños",
    price: 10,
    category: "Pizza/Sides Extras"
  },
  {
    id: "39",
    name: "Crushed Garlic",
    price: 10,
    category: "Pizza/Sides Extras"
  },
  {
    id: "40",
    name: "Chips Portion",
    price: 20,
    category: "Pizza/Sides Extras"
  },
  {
    id: "41",
    name: "2L Colldrink",
    price: 35,
    category: "Pizza/Sides Extras"
  },

  // Kiddos Meals
  {
    id: "42",
    name: "Kiddos Beef Burger Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals"
  },
  {
    id: "43",
    name: "Kiddos Chicken Burger Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals"
  },
  {
    id: "44",
    name: "Kiddos Chicken Nuggets Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals"
  },
  {
    id: "45",
    name: "Kiddos Chicken Pops Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals"
  },

  // Kiddos Pizza Combos
  {
    id: "46",
    name: "Kiddos Bacon & Cheese Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos"
  },
  {
    id: "47",
    name: "Kiddos BBQ Chicken Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos"
  },
  {
    id: "48",
    name: "Kiddos Tomato & Cheese Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos"
  },
  {
    id: "49",
    name: "Kiddos Hawaiian Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos"
  },

  // Regular Combos
  {
    id: "50",
    name: "Double Pizza & 2L Beverage Combo",
    description: "Any 2 Regular Pizzas + 2-Litre Pepsi.",
    price: 200,
    category: "Regular Combos"
  },

  // Limited Stock Promotions (Valid 26.05-05.06)
  {
    id: "51",
    name: "Bulk Pizza Combo",
    description: "2 x Pizzas (Bacon & Cheese Feast or BBQ Chicken) + 2L Pepsi.",
    price: 200,
    category: "Limited Stock Promotions"
  },
  {
    id: "52",
    name: "4 x Beef Burgers with Chips",
    price: 220,
    category: "Limited Stock Promotions"
  },
  {
    id: "53",
    name: "4 x Beef Burgers (No Chips)",
    price: 200,
    category: "Limited Stock Promotions"
  },
  {
    id: "54",
    name: "4 x Chicken Burgers with Chips",
    price: 220,
    category: "Limited Stock Promotions"
  },
  {
    id: "55",
    name: "4 x Chicken Burgers (No Chips)",
    price: 200,
    category: "Limited Stock Promotions"
  },
  {
    id: "56",
    name: "1 x Monster Burger with Chips",
    price: 180,
    category: "Limited Stock Promotions"
  },
  {
    id: "57",
    name: "1 x Monster Burger (No Chips)",
    price: 150,
    category: "Limited Stock Promotions"
  },
  {
    id: "58",
    name: "1 x Mini Monster Burger with Chips",
    price: 130,
    category: "Limited Stock Promotions"
  },
  {
    id: "59",
    name: "1 x Mini Monster Burger (No Chips)",
    price: 100,
    category: "Limited Stock Promotions"
  },
  {
    id: "60",
    name: "4 x Wors Rolls with Chips",
    price: 180,
    category: "Limited Stock Promotions"
  },
  {
    id: "61",
    name: "4 x Wors Rolls (No Chips)",
    price: 145,
    category: "Limited Stock Promotions"
  },
  {
    id: "62",
    name: "3 x Kota with Chips",
    price: 125,
    category: "Limited Stock Promotions"
  },
  {
    id: "63",
    name: "3 x Kota (No Chips)",
    price: 95,
    category: "Limited Stock Promotions"
  },

  // Friday Braai Day Special
  {
    id: "64",
    name: "Braai Pack 1",
    description: "1x Grilled Chicken Piece + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day"
  },
  {
    id: "65",
    name: "Braai Pack 2",
    description: "1x Boerewors Coil + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day"
  },
  {
    id: "66",
    name: "Braai Pack 3",
    description: "1x Pork Chop + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day"
  },
  {
    id: "67",
    name: "Braai Pack 4",
    description: "1x Beef Brisket Cut + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day"
  },

  // Sunday Lunch & Dessert
  {
    id: "68",
    name: "Sunday Roast Platter",
    description: "Traditional Homemade Meatloaf, White Rice, Baked Potato Wedges, Creamy Broccoli & Cauliflower.",
    price: 60,
    category: "Sunday Lunch & Dessert"
  },
  {
    id: "69",
    name: "Traditional Dessert Add-on",
    description: "Classic Malva Pudding served with hot custard.",
    price: 25,
    category: "Sunday Lunch & Dessert"
  }
];
