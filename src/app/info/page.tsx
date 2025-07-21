import Header from '@/components/Header';

export default function InfoPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', width: '100%' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen">
        {/* Left Column - Navigation and Content (40%) */}
        <div className="flex flex-col bg-gray-50">
          <Header />
          <main className="px-4 py-4 mt-6">
            <div className="space-y-4">
              <p className="text-base" style={{ fontSize: '11px' }}>Based in Copenhagen - Malmö. His work examines pictorial strategies through a variety of media. A wide interest in interpretation and translations of gestures in technology and concepts in nature are fundamental to his practice. He holds an MA from Royal College of Art in London (2020). Recent exhibitions include: Konstnärshuset (Stockholm), Vermland (Basement) (Copenhagen), Skene (Malmö), RPS Gallery (Tokyo), HGB Gallery (Leipzig), Kunstverien Siegen (Siegen).</p>
            </div>
          </main>
        </div>
        
        {/* Right Column - Empty space (60%) */}
        <div className="hidden lg:block bg-white"></div>
      </div>
    </div>
  );
} 