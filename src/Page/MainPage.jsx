//lib
import styled from 'styled-components';

//component
import { AboutPage } from '../Page/AboutPage';
import { ScrollRevealContainer } from '../util/ScrollRevealContainer';

//function
import { media } from '../util/MediaQuery';

//animation
import { Trans } from '../util/animation';

export const MainPage = () => {
  return (
    <>
      <SWrapper>
        <ScrollRevealContainer move="left">
          <STitleWrapper>
            <SWelcome>Welcome to</SWelcome>
            <br />
            <SMainTitle>
              <SSpan>Ki</SSpan>yo's
              <br />
              PortFolio
            </SMainTitle>
          </STitleWrapper>
        </ScrollRevealContainer>
      </SWrapper>
      <AboutPage />
    </>
  );
};

const SWrapper = styled.main`
  min-height: 100vh;
  ${media.tablet`  margin-top: 10%;`}
  ${media.phone`  margin-top: 30%;`};
`;

const STitleWrapper = styled.div`
  width: 80%;
  margin: 0 10%;
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
  font-size: 6rem;

  ${media.tablet`  font-size: 13vw;`}
  ${media.phone`  font-size: 13vw;`}

  :hover {
    opacity: 0.5;
  }
`;

const SMainTitle = styled(SWelcome)`
  transform: rotate(4deg);
  margin-top: 1rem;
  font-size: 7rem;
  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
  ${media.tablet`font-size: 19vw;`}
  ${media.phone`font-size: 19vw;`}
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const SSpan = styled.span`
  border-bottom: 5px gray solid;
`;
