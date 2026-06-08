export const categories = [
  "All",
  "Burgers",
  "Kota",
  "Russians",
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

  // === BURGERS ===
  {
    id: "73",
    name: "Beef Burger with Chips",
    description: "Classic flame-grilled beef burger patty on a fresh bun, served with crispy chips. Can be ordered without chips — just ask us.",
    price: 55,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "75",
    name: "Cheese Burger with Chips",
    description: "Flame-grilled beef patty topped with melted cheese, served with crispy chips. Can be ordered without chips — just ask us.",
    price: 60,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "79",
    name: "Bacon Burger with Chips",
    description: "Flame-grilled beef patty topped with crispy bacon, served with crispy chips. Can be ordered without chips — just ask us.",
    price: 63,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "81",
    name: "Mushroom Burger with Chips",
    description: "Flame-grilled beef patty topped with savory mushroom sauce, served with crispy chips. Can be ordered without chips — just ask us.",
    price: 60,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "93",
    name: "Bacon Egg & Cheese Burger with Chips",
    description: "Ultimate burger with flame-grilled beef patty, bacon, egg, and melted cheese, served with crispy chips. Can be ordered without chips — just ask us.",
    price: 70,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "85",
    name: "Chicken Burger with Chips",
    description: "Tender chicken burger patty, flame-grilled and served on a fresh bun with crispy chips. Can be ordered without chips — just ask us.",
    price: 50,
    category: "Burgers",
    image: "/chicken_burgers_chips.png"
  },

  // === KOTA ===
  {
    id: "94",
    name: "Kota (Chips, Egg, Russian & Cheese)",
    description: "Traditional street food hollowed-out quarter loaf bread filled with chips, egg, Russian sausage, and melted cheese.",
    price: 35,
    category: "Kota",
    image: "/kota_no_chips.png"
  },
  {
    id: "95",
    name: "Kota Loaded (Chips, Polony, Russian & Cheese)",
    description: "Loaded quarter loaf bread filled with chips, polony, Russian sausage, and cheese. Served with Chips on the Side.",
    price: 55,
    category: "Kota",
    image: "/kota_with_chips.png"
  },

  // === RUSSIANS ===
  {
    id: "96",
    name: "Russian (No Chips)",
    description: "Deep-fried classic red Russian sausage.",
    price: 20,
    category: "Russians",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "97",
    name: "Russian with Chips",
    description: "Deep-fried classic red Russian sausage, served with a portion of crispy chips.",
    price: 40,
    category: "Russians",
    image: "/russian_roll.png"
  },
  {
    id: "99",
    name: "Cheese Russian with Chips",
    description: "Tasty Russian sausage infused with melted cheese, served with a portion of crispy chips.",
    price: 48,
    category: "Russians",
    image: "/boerewors_roll.png"
  },
  {
    id: "101",
    name: "Cheese Russian Long with Chips",
    description: "Extra long gourmet cheese Russian sausage, served with a portion of crispy chips.",
    price: 80,
    category: "Russians",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80"
  },

  // === CLASSIC PIZZAS ===
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
    id: "5",
    name: "BBQ Chicken Pizza",
    description: "BBQ chicken with melted 3 cheeses.",
    price: 85,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "7",
    name: "Mexican Fiesta",
    description: "Spicy mince, peppers & 3 cheeses.",
    price: 90,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "11",
    name: "Rib & BBQ Blast",
    description: "BBQ rib strips with 3 cheeses.",
    price: 100,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "13",
    name: "The Family Kitchen Beast",
    description: "Russian, ham, cheese griller, bacon & 3 cheeses.",
    price: 110,
    category: "Classic Pizzas",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
  },

  // === GOURMET PIZZAS ===
  {
    id: "14",
    name: "Full House",
    description: "Ham, bacon, mushroom, peppers, olives & 3 cheeses.",
    price: 105,
    category: "Gourmet Pizzas",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80"
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
    id: "18",
    name: "Veggie Lovers",
    description: "Mushroom, peppers, onion, olives, feta & 3 cheeses.",
    price: 85,
    category: "Gourmet Pizzas",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=600&q=80"
  },

  // === TOASTIES ===
  {
    id: "19",
    name: "Cheese Toastie",
    price: 20,
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
    id: "22",
    name: "Bacon, Egg & Cheese Toastie",
    price: 40,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1600431521938-f311df781980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "104",
    name: "Bacon & Chicken Mayo Toastie",
    price: 50,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1621800041134-c2741d48f4fa?auto=format&fit=crop&w=600&q=80"
  },

  // === ROLLS ===
  {
    id: "26",
    name: "Wors Roll & Chips",
    price: 50,
    category: "Rolls",
    image: "/boerewors_roll.png"
  },
  {
    id: "28",
    name: "Russian Roll & Chips",
    price: 53,
    category: "Rolls",
    image: "/russian_roll.png"
  },

  // === GRILLED CHICKEN MEALS ===
  {
    id: "108",
    name: "Full Chicken with Chips",
    price: 100,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "110",
    name: "1/2 Chicken with Chips",
    price: 75,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "30",
    name: "Grilled Chicken 1/4 with Chips",
    price: 55,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d90ef8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "31",
    name: "Grilled Chicken 1/4 with Pap",
    price: 40,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
  },

  // === EVERYDAY MAINS ===
  {
    id: "35",
    name: "30cm Monster Burger",
    description: "Beef burger patties, eggs, fried onions, bacon bits, creamed & grated cheese, sliced gherkins, lettuce, tomatoes, and signature Family Kitchen Sauce.",
    price: 150,
    category: "Everyday Mains",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80"
  },

  // === PIZZA/SIDES EXTRAS ===
  {
    id: "36",
    name: "Extra 3 Cheeses",
    price: 15,
    category: "Pizza/Sides Extras",
    image: "/extra_cheese.png"
  },
  {
    id: "37",
    name: "Feta Cheese Portion",
    price: 15,
    category: "Pizza/Sides Extras",
    image: "/feta_cheese.png"
  },
  {
    id: "38",
    name: "Jalapeños",
    price: 10,
    category: "Pizza/Sides Extras",
    image: "/jalapenos.png"
  },
  {
    id: "39",
    name: "Crushed Garlic",
    price: 10,
    category: "Pizza/Sides Extras",
    image: "/garlic.png"
  },
  {
    id: "40",
    name: "Chips Portion",
    price: 20,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "41",
    name: "2L Colldrink",
    price: 35,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "112",
    name: "6 x Rolls",
    price: 27,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1598142719229-3732442475ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "113",
    name: "Small Pap",
    price: 15,
    category: "Pizza/Sides Extras",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
  },

  // === KIDDOS MEALS ===
  {
    id: "42",
    name: "Kiddos Beef Burger Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "44",
    name: "Kiddos Chicken Nuggets Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "45",
    name: "Kiddos Chicken Pops Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80&sig=kiddopops"
  },

  // === KIDDOS PIZZA COMBOS ===
  {
    id: "46",
    name: "Kiddos Bacon & Cheese Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://images.unsplash.com/photo-1528137871230-7010a22f6e60?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "49",
    name: "Kiddos Hawaiian Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?auto=format&fit=crop&w=600&q=80"
  },

  // === REGULAR COMBOS ===
  {
    id: "50",
    name: "Double Pizza & 2L Beverage Combo",
    description: "Any 2 Regular Pizzas + 2-Litre Pepsi.",
    price: 200,
    category: "Regular Combos",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80"
  },

  // === FRIDAY BRAAI DAY ===
  {
    id: "64",
    name: "Braai Pack 1",
    description: "1x Grilled Chicken Piece + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "/braai_pack.png"
  },
  {
    id: "65",
    name: "Braai Pack 2",
    description: "1x Boerewors Coil + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },

  // === SUNDAY LUNCH & DESSERT ===
  {
    id: "68",
    name: "Sunday Roast Platter",
    description: "Traditional Homemade Meatloaf, White Rice, Baked Potato Wedges, Creamy Broccoli & Cauliflower.",
    price: 60,
    category: "Sunday Lunch & Dessert",
    image: "https://images.unsplash.com/photo-1606728035253-49e196707685?auto=format&fit=crop&w=600&q=80"
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
