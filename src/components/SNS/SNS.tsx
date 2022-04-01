import React from 'react';
import { ScrollRevealContainer } from '../../util/ScrollRevealContainer';

//function
import { tab, sp } from '../../util/MediaQuery';

import {
  faGithub,
  faTwitter,
  faGitlab,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SNS: React.FC = () => {
  return (
    <SDiv>
      <SSNSWrapper>
        <ScrollRevealContainer move="left">
          <a href="https://github.com/kiyo7">
            <SSNSIcon icon={faGithub} size="2x" title={'Githubに移動します'} />
          </a>
        </ScrollRevealContainer>
        <div>&ensp; </div>
        <ScrollRevealContainer move="left">
          <a href="https://gitlab.com/kiyo7">
            <SSNSIcon icon={faGitlab} size="2x" title={'Gitlabに移動します'} />
          </a>
        </ScrollRevealContainer>
        <div>&ensp; </div>
        <ScrollRevealContainer move="left">
          <a href="https://www.instagram.com/kyo__n.3/">
            <SSNSIcon
              icon={faInstagram}
              size="2x"
              title={'Instagramに移動します'}
            />
          </a>
        </ScrollRevealContainer>
        <div>&ensp; </div>
        <ScrollRevealContainer move="left">
          <div style={{ width: '100%' }}></div>
          <a href="https://twitter.com/DwpVir">
            <SSNSIcon
              icon={faTwitter}
              size="2x"
              title={'Twitterに移動します'}
            />
          </a>
        </ScrollRevealContainer>
      </SSNSWrapper>
    </SDiv>
  );
};

export default SNS;

const SDiv = styled.div`
  width: 30%;
  margin: 0 auto;
  text-align: center;
  ${tab`width: 50%;`}
`;

const SSNSWrapper = styled.div`
  margin: 0 30%;
  display: flex;
  ${tab`margin: 10%;`} ${sp`margin-bottom: 10% ;`};
`;

const SSNSIcon = styled(FontAwesomeIcon)`
  color: #605a57;
  :hover {
    cursor: pointer;
    color: black;
  }
`;
