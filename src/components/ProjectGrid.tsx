import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  title?: string;
  onProjectSelect?: (project: Project) => void;
  onProjectClear?: () => void;
}

export default function ProjectGrid({ projects, title, onProjectSelect, onProjectClear }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No projects found in this collection.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {title && (
        <h1 className="text-xl font-bold tracking-tight mb-12 text-center">{title}</h1>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onProjectSelect={onProjectSelect}
            onProjectClear={onProjectClear}
          />
        ))}
      </div>
    </div>
  );
} 