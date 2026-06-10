import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'cloudinary-assets-sync-plugin',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const urlPath = req.url ? req.url.split('?')[0].split('#')[0] : '';
            if (urlPath === '/admin' || urlPath === '/dashboard' || urlPath === '/admin/' || urlPath === '/dashboard/') {
              req.url = '/index.html';
            }

            if (req.url === '/api/update-asset' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', () => {
                try {
                  const { type, key, newUrl } = JSON.parse(body);
                  
                  if (type === 'menu') {
                    const menuPath = path.resolve(__dirname, 'src/data/menuData.ts');
                    let content = fs.readFileSync(menuPath, 'utf8');
                    
                    const blockRegex = new RegExp(`(\\{[\\s\\S]*?id:\\s*["']${key}["'][\\s\\S]*?\\})`, 'g');
                    let matchFound = false;
                    content = content.replace(blockRegex, (block) => {
                      matchFound = true;
                      return block.replace(/(image:\s*["'])[^"']*?(["'])/, `$1${newUrl}$2`);
                    });
                    
                    if (matchFound) {
                      fs.writeFileSync(menuPath, content, 'utf8');
                      res.writeHead(200, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ success: true }));
                      return;
                    }
                  } else if (type === 'about') {
                    const aboutPath = path.resolve(__dirname, 'src/components/About.tsx');
                    let content = fs.readFileSync(aboutPath, 'utf8');
                    const match = content.match(/const CARUSAL_IMAGES = \[\s*([\s\S]*?)\s*\];/);
                    if (match) {
                      const arrayBody = match[1];
                      const urls = arrayBody.match(/"[^"]*?"|'[^']*?'/g) || [];
                      if (urls[Number(key)]) {
                        const parsedUrls = urls.map(u => u.replace(/^["']|["']$/g, ''));
                        parsedUrls[Number(key)] = newUrl;
                        const newArrayBody = "\n" + parsedUrls.map(u => `  "${u}"`).join(",\n") + "\n";
                        content = content.replace(/const CARUSAL_IMAGES = \[\s*[\s\S]*?\s*\];/, `const CARUSAL_IMAGES = [${newArrayBody}];`);
                        fs.writeFileSync(aboutPath, content, 'utf8');
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: true }));
                        return;
                      }
                    }
                  } else if (type === 'hero') {
                    const heroPath = path.resolve(__dirname, 'src/components/Hero.tsx');
                    let content = fs.readFileSync(heroPath, 'utf8');
                    content = content.replace(/(src=")[^"]+?\.mp4(")/, `$1${newUrl}$2`);
                    fs.writeFileSync(heroPath, content, 'utf8');
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true }));
                    return;
                  }
                  
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'Asset target not found or invalid type' }));
                } catch (err: any) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: err.message }));
                }
              });
            } else if (req.url === '/api/reset-assets' && req.method === 'POST') {
              try {
                execSync('git checkout -- src/data/menuData.ts src/components/About.tsx src/components/Hero.tsx', { 
                  cwd: path.resolve(__dirname) 
                });
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
              } catch (err: any) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              }
            } else {
              next();
            }
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
