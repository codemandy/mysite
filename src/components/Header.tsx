import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full" style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
      <div className="flex justify-center px-4 py-5">
        <div className="w-full lg:max-w-[40vw]">
          <nav className="flex justify-center lg:justify-end gap-6">
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