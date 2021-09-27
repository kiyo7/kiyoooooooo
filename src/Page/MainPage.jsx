import styled from 'styled-components';

import { AboutPage } from '../Page/AboutPage';

import { media } from '../util/MediaQuery';

export const MainPage = () => {
  return (
    <>
      <SWrapper>
        <STitleWrapper>
          <SWelcome>Welcome to</SWelcome>
          <br />
          <SMainTitle>
            <SSpan>Ki</SSpan>yo's
            <br />
            PortFolio
          </SMainTitle>
        </STitleWrapper>
      </SWrapper>
      <AboutPage></AboutPage>
    </>
  );
};

const SWrapper = styled.main`
  margin-top: 3%;
  ${media.tablet`  margin-top: 5%;`}
  ${media.phone`  margin-top: 20%;`}
`;
const STitleWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
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
  ${media.desktop`  font-size: 5rem;`}
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
  ${media.desktop`font-size: 6rem;`}
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
