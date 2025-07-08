import Header from '@/components/Header';
import ProjectGrid from '@/components/ProjectGrid';
import { projects, collections } from '@/data/projects';
import { notFound } from 'next/navigation';

interface CollectionPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collectionPath = `/${slug.join('/')}`;
  
  // Find the collection
  const collection = collections.find(c => c.path === collectionPath);
  
  if (!collection) {
    notFound();
  }
  
  // Filter projects for this collection/season
  const collectionProjects = projects.filter(project => 
    project.season === collection.id
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', width: '100%' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen">
        {/* Left Column - Navigation and Projects (40%) */}
        <div className="flex flex-col">
          <Header />
          <main className="flex justify-center px-4 pt-8">
            <ProjectGrid 
              projects={collectionProjects} 
            />
          </main>
        </div>
        
        {/* Right Column - Empty space (60%) */}
        <div className="hidden lg:block bg-white"></div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.path.split('/').filter(Boolean),
  }));
} 