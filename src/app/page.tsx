import Header from '@/components/Header';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';

export default function HomePage() {
  // Filter for Season 20 projects (the main collection)
  const season20Projects = projects.filter(project => project.season === 'season-20');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', width: '100%' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen">
        {/* Left Column - Navigation and Projects (40%) */}
        <div className="flex flex-col">
          <Header />
          <main className="flex justify-center px-4 pt-8">
            <ProjectGrid 
              projects={season20Projects} 
            />
          </main>
        </div>
        
        {/* Right Column - Empty space (60%) */}
        <div className="hidden lg:block bg-white"></div>
      </div>
    </div>
  );
}
