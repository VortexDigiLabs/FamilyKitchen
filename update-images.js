import fs from 'fs';
import path from 'path';

const menuDataPath = path.join(process.cwd(), 'src', 'data', 'menuData.ts');
let content = fs.readFileSync(menuDataPath, 'utf8');

// Find all menu items
const itemsMatch = content.match(/export const menuItems: MenuItem\[\] = \[\s*([\s\S]*)\s*\];/);

if (itemsMatch) {
  let itemsStr = itemsMatch[1];
  
  // Regex to match each item block
  // We'll just add an image field to any item that doesn't have one
  
  const regex = /\{\s*id:\s*"(\d+)",\s*name:\s*"([^"]+)"([^}]+)\}/g;
  
  itemsStr = itemsStr.replace(regex, (match, id, name, rest) => {
    if (rest.includes('image:')) {
      return match; // already has image
    }
    
    const prompt = encodeURIComponent(`${name} food restaurant quality rustic wood-fired`);
    const imageUrl = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt}&image_size=square_hd`;
    
    // insert image before the closing brace
    return match.replace(/\s*\}$/, `,\n    image: "${imageUrl}"\n  }`);
  });
  
  content = content.replace(itemsMatch[1], itemsStr);
  fs.writeFileSync(menuDataPath, content, 'utf8');
  console.log('Updated menuData.ts with images');
} else {
  console.log('Could not find menuItems array');
}
