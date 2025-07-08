import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer relative w-full">
      <div className="relative w-full aspect-square mb-4 bg-gray-50 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-contain group-hover:opacity-90 transition-opacity"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      
      <div className="text-center">
        <h3 className="text-heading tracking-tight">{project.name}</h3>
      </div>
    </div>
  );
} 