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
    primaryText: string;
    secondaryText: string;
    labelText: string;
    navigationText: string;
  };
}

export const projectThemes: Record<string, ProjectTheme> = {
  default: {
    id: 'default',
    name: 'Default Light',
    backgrounds: {
      leftColumn: '/media/backgrounds/08.png',
      middleColumn: '/media/backgrounds/home.jpg',
      projectImagesSection: '/media/backgrounds/02.png',
      projectDetailsSection: '/media/backgrounds/04.jpg',
    },
    colors: {
      primaryText: '#2a2a2a',
      secondaryText: '#2a2a2a',
      labelText: '#555555',
      navigationText: '#1a1a1a',
    },
  },
  
  bubble: {
    id: 'bubble',
    name: 'Bubble Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/11.png',
      middleColumn: '/media/backgrounds/15.png',
      projectImagesSection: '/media/backgrounds/09.jpg',
      projectDetailsSection: '/media/backgrounds/13.png',
    },
    colors: {
      primaryText: '#ffffff',
      secondaryText: '#f0f0f0',
      labelText: '#cccccc',
      navigationText: '#ffffff',
    },
  },

  collage: {
    id: 'collage',
    name: 'Collage Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/07.png',
      middleColumn: '/media/backgrounds/01.jpg',
      projectImagesSection: '/media/backgrounds/14.png',
      projectDetailsSection: '/media/backgrounds/06.png',
    },
    colors: {
      primaryText: '#1a1a1a',
      secondaryText: '#2a2a2a',
      labelText: '#444444',
      navigationText: '#1a1a1a',
    },
  },

  skene: {
    id: 'skene',
    name: 'Skene Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/12.png',
      middleColumn: '/media/backgrounds/05.jpg',
      projectImagesSection: '/media/backgrounds/03.svg',
      projectDetailsSection: '/media/backgrounds/10.png',
    },
    colors: {
      primaryText: '#ffffff',
      secondaryText: '#e0e0e0',
      labelText: '#b0b0b0',
      navigationText: '#ffffff',
    },
  },

  watches: {
    id: 'watches',
    name: 'Watches Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/04.jpg',
      middleColumn: '/media/backgrounds/11.png',
      projectImagesSection: '/media/backgrounds/15.png',
      projectDetailsSection: '/media/backgrounds/08.png',
    },
    colors: {
      primaryText: '#EAEAEA',
      secondaryText: '#E7E7E7',
      labelText: '#121212',
      navigationText: '#F0F0F0',
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
      primaryText: '#ffffff',
      secondaryText: '#e0e0e0',
      labelText: '#b0b0b0',
      navigationText: '#ffffff',
    },
  },

  roadhearts: {
    id: 'roadhearts',
    name: 'Roadhearts Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/09.jpg',
      middleColumn: '/media/backgrounds/14.png',
      projectImagesSection: '/media/backgrounds/01.jpg',
      projectDetailsSection: '/media/backgrounds/12.png',
    },
    colors: {
      primaryText: '#ffffff',
      secondaryText: '#f0f0f0',
      labelText: '#cccccc',
      navigationText: '#ffffff',
    },
  },

  musictheory: {
    id: 'musictheory',
    name: 'Music Theory Theme',
    backgrounds: {
      leftColumn: '/media/backgrounds/13.png',
      middleColumn: '/media/backgrounds/07.png',
      projectImagesSection: '/media/backgrounds/05.jpg',
      projectDetailsSection: '/media/backgrounds/02.png',
    },
    colors: {
      primaryText: '#1a1a1a',
      secondaryText: '#2a2a2a',
      labelText: '#555555',
      navigationText: '#1a1a1a',
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