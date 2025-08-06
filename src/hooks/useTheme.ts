import { useEffect } from 'react';
import { ProjectTheme } from '@/data/themes';

export const useTheme = (theme: ProjectTheme | null) => {
  useEffect(() => {
    if (!theme) return;

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
    root.style.setProperty('--color-primary-text', theme.colors.primaryText);
    root.style.setProperty('--color-secondary-text', theme.colors.secondaryText);
    root.style.setProperty('--color-label-text', theme.colors.labelText);
    root.style.setProperty('--color-navigation-text', theme.colors.navigationText);

    // Cleanup function to reset to default when component unmounts
    return () => {
      root.style.removeProperty('--bg-left-column');
      root.style.removeProperty('--bg-middle-column');
      root.style.removeProperty('--bg-project-images');
      root.style.removeProperty('--bg-project-details');
      root.style.removeProperty('--color-primary-text');
      root.style.removeProperty('--color-secondary-text');
      root.style.removeProperty('--color-label-text');
      root.style.removeProperty('--color-navigation-text');
    };
  }, [theme]);

  return theme;
};