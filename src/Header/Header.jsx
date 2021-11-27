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
        <SImagewrapper>
          <LogoLink />
        </SImagewrapper>
        <SNav>
          <LinkTag to="/kiyoooooooo" title={'HOMEページに移動します'}>
            Home
          </LinkTag>
          <LinkTag to="/contact" title={'CONTACTページに移動します'}>
            Contact
          </LinkTag>
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

const SImagewrapper = styled.div`
  width: 100px;
  height: 100px;
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
