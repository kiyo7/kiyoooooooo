//lib
import styled from 'styled-components';

//function
import { tab, sp } from '../../util/MediaQuery';

//component
import { Introduction } from '../Introduction/Introduction';
import { ScrollRevealContainer } from '../../util/ScrollRevealContainer';

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faGitlab,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

//image
import ganmen from '../../images/ganmen.jpeg';

//animation
import { RoupInf } from '../../util/animation';

export const AboutPage: React.FC = (props) => {
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
            <SSNSWrapper>
              <ScrollRevealContainer move="left">
                <a href="https://github.com/kiyo7">
                  <SSNSIcon
                    icon={faGithub}
                    size="4x"
                    title={'Githubに移動します'}
                  />
                </a>
                <p>Github</p>
              </ScrollRevealContainer>
              <div>&ensp; </div>
              <ScrollRevealContainer move="left">
                <a href="https://gitlab.com/kiyo7">
                  <SSNSIcon
                    icon={faGitlab}
                    size="4x"
                    title={'Gitlabに移動します'}
                  />
                </a>
                <p>Gitlab</p>
              </ScrollRevealContainer>
              <div>&ensp; </div>
              <ScrollRevealContainer move="left">
                <a href="https://www.instagram.com/kyo__n.3/">
                  <SSNSIcon
                    icon={faInstagram}
                    size="4x"
                    title={'Instagramに移動します'}
                  />
                </a>
                <p>Instagram</p>
              </ScrollRevealContainer>
              <div>&ensp; </div>
              <ScrollRevealContainer move="left">
                <div style={{ width: '100%' }}></div>
                <a href="https://twitter.com/DwpVir">
                  <SSNSIcon
                    icon={faTwitter}
                    size="4x"
                    title={'Twitterに移動します'}
                  />
                </a>
                <p>Twitter</p>
              </ScrollRevealContainer>
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

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  animation: ${RoupInf} infinite 10s linear;
`;

const Span = styled.span`
  margin: 0 4%;
`;

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

//*****************************Article********************************* */

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

//*****************************Sns********************************* */

const SSNSWrapper = styled.div`
  margin: 0 20%;

  display: flex;
  ${tab`margin: 10%;`}
  ${sp`margin-bottom: 10% ;`}
`;

const SSNSIcon = styled(FontAwesomeIcon)`
  margin-bottom: 10%;
  color: #605a57;
  :hover {
    cursor: pointer;
    color: black;
  }
`;

//*****************************Aside********************************* */

const SAside = styled.aside`
  width: 56%;
  ${tab`width: 80%;`}
`;
