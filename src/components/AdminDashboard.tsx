import React, { useState, useEffect, useRef } from "react";
import { useAssets } from "../context/AssetContext";
import { 
  UploadCloud, Copy, Check, HelpCircle, X,
  Search, Image as ImageIcon, Video, AlertCircle, RefreshCw, 
  CheckCircle2, Sliders, ArrowLeft, Trash2, Calendar, HardDrive, Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface UploadHistoryItem {
  id: string;
  name: string;
  url: string;
  type: "image" | "video";
  uploadedAt: number;
  size: string;
}

export default function AdminDashboard({ onBackToHome }: { onBackToHome: () => void }) {
  const { 
    menuItems, aboutImages, heroVideo,
    replaceMenuAsset, replaceAboutAsset, replaceHeroAsset, resetAllAssets 
  } = useAssets();

  // Active Tab
  const [activeTab, setActiveTab] = useState<"uploader" | "site-assets">("uploader");

  // Cloudinary Settings
  const [cloudName, setCloudName] = useState(() => localStorage.getItem("cloudinary_cloud_name") || "");
  const [uploadPreset, setUploadPreset] = useState(() => localStorage.getItem("cloudinary_upload_preset") || "");
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Uploader & Upload History State
  const [uploadHistory, setUploadHistory] = useState<UploadHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem("cloudinary_upload_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterType, setFilterType] = useState<"all" | "image" | "video">("all");

  // Drag and drop / uploading states
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Direct slot replacement state (for local dev filesystem updates)
  const [targetSlot, setTargetSlot] = useState<{
    type: "menu" | "about" | "hero";
    key: string | number;
    name: string;
  } | null>(null);

  // Copy URL state
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  
  // Dev mode and sync status
  const [isDevMode, setIsDevMode] = useState(false);
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "success" | "error">("idle");

  useEffect(() => {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      setIsDevMode(true);
    }
  }, []);

  // Sync upload history to localStorage
  useEffect(() => {
    localStorage.setItem("cloudinary_upload_history", JSON.stringify(uploadHistory));
  }, [uploadHistory]);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("cloudinary_cloud_name", cloudName.trim());
    localStorage.setItem("cloudinary_upload_preset", uploadPreset.trim());
    setSettingsSaved(true);
    setTimeout(() => {
      setSettingsSaved(false);
    }, 1500);
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const handleDeleteHistoryItem = (id: string) => {
    setUploadHistory(prev => prev.filter(item => item.id !== id));
  };

  const formatBytes = (bytes: number, decimals = 1) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  // Perform upload to Cloudinary
  const uploadFile = async (file: File): Promise<string> => {
    if (!cloudName || !uploadPreset) {
      throw new Error("Cloud Name and Upload Preset must be configured first.");
    }

    setIsUploading(true);
    setUploadProgress(5);
    setUploadError(null);
    setUploadSuccess(null);

    const isVideo = file.type.startsWith("video/");
    const endpoint = `https://api.cloudinary.com/v1_1/${cloudName.trim()}/${isVideo ? "video" : "image"}/upload`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset.trim());
    formData.append("folder", "family_kitchen_manual");

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", endpoint);

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percentage = Math.round((e.loaded / e.total) * 90);
          setUploadProgress(5 + percentage);
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            setUploadProgress(100);
            resolve(response.secure_url);
          } catch {
            reject(new Error("Failed to parse Cloudinary response."));
          }
        } else {
          try {
            const response = JSON.parse(xhr.responseText);
            reject(new Error(response.error?.message || "Upload failed."));
          } catch {
            reject(new Error(`Server error status ${xhr.status}`));
          }
        }
      };

      xhr.onerror = () => reject(new Error("Network connection error."));
      xhr.send(formData);
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      executeUpload(e.target.files[0]);
    }
  };

  const executeUpload = async (file: File) => {
    try {
      const secureUrl = await uploadFile(file);
      
      // Add to general upload history
      const newItem: UploadHistoryItem = {
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        url: secureUrl,
        type: file.type.startsWith("video/") ? "video" : "image",
        uploadedAt: Date.now(),
        size: formatBytes(file.size)
      };
      setUploadHistory(prev => [newItem, ...prev]);

      // If a specific slot was targeted for replacement (local dev sync)
      if (targetSlot) {
        setSyncStatus("syncing");
        let diskSyncSuccess = false;
        if (targetSlot.type === "menu") {
          diskSyncSuccess = await replaceMenuAsset(targetSlot.key as string, secureUrl);
        } else if (targetSlot.type === "about") {
          diskSyncSuccess = await replaceAboutAsset(targetSlot.key as number, secureUrl);
        } else if (targetSlot.type === "hero") {
          diskSyncSuccess = await replaceHeroAsset(secureUrl);
        }

        if (diskSyncSuccess) {
          setSyncStatus("success");
        } else {
          setSyncStatus("error");
        }
        setTimeout(() => {
          setSyncStatus("idle");
          setTargetSlot(null);
        }, 3000);
      }

      setUploadSuccess(`Successfully uploaded: ${file.name}`);
      setTimeout(() => setUploadSuccess(null), 3000);
    } catch (err: any) {
      setUploadError(err.message || "An error occurred during upload.");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      executeUpload(e.dataTransfer.files[0]);
    }
  };

  // Compile active site assets list (read-only reference / local dev replaceable)
  const siteAssets: Array<{
    type: "menu" | "about" | "hero";
    key: string | number;
    name: string;
    description?: string;
    category: string;
    url: string;
  }> = [];

  siteAssets.push({
    type: "hero",
    key: "video",
    name: "Hero Video Background",
    description: "Background loop video shown on home screen.",
    category: "Hero",
    url: heroVideo
  });

  aboutImages.forEach((img, idx) => {
    siteAssets.push({
      type: "about",
      key: idx,
      name: `About Gallery image #${idx + 1}`,
      category: "About Gallery",
      url: img
    });
  });

  menuItems.forEach(item => {
    siteAssets.push({
      type: "menu",
      key: item.id,
      name: item.name,
      description: item.description,
      category: `Menu: ${item.category}`,
      url: item.image || ""
    });
  });

  // Filter history or site assets based on search query
  const filteredHistory = uploadHistory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.url.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const filteredSiteAssets = siteAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (asset.description && asset.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          asset.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || 
                            (selectedCategory === "Hero" && asset.type === "hero") ||
                            (selectedCategory === "About" && asset.type === "about") ||
                            (selectedCategory === "Menu" && asset.type === "menu");

    return matchesSearch && matchesCategory;
  });

  // Local reset confirmation
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const handleResetAll = async () => {
    await resetAllAssets();
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-white flex flex-col font-sans">
      
      {/* Top Navbar Header */}
      <header className="px-6 py-5 border-b border-charcoal-800 bg-charcoal-900/60 sticky top-0 z-50 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-charcoal-800 border border-charcoal-700 text-charcoal-300 hover:text-white hover:bg-charcoal-750 transition-all font-medium text-xs tracking-wider uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Site
          </button>
          
          <div className="h-6 w-[1px] bg-charcoal-800 hidden sm:block" />
          
          <div>
            <h1 className="text-lg font-serif font-semibold tracking-wider">Cloudinary Upload Dashboard</h1>
            <p className="text-[10px] text-charcoal-400 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
              General Asset Manager
              {isDevMode && (
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[9px] border border-emerald-500/20">
                  Local Dev Sync Active
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Sync Indicator */}
        {syncStatus !== "idle" && (
          <div className="flex items-center gap-1.5 text-xs bg-charcoal-900 px-3 py-1.5 rounded-lg border border-charcoal-800">
            {syncStatus === "syncing" && (
              <>
                <RefreshCw className="w-3.5 h-3.5 text-gold-400 animate-spin" />
                <span className="text-gold-400 font-medium">Writing updates to local disk files...</span>
              </>
            )}
            {syncStatus === "success" && (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Source code updated!</span>
              </>
            )}
            {syncStatus === "error" && (
              <>
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-rose-400 font-medium">Failed to write to code (saved in browser override)</span>
              </>
            )}
          </div>
        )}
      </header>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 flex-grow w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Configuration & Dropzone (Col-span 4) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Cloudinary credentials setup panel */}
          <div className="p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="font-serif text-base font-semibold text-gold-400">Cloudinary Credentials</h2>
              <a 
                href="https://cloudinary.com/console" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[11px] text-charcoal-400 hover:text-gold-400 flex items-center gap-1 transition-colors underline"
              >
                Open Cloudinary Console
              </a>
            </div>

            <form onSubmit={handleSaveSettings} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-charcoal-400 uppercase tracking-widest">Cloud Name</label>
                <input 
                  type="text" 
                  value={cloudName} 
                  onChange={(e) => setCloudName(e.target.value)} 
                  className="bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm font-mono"
                  placeholder="e.g. ddfuc0ktg"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-charcoal-400 uppercase tracking-widest">Unsigned Upload Preset</label>
                <input 
                  type="text" 
                  value={uploadPreset} 
                  onChange={(e) => setUploadPreset(e.target.value)} 
                  className="bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm font-mono"
                  placeholder="e.g. preset_unsigned"
                  required
                />
              </div>

              <div className="flex items-start gap-2 bg-charcoal-950 p-3 rounded-lg border border-charcoal-850/80 text-[11px] text-charcoal-400 leading-relaxed mt-1">
                <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <p>
                  Create an <strong>Unsigned Upload Preset</strong> in settings (Settings &rarr; Upload &rarr; Upload presets) so you can drop files here directly without exposing api keys.
                </p>
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-charcoal-950 font-semibold rounded-lg text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {settingsSaved ? <CheckCircle2 className="w-4 h-4 text-charcoal-950" /> : "Save Credentials"}
              </button>
            </form>
          </div>

          {/* Large Uploader Dropzone */}
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-base font-semibold text-white px-1">Upload Assets</h2>
            
            {targetSlot && (
              <div className="p-3.5 bg-gold-400/10 border border-gold-400/20 text-gold-200 text-xs rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-gold-400" />
                  <div>
                    <span className="font-semibold text-white">Replacing Active Slot:</span>
                    <p className="text-[10px] text-charcoal-400 truncate max-w-[200px]">{targetSlot.name}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setTargetSlot(null)}
                  className="p-1 text-charcoal-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all min-h-[200px] ${isDragging ? "border-gold-400 bg-gold-400/5" : "border-charcoal-800 bg-charcoal-900 hover:border-charcoal-700 hover:bg-charcoal-900/60"}`}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*,video/*" 
                className="hidden" 
              />
              
              {isUploading ? (
                <div className="flex flex-col items-center gap-3 w-full max-w-[240px]">
                  <RefreshCw className="w-10 h-10 text-gold-400 animate-spin" />
                  <span className="text-sm font-semibold text-white">Uploading to Cloudinary...</span>
                  <div className="w-full bg-charcoal-950 h-2 rounded-full overflow-hidden border border-charcoal-850 mt-1">
                    <div 
                      className="bg-gradient-to-r from-gold-400 to-amber-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <span className="text-xs text-charcoal-400 font-semibold">{uploadProgress}% Complete</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-charcoal-950/60 flex items-center justify-center border border-charcoal-850">
                    <UploadCloud className="w-7 h-7 text-charcoal-400 group-hover:text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-200">
                      Drag & Drop files to upload
                    </p>
                    <p className="text-xs text-charcoal-400 mt-1">
                      or click to browse your computer
                    </p>
                  </div>
                  <p className="text-[10px] text-charcoal-500 uppercase tracking-widest font-mono">
                    Image (PNG, JPG, WEBP) / Video (MP4)
                  </p>
                </div>
              )}
            </div>

            {uploadError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                <span>{uploadError}</span>
              </div>
            )}

            {uploadSuccess && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                <span>{uploadSuccess}</span>
              </div>
            )}
          </div>

        </div>

        {/* Right Side: Library History & Reference (Col-span 8) */}
        <div className="lg:col-span-8 flex flex-col gap-6 h-full">
          
          {/* Tab selector */}
          <div className="flex justify-between items-center border-b border-charcoal-800 pb-3">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveTab("uploader");
                  setSearchQuery("");
                }}
                className={`pb-2.5 font-serif text-lg font-medium transition-all relative ${activeTab === "uploader" ? "text-gold-400" : "text-charcoal-400 hover:text-white"}`}
              >
                Upload History
                {activeTab === "uploader" && (
                  <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400" />
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab("site-assets");
                  setSearchQuery("");
                }}
                className={`pb-2.5 font-serif text-lg font-medium transition-all relative ${activeTab === "site-assets" ? "text-gold-400" : "text-charcoal-400 hover:text-white"}`}
              >
                In-Use Site Assets
                {activeTab === "site-assets" && (
                  <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400" />
                )}
              </button>
            </div>

            {/* General Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-charcoal-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-charcoal-900 border border-charcoal-800 rounded-lg pl-9 pr-4 py-1.5 text-white focus:outline-none focus:border-gold-400 transition-colors text-xs w-[180px] sm:w-[240px]"
                placeholder={activeTab === "uploader" ? "Search upload history..." : "Search site assets..."}
              />
            </div>
          </div>

          {/* TAB 1: GENERAL UPLOAD HISTORY */}
          {activeTab === "uploader" && (
            <div className="flex flex-col gap-4">
              
              {/* Type filter controls */}
              <div className="flex items-center justify-between text-xs bg-charcoal-900/40 px-4 py-2.5 rounded-xl border border-charcoal-800/60">
                <span className="text-charcoal-400 uppercase tracking-widest text-[10px] font-semibold">
                  Upload History List ({filteredHistory.length})
                </span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setFilterType("all")}
                    className={`px-2 py-1 rounded transition-colors ${filterType === "all" ? "bg-charcoal-800 text-gold-400" : "text-charcoal-400 hover:text-white"}`}
                  >
                    All Types
                  </button>
                  <button 
                    onClick={() => setFilterType("image")}
                    className={`px-2 py-1 rounded transition-colors ${filterType === "image" ? "bg-charcoal-800 text-gold-400" : "text-charcoal-400 hover:text-white"}`}
                  >
                    Images
                  </button>
                  <button 
                    onClick={() => setFilterType("video")}
                    className={`px-2 py-1 rounded transition-colors ${filterType === "video" ? "bg-charcoal-800 text-gold-400" : "text-charcoal-400 hover:text-white"}`}
                  >
                    Videos
                  </button>
                </div>
              </div>

              {/* History Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <AnimatePresence>
                  {filteredHistory.map(item => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={item.id}
                      className="group rounded-xl border border-charcoal-800 bg-charcoal-900/40 p-3 flex flex-col gap-3 hover:border-charcoal-700 hover:bg-charcoal-900 transition-all duration-300"
                    >
                      {/* Media preview */}
                      <div className="aspect-video w-full rounded-lg bg-black/60 border border-charcoal-800 overflow-hidden relative flex items-center justify-center">
                        {item.type === "video" ? (
                          <video src={item.url} muted className="w-full h-full object-cover" />
                        ) : (
                          <img src={item.url} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                        )}
                        
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Ready
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-sm font-medium text-white line-clamp-1 group-hover:text-gold-400 transition-colors">
                            {item.name}
                          </h4>
                          
                          <div className="flex flex-col gap-1 mt-2 text-[10px] text-charcoal-400">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 shrink-0" />
                              {new Date(item.uploadedAt).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <HardDrive className="w-3.5 h-3.5 shrink-0" />
                              {item.size}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-charcoal-800/80 pt-2.5 mt-2.5">
                          <button
                            onClick={() => handleDeleteHistoryItem(item.id)}
                            className="p-1.5 rounded bg-charcoal-800 hover:bg-rose-500/20 text-charcoal-400 hover:text-rose-400 transition-colors cursor-pointer"
                            title="Remove from history"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleCopyUrl(item.url)}
                            className="px-3 py-1.5 bg-charcoal-800 hover:bg-gold-400 hover:text-charcoal-950 rounded text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            {copiedUrl === item.url ? (
                              <>
                                <Check className="w-3.5 h-3.5" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Copy URL
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {filteredHistory.length === 0 && (
                  <div className="col-span-full py-16 text-center text-charcoal-500">
                    <UploadCloud className="w-12 h-12 text-charcoal-600 mx-auto mb-2" />
                    <p className="font-serif text-base text-charcoal-300">Your Upload History is Empty</p>
                    <p className="text-xs text-charcoal-500 max-w-xs mx-auto mt-1">
                      Files you drag-and-drop into the uploader will show up here, allowing you to copy their secure Cloudinary URLs instantly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: IN-USE SITE ASSETS REFERENCE */}
          {activeTab === "site-assets" && (
            <div className="flex flex-col gap-4">
              
              {/* Category selectors */}
              <div className="flex justify-between items-center text-xs bg-charcoal-900/40 px-4 py-2.5 rounded-xl border border-charcoal-800/60">
                <div className="flex gap-1.5 overflow-x-auto">
                  {["All", "Hero", "About", "Menu"].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded text-xs font-medium uppercase tracking-wider transition-colors ${selectedCategory === cat ? "bg-charcoal-800 text-gold-400" : "text-charcoal-400 hover:text-white"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-charcoal-500 uppercase tracking-widest font-mono">
                  Site Reference List ({filteredSiteAssets.length})
                </span>
              </div>

              {/* Site Assets Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredSiteAssets.map(asset => {
                  const isCloud = asset.url.includes("cloudinary.com");
                  
                  return (
                    <div
                      key={`${asset.type}-${asset.key}`}
                      className="rounded-xl border border-charcoal-800 bg-charcoal-900/40 p-3 flex flex-col gap-3 hover:border-charcoal-700 hover:bg-charcoal-900 transition-all duration-300"
                    >
                      {/* Media preview */}
                      <div className="aspect-video w-full rounded-lg bg-black/60 border border-charcoal-800 overflow-hidden relative flex items-center justify-center">
                        {asset.type === "hero" ? (
                          <video src={asset.url} muted className="w-full h-full object-cover" />
                        ) : (
                          <img src={asset.url} alt={asset.name} loading="lazy" className="w-full h-full object-cover" />
                        )}
                        
                        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/75 text-[9px] uppercase tracking-wider text-charcoal-300">
                          {asset.type === "hero" ? "Hero" : asset.type === "about" ? "About" : "Menu"}
                        </div>

                        <div className={`absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[9px] font-semibold border flex items-center gap-1 ${isCloud ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-amber-500/10 text-amber-300 border-amber-500/30"}`}>
                          <span className={`w-1 h-1 rounded-full ${isCloud ? "bg-emerald-400" : "bg-amber-400"}`} />
                          {isCloud ? "Cloudinary" : "External"}
                        </div>
                      </div>

                      {/* Info & Copy */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-sm font-medium text-white line-clamp-1">
                            {asset.name}
                          </h4>
                          <p className="text-[10px] text-charcoal-400 mt-1 max-w-[200px] truncate font-mono">
                            {asset.url}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-charcoal-800/80 pt-2.5 mt-2.5">
                          {isDevMode ? (
                            <button
                              onClick={() => {
                                setTargetSlot({
                                  type: asset.type,
                                  key: asset.key,
                                  name: asset.name
                                });
                                // Scroll or focus uploader
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="px-2 py-1 text-[10px] bg-gold-400/10 border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-charcoal-950 font-semibold uppercase tracking-wider rounded transition-all cursor-pointer"
                            >
                              Sync Replace
                            </button>
                          ) : (
                            <span className="text-[9px] text-charcoal-500 italic">
                              Read-Only slot
                            </span>
                          )}

                          <button
                            onClick={() => handleCopyUrl(asset.url)}
                            className="p-1.5 rounded bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-300 hover:text-white transition-colors cursor-pointer"
                            title="Copy URL"
                          >
                            {copiedUrl === asset.url ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Local Dev reverting tool */}
              {isDevMode && (
                <div className="border-t border-charcoal-800/60 pt-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-charcoal-950/50 p-4 rounded-xl border border-charcoal-800/50">
                  <div>
                    <h4 className="font-serif text-sm font-medium text-white">Revert Code modifications</h4>
                    <p className="text-xs text-charcoal-400 mt-1 max-w-lg">
                      Tired of overrides? You can run git checkout via our sync API to automatically restore original codebase files.
                    </p>
                  </div>
                  
                  {showResetConfirm ? (
                    <div className="flex gap-2 shrink-0">
                      <button 
                        onClick={() => setShowResetConfirm(false)}
                        className="px-3.5 py-1.5 bg-charcoal-800 hover:bg-charcoal-700 rounded-lg text-xs font-semibold uppercase tracking-wider text-charcoal-300 hover:text-white transition-all cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleResetAll}
                        className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer"
                      >
                        Reset Source Code
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowResetConfirm(true)}
                      className="px-3.5 py-1.5 border border-charcoal-700 hover:border-rose-500 hover:text-rose-400 rounded-lg text-xs font-semibold uppercase tracking-wider text-charcoal-450 transition-all shrink-0 cursor-pointer"
                    >
                      Reset Local Code
                    </button>
                  )}
                </div>
              )}

            </div>
          )}

        </div>

      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-charcoal-800/60 text-center text-xs text-charcoal-500 bg-charcoal-950 mt-12">
        <p>Family Kitchen &copy; 2026 Admin Panel. Bookmarked at /admin.</p>
      </footer>

    </div>
  );
}
