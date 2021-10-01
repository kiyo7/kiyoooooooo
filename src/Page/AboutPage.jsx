//lib
import styled from 'styled-components';

//function
import { media } from '../util/MediaQuery';

//components
import { Introduction } from '../Introduction/Introduction';
import { ScrollRevealContainer } from '../util/ScrollRevealContainer';

//font-awesome
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//images
import nekonu from '../images/nekonu.png';

//animation
import { Roup } from '../util/animation';

export const AboutPage = () => {
  return (
    <>
      <SAboutPage>
        <STitle>About</STitle>
        <SAboutWrapper>
          <SArticle>
            <ScrollRevealContainer move="top">
              <SImageWrapper>
                <SMyImage src={nekonu} alt="img" />
              </SImageWrapper>
            </ScrollRevealContainer>
            <ScrollRevealContainer move="down">
              <SSNSWrapper>
                <SIconWithName>
                  <a href="https://github.com/kiyo7">
                    <SSNSIcon icon={faGithub} size="5x" />
                  </a>
                  <p>Github</p>
                </SIconWithName>
                <SIconWithName>
                  <a href="https://twitter.com/home?lang=ja">
                    <SSNSIcon icon={faTwitter} size="5x" />
                  </a>
                  <p>Twitter</p>
                </SIconWithName>
              </SSNSWrapper>
            </ScrollRevealContainer>
          </SArticle>
          <SAside>
            <Introduction />
          </SAside>
        </SAboutWrapper>
      </SAboutPage>
    </>
  );
};

const SAboutPage = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 4%;
`;

const STitle = styled.h1`
  font-size: 3.5rem;
  color: #898a8a;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;

  ${media.tablet`font-size: 4rem;`}
  ${media.phone`font-size: 1.5rem; margin-top: 3rem;`} 
  :before {
    content: '';
    position: absolute;
    width: 3rem;
    height: 3px;
    background-color: #898a8a;
    animation: ${Roup} 3s infinite;
    left: 32%;
    top: 53%;
    ${media.tablet`top:48%; left: 23%;`}
    ${media.phone`top:53%; left: 23%; width: 40px;`}
  }
  :after {
    content: '';
    position: absolute;
    width: 3rem;
    height: 3px;
    animation: ${Roup} 3s infinite;
    background-color: #898a8a;
    right: 32%;
    top: 53%;

    ${media.tablet`top:48%; right: 23%;`}
    ${media.phone`top:53%; right: 23%; width: 40px;`}
  }
`;

const SAboutWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  align-items: center;
  ${media.tablet`flex-direction: column`};
`;

//*****************************Article********************************* */
const SArticle = styled.article`
  width: 40%;
  text-align: center;
  ${media.tablet`width: 60%;`}
`;

const SImageWrapper = styled.div`
  width: 80%;
  ${media.tablet`width: 100%;`}
`;

const SMyImage = styled.img`
  width: 72%;
  border-radius: 50%;
`;

//*****************************Sns********************************* */

const SSNSWrapper = styled.div`
  width: 80%;
  display: flex;
  ${media.tablet`width: 100%;`}
`;

const SIconWithName = styled.div`
  margin: 0 auto;
`;

const SSNSIcon = styled(FontAwesomeIcon)`
  color: #605a57;
  :hover {
    cursor: pointer;
    color: black;
  }
`;

//*****************************Aside********************************* */

const SAside = styled.aside`
  width: 56%;
  ${media.tablet`width: 80%;`}
`;
