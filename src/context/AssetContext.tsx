import React, { createContext, useContext, useState, useEffect } from "react";
import { menuItems as defaultMenuItems, MenuItem } from "../data/menuData";

// Default about images
export const DEFAULT_ABOUT_IMAGES = [
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780405776/y45hiqdcbwgyrqr5omrv.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780405776/fjdibesaaqkkqdjnnoqm.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780405776/woidzdbr0ucwgchtixxq.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/tni7bcxrfopdohznujto.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/yglatpbj0rgu1z3ghkja.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/ya67zo4gwoo9n3x6lkkx.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/nmueu1hroekuvu6ugzhy.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/qfwzl1yuo1a9nngaozfl.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/zaqo6w6rk8qt2fket1bi.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419961/bkhq7852pvs9zri1rdht.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419960/drsolg4j5zs2mkeog1ng.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419960/ocbqwnm2teckpxxw48kt.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419960/aa9qbwe0y7zphlsvdssq.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419960/g3paponj5zhjnalymem4.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419959/bxutkn8tb2neovqckr4r.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419959/sxbaqdyx57i452wsan2k.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419959/ft0k9q0o96oy9ujm9aho.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419958/jsxvjjo6turyhcrmb69h.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419958/iz36lm392krbnvayhmd2.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419958/ep7ymiadiudqhdz76qwq.jpg"
];

export const DEFAULT_HERO_VIDEO = "https://res.cloudinary.com/ddfuc0ktg/video/upload/v1780138129/xfmdkg3imxd15vv7g3jh.mp4";

export interface AssetOverrides {
  menu: Record<string, string>; // item id -> new url
  about: Record<number, string>; // index -> new url
  heroVideo: string;
}

interface AssetContextType {
  menuItems: MenuItem[];
  aboutImages: string[];
  heroVideo: string;
  overrides: AssetOverrides;
  replaceMenuAsset: (id: string, newUrl: string) => Promise<boolean>;
  replaceAboutAsset: (index: number, newUrl: string) => Promise<boolean>;
  replaceHeroAsset: (newUrl: string) => Promise<boolean>;
  resetAllAssets: () => Promise<boolean>;
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "family_kitchen_asset_overrides";

export const AssetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [overrides, setOverrides] = useState<AssetOverrides>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          menu: parsed.menu || {},
          about: parsed.about || {},
          heroVideo: parsed.heroVideo || ""
        };
      }
    } catch (e) {
      console.error("Error loading asset overrides from localStorage", e);
    }
    return { menu: {}, about: {}, heroVideo: "" };
  });

  // Derived state: merge defaults with overrides
  const menuItems = defaultMenuItems.map(item => {
    if (overrides.menu[item.id]) {
      return { ...item, image: overrides.menu[item.id] };
    }
    return item;
  });

  const aboutImages = DEFAULT_ABOUT_IMAGES.map((img, idx) => {
    return overrides.about[idx] || img;
  });

  const heroVideo = overrides.heroVideo || DEFAULT_HERO_VIDEO;

  // Persist overrides in localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(overrides));
  }, [overrides]);

  // Sync to filesystem helper (Vite middleware API)
  const syncToFilesystem = async (type: "menu" | "about" | "hero", key: string | number, newUrl: string) => {
    try {
      const res = await fetch("/api/update-asset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, key, newUrl }),
      });
      if (res.ok) {
        console.log(`Successfully synced ${type} asset (${key}) to server filesystem.`);
        return true;
      } else {
        console.warn(`Server filesystem sync returned status ${res.status}.`);
      }
    } catch (e) {
      console.warn("Failed to sync asset to server filesystem (likely running in production/built state).", e);
    }
    return false;
  };

  const replaceMenuAsset = async (id: string, newUrl: string) => {
    setOverrides(prev => ({
      ...prev,
      menu: { ...prev.menu, [id]: newUrl }
    }));
    return await syncToFilesystem("menu", id, newUrl);
  };

  const replaceAboutAsset = async (index: number, newUrl: string) => {
    setOverrides(prev => ({
      ...prev,
      about: { ...prev.about, [index]: newUrl }
    }));
    return await syncToFilesystem("about", index, newUrl);
  };

  const replaceHeroAsset = async (newUrl: string) => {
    setOverrides(prev => ({
      ...prev,
      heroVideo: newUrl
    }));
    return await syncToFilesystem("hero", "video", newUrl);
  };

  const resetAllAssets = async () => {
    setOverrides({ menu: {}, about: {}, heroVideo: "" });
    try {
      const res = await fetch("/api/reset-assets", { method: "POST" });
      return res.ok;
    } catch (e) {
      console.warn("Failed to reset assets on local server filesystem.", e);
    }
    return false;
  };

  return (
    <AssetContext.Provider
      value={{
        menuItems,
        aboutImages,
        heroVideo,
        overrides,
        replaceMenuAsset,
        replaceAboutAsset,
        replaceHeroAsset,
        resetAllAssets
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

export const useAssets = () => {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error("useAssets must be used within an AssetProvider");
  }
  return context;
};
