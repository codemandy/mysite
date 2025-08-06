import Link from 'next/link';
import styles from '@/styles/backgrounds.module.css';

export default function Header() {
  return (
    <header className="w-full header-font" style={{ marginBottom: '2rem' }}>
      <div className="flex justify-start px-4 py-5 mb-6">
        <div className="w-full">
          <nav className="flex justify-start gap-6">
            <Link href="/" className={`nav-link ${styles.navigationText}`}>
              MATHIAS TANG
            </Link>
            <Link href="/supporters" className={`nav-link ${styles.navigationText}`}>
              NEWS
            </Link>
            <Link href="/info" className={`nav-link-last ${styles.navigationText}`}>
              INFO
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 