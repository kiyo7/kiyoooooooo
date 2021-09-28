//lib
import styled, { keyframes } from 'styled-components';

//components
import { LinkTag } from '../route/LinkTag';
import { LogoLink } from '../route/LogoLink';
import { Humbugger } from './Humbugger';

//functions
import { media } from '../util/MediaQuery';

export const Header = () => {
  return (
    <>
      <SHeader>
        <LogoLink />
        <SNav>
          <LinkTag to="/contact">Contact</LinkTag>
        </SNav>
        <SHumbuggerWrapper>
          <Humbugger />
        </SHumbuggerWrapper>
      </SHeader>
    </>
  );
};

const Slide = keyframes`
from {
 transform: translateX(200px);
 opacity: 0;
}
to {
  transform: translateX(0px)
  opacity: 1;
}`;

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1% 4% 0;
`;

const SNav = styled.nav`
  display: flex;
  list-style: none;

  animation: ${Slide} 2s linear;
  ${media.tablet`  display:none`}
`;

const SHumbuggerWrapper = styled.div`
  ${media.desktop`  display:none`}
  ${media.tablet`  display:static`}
`;
