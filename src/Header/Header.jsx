import styled from 'styled-components';

import logo from '../images/logo.png';

import { LinkTag } from '../route/LinkTag';

export const Header = () => {
  return (
    <>
      <SHeader>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <SNav>
          <LinkTag to="/">HOME</LinkTag>
          <LinkTag to="/about">ABOUT</LinkTag>
          <LinkTag to="/contact">CONTACT</LinkTag>
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
