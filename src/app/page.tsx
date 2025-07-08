import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-black">
            Mathias Tang
          </h1>
          <p className="text-base text-gray-600 font-light tracking-wide">
            Skateboard Company
          </p>
        </div>
        
        <Link 
          href="/shop"
          className="inline-block border border-black px-8 py-3 text-sm font-medium tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
        >
          ENTER
        </Link>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-gray-400 tracking-wide">
            Photography by{' '}
            <a 
              href="https://instagram.com/mathiastang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
Mathias Tang            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
