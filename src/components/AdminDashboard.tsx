import React, { useState, useEffect, useRef } from "react";
import { useAssets, DEFAULT_ABOUT_IMAGES, DEFAULT_HERO_VIDEO } from "../context/AssetContext";
import { 
  X, Settings, UploadCloud, Copy, Check, HelpCircle, 
  Search, Image as ImageIcon, Video, AlertCircle, RefreshCw, 
  FileCode, CheckCircle2, Sliders, ArrowRight, Grid
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AdminDashboard({ onClose }: { onClose: () => void }) {
  const { 
    menuItems, aboutImages, heroVideo, overrides,
    replaceMenuAsset, replaceAboutAsset, replaceHeroAsset, resetAllAssets 
  } = useAssets();

  // Settings
  const [cloudName, setCloudName] = useState(() => localStorage.getItem("cloudinary_cloud_name") || "");
  const [uploadPreset, setUploadPreset] = useState(() => localStorage.getItem("cloudinary_upload_preset") || "");
  const [showSettings, setShowSettings] = useState(false);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterType, setFilterType] = useState<"all" | "cloudinary" | "external">("all");

  // Selection for direct replacement
  const [activeSlot, setActiveSlot] = useState<{
    type: "menu" | "about" | "hero";
    key: string | number;
    name: string;
    currentUrl: string;
  } | null>(null);

  // Drag and drop / uploading states
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Manual URL input state
  const [manualUrl, setManualUrl] = useState("");
  const [showManualInput, setShowManualInput] = useState(false);

  // Copy state
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  
  // Dev mode flag
  const [isDevMode, setIsDevMode] = useState(false);
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "success" | "error">("idle");

  useEffect(() => {
    // Check if running on localhost dev server
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      setIsDevMode(true);
    }
  }, []);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("cloudinary_cloud_name", cloudName.trim());
    localStorage.setItem("cloudinary_upload_preset", uploadPreset.trim());
    setSettingsSaved(true);
    setTimeout(() => {
      setSettingsSaved(false);
      setShowSettings(false);
    }, 1500);
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  // Perform upload to Cloudinary
  const uploadFile = async (file: File): Promise<string> => {
    if (!cloudName || !uploadPreset) {
      throw new Error("Cloud Name and Upload Preset must be configured first.");
    }

    setIsUploading(true);
    setUploadProgress(10);
    setUploadError(null);
    setUploadSuccess(null);

    const isVideo = file.type.startsWith("video/");
    const endpoint = `https://api.cloudinary.com/v1_1/${cloudName.trim()}/${isVideo ? "video" : "image"}/upload`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset.trim());
    
    // Auto folder organization
    formData.append("folder", "family_kitchen");

    try {
      // Create XMLHttpRequest to track progress
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", endpoint);

        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            const percentage = Math.round((e.loaded / e.total) * 90);
            setUploadProgress(10 + percentage);
          }
        };

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const response = JSON.parse(xhr.responseText);
              setUploadProgress(100);
              resolve(response.secure_url);
            } catch (err) {
              reject(new Error("Failed to parse Cloudinary response."));
            }
          } else {
            try {
              const response = JSON.parse(xhr.responseText);
              reject(new Error(response.error?.message || "Upload failed."));
            } catch (err) {
              reject(new Error(`Server error: Status ${xhr.status}`));
            }
          }
        };

        xhr.onerror = () => reject(new Error("Network connection error."));
        xhr.send(formData);
      });
    } finally {
      // Uploader sets isUploading=false inside executeUpload
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      executeUpload(e.target.files[0]);
    }
  };

  const executeUpload = async (file: File) => {
    if (!activeSlot) {
      setUploadError("Please select an asset slot from the library first.");
      return;
    }

    try {
      const url = await uploadFile(file);
      await saveReplacement(url);
      setUploadSuccess(`Successfully uploaded and replaced: ${file.name}`);
      setTimeout(() => setUploadSuccess(null), 3000);
    } catch (err: any) {
      setUploadError(err.message || "An error occurred during upload.");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleManualUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeSlot || !manualUrl.trim().startsWith("http")) {
      setUploadError("Please provide a valid HTTP/HTTPS URL.");
      return;
    }

    try {
      setIsUploading(true);
      await saveReplacement(manualUrl.trim());
      setUploadSuccess("Successfully replaced asset with manual URL.");
      setShowManualInput(false);
      setManualUrl("");
      setTimeout(() => setUploadSuccess(null), 3000);
    } catch (err: any) {
      setUploadError(err.message || "Failed to replace asset.");
    } finally {
      setIsUploading(false);
    }
  };

  const saveReplacement = async (url: string) => {
    if (!activeSlot) return;

    setSyncStatus("syncing");
    let diskSyncSuccess = false;

    if (activeSlot.type === "menu") {
      diskSyncSuccess = await replaceMenuAsset(activeSlot.key as string, url);
    } else if (activeSlot.type === "about") {
      diskSyncSuccess = await replaceAboutAsset(activeSlot.key as number, url);
    } else if (activeSlot.type === "hero") {
      diskSyncSuccess = await replaceHeroAsset(url);
    }

    if (diskSyncSuccess) {
      setSyncStatus("success");
    } else {
      setSyncStatus("error");
    }
    setTimeout(() => setSyncStatus("idle"), 2500);

    // Refresh active slot context
    setActiveSlot(prev => prev ? { ...prev, currentUrl: url } : null);
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

  const isCloudinaryUrl = (url?: string) => {
    return url && url.includes("cloudinary.com");
  };

  // Compile all assets inside one searchable array
  const allAssets: Array<{
    type: "menu" | "about" | "hero";
    key: string | number;
    name: string;
    description?: string;
    category: string;
    url: string;
    isOverridden: boolean;
  }> = [];

  // 1. Hero
  allAssets.push({
    type: "hero",
    key: "video",
    name: "Hero Video Background",
    description: "Autoplay background video shown on homepage.",
    category: "Hero",
    url: heroVideo,
    isOverridden: !!overrides.heroVideo
  });

  // 2. About
  aboutImages.forEach((img, idx) => {
    allAssets.push({
      type: "about",
      key: idx,
      name: `About Gallery Image #${idx + 1}`,
      description: `Heritage carousel image card at position ${idx + 1}`,
      category: "About Gallery",
      url: img,
      isOverridden: !!overrides.about[idx]
    });
  });

  // 3. Menu
  menuItems.forEach(item => {
    allAssets.push({
      type: "menu",
      key: item.id,
      name: item.name,
      description: item.description,
      category: `Menu: ${item.category}`,
      url: item.image || "",
      isOverridden: !!overrides.menu[item.id]
    });
  });

  // Filter lists
  const filteredAssets = allAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (asset.description && asset.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          asset.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || 
                            (selectedCategory === "Hero" && asset.type === "hero") ||
                            (selectedCategory === "About" && asset.type === "about") ||
                            (selectedCategory === "Menu" && asset.type === "menu");

    const matchesType = filterType === "all" ||
                        (filterType === "cloudinary" && isCloudinaryUrl(asset.url)) ||
                        (filterType === "external" && !isCloudinaryUrl(asset.url));

    return matchesSearch && matchesCategory && matchesType;
  });

  // Statistics
  const totalAssetsCount = allAssets.length;
  const cloudinaryCount = allAssets.filter(a => isCloudinaryUrl(a.url)).length;
  const externalCount = totalAssetsCount - cloudinaryCount;
  const migrationProgress = totalAssetsCount > 0 ? Math.round((cloudinaryCount / totalAssetsCount) * 100) : 0;

  // Active Category Options
  const categoriesList = ["All", "Hero", "About", "Menu"];

  // Reset Overrides
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const handleResetAll = async () => {
    await resetAllAssets();
    setShowResetConfirm(false);
    setActiveSlot(null);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-stretch justify-end bg-black/60 backdrop-blur-sm">
      
      {/* Left Click-out Zone */}
      <div className="flex-grow hidden md:block" onClick={onClose} />

      {/* Main Admin Sidebar Panel */}
      <div className="w-full max-w-4xl bg-charcoal-900 border-l border-charcoal-800 text-white flex flex-col relative shadow-2xl h-full">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-charcoal-800 flex items-center justify-between bg-charcoal-950/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center border border-gold-400/30">
              <Settings className="w-5 h-5 text-gold-400 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-xl font-serif tracking-wider font-semibold">Asset Manager</h2>
              <p className="text-xs text-charcoal-400 uppercase tracking-widest flex items-center gap-1">
                Cloudinary Dashboard 
                {isDevMode && <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[9px] border border-emerald-500/20">Vite Dev Mode</span>}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2.5 rounded-lg border transition-all ${showSettings ? "bg-gold-400 border-gold-500 text-charcoal-950" : "bg-charcoal-800 border-charcoal-700 text-charcoal-300 hover:text-white"}`}
              title="Cloudinary Credentials Setup"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button 
              onClick={onClose}
              className="p-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-charcoal-300 hover:text-white hover:bg-charcoal-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">

          {/* Cloudinary credentials alert */}
          {(!cloudName || !uploadPreset) && (
            <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-400/30 text-gold-200 text-sm flex gap-3 items-start animate-pulse">
              <AlertCircle className="w-5 h-5 shrink-0 text-gold-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Cloudinary Credentials Required</p>
                <p className="mt-1 text-charcoal-300 leading-relaxed">
                  To upload and sync images to Cloudinary, click the settings gear above to save your Cloud Name and Upload Preset.
                </p>
                <button 
                  onClick={() => setShowSettings(true)}
                  className="mt-3 px-4 py-1.5 bg-gold-400 text-charcoal-950 rounded font-medium text-xs tracking-wider uppercase hover:bg-gold-500 transition-colors"
                >
                  Configure Now
                </button>
              </div>
            </div>
          )}

          {/* Settings Section Overlay */}
          <AnimatePresence>
            {showSettings && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <form onSubmit={handleSaveSettings} className="p-5 rounded-xl bg-charcoal-950 border border-charcoal-800 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gold-400 flex items-center gap-2">
                      <Settings className="w-4 h-4" /> Cloudinary Credentials Setup
                    </h3>
                    <a 
                      href="https://cloudinary.com/console" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-charcoal-400 hover:text-gold-400 flex items-center gap-1 transition-colors"
                    >
                      <HelpCircle className="w-3.5 h-3.5" /> Setup Guide
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider">Cloud Name</label>
                      <input 
                        type="text" 
                        value={cloudName} 
                        onChange={(e) => setCloudName(e.target.value)} 
                        className="bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm"
                        placeholder="e.g. ddfuc0ktg"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider">Unsigned Upload Preset</label>
                      <input 
                        type="text" 
                        value={uploadPreset} 
                        onChange={(e) => setUploadPreset(e.target.value)} 
                        className="bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm"
                        placeholder="e.g. preset_unsigned"
                        required
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-charcoal-900 border border-charcoal-800 rounded-lg text-xs text-charcoal-400 leading-relaxed">
                    💡 <strong>How to get preset:</strong> Log in to Cloudinary Dashboard, click gear icon (Settings) &rarr; Upload &rarr; Scroll down to <strong>Upload presets</strong> &rarr; Click <strong>Add upload preset</strong> &rarr; Change Signing Mode to <strong>Unsigned</strong> &rarr; Save. Copy the generated preset name.
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button 
                      type="button" 
                      onClick={() => setShowSettings(false)}
                      className="px-4 py-2 bg-charcoal-800 hover:bg-charcoal-700 rounded-lg text-sm text-charcoal-300 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-5 py-2 bg-gold-400 hover:bg-gold-500 text-charcoal-950 font-semibold rounded-lg text-sm tracking-wide transition-colors flex items-center gap-2"
                    >
                      {settingsSaved ? <CheckCircle2 className="w-4 h-4 text-charcoal-950" /> : "Save Settings"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-charcoal-950 p-4 rounded-xl border border-charcoal-800/80 flex flex-col gap-1">
              <span className="text-xs text-charcoal-400 uppercase tracking-wider">Migration Progress</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-serif text-gold-400 font-semibold">{migrationProgress}%</span>
                <span className="text-xs text-charcoal-500">{cloudinaryCount} of {totalAssetsCount} assets</span>
              </div>
              <div className="w-full bg-charcoal-800 h-1.5 rounded-full overflow-hidden mt-3">
                <div 
                  className="bg-gradient-to-r from-gold-400 to-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${migrationProgress}%` }}
                />
              </div>
            </div>

            <div className="bg-charcoal-950 p-4 rounded-xl border border-charcoal-800/80 flex flex-col gap-1">
              <span className="text-xs text-charcoal-400 uppercase tracking-wider">Cloudinary Uploads</span>
              <span className="text-3xl font-serif text-emerald-400 font-semibold mt-1">{cloudinaryCount}</span>
              <span className="text-xs text-charcoal-500 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Loaded securely
              </span>
            </div>

            <div className="bg-charcoal-950 p-4 rounded-xl border border-charcoal-800/80 flex flex-col gap-1">
              <span className="text-xs text-charcoal-400 uppercase tracking-wider">External Assets</span>
              <span className="text-3xl font-serif text-amber-500 font-semibold mt-1">{externalCount}</span>
              <span className="text-xs text-charcoal-500 mt-2 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" /> Pending migration
              </span>
            </div>
          </div>

          {/* Active Replacement Panel */}
          {activeSlot ? (
            <div className="p-5 rounded-xl bg-gradient-to-r from-charcoal-950 to-charcoal-900 border border-gold-400/20 relative overflow-hidden">
              
              {/* Sync status badge */}
              {syncStatus !== "idle" && (
                <div className="absolute top-4 right-14 flex items-center gap-1.5 text-[11px] font-semibold bg-charcoal-800 px-2.5 py-1 rounded border border-charcoal-700">
                  {syncStatus === "syncing" && (
                    <>
                      <RefreshCw className="w-3 h-3 text-gold-400 animate-spin" />
                      <span className="text-gold-400">Syncing to disk...</span>
                    </>
                  )}
                  {syncStatus === "success" && (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">File system updated!</span>
                    </>
                  )}
                  {syncStatus === "error" && (
                    <>
                      <AlertCircle className="w-3 h-3 text-rose-400" />
                      <span className="text-rose-400">Saved locally only</span>
                    </>
                  )}
                </div>
              )}

              <button 
                onClick={() => setActiveSlot(null)}
                className="absolute top-4 right-4 text-charcoal-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col gap-4">
                <div>
                  <span className="px-2 py-0.5 bg-gold-400/10 text-gold-400 border border-gold-400/20 text-[10px] uppercase tracking-widest font-semibold rounded">
                    Active Replacement Target
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-white mt-1.5">
                    {activeSlot.name}
                  </h3>
                  <p className="text-xs text-charcoal-400 uppercase tracking-wider">
                    {activeSlot.type} slot Key: {activeSlot.key}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                  
                  {/* Current Slot Thumbnail */}
                  <div className="md:col-span-3 rounded-lg border border-charcoal-800 bg-black/40 overflow-hidden relative flex items-center justify-center min-h-[100px]">
                    {activeSlot.type === "hero" ? (
                      <video 
                        src={activeSlot.currentUrl} 
                        muted 
                        className="w-full h-full object-cover max-h-[120px]" 
                      />
                    ) : (
                      <img 
                        src={activeSlot.currentUrl} 
                        alt="Current Slot Preview" 
                        className="w-full h-full object-cover max-h-[120px]"
                      />
                    )}
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/70 text-[9px] text-charcoal-300">
                      Current
                    </div>
                  </div>

                  {/* Replacement Actions */}
                  <div className="md:col-span-9 flex flex-col justify-center gap-3">
                    
                    {/* Drag and Drop Uploader Area */}
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${isDragging ? "border-gold-400 bg-gold-400/5" : "border-charcoal-800 bg-charcoal-900/40 hover:bg-charcoal-850"}`}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        accept="image/*,video/*" 
                        className="hidden" 
                      />
                      {isUploading ? (
                        <div className="flex flex-col items-center gap-2 py-2 w-full max-w-[240px]">
                          <RefreshCw className="w-8 h-8 text-gold-400 animate-spin" />
                          <span className="text-sm font-semibold text-white">Uploading to Cloudinary...</span>
                          <div className="w-full bg-charcoal-800 h-1.5 rounded-full overflow-hidden mt-1">
                            <div 
                              className="bg-gold-400 h-full rounded-full transition-all duration-350"
                              style={{ width: `${uploadProgress}%` }}
                            />
                          </div>
                          <span className="text-xs text-charcoal-400">{uploadProgress}% Complete</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1.5">
                          <UploadCloud className="w-8 h-8 text-charcoal-400 group-hover:text-gold-400 transition-colors" />
                          <p className="text-sm font-medium text-charcoal-200">
                            Drag & Drop to replace, or <span className="text-gold-400 hover:underline">browse files</span>
                          </p>
                          <p className="text-[10px] text-charcoal-400 uppercase tracking-wider">
                            Images (PNG, JPG, WEBP) or Video (MP4)
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Manual Paste Toggle */}
                    <div className="flex items-center justify-between text-xs">
                      <button 
                        type="button"
                        onClick={() => setShowManualInput(!showManualInput)}
                        className="text-charcoal-400 hover:text-gold-400 transition-colors text-[11px] uppercase tracking-wider underline font-medium"
                      >
                        {showManualInput ? "Hide manual URL option" : "Or replace with existing URL"}
                      </button>

                      {isCloudinaryUrl(activeSlot.currentUrl) && (
                        <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Already Cloudinary-hosted
                        </span>
                      )}
                    </div>

                    {showManualInput && (
                      <form onSubmit={handleManualUrlSubmit} className="flex gap-2">
                        <input 
                          type="url" 
                          value={manualUrl} 
                          onChange={(e) => setManualUrl(e.target.value)} 
                          className="bg-charcoal-900 border border-charcoal-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors text-xs flex-grow"
                          placeholder="Paste secure URL here (e.g. https://res.cloudinary.com/...)"
                          required
                        />
                        <button 
                          type="submit"
                          className="px-4 py-2 bg-charcoal-800 hover:bg-gold-400 hover:text-charcoal-950 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all"
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </div>

                </div>

                {uploadError && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{uploadError}</span>
                  </div>
                )}

                {uploadSuccess && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{uploadSuccess}</span>
                  </div>
                )}

              </div>

            </div>
          ) : (
            <div className="p-5 rounded-xl bg-charcoal-950 border border-charcoal-800 text-center flex flex-col items-center justify-center py-8 gap-2">
              <Grid className="w-8 h-8 text-charcoal-600 mb-1" />
              <h3 className="font-serif text-lg font-medium text-charcoal-200">No Asset Slot Selected</h3>
              <p className="text-sm text-charcoal-400 max-w-sm">
                Select an asset slot from the Library grid below, then drop a file to upload it directly to Cloudinary and replace the slot image.
              </p>
            </div>
          )}

          {/* Library Section */}
          <div className="flex flex-col gap-4">
            
            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-charcoal-950/40 p-4 rounded-xl border border-charcoal-800/60">
              
              {/* Category Toggles */}
              <div className="flex gap-1.5 overflow-x-auto">
                {categoriesList.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wider uppercase transition-all ${selectedCategory === cat ? "bg-gold-400 text-charcoal-950" : "bg-charcoal-800 text-charcoal-400 hover:text-white"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Text Search & Type Filter */}
              <div className="flex flex-wrap gap-2 items-center">
                
                {/* Search */}
                <div className="relative flex-grow sm:flex-grow-0">
                  <Search className="w-4 h-4 text-charcoal-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-charcoal-900 border border-charcoal-700 rounded-lg pl-9 pr-4 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors text-xs w-full sm:w-[180px]"
                    placeholder="Search library..."
                  />
                </div>

                {/* Hosting Type dropdown */}
                <select
                  value={filterType}
                  onChange={(e: any) => setFilterType(e.target.value)}
                  className="bg-charcoal-900 border border-charcoal-700 text-charcoal-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-gold-400 cursor-pointer"
                >
                  <option value="all">All Hosts</option>
                  <option value="cloudinary">Cloudinary</option>
                  <option value="external">External Only</option>
                </select>

              </div>

            </div>

            {/* Asset Library Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredAssets.map(asset => {
                  const isCloud = isCloudinaryUrl(asset.url);
                  const isCurrentActive = activeSlot && activeSlot.type === asset.type && activeSlot.key === asset.key;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={`${asset.type}-${asset.key}`}
                      onClick={() => setActiveSlot({
                        type: asset.type,
                        key: asset.key,
                        name: asset.name,
                        currentUrl: asset.url
                      })}
                      className={`group rounded-xl border p-3 flex flex-col gap-3 cursor-pointer transition-all duration-300 ${isCurrentActive ? "border-gold-400 bg-gold-400/5 shadow-lg shadow-gold-500/5" : "border-charcoal-800 bg-charcoal-950/40 hover:border-charcoal-700 hover:bg-charcoal-900"}`}
                    >
                      {/* Card Thumbnail */}
                      <div className="aspect-video w-full rounded-lg bg-black/60 border border-charcoal-800 overflow-hidden relative flex items-center justify-center">
                        {asset.type === "hero" ? (
                          <video 
                            src={asset.url} 
                            muted 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                        ) : (
                          <img 
                            src={asset.url} 
                            alt={asset.name} 
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}

                        {/* Top corner category badge */}
                        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/75 text-[9px] uppercase tracking-wider text-charcoal-300 border border-charcoal-800">
                          {asset.type === "hero" ? "Hero" : asset.type === "about" ? "About" : "Menu"}
                        </div>

                        {/* Host Badge */}
                        <div className={`absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[9px] font-semibold border flex items-center gap-1 ${isCloud ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-amber-500/10 text-amber-300 border-amber-500/30"}`}>
                          <span className={`w-1 h-1 rounded-full ${isCloud ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                          {isCloud ? "Cloudinary" : "External"}
                        </div>
                      </div>

                      {/* Info & Metadata */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-sm font-medium group-hover:text-gold-400 transition-colors text-white line-clamp-1">
                            {asset.name}
                          </h4>
                          <p className="text-[11px] text-charcoal-400 line-clamp-2 mt-1">
                            {asset.description || "No description provided."}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-charcoal-800/80 pt-2.5 mt-2.5">
                          <span className="text-[9px] font-mono text-charcoal-500 max-w-[150px] truncate">
                            {asset.url}
                          </span>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyUrl(asset.url);
                              }}
                              className="p-1.5 rounded bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-300 hover:text-white transition-colors"
                              title="Copy URL"
                            >
                              {copiedUrl === asset.url ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              type="button"
                              className="px-2 py-1 bg-charcoal-800 group-hover:bg-gold-400 group-hover:text-charcoal-950 rounded text-[10px] tracking-wider uppercase font-semibold transition-all"
                            >
                              Replace
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredAssets.length === 0 && (
                <div className="col-span-full py-12 text-center text-charcoal-400">
                  <AlertCircle className="w-8 h-8 text-charcoal-600 mx-auto mb-2" />
                  <p className="font-serif text-base">No assets match your search filter</p>
                  <p className="text-xs text-charcoal-500 mt-1">Try clearing your filters or changing your query.</p>
                </div>
              )}
            </div>

          </div>

          {/* Reset Config */}
          <div className="border-t border-charcoal-800/60 pt-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="font-serif text-sm font-medium text-white">Advanced Configuration Reset</h4>
              <p className="text-xs text-charcoal-400 mt-1 max-w-lg">
                Clears all active overrides stored in your client's browser local storage and restores the default menu/carousel templates.
              </p>
            </div>
            
            {showResetConfirm ? (
              <div className="flex gap-2 shrink-0">
                <button 
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 bg-charcoal-800 hover:bg-charcoal-700 rounded-lg text-xs font-semibold uppercase tracking-wider text-charcoal-300 hover:text-white transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleResetAll}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-semibold uppercase tracking-wider text-white transition-all"
                >
                  Confirm Reset
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="px-4 py-2 border border-charcoal-700 hover:border-rose-500 hover:text-rose-400 rounded-lg text-xs font-semibold uppercase tracking-wider text-charcoal-400 transition-all shrink-0"
              >
                Reset All Assets
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
