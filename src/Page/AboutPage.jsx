//lib
import styled, { keyframes } from 'styled-components';
//function
import { media } from '../util/MediaQuery';
//components
import { Introduction } from '../Introduction/Introduction';

//font-awesome
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//images
import image from '../images/image.jpeg';

export const AboutPage = () => {
  return (
    <>
      <SAboutPage>
        <STitle>ABOUT</STitle>
        <SAboutWrapper>
          <SArticle>
            <SImageWrapper>
              <SMyImage src={image} alt="img" />
            </SImageWrapper>
            <SSNSWrapper>
              <SALink href="https://github.com/kiyo7">
                <SSNSIcon icon={faGithub} size="5x" />
              </SALink>
              <SALink href="https://twitter.com/home?lang=ja">
                <SSNSIcon icon={faTwitter} size="5x" />
              </SALink>
            </SSNSWrapper>
          </SArticle>
          <SAside>
            <Introduction />
          </SAside>
        </SAboutWrapper>
      </SAboutPage>
    </>
  );
};

const Roop = keyframes`
0% {
  transform: perspective(400px) rotate3d(1,1,0,0deg)
}
 100% {
  transform: perspective(400px) rotate3d(1,1,5,360deg)
 }`;
const SAboutPage = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 4%;
`;

const STitle = styled.h1`
  font-size: 2.75rem;
  color: #898a8a;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;

  ${media.tablet`font-size: 2rem;`}
  ${media.phone`font-size: 1.5rem; margin-top: 3rem;`} 
  :before {
    content: '';
    position: absolute;
    width: 70px;
    height: 2px;
    background-color: #898a8a;
    animation: ${Roop} 3s infinite;
    left: 37%;
    top: 55%;
    ${media.tablet`display:none;`}
  }
  :after {
    content: '';
    position: absolute;
    width: 70px;
    height: 2px;
    animation: ${Roop} 3s infinite;
    background-color: #898a8a;
    right: 37%;
    top: 55%;
    ${media.tablet`display:none;`}
  }
`;

const SAboutWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`;

//*****************************Article********************************* */
const SArticle = styled.article`
  width: 40%;
  text-align: center;
`;

const SImageWrapper = styled.div`
  width: 80%;
`;

const SMyImage = styled.img`
  width: 72%;
  border-radius: 50%;
`;
//**************************************************************** */

//*****************************Sns********************************* */

const SSNSWrapper = styled.div`
  width: 80%;
  display: flex;
`;

const SALink = styled.a`
  margin: 10% auto;
`;

const SSNSIcon = styled(FontAwesomeIcon)`
  color: #605a57;
  :hover {
    cursor: pointer;
    color: black;
  }
`;

//**************************************************************** */

//*****************************Aside********************************* */

const SAside = styled.aside`
  width: 56%;
`;

//**************************************************************** */
