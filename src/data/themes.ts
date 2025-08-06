export interface ProjectTheme {
  id: string;
  name: string;
  backgrounds: {
    leftColumn: string;
    middleColumn: string;
    projectImagesSection: string;
    projectDetailsSection: string;
  };
  colors: {
    navigationText: string;      // Navigation menu and project links
    projectText: string;         // Main project content text
    projectLabels: string;       // Labels like "YEAR", "MEDIUM", "DIMENSIONS"
    projectImageTitles: string;  // Image titles and descriptions
  };
  fade: {
    enabled: boolean;
    delayMs: number;
    opacity: number;
    duration: number;
  };
}

export const projectThemes: Record<string, ProjectTheme> = {
  default: {
    id: 'default',
    name: 'Default Light',
    backgrounds: {
      leftColumn: '/media/backgrounds/secondary/19.png',
      middleColumn: '/media/backgrounds/secondary/21.png',
      projectImagesSection: '/media/backgrounds/secondary/16.png',
      projectDetailsSection: '/media/backgrounds/secondary/18.png',
    },
    colors: {
      navigationText: '#1a1a1a',
      projectText: '#2a2a2a',
      projectLabels: '#555555',
      projectImageTitles: '#2a2a2a',
    },
    fade: {
      enabled: true,
      delayMs: 2000,
      opacity: 0.3,
      duration: 1000,
    },
  },
  
  bubble: {
    id: 'bubble',
    name: 'Bubble Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/secondary/20.png',
      middleColumn: '/media/backgrounds/secondary/17.png',
      projectImagesSection: '/media/backgrounds/secondary/21.png',
      projectDetailsSection: '/media/backgrounds/secondary/19.png',
    },
    colors: {
      navigationText: '#ffffff',
      projectText: '#ffffff',
      projectLabels: '#cccccc',
      projectImageTitles: '#f0f0f0',
    },
    fade: {
      enabled: true,
      delayMs: 2000,
      opacity: 0.4,
      duration: 1000,
    },
  },

  collage: {
    id: 'collage',
    name: 'Collage Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/secondary/18.png',
      middleColumn: '/media/backgrounds/secondary/16.png',
      projectImagesSection: '/media/backgrounds/secondary/20.png',
      projectDetailsSection: '/media/backgrounds/secondary/17.png',
    },
    colors: {
      navigationText: '#FFFFFF',
      projectText: '#FFFFFF',
      projectLabels: '#0A8CF6',
      projectImageTitles: '#FFFFFF',
    },
    fade: {
      enabled: true,
      delayMs: 2000,
      opacity: 0.35,
      duration: 1000,
    },
  },

  skene: {
    id: 'skene',
    name: 'Skene Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/secondary/21.png',
      middleColumn: '/media/backgrounds/secondary/19.png',
      projectImagesSection: '/media/backgrounds/secondary/18.png',
      projectDetailsSection: '/media/backgrounds/secondary/16.png',
    },
    colors: {
      navigationText: '#ffffff',
      projectText: '#ffffff',
      projectLabels: '#b0b0b0',
      projectImageTitles: '#e0e0e0',
    },
    fade: {
      enabled: true,
      delayMs: 2000,
      opacity: 0.4,
      duration: 1000,
    },
  },

  watches: {
    id: 'watches',
    name: 'Watches Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/secondary/17.png',
      middleColumn: '/media/backgrounds/secondary/20.png',
      projectImagesSection: '/media/backgrounds/secondary/19.png',
      projectDetailsSection: '/media/backgrounds/secondary/21.png',
    },
    colors: {
      navigationText: '#D9D9D9',
      projectText: '#474747',
      projectLabels: '#2E2E2E',
      projectImageTitles: '#FFFFFF',
    },
    fade: {
      enabled: true,
      delayMs: 2000,
      opacity: 0.4,
      duration: 1000,
    },
  },

  dark: {
    id: 'dark',
    name: 'Dark Theme',
    backgrounds: {
      leftColumn: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      middleColumn: 'linear-gradient(135deg, #2a2a2a 0%, #3d3d3d 100%)',
      projectImagesSection: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      projectDetailsSection: 'linear-gradient(135deg, #2a2a2a 0%, #3d3d3d 100%)',
    },
    colors: {
      navigationText: '#ffffff',
      projectText: '#ffffff',
      projectLabels: '#b0b0b0',
      projectImageTitles: '#e0e0e0',
    },
    fade: {
      enabled: false,
      delayMs: 2000,
      opacity: 0.3,
      duration: 1000,
    },
  },

  roadhearts: {
    id: 'roadhearts',
    name: 'Roadhearts Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/secondary/16.png',
      middleColumn: '/media/backgrounds/secondary/18.png',
      projectImagesSection: '/media/backgrounds/secondary/17.png',
      projectDetailsSection: '/media/backgrounds/secondary/20.png',
    },
    colors: {
      navigationText: '#ffffff',
      projectText: '#ffffff',
      projectLabels: '#cccccc',
      projectImageTitles: '#f0f0f0',
    },
    fade: {
      enabled: true,
      delayMs: 2000,
      opacity: 0.4,
      duration: 1000,
    },
  },

  musictheory: {
    id: 'musictheory',
    name: 'Music Theory Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/secondary/19.png',
      middleColumn: '/media/backgrounds/secondary/21.png',
      projectImagesSection: '/media/backgrounds/secondary/16.png',
      projectDetailsSection: '/media/backgrounds/secondary/18.png',
    },
    colors: {
      navigationText: '#000000',
      projectText: '#ECECEC',
      projectLabels: '#E2E2E2',
      projectImageTitles: '#2a2a2a',
    },
    fade: {
      enabled: true,
      delayMs: 2000,
      opacity: 0.35,
      duration: 1000,
    },
  },
};

export const getThemeForProject = (projectId: string): ProjectTheme => {
  // Map project IDs to theme IDs
  const projectThemeMap: Record<string, string> = {
    'thebaid': 'bubble',
    'bubble': 'bubble',
    'collage': 'collage',
    'skene': 'skene',
    'watches': 'watches',
    'roadhearts': 'roadhearts',
    'musictheory': 'musictheory',
    'selfstorage': 'dark',
    'screensavers': 'dark',
    'bodyshop': 'collage',
    'floorplan': 'default',
    'sild': 'skene',
  };

  const themeId = projectThemeMap[projectId] || 'default';
  return projectThemes[themeId];
};