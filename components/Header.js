import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Logo</Link>
        <Nav />
      </div>
      <div className="sub-bar">Search</div>
    </header>
  );
}
