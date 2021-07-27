import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Logo</Link>
        <nav>Nav</nav>
      </div>
      <div className="sub-bar">Search</div>
    </header>
  );
}
