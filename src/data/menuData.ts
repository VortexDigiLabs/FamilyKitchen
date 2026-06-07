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
  // === NEW CATEGORIES FROM IMAGES ===

  // Burgers
  {
    id: "72",
    name: "Beef Burger (No Chips)",
    description: "Classic flame-grilled beef burger patty on a fresh bun.",
    price: 45,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "73",
    name: "Beef Burger with Chips",
    description: "Classic flame-grilled beef burger patty on a fresh bun, served with crispy chips.",
    price: 55,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "74",
    name: "Cheese Burger (No Chips)",
    description: "Flame-grilled beef patty topped with melted cheese.",
    price: 50,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "75",
    name: "Cheese Burger with Chips",
    description: "Flame-grilled beef patty topped with melted cheese, served with crispy chips.",
    price: 60,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "76",
    name: "Egg Burger (No Chips)",
    description: "Flame-grilled beef patty topped with a fried egg.",
    price: 50,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "77",
    name: "Egg Burger with Chips",
    description: "Flame-grilled beef patty topped with a fried egg, served with crispy chips.",
    price: 60,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "78",
    name: "Bacon Burger (No Chips)",
    description: "Flame-grilled beef patty topped with crispy bacon.",
    price: 53,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "79",
    name: "Bacon Burger with Chips",
    description: "Flame-grilled beef patty topped with crispy bacon, served with crispy chips.",
    price: 63,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "80",
    name: "Mushroom Burger (No Chips)",
    description: "Flame-grilled beef patty topped with savory mushroom sauce.",
    price: 50,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "81",
    name: "Mushroom Burger with Chips",
    description: "Flame-grilled beef patty topped with savory mushroom sauce, served with crispy chips.",
    price: 60,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "82",
    name: "Pineapple Burger (No Chips)",
    description: "Flame-grilled beef patty topped with a sweet pineapple ring.",
    price: 52,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "83",
    name: "Pineapple Burger with Chips",
    description: "Flame-grilled beef patty topped with a sweet pineapple ring, served with crispy chips.",
    price: 62,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "84",
    name: "Chicken Burger (No Chips)",
    description: "Tender chicken burger patty, flame-grilled and served on a fresh bun.",
    price: 40,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "85",
    name: "Chicken Burger with Chips",
    description: "Tender chicken burger patty, flame-grilled and served on a fresh bun with crispy chips.",
    price: 50,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "86",
    name: "Chicken & Cheese Burger (No Chips)",
    description: "Tender chicken burger patty topped with melted cheese.",
    price: 45,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "87",
    name: "Chicken & Cheese Burger with Chips",
    description: "Tender chicken burger patty topped with melted cheese, served with crispy chips.",
    price: 55,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "88",
    name: "Chicken & Egg Burger (No Chips)",
    description: "Tender chicken burger patty topped with a fried egg.",
    price: 45,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "89",
    name: "Chicken & Egg Burger with Chips",
    description: "Tender chicken burger patty topped with a fried egg, served with crispy chips.",
    price: 55,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "90",
    name: "Bacon & Cheese Burger (No Chips)",
    description: "Flame-grilled beef patty topped with crispy bacon and melted cheese.",
    price: 55,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "91",
    name: "Bacon & Cheese Burger with Chips",
    description: "Flame-grilled beef patty topped with crispy bacon and melted cheese, served with crispy chips.",
    price: 65,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "92",
    name: "Bacon Egg & Cheese Burger (No Chips)",
    description: "Ultimate burger with flame-grilled beef patty, bacon, egg, and melted cheese.",
    price: 60,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "93",
    name: "Bacon Egg & Cheese Burger with Chips",
    description: "Ultimate burger with flame-grilled beef patty, bacon, egg, and melted cheese, served with crispy chips.",
    price: 70,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },

  // Kota
  {
    id: "94",
    name: "Kota (Chips, Egg, Russian & Cheese)",
    description: "Traditional street food hollowed-out quarter loaf bread filled with chips, egg, Russian sausage, and melted cheese.",
    price: 35,
    category: "Kota",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "95",
    name: "Kota Loaded (Chips, Polony, Russian & Cheese)",
    description: "Loaded quarter loaf bread filled with chips, polony, Russian sausage, and cheese. Served with Chips on the Side.",
    price: 55,
    category: "Kota",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },

  // Russians
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
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "98",
    name: "Cheese Russian (No Chips)",
    description: "Tasty Russian sausage infused with melted cheese inside.",
    price: 28,
    category: "Russians",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "99",
    name: "Cheese Russian with Chips",
    description: "Tasty Russian sausage infused with melted cheese, served with a portion of crispy chips.",
    price: 48,
    category: "Russians",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "100",
    name: "Cheese Russian Long (No Chips)",
    description: "Extra long gourmet cheese Russian sausage.",
    price: 60,
    category: "Russians",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "101",
    name: "Cheese Russian Long with Chips",
    description: "Extra long gourmet cheese Russian sausage, served with a portion of crispy chips.",
    price: 80,
    category: "Russians",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "102",
    name: "Roll Normal",
    description: "Freshly baked normal size bread roll.",
    price: 12,
    category: "Russians",
    image: "/boerewors_roll.png"
  },
  {
    id: "103",
    name: "Fastlong Roll",
    description: "Freshly baked long bread roll, ideal for long Russians.",
    price: 20,
    category: "Russians",
    image: "/boerewors_roll.png"
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
    image: "/grilled_steak.png"
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
    id: "21",
    name: "Bacon & Cheese Toastie",
    price: 30,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "104",
    name: "Bacon & Chicken Mayo Toastie",
    price: 50,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1538220856186-0be0e085984d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "22",
    name: "Bacon, Egg & Cheese Toastie",
    price: 40,
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
    id: "25",
    name: "Bacon & Egg Toastie",
    price: 30,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "105",
    name: "Chicken & Mayo Toastie",
    price: 40,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1538220856186-0be0e085984d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "106",
    name: "Ham Cheese & Tomato Toastie",
    price: 28,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1538220856186-0be0e085984d?auto=format&fit=crop&w=600&q=80"
  },
  // Keeps Chicken Burger Toastie from codebase for consistency
  {
    id: "24",
    name: "Chicken Burger Toastie",
    price: 30,
    category: "Toasties",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },

  // === ROLLS ===
  {
    id: "27",
    name: "Wors Roll (Standalone)",
    price: 35,
    category: "Rolls",
    image: "/boerewors_roll_standalone.png"
  },
  {
    id: "26",
    name: "Wors Roll & Chips",
    price: 50,
    category: "Rolls",
    image: "/boerewors_roll.png"
  },
  {
    id: "29",
    name: "Russian Roll (Standalone)",
    price: 38,
    category: "Rolls",
    image: "/russian_roll.png"
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
    id: "107",
    name: "Full Chicken (No Chips)",
    price: 79,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "108",
    name: "Full Chicken with Chips",
    price: 100,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "109",
    name: "1/2 Chicken (No Chips)",
    price: 55,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "110",
    name: "1/2 Chicken with Chips",
    price: 75,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "111",
    name: "1/4 Chicken (No Chips)",
    price: 30,
    category: "Grilled Chicken Meals",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "30",
    name: "Grilled Chicken 1/4 with Chips",
    price: 55,
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
    image: "/grilled_chicken_rice.png"
  },

  // === EVERYDAY MAINS ===
  {
    id: "33",
    name: "300g Aged Ribeye Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 120,
    category: "Everyday Mains",
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "34",
    name: "300g Aged Sirloin Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 95,
    category: "Everyday Mains",
    image: "/grilled_steak.png"
  },
  {
    id: "70",
    name: "350g Aged T-Bone Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 130,
    category: "Everyday Mains",
    image: "/grilled_steak.png"
  },
  {
    id: "71",
    name: "300g Aged Rump Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 110,
    category: "Everyday Mains",
    image: "/grilled_steak.png"
  },
  {
    id: "35",
    name: "30cm Monster Burger",
    description: "Beef burger patties, eggs, fried onions, bacon bits, creamed & grated cheese, sliced gherkins, lettuce, tomatoes, and signature Family Kitchen Sauce.",
    price: 150,
    category: "Everyday Mains",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },

  // === EXTRAS / ADD ONS ===
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
    image: "/boerewors_roll.png"
  },
  {
    id: "113",
    name: "Small Pap",
    price: 15,
    category: "Pizza/Sides Extras",
    image: "/boerewors_roll.png"
  },

  // === KIDDOS MEALS ===
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
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80"
  },

  // === KIDDOS PIZZA COMBOS ===
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
    category: "Kiddos Pizza Combos",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "49",
    name: "Kiddos Hawaiian Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
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

  // === LIMITED STOCK PROMOTIONS ===
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
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "53",
    name: "4 x Beef Burgers (No Chips)",
    price: 200,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "54",
    name: "4 x Chicken Burgers with Chips",
    price: 220,
    category: "Limited Stock Promotions",
    image: "/chicken_burgers_chips.png"
  },
  {
    id: "55",
    name: "4 x Chicken Burgers (No Chips)",
    price: 200,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "58",
    name: "1 x Mini Monster Burger with Chips",
    price: 130,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "59",
    name: "1 x Mini Monster Burger (No Chips)",
    price: 100,
    category: "Limited Stock Promotions",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "60",
    name: "4 x Wors Rolls with Chips",
    price: 180,
    category: "Limited Stock Promotions",
    image: "/boerewors_roll.png"
  },
  {
    id: "61",
    name: "4 x Wors Rolls (No Chips)",
    price: 145,
    category: "Limited Stock Promotions",
    image: "/boerewors_roll_standalone.png"
  },
  {
    id: "62",
    name: "3 x Kota with Chips",
    price: 125,
    category: "Limited Stock Promotions",
    image: "/kota_with_chips.png"
  },
  {
    id: "63",
    name: "3 x Kota (No Chips)",
    price: 95,
    category: "Limited Stock Promotions",
    image: "/kota_no_chips.png"
  },

  // === FRIDAY BRAAI DAY ===
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
    image: "/braai_pack.png"
  },
  {
    id: "67",
    name: "Braai Pack 4",
    description: "1x Beef Brisket Cut + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "/braai_pack.png"
  },

  // === SUNDAY LUNCH & DESSERT ===
  {
    id: "68",
    name: "Sunday Roast Platter",
    description: "Traditional Homemade Meatloaf, White Rice, Baked Potato Wedges, Creamy Broccoli & Cauliflower.",
    price: 60,
    category: "Sunday Lunch & Dessert",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
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
