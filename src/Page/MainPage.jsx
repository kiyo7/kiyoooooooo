import styled from 'styled-components';

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
  height: 100vh;
  margin-top: 3%;
`;
const STitleWrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
`;

const SWelcome = styled.h2`
  font-size: 7vw;
  display: inline-block;
  font-weight: bold;
  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: serif;
  transform: rotate(3deg);
  :hover {
    cursor: pointer;
  }
`;

const SMainTitle = styled(SWelcome)`
  font-size: 9vw;
  transform: rotate(0deg);
  margin-top: 1rem;
  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
`;

const SSpan = styled.span`
  border-bottom: 5px gray solid;
`;
