import { useEffect, useState } from 'react';
import { ProjectTheme } from '@/data/themes';

export const useTheme = (theme: ProjectTheme | null) => {
  const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
  const [fadeActive, setFadeActive] = useState(false);

  useEffect(() => {
    if (!theme) return;

    // Reset fade states for new theme
    setBackgroundsLoaded(false);
    setFadeActive(false);

    // Apply CSS custom properties for the current theme
    const root = document.documentElement;
    
    // Set background images/gradients
    root.style.setProperty('--bg-left-column', 
      theme.backgrounds.leftColumn.startsWith('linear-gradient') 
        ? theme.backgrounds.leftColumn 
        : `url('${theme.backgrounds.leftColumn}')`
    );
    
    root.style.setProperty('--bg-middle-column', 
      theme.backgrounds.middleColumn.startsWith('linear-gradient') 
        ? theme.backgrounds.middleColumn 
        : `url('${theme.backgrounds.middleColumn}')`
    );
    
    root.style.setProperty('--bg-project-images', 
      theme.backgrounds.projectImagesSection.startsWith('linear-gradient') 
        ? theme.backgrounds.projectImagesSection 
        : `url('${theme.backgrounds.projectImagesSection}')`
    );
    
    root.style.setProperty('--bg-project-details', 
      theme.backgrounds.projectDetailsSection.startsWith('linear-gradient') 
        ? theme.backgrounds.projectDetailsSection 
        : `url('${theme.backgrounds.projectDetailsSection}')`
    );

    // Set text colors
    root.style.setProperty('--color-navigation-text', theme.colors.navigationText);
    root.style.setProperty('--color-project-text', theme.colors.projectText);
    root.style.setProperty('--color-project-labels', theme.colors.projectLabels);
    root.style.setProperty('--color-project-image-titles', theme.colors.projectImageTitles);

    // Set darken properties
    root.style.setProperty('--darken-opacity', theme.fade.opacity.toString());
    root.style.setProperty('--fade-duration', `${theme.fade.duration}ms`);

    // Preload background images if fade is enabled
    if (theme.fade.enabled) {
      const backgroundUrls = [
        theme.backgrounds.leftColumn,
        theme.backgrounds.middleColumn,
        theme.backgrounds.projectImagesSection,
        theme.backgrounds.projectDetailsSection
      ].filter(bg => !bg.startsWith('linear-gradient')); // Only preload actual image URLs

      if (backgroundUrls.length === 0) {
        // If all backgrounds are gradients, skip preloading
        setBackgroundsLoaded(true);
        setTimeout(() => {
          setFadeActive(true);
          root.style.setProperty('--fade-active', '1');
        }, theme.fade.delayMs);
        return;
      }

      let loadedCount = 0;
      const totalCount = backgroundUrls.length;

      const preloadImage = (url: string) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            if (loadedCount === totalCount) {
              setBackgroundsLoaded(true);
              // Apply fade effect after specified delay
              setTimeout(() => {
                setFadeActive(true);
                root.style.setProperty('--fade-active', '1');
              }, theme.fade.delayMs);
            }
            resolve();
          };
          img.onerror = () => {
            // Continue even if some images fail to load
            loadedCount++;
            if (loadedCount === totalCount) {
              setBackgroundsLoaded(true);
              setTimeout(() => {
                setFadeActive(true);
                root.style.setProperty('--fade-active', '1');
              }, theme.fade.delayMs);
            }
            resolve();
          };
          img.src = url;
        });
      };

      // Preload all background images
      Promise.all(backgroundUrls.map(preloadImage));
    } else {
      // If fade is disabled, mark as ready immediately
      setBackgroundsLoaded(true);
      root.style.setProperty('--fade-active', '0');
    }

    // Cleanup function to reset to default when component unmounts
    return () => {
      root.style.removeProperty('--bg-left-column');
      root.style.removeProperty('--bg-middle-column');
      root.style.removeProperty('--bg-project-images');
      root.style.removeProperty('--bg-project-details');
      root.style.removeProperty('--color-navigation-text');
      root.style.removeProperty('--color-project-text');
      root.style.removeProperty('--color-project-labels');
      root.style.removeProperty('--color-project-image-titles');
      root.style.removeProperty('--darken-opacity');
      root.style.removeProperty('--fade-duration');
      root.style.removeProperty('--fade-active');
    };
  }, [theme]);

  return { theme, backgroundsLoaded, fadeActive };
};