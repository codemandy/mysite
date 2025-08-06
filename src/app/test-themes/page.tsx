'use client';

import { useState, useEffect } from 'react';
import { projectThemes, ProjectTheme } from '@/data/themes';
import styles from '@/styles/backgrounds.module.css';

export default function TestThemesPage() {
  const [currentTheme, setCurrentTheme] = useState<ProjectTheme>(projectThemes.default);
  const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
  const [fadeActive, setFadeActive] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Apply theme CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    
    // Set background images/gradients
    root.style.setProperty('--bg-left-column', 
      currentTheme.backgrounds.leftColumn.startsWith('linear-gradient') 
        ? currentTheme.backgrounds.leftColumn 
        : `url('${currentTheme.backgrounds.leftColumn}')`
    );
    
    root.style.setProperty('--bg-middle-column', 
      currentTheme.backgrounds.middleColumn.startsWith('linear-gradient') 
        ? currentTheme.backgrounds.middleColumn 
        : `url('${currentTheme.backgrounds.middleColumn}')`
    );
    
    root.style.setProperty('--bg-project-images', 
      currentTheme.backgrounds.projectImagesSection.startsWith('linear-gradient') 
        ? currentTheme.backgrounds.projectImagesSection 
        : `url('${currentTheme.backgrounds.projectImagesSection}')`
    );
    
    root.style.setProperty('--bg-project-details', 
      currentTheme.backgrounds.projectDetailsSection.startsWith('linear-gradient') 
        ? currentTheme.backgrounds.projectDetailsSection 
        : `url('${currentTheme.backgrounds.projectDetailsSection}')`
    );

    // Set text colors
    root.style.setProperty('--color-primary-text', currentTheme.colors.primaryText);
    root.style.setProperty('--color-secondary-text', currentTheme.colors.secondaryText);
    root.style.setProperty('--color-label-text', currentTheme.colors.labelText);
    root.style.setProperty('--color-navigation-text', currentTheme.colors.navigationText);

  }, [currentTheme]);

  // Preload background images and handle fade effect
  useEffect(() => {
    setBackgroundsLoaded(false);
    setFadeActive(false);
    setLoadingProgress(0);

    const backgroundUrls = [
      currentTheme.backgrounds.leftColumn,
      currentTheme.backgrounds.middleColumn,
      currentTheme.backgrounds.projectImagesSection,
      currentTheme.backgrounds.projectDetailsSection
    ].filter(bg => !bg.startsWith('linear-gradient')); // Only preload actual image URLs

    if (backgroundUrls.length === 0) {
      // If all backgrounds are gradients, skip preloading
      setBackgroundsLoaded(true);
      setTimeout(() => setFadeActive(true), 2000);
      return;
    }

    let loadedCount = 0;
    const totalCount = backgroundUrls.length;

    const preloadImage = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalCount) * 100);
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load background image: ${url}`);
          loadedCount++;
          setLoadingProgress((loadedCount / totalCount) * 100);
          resolve(); // Continue even if some images fail
        };
        img.src = url;
      });
    };

    // Preload all background images
    Promise.all(backgroundUrls.map(preloadImage))
      .then(() => {
        setBackgroundsLoaded(true);
        console.log(`✅ All ${totalCount} background images loaded for theme: ${currentTheme.name}`);
        
        // Apply fade effect after 2 seconds
        setTimeout(() => {
          setFadeActive(true);
          console.log(`🎨 Fade effect activated for theme: ${currentTheme.name}`);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error loading background images:', error);
        setBackgroundsLoaded(true);
        setTimeout(() => setFadeActive(true), 2000);
      });

  }, [currentTheme]);

  const handleThemeChange = (themeId: string) => {
    const theme = projectThemes[themeId];
    if (theme) {
      console.log(`🔄 Switching to theme: ${theme.name}`);
      setCurrentTheme(theme);
    }
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Theme Controls Panel */}
      <div className="w-80 bg-white p-6 shadow-lg overflow-y-auto z-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Theme Tester</h1>
        
        {/* Current Theme Info */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="font-semibold text-lg mb-2">Current Theme</h2>
          <p className="text-gray-700 mb-2">{currentTheme.name}</p>
          <div className="text-sm text-gray-600">
            <p>ID: {currentTheme.id}</p>
          </div>
        </div>

        {/* Loading Status */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Loading Status</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${backgroundsLoaded ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <span className="text-sm">Backgrounds: {backgroundsLoaded ? 'Loaded' : 'Loading...'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${fadeActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <span className="text-sm">Fade Effect: {fadeActive ? 'Active' : 'Waiting...'}</span>
            </div>
            {!backgroundsLoaded && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
            )}
          </div>
        </div>

        {/* Theme Selector */}
        <div className="space-y-2">
          <h3 className="font-semibold mb-3">Available Themes</h3>
          {Object.entries(projectThemes).map(([themeId, theme]) => (
            <button
              key={themeId}
              onClick={() => handleThemeChange(themeId)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                currentTheme.id === themeId 
                  ? 'bg-blue-100 border-2 border-blue-500 text-blue-800' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <div className="font-medium">{theme.name}</div>
              <div className="text-sm opacity-75">{theme.id}</div>
            </button>
          ))}
        </div>

        {/* Background URLs Display */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Background Sources</h3>
          <div className="space-y-1 text-xs text-gray-600">
            <div><strong>Left:</strong> {currentTheme.backgrounds.leftColumn}</div>
            <div><strong>Middle:</strong> {currentTheme.backgrounds.middleColumn}</div>
            <div><strong>Images:</strong> {currentTheme.backgrounds.projectImagesSection}</div>
            <div><strong>Details:</strong> {currentTheme.backgrounds.projectDetailsSection}</div>
          </div>
        </div>
      </div>

      {/* Background Test Area */}
      <div className="flex-1 flex">
        {/* Left Column */}
        <div 
          className={`w-1/4 ${styles.leftColumn} relative`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className={`text-center p-4 ${styles.navigationText}`}>
              <h3 className="font-bold text-lg mb-2">Left Column</h3>
              <p className="text-sm">Navigation Area</p>
              {fadeActive && (
                <div className="mt-4 text-xs bg-black bg-opacity-30 p-2 rounded">
                  ✨ Fade Active
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div 
          className={`w-1/4 ${styles.middleColumn} relative`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className={`text-center p-4 ${styles.primaryText}`}>
              <h3 className="font-bold text-lg mb-2">Middle Column</h3>
              <p className="text-sm">Project Grid</p>
              {fadeActive && (
                <div className="mt-4 text-xs bg-black bg-opacity-30 p-2 rounded">
                  ✨ Fade Active
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Images Section */}
        <div 
          className={`w-1/4 ${styles.projectImagesSection} relative`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className={`text-center p-4 ${styles.primaryText}`}>
              <h3 className="font-bold text-lg mb-2">Images Section</h3>
              <p className="text-sm">Project Images</p>
              {fadeActive && (
                <div className="mt-4 text-xs bg-black bg-opacity-30 p-2 rounded">
                  ✨ Fade Active
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div 
          className={`w-1/4 ${styles.projectDetailsSection} relative`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className={`text-center p-4 ${styles.secondaryText}`}>
              <h3 className="font-bold text-lg mb-2">Details Section</h3>
              <p className="text-sm">Project Details</p>
              {fadeActive && (
                <div className="mt-4 text-xs bg-black bg-opacity-30 p-2 rounded">
                  ✨ Fade Active
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}