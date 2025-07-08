'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { collections } from '@/data/products';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-20 w-64 h-[calc(100vh-5rem)] bg-white border-r border-gray-100 overflow-y-auto">
      <div className="p-6">
        <nav className="space-y-2">
          <Link 
            href="/shop"
            className={`block text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${
              pathname === '/shop' ? 'opacity-70' : ''
            }`}
          >
            Back
          </Link>
          
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/shop${collection.path}`}
              className={`block text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${
                pathname === `/shop${collection.path}` ? 'opacity-70' : ''
              }`}
            >
              {collection.name}
            </Link>
          ))}
          
          <div className="pt-4 space-y-2">
            <Link 
              href="/past-seasons"
              className="block text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
            >
              Past Seasons
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
} 