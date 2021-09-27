import styled from 'styled-components';

import { LinkTag } from '../route/LinkTag';
import { LogoLink } from '../route/LogoLink';
import { Humbugger } from './Humbugger';

import { media } from '../util/MediaQuery';

export const Header = () => {
  return (
    <>
      <SHeader>
        <LogoLink />
        <SNav>
          <LinkTag to="/about">About</LinkTag>
          <LinkTag to="/contact">Contact</LinkTag>
        </SNav>
        <SHumbuggerWrapper>
          <Humbugger />
        </SHumbuggerWrapper>
      </SHeader>
    </>
  );
};

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5% 4% 0;
`;

const SNav = styled.nav`
  display: flex;
  list-style: none;
  ${media.tablet`  display:none`}
`;

const SHumbuggerWrapper = styled.div`
  ${media.desktop`  display:none`}
  ${media.tablet`  display:static`}
`;
