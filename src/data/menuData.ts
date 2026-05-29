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
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Hawaiian%20Delight%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "3",
    name: "Bacon & Cheese Feast",
    description: "Crispy bacon & 3 cheeses.",
    price: 80,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Bacon%20%26%20Cheese%20Feast%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "4",
    name: "Chicken Mayo Supreme",
    description: "Creamy chicken mayo & 3 cheeses.",
    price: 85,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Chicken%20Mayo%20Supreme%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "5",
    name: "BBQ Chicken Pizza",
    description: "BBQ chicken with melted 3 cheeses.",
    price: 85,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=BBQ%20Chicken%20Pizza%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "6",
    name: "Italian Stallion",
    description: "Bolognese mince & 3 cheeses.",
    price: 85,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Italian%20Stallion%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "7",
    name: "Mexican Fiesta",
    description: "Spicy mince, peppers & 3 cheeses.",
    price: 90,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Mexican%20Fiesta%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "8",
    name: "Salami Passion",
    description: "Salami & extra 3 cheeses.",
    price: 90,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Salami%20Passion%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "9",
    name: "Sweet Chilli Chicken",
    description: "Chicken strips, sweet chilli sauce & feta.",
    price: 95,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Sweet%20Chilli%20Chicken%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "10",
    name: "Bacon Garlic Feta",
    description: "Bacon, feta & crushed garlic.",
    price: 95,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Bacon%20Garlic%20Feta%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "11",
    name: "Rib & BBQ Blast",
    description: "BBQ rib strips with 3 cheeses.",
    price: 100,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Rib%20%26%20BBQ%20Blast%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "12",
    name: "Steakhouse Special",
    description: "Steak strips, onion & mushroom.",
    price: 100,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Steakhouse%20Special%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "13",
    name: "The Family Kitchen Beast",
    description: "Russian, ham, cheese griller, bacon & 3 cheeses.",
    price: 110,
    category: "Classic Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=The%20Family%20Kitchen%20Beast%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Gourmet Pizzas
  {
    id: "14",
    name: "Full House",
    description: "Ham, bacon, mushroom, peppers, olives & 3 cheeses.",
    price: 105,
    category: "Gourmet Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Full%20House%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "15",
    name: "Triple Cheese Explosion",
    description: "Mozzarella, cheddar & feta.",
    price: 95,
    category: "Gourmet Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Triple%20Cheese%20Explosion%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "16",
    name: "Chicken Peri Peri",
    description: "Peri peri chicken with peppers & 3 cheeses.",
    price: 95,
    category: "Gourmet Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Chicken%20Peri%20Peri%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "17",
    name: "Breakfast Pizza",
    description: "Egg, bacon, 3 cheeses & grilled tomato.",
    price: 90,
    category: "Gourmet Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Breakfast%20Pizza%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "18",
    name: "Veggie Lovers",
    description: "Mushroom, peppers, onion, olives, feta & 3 cheeses.",
    price: 85,
    category: "Gourmet Pizzas",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Veggie%20Lovers%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Toasties
  {
    id: "19",
    name: "Cheese Toastie",
    price: 15,
    category: "Toasties",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Cheese%20Toastie%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "20",
    name: "Ham & Cheese Toastie",
    price: 25,
    category: "Toasties",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Ham%20%26%20Cheese%20Toastie%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "21",
    name: "Bacon & Cheese Toastie",
    price: 28,
    category: "Toasties",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Bacon%20%26%20Cheese%20Toastie%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "22",
    name: "Bacon Egg & Cheese Toastie",
    price: 35,
    category: "Toasties",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Bacon%20Egg%20%26%20Cheese%20Toastie%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "23",
    name: "Beef Burger Toastie",
    price: 35,
    category: "Toasties",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Beef%20Burger%20Toastie%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "24",
    name: "Chicken Burger Toastie",
    price: 30,
    category: "Toasties",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Chicken%20Burger%20Toastie%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "25",
    name: "Bacon & Egg Toastie",
    price: 28,
    category: "Toasties",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Bacon%20%26%20Egg%20Toastie%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Rolls
  {
    id: "26",
    name: "Wors Roll & Chips",
    price: 35,
    category: "Rolls",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Wors%20Roll%20%26%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "27",
    name: "Wors Roll (Standalone)",
    price: 35,
    category: "Rolls",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Wors%20Roll%20(Standalone)%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "28",
    name: "Russian Roll & Chips",
    price: 53,
    category: "Rolls",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Russian%20Roll%20%26%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "29",
    name: "Russian Roll (Standalone)",
    price: 38,
    category: "Rolls",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Russian%20Roll%20(Standalone)%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Grilled Chicken Meals
  {
    id: "30",
    name: "Grilled Chicken 1/4 with Chips",
    price: 42,
    category: "Grilled Chicken Meals",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Grilled%20Chicken%201%2F4%20with%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "31",
    name: "Grilled Chicken 1/4 with Pap",
    price: 40,
    category: "Grilled Chicken Meals",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Grilled%20Chicken%201%2F4%20with%20Pap%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "32",
    name: "Grilled Chicken 1/4 with Rice",
    price: 42,
    category: "Grilled Chicken Meals",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Grilled%20Chicken%201%2F4%20with%20Rice%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Everyday Mains
  {
    id: "33",
    name: "300g Aged Ribeye Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 120,
    category: "Everyday Mains",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=300g%20Aged%20Ribeye%20Steak%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "34",
    name: "250g Sirloin Steak",
    description: "Served with 1 Egg and Crinkle Cut Chips.",
    price: 85,
    category: "Everyday Mains",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=250g%20Sirloin%20Steak%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "35",
    name: "30cm Monster Burger",
    description: "Beef burger patties, eggs, fried onions, bacon bits, creamed & grated cheese, sliced gherkins, lettuce, tomatoes, and signature Family Kitchen Sauce.",
    price: 150,
    category: "Everyday Mains",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=30cm%20Monster%20Burger%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Pizza/Sides Extras
  {
    id: "36",
    name: "Extra 3 Cheeses",
    price: 15,
    category: "Pizza/Sides Extras",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Extra%203%20Cheeses%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "37",
    name: "Feta Cheese Portion",
    price: 15,
    category: "Pizza/Sides Extras",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Feta%20Cheese%20Portion%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "38",
    name: "Jalapeños",
    price: 10,
    category: "Pizza/Sides Extras",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Jalape%C3%B1os%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "39",
    name: "Crushed Garlic",
    price: 10,
    category: "Pizza/Sides Extras",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Crushed%20Garlic%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "40",
    name: "Chips Portion",
    price: 20,
    category: "Pizza/Sides Extras",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Chips%20Portion%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "41",
    name: "2L Colldrink",
    price: 35,
    category: "Pizza/Sides Extras",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=2L%20Colldrink%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Kiddos Meals
  {
    id: "42",
    name: "Kiddos Beef Burger Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiddos%20Beef%20Burger%20Platter%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "43",
    name: "Kiddos Chicken Burger Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiddos%20Chicken%20Burger%20Platter%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "44",
    name: "Kiddos Chicken Nuggets Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiddos%20Chicken%20Nuggets%20Platter%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "45",
    name: "Kiddos Chicken Pops Platter",
    description: "Includes 100% Apple Liqui Fruit Juice Box & Smiley Fries.",
    price: 35,
    category: "Kiddos Meals",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiddos%20Chicken%20Pops%20Platter%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Kiddos Pizza Combos
  {
    id: "46",
    name: "Kiddos Bacon & Cheese Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiddos%20Bacon%20%26%20Cheese%20Pizza%20Combo%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "47",
    name: "Kiddos BBQ Chicken Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiddos%20BBQ%20Chicken%20Pizza%20Combo%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "48",
    name: "Kiddos Tomato & Cheese Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiddos%20Tomato%20%26%20Cheese%20Pizza%20Combo%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "49",
    name: "Kiddos Hawaiian Pizza Combo",
    description: "Includes 1x Small Pizza & Juice Box.",
    price: 38,
    category: "Kiddos Pizza Combos",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiddos%20Hawaiian%20Pizza%20Combo%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Regular Combos
  {
    id: "50",
    name: "Double Pizza & 2L Beverage Combo",
    description: "Any 2 Regular Pizzas + 2-Litre Pepsi.",
    price: 200,
    category: "Regular Combos",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Double%20Pizza%20%26%202L%20Beverage%20Combo%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Limited Stock Promotions (Valid 26.05-05.06)
  {
    id: "51",
    name: "Bulk Pizza Combo",
    description: "2 x Pizzas (Bacon & Cheese Feast or BBQ Chicken) + 2L Pepsi.",
    price: 200,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Bulk%20Pizza%20Combo%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "52",
    name: "4 x Beef Burgers with Chips",
    price: 220,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=4%20x%20Beef%20Burgers%20with%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "53",
    name: "4 x Beef Burgers (No Chips)",
    price: 200,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=4%20x%20Beef%20Burgers%20(No%20Chips)%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "54",
    name: "4 x Chicken Burgers with Chips",
    price: 220,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=4%20x%20Chicken%20Burgers%20with%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "55",
    name: "4 x Chicken Burgers (No Chips)",
    price: 200,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=4%20x%20Chicken%20Burgers%20(No%20Chips)%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "56",
    name: "1 x Monster Burger with Chips",
    price: 180,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=1%20x%20Monster%20Burger%20with%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "57",
    name: "1 x Monster Burger (No Chips)",
    price: 150,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=1%20x%20Monster%20Burger%20(No%20Chips)%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "58",
    name: "1 x Mini Monster Burger with Chips",
    price: 130,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=1%20x%20Mini%20Monster%20Burger%20with%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "59",
    name: "1 x Mini Monster Burger (No Chips)",
    price: 100,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=1%20x%20Mini%20Monster%20Burger%20(No%20Chips)%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "60",
    name: "4 x Wors Rolls with Chips",
    price: 180,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=4%20x%20Wors%20Rolls%20with%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "61",
    name: "4 x Wors Rolls (No Chips)",
    price: 145,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=4%20x%20Wors%20Rolls%20(No%20Chips)%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "62",
    name: "3 x Kota with Chips",
    price: 125,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=3%20x%20Kota%20with%20Chips%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "63",
    name: "3 x Kota (No Chips)",
    price: 95,
    category: "Limited Stock Promotions",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=3%20x%20Kota%20(No%20Chips)%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Friday Braai Day Special
  {
    id: "64",
    name: "Braai Pack 1",
    description: "1x Grilled Chicken Piece + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Braai%20Pack%201%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "65",
    name: "Braai Pack 2",
    description: "1x Boerewors Coil + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Braai%20Pack%202%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "66",
    name: "Braai Pack 3",
    description: "1x Pork Chop + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Braai%20Pack%203%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "67",
    name: "Braai Pack 4",
    description: "1x Beef Brisket Cut + 1x Chicken Kebab Stick + Braai Pap.",
    price: 60,
    category: "Friday Braai Day",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Braai%20Pack%204%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },

  // Sunday Lunch & Dessert
  {
    id: "68",
    name: "Sunday Roast Platter",
    description: "Traditional Homemade Meatloaf, White Rice, Baked Potato Wedges, Creamy Broccoli & Cauliflower.",
    price: 60,
    category: "Sunday Lunch & Dessert",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Sunday%20Roast%20Platter%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  },
  {
    id: "69",
    name: "Traditional Dessert Add-on",
    description: "Classic Malva Pudding served with hot custard.",
    price: 25,
    category: "Sunday Lunch & Dessert",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Traditional%20Dessert%20Add-on%20food%20restaurant%20quality%20rustic%20wood-fired&image_size=square_hd"
  }
];
