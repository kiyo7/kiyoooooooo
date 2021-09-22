import styled from 'styled-components';

import logo from '../images/logo.png';

import { NavContent } from './NavContent';

export const Header = () => {
  return (
    <>
      <SHeader>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <SNav>
          <NavContent to="/">HOME</NavContent>
          <NavContent to="/about">ABOUT</NavContent>
          <NavContent to="/contact">CONTACT</NavContent>
        </SNav>
      </SHeader>
    </>
  );
};

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 4% 0;
`;

const SNav = styled.nav`
  display: flex;
  list-style: none;
`;
