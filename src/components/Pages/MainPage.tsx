//lib
import styled from "styled-components";
import React, { useCallback } from "react";

//component
import { AboutPage } from "./AboutPage";
import { ScrollRevealContainer } from "../../util/ScrollRevealContainer";

//function
import { tab, sp } from "../../util/MediaQuery";

//animation
import { FadeIn, Trans } from "../../util/animation";

//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

export const MainPage: React.FC = () => {
  const aboutPageRef: React.RefObject<HTMLDivElement> = React.createRef();

  const scrollBottom = useCallback(() => {
    aboutPageRef.current!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [aboutPageRef]);

  return (
    <>
      <SWrapper>
        <ScrollRevealContainer move="left">
          <STitleWrapper>
            <SWelcome>
              Welcome <SSmall>to</SSmall>
            </SWelcome>
            <br />
            <SMainTitle>
              <SSpan>Ki</SSpan>yo's
              <br />
              PortFolio
            </SMainTitle>
          </STitleWrapper>
        </ScrollRevealContainer>
        <div style={{ textAlign: "center", color: "#a09b9d" }}>
          <SFontAwesomeIcon
            icon={faChevronCircleDown}
            size={"4x"}
            onClick={scrollBottom}
          />
        </div>
      </SWrapper>
      <div ref={aboutPageRef} />
      <AboutPage />
    </>
  );
};

const SWrapper = styled.main`
  ${tab`  margin-top: 10%;`}
  ${sp`  margin-top: 30%;`};
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

  ${tab`  font-size: 13vw;`}
  ${sp`  font-size: 13vw;`}
`;

const SMainTitle = styled(SWelcome)`
  transform: rotate(4deg);
  margin-top: 1rem;
  font-size: 7rem;
  background-image: linear-gradient(-90deg, #a09b9d 0%, #515255 100%);
  ${tab`font-size: 19vw;`}
  ${sp`font-size: 19vw;`}
`;

const SSmall = styled.span`
  font-size: 4vw;
  ${tab`  font-size: 7vw;`}
`;

const SSpan = styled.span`
  border-bottom: 5px gray solid;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  animation: ${FadeIn} 1s infinite;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
