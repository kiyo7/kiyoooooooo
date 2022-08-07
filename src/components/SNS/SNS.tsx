//lib
import styled from "styled-components";

//font-awesome
import {
  faGithub,
  faTwitter,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Margin: React.FC = () => <div style={{ margin: "8px" }} />;

export const SNS: React.FC = () => {
  return (
    <div>
      <SSNSWrapper>
        <a href="https://github.com/kiyo7">
          <SSNSIcon icon={faGithub} size="3x" title={"Githubに移動します"} />
        </a>
        <Margin />
        <a href="https://gitlab.com/kiyo7">
          <SSNSIcon icon={faGitlab} size="3x" title={"Gitlabに移動します"} />
        </a>
        <Margin />
        <a href="https://twitter.com/DwpVir">
          <SSNSIcon icon={faTwitter} size="3x" title={"Twitterに移動します"} />
        </a>
      </SSNSWrapper>
    </div>
  );
};

const SSNSWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SSNSIcon = styled(FontAwesomeIcon)`
  color: #605a57;
  :hover {
    cursor: pointer;
    color: black;
  }
`;
