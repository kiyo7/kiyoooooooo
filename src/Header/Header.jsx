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
          <NavContent>HOME</NavContent>
          <NavContent>ABOUT</NavContent>
          <NavContent>CONTACT</NavContent>
        </SNav>
      </SHeader>
    </>
  );
};
const SHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 10px 4% 0;
`;

const SNav = styled.nav`
  display: flex;
  list-style: none;
`;
