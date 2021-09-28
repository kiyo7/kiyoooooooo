//lib
import styled, { keyframes } from 'styled-components';

//components
import { AboutPage } from '../Page/AboutPage';

//functions
import { media } from '../util/MediaQuery';

export const MainPage = () => {
  return (
    <>
      <SWrapper>
        <STitleWrapper>
          <SWelcome>
            <span>W</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>m</span>
            <span>e</span>
            <span> </span>
            <span>t</span>
            <span>o</span>
          </SWelcome>
          <br />
          <SMainTitle>
            <SSpan>Ki</SSpan>yo's
            <br />
            PortFolio
          </SMainTitle>
        </STitleWrapper>
      </SWrapper>
      <AboutPage />
    </>
  );
};

const SFeed = styled.span``;

const Trans = keyframes`
from {
  opacity:0;
};
to {
  opacity:1;

}`;

const SWrapper = styled.main`
  margin-top: 3%;
  min-height: 100vh;
  ${media.tablet`  margin-top: 5%;`}
  ${media.phone`  margin-top: 20%;`};
`;
const STitleWrapper = styled.div`
  width: 80%;
  margin: 0 20%;
`;

const SWelcome = styled.h2`
  display: inline-block;
  font-weight: bold;
  margin: 0;
  transform: rotate(-1deg);

  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: serif;
  animation: ${Trans} 5s linear;

  ${media.desktop`  font-size: 5.2rem;`}
  ${media.tablet`  font-size: 3rem;`}
  ${media.phone`  font-size: 2.5rem;`}

  :hover {
    opacity: 0.5;
  }
`;

const SMainTitle = styled(SWelcome)`
  transform: rotate(4deg);
  margin-top: 1rem;
  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
  ${media.desktop`font-size: 6.2rem;`}
  ${media.tablet`font-size: 4.5rem;`}
  ${media.phone`font-size: 3.5rem;`}
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const SSpan = styled.span`
  border-bottom: 5px gray solid;
`;
