export const categories = ['All', 'Wood-Fire Pizzas', 'Butcher’s Grill', 'Traditional Favourites'];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isMealOfDay?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Artisan Margherita',
    description: 'San Marzano tomato, buffalo mozzarella, fresh basil, extra virgin olive oil.',
    price: 180,
    category: 'Wood-Fire Pizzas',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'The Godfather Pizza',
    description: 'Spicy salami, caramelized onions, kalamata olives, wood-fired to perfection.',
    price: 220,
    category: 'Wood-Fire Pizzas',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Signature 30cm Monster Burger',
    description: 'Double wagyu beef patties, mature cheddar, butcher\'s secret sauce, triple-cooked fries.',
    price: 280,
    category: 'Butcher’s Grill',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    isMealOfDay: true,
  },
  {
    id: '4',
    name: 'Aged Ribeye Steak',
    description: '300g grass-fed ribeye, dry-aged for 28 days. Served with roasted garlic butter.',
    price: 350,
    category: 'Butcher’s Grill',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Ouma\'s Lamb Stew',
    description: 'Slow-cooked lamb shank, root vegetables, rich red wine gravy, creamy mash.',
    price: 240,
    category: 'Traditional Favourites',
    image: 'https://images.unsplash.com/photo-1534939561126-855b86142e15?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Classic Bobotie',
    description: 'Traditional spiced minced meat baked with an egg-based topping, served with yellow rice.',
    price: 190,
    category: 'Traditional Favourites',
    image: 'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?q=80&w=800&auto=format&fit=crop',
  }
];
