import Header from '@/components/Header';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main style={{ width: '100%', backgroundColor: 'white', paddingTop: '40px' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '32px 20px', 
          backgroundColor: 'white' 
        }}>
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Your Cart</h1>
            <p className="text-gray-600 mb-8">Your cart is currently empty.</p>
            
            <Link 
              href="/shop"
              className="inline-block border border-black px-8 py-3 text-sm font-medium tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 