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
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "2",
    name: "Hawaiian Delight",
    description: "Ham, pineapple & 3 cheeses.",
    price: 75,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "3",
    name: "Bacon & Cheese Feast",
    description: "Crispy bacon & 3 cheeses.",
    price: 80,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "4",
    name: "Chicken Mayo Supreme",
    description: "Creamy chicken mayo & 3 cheeses.",
    price: 85,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "5",
    name: "BBQ Chicken Pizza",
    description: "BBQ chicken with melted 3 cheeses.",
    price: 85,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "6",
    name: "Italian Stallion",
    description: "Bolognese mince & 3 cheeses.",
    price: 85,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "7",
    name: "Mexican Fiesta",
    description: "Spicy mince, peppers & 3 cheeses.",
    price: 90,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "8",
    name: "Salami Passion",
    description: "Salami & extra 3 cheeses.",
    price: 90,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "9",
    name: "Sweet Chilli Chicken",
    description: "Chicken strips, sweet chilli sauce & feta.",
    price: 95,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "10",
    name: "Bacon Garlic Feta",
    description: "Bacon, feta & crushed garlic.",
    price: 95,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "11",
    name: "Rib & BBQ Blast",
    description: "BBQ rib strips with 3 cheeses.",
    price: 100,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "12",
    name: "Steakhouse Special",
    description: "Steak strips, onion & mushroom.",
    price: 100,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "13",
    name: "The Family Kitchen Beast",
    description: "Russian, ham, cheese griller, bacon & 3 cheeses.",
    price: 110,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
  },

  // Gourmet Pizzas
  {
    id: "14",
    name: "Full House",
    description: "Ham, bacon, mushroom, peppers, olives & 3 cheeses.",
    price: 105,
    category: "Gourmet Pizzas",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "15",
    name: "Triple Cheese Explosion",
    description: "Mozzarella, cheddar & feta.",
    price: 95,
    category: "Gourmet Pizzas",
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "16",
    name: "Chicken Peri Peri",
    description: "Peri peri chicken with peppers & 3 cheeses.",
    price: 95,
    category: "Gourmet Pizzas",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "17",
    name: "Breakfast Pizza",
    description: "Egg, bacon, 3 cheeses & grilled tomato.",
    price: 90,
    category: "Gourmet Pizzas",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "18",
    name: "Veggie Lovers",
    description: "Mushroom, peppers, onion, olives, feta & 3 cheeses.",
    price: 85,
    category: "Gourmet Pizzas",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=600&q=80"
  },

  // Toasties
  {
    id: "19",
    name: "Cheese Toastie",
    price: 15,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "20",
    name: "Ham & Cheese Toastie",
    price: 25,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1538220856186-0be0e085984d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "21",
    name: "Bacon & Cheese Toastie",
    price: 28,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "22",
    name: "Bacon Egg & Cheese Toastie",
    price: 35,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "23",
    name: "Beef Burger Toastie",
    price: 35,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "24",
    name: "Chicken Burger Toastie",
    price: 30,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "25",
    name: "Bacon & Egg Toastie",
    price: 28,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },

  // Rolls
  {
    id: "26",
    name: "Wors Roll & Chips",
    price: 35,
    category: "Rolls",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "27",
    name: "Wors Roll (Standalone)",
    price: 35,
    category: "Rolls",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "28",
    name: "Russian Roll & Chips",
    price: 53,
    category: "Rolls",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "29",
    name: "Russian Roll (Standalone)",
    price: 38,
    category: "Rolls",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },

  // Grilled Chicken Meals
  {
    id: "30",
    name: "Grilled Chicken 1/4 with Chips",
    price: 42,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "31",
    name: "Grilled Chicken 1/4 with Pap",
    price: 40,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "32",
    name: "Grilled Chicken 1/4 with Rice",
    price: 42,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },

  // Everyday Mains
  {
    id: "33",
    name: "300g Aged Ribeye Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 120,
    category: "Everyday Mains",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "34",
    name: "250g Sirloin Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 85,
    category: "Everyday Mains",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "35",
    name: "30cm Monster Burger",
    description: "Beef burger patties, eggs, fried onions, bacon bits, creamed & grated cheese, sliced gherkins, lettuce, tomatoes, and signature Family Kitchen Sauce.",
    price: 150,
    category: "Everyday Mains",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },

  // Pizza/Sides Extras
  {
    id: "36",
    name: "Extra 3 Cheeses",
    price: 15,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1486887396153-fa416525c108?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "37",
    name: "Feta Cheese Portion",
    price: 15,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "38",
    name: "Jalapeños",
    price: 10,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "39",
    name: "Crushed Garlic",
    price: 10,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "40",
    name: "Chips Portion",
    price: 20,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "41",
    name: "2L Colldrink",
    price: 35,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
  },

  // Kiddos Meals
  {
    id: "42",
    name: "Kiddos Beef Burger Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "43",
    name: "Kiddos Chicken Burger Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://images.unsplash.com/photo-1627662236973-4f8259fa2441?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "44",
    name: "Kiddos Chicken Nuggets Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "45",
    name: "Kiddos Chicken Pops Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
  },

  // Kiddos Pizza Combos
  {
    id: "46",
    name: "Kiddos Bacon & Cheese Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "47",
    name: "Kiddos BBQ Chicken Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "48",
    name: "Kiddos Tomato & Cheese Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Tomato & Cheese Pizza Combo",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "49",
    name: "Kiddos Hawaiian Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Hawaiian Pizza Combo",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
  },

  // Regular Combos
  {
    id: "50",
    name: "Double Pizza & 2L Beverage Combo",
    description: "Any 2 Regular Pizzas + 2-Litre Pepsi.",
    price: 200,
    category: "Regular Combos",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80"
  },

  // Limited Stock Promotions
  {
    id: "51",
    name: "Bulk Pizza Combo",
    description: "2 x Pizzas (Bacon & Cheese Feast or BBQ Chicken) + 2L Pepsi.",
    price: 200,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "52",
    name: "4 x Beef Burgers with Chips",
    price: 220,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "53",
    name: "4 x Beef Burgers (No Chips)",
    price: 200,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "54",
    name: "4 x Chicken Burgers with Chips",
    price: 220,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1627662236973-4f8259fa2441?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "55",
    name: "4 x Chicken Burgers (No Chips)",
    price: 200,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1627662236973-4f8259fa2441?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "56",
    name: "1 x Monster Burger with Chips",
    price: 180,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "57",
    name: "1 x Monster Burger (No Chips)",
    price: 150,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "58",
    name: "1 x Mini Monster Burger with Chips",
    price: 130,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "59",
    name: "1 x Mini Monster Burger (No Chips)",
    price: 100,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "60",
    name: "4 x Wors Rolls with Chips",
    price: 180,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "61",
    name: "4 x Wors Rolls (No Chips)",
    price: 145,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "62",
    name: "3 x Kota with Chips",
    price: 125,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "63",
    name: "3 x Kota (No Chips)",
    price: 95,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },

  // Friday Braai Day Special
  {
    id: "64",
    name: "Braai Pack 1",
    description: "1x Grilled Chicken Piece + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "65",
    name: "Braai Pack 2",
    description: "1x Boerewors Coil + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "66",
    name: "Braai Pack 3",
    description: "1x Pork Chop + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "67",
    name: "Braai Pack 4",
    description: "1x Beef Brisket Cut + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
  },

  // Sunday Lunch & Dessert
  {
    id: "68",
    name: "Sunday Roast Platter",
    description: "Traditional Homemade Meatloaf, White Rice, Baked Potato Wedges, Creamy Broccoli & Cauliflower.",
    price: 60,
    category: "Sunday Lunch & Dessert",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "69",
    name: "Traditional Dessert Add-on",
    description: "Classic Malva Pudding served with hot custard.",
    price: 25,
    category: "Sunday Lunch & Dessert",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  }
];
