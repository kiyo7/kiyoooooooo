//lib
import styled from 'styled-components';
//function
import { media } from '../util/MediaQuery';
import { SkillIcon } from '../Introduction/SkillIcon';

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
            <SContentsWrapper>
              <SIntroWrapper>
                <Desc>
                  [Name]
                  <SSelfIntroduction>清川 &emsp; 尚</SSelfIntroduction>
                </Desc>
              </SIntroWrapper>
              <SIntroWrapper>
                <Desc>
                  [Age and Birthday]
                  <SSelfIntroduction>
                    20歳 &emsp; [2001/03/24]
                  </SSelfIntroduction>
                </Desc>
              </SIntroWrapper>
              <SIntroWrapper>
                <Desc>
                  [Hobby]
                  <SSelfIntroduction>
                    ガジェット集め ネットサーフィン ダーツ 音楽を聴く
                  </SSelfIntroduction>
                </Desc>
              </SIntroWrapper>
              <SIntroWrapper>
                <Desc>
                  [Skill]
                  <SSelfIntroduction>
                    <SkillIcon />
                  </SSelfIntroduction>
                </Desc>
              </SIntroWrapper>
            </SContentsWrapper>
          </SAside>
        </SAboutWrapper>
      </SAboutPage>
    </>
  );
};

const Desc = styled.p`
  position: relative;
  text-align: left;
  font-size: 1rem;
  color: #898a8a;
  font-family: 'Josefin Sans', sans-serif;
  margin: 2% 0;

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 90%;
    height: 3px;
    background-color: #d5d5d5;
  }
`;

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
  ${media.phone`font-size: 1.5rem; margin-top: 3rem;`} :before {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    background-color: #898a8a;
    left: 37%;
    top: 55%;
    ${media.tablet`display:none;`}
  }
  :after {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
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

const SContentsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const SIntroWrapper = styled.div`
  margin-bottom: 4%;
`;

const SAside = styled.aside`
  width: 56%;
`;

const SSelfIntroduction = styled(Desc)`
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #747373;
  :after {
    content: none;
  }
`;

//**************************************************************** */
