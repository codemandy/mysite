import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ width: '100%', backgroundColor: 'white' }}>
      <div className="flex justify-center px-4 py-5">
        <div className="w-full lg:max-w-[40vw]">
          <nav className="flex justify-center lg:justify-end gap-6">
            <Link href="/" className="nav-link">
              MATHIAS TANG
            </Link>
            <Link href="/projects" className="nav-link">
              PROJECTS
            </Link>
            <Link href="/supporters" className="nav-link">
              SUPPORTERS
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