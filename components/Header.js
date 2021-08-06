import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';

const LogoStyles = styled.h1`
  background: red;
  transform: skew(-7deg);
  display: inline-block;
  a {
    color: #fff;
    text-transform: uppercase;
    padding: 1rem;
    font-weight: bold;
    padding: 0.5rem;
    text-decoration: none;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    border-bottom: 1px solid var(--black, black);
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">Logo</Link>
        </LogoStyles>
      </div>
      <div className="sub-bar">
        <Nav />
      </div>
    </HeaderStyles>
  );
}
