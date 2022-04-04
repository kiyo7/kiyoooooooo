//lib
import styled from 'styled-components';

//function
import { tab, sp } from '../../util/MediaQuery';

//font-awesome
import {
  faGithub,
  faTwitter,
  faGitlab,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Margin: React.FC = () => <div style={{ margin: '4%' }} />;

export const SNS: React.FC = () => {
  return (
    <SDiv>
      <SSNSWrapper>
        <a href="https://github.com/kiyo7">
          <SSNSIcon icon={faGithub} size="2x" title={'Githubに移動します'} />
        </a>
        <Margin />
        <a href="https://gitlab.com/kiyo7">
          <SSNSIcon icon={faGitlab} size="2x" title={'Gitlabに移動します'} />
        </a>
        <Margin />
        <a href="https://www.instagram.com/kyo__n.3/">
          <SSNSIcon
            icon={faInstagram}
            size="2x"
            title={'Instagramに移動します'}
          />
        </a>
        <Margin />
        <a href="https://twitter.com/DwpVir">
          <SSNSIcon icon={faTwitter} size="2x" title={'Twitterに移動します'} />
        </a>
      </SSNSWrapper>
    </SDiv>
  );
};

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
