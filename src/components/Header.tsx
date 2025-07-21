import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full header-font" style={{ backgroundColor: '#f8f8f8', marginBottom: '1rem' }}>
      <div className="flex justify-start px-4 py-5 mb-6">
        <div className="w-full">
          <nav className="flex justify-start gap-6">
            <Link href="/" className="nav-link">
              MATHIAS TANG
            </Link>
            <Link href="/supporters" className="nav-link">
              NEWS
            </Link>
            <Link href="/info" className="nav-link-last">
              INFO
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 