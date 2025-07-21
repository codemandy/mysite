import Header from '@/components/Header';

export default function NewsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', width: '100%' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen">
        {/* Left Column - Navigation and Content (40%) */}
        <div className="flex flex-col bg-gray-50">
          <Header />
          <main className="px-4 py-4 mt-6">
            <div>
              <div className="space-y-2">
                <p className="text-xs font-medium" style={{ color: '#666666', fontSize: '11px' }}>MARCH 15, 2024</p>
                <p className="text-base" style={{ fontSize: '11px' }}>New exhibition &ldquo;Digital Frontiers&rdquo; opens at Konstnärshuset in Stockholm. The show features recent works from the Skene series alongside new digital explorations.</p>
              </div>
              
              <br />
              
              <div className="space-y-2">
                <p className="text-xs font-medium" style={{ color: '#666666', fontSize: '11px' }}>FEBRUARY 28, 2024</p>
                <p className="text-base" style={{ fontSize: '11px' }}>Collaboration announced with RPS Gallery Tokyo for a special edition print series. Limited to 25 copies, each piece will be hand-signed and numbered.</p>
              </div>
              
              <br />
              
              <div className="space-y-2">
                <p className="text-xs font-medium" style={{ color: '#666666', fontSize: '11px' }}>JANUARY 12, 2024</p>
                <p className="text-base" style={{ fontSize: '11px' }}>&ldquo;Bubble Series&rdquo; featured in Artforum&apos;s digital edition. The review highlights the exploration of organic forms and fluid dynamics in contemporary digital art.</p>
              </div>
              
              <br />
              
              <div className="space-y-2">
                <p className="text-xs font-medium" style={{ color: '#666666', fontSize: '11px' }}>DECEMBER 8, 2023</p>
                <p className="text-base" style={{ fontSize: '11px' }}>Solo exhibition &ldquo;Translations&rdquo; opens at Vermland Basement in Copenhagen. The show presents new works examining the intersection of technology and natural concepts.</p>
              </div>
              
              <br />
              
              <div className="space-y-2">
                <p className="text-xs font-medium" style={{ color: '#666666', fontSize: '11px' }}>NOVEMBER 20, 2023</p>
                <p className="text-base" style={{ fontSize: '11px' }}>Artist talk at Royal College of Art London discussing pictorial strategies in digital media. The lecture explores recent developments in the Musictheory series.</p>
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