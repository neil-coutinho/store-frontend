import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';

const Logo = styled.h1`
  color: green;
  a {
    color: red;
  }
`;

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Logo>
          <Link href="/">Logo</Link>
        </Logo>

        <Nav />
      </div>
      <div className="sub-bar">Search</div>
    </header>
  );
}
