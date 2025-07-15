import Header from '@/components/Header';

export default function NewsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', width: '100%' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen">
        {/* Left Column - Navigation and Content (40%) */}
        <div className="flex flex-col bg-gray-50">
          <Header />
          <main className="px-2 pt-8 mt-2">
            <div style={{ marginLeft: '0.3rem' }}>
              <h1 className="text-sm font-bold mb-6 mt-8">NEWS</h1>
              <div className="space-y-4">
                <p className="text-sm">News and updates will appear here.</p>
              </div>
            </div>
          </main>
        </div>
        
        {/* Right Column - Empty space (60%) */}
        <div className="hidden lg:block bg-white"></div>
      </div>
    </div>
  );
} 