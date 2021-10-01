//lib
import styled from 'styled-components';

//components
import { AboutPage } from '../Page/AboutPage';
import { ScrollRevealContainer } from '../util/ScrollRevealContainer';

//functions
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
  min-height: 85vh;
  ${media.tablet`  margin-top: 20%;`}
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

  ${media.desktop`  font-size: 5.2rem;`}
  ${media.tablet`  font-size: 5rem;`}
  ${media.phone`  font-size: 2.8rem;`}

  :hover {
    opacity: 0.5;
  }
`;

const SMainTitle = styled(SWelcome)`
  transform: rotate(4deg);
  margin-top: 1rem;
  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
  ${media.desktop`font-size: 6.2rem;`}
  ${media.tablet`font-size: 6rem;`}
  ${media.phone`font-size: 4rem;`}
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const SSpan = styled.span`
  border-bottom: 5px gray solid;
`;
