import styled from 'styled-components';

import { media } from '../util/MediaQuery';

export const MainPage = () => {
  return (
    <>
      <SWrapper>
        <STitleWrapper>
          <SWelcome>Welcome!!</SWelcome>
          <br />
          <SMainTitle>
            <SSpan>Ki</SSpan>yo's
            <br />
            PortFolio
          </SMainTitle>
        </STitleWrapper>
      </SWrapper>
    </>
  );
};

const SWrapper = styled.main`
  height: 87vh;
  margin-top: 4%;
  ${media.tablet`  margin-top: 15%;`}
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
  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  font-family: serif;
  ${media.desktop`  font-size: 8rem;`}
  ${media.tablet`  font-size: 5rem;`}
  ${media.phone`  font-size: 2.825rem;`}

  :hover {
    opacity: 0.5;
  }
`;

const SMainTitle = styled(SWelcome)`
  transform: rotate(4deg);
  margin-top: 1rem;
  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
  ${media.desktop`font-size: 10rem;`}
  ${media.tablet`font-size: 6.5rem;`}
  ${media.phone`font-size: 3.75rem;`}
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const SSpan = styled.span`
  border-bottom: 5px gray solid;
`;
