//lib
import styled from "styled-components";

//function
import { tab, sp } from "../../util/MediaQuery";

//component
import { Introduction } from "../Introduction/Introduction";
import { ScrollRevealContainer } from "../../util/ScrollRevealContainer";

//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

//image
import ganmen from "../../images/ganmen.jpeg";

//animation
import { RoupInf } from "../../util/animation";

export const AboutPage: React.FC = () => {
  return (
    <>
      <SAboutPage>
        <ScrollRevealContainer move="top">
          <STitle>
            <Span>
              <SFontAwesomeIcon icon={faCog} size="xs" />
            </Span>
            About
            <Span>
              <SFontAwesomeIcon icon={faCog} size="xs" />
            </Span>
          </STitle>
        </ScrollRevealContainer>

        <SAboutWrapper>
          <SArticle>
            <SImageWrapper move="top">
              <SMyImage src={ganmen} alt="img" />
            </SImageWrapper>
          </SArticle>
          <SAside>
            <Introduction />
          </SAside>
        </SAboutWrapper>
      </SAboutPage>
    </>
  );
};

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  animation: ${RoupInf} infinite 10s linear;
`;

const Span = styled.span`
  margin: 0 4%;
`;

const SAboutPage = styled.div`
  width: 100%;
  padding: 0 4%;
  position: relative;
`;

const STitle = styled.h1`
  font-size: 3.5rem;
  color: #898a8a;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;

  ${tab`font-size: 4rem;`}
  ${sp`font-size: 2rem; margin-top: 3rem;`}
`;

const SAboutWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  align-items: center;
  ${tab`flex-direction: column`};
`;

const SArticle = styled.article`
  width: 40%;
  text-align: center;
  ${tab`width: 50%;`}
`;

const SImageWrapper = styled(ScrollRevealContainer)`
  width: 100%;
  ${tab`width: 100%;`}
  ${sp`margin: 10% 0;`}
`;

const SMyImage = styled.img`
  width: 72%;
  border-radius: 50%;
`;

const SAside = styled.aside`
  width: 56%;
  ${tab`width: 80%;`}
`;
