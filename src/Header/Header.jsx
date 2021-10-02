//lib
import styled from 'styled-components';

//component
import { LinkTag } from '../route/LinkTag';
import { LogoLink } from '../route/LogoLink';
import { Humbugger } from './Humbugger';

//function
import { media } from '../util/MediaQuery';

//animation
import { Slide } from '../util/animation';

export const Header = () => {
  return (
    <>
      <SHeader>
        <LogoLink />
        <SNav>
          <LinkTag to="/kiyoooooooo">Home</LinkTag>
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
  padding: 5% 4% 0;
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
