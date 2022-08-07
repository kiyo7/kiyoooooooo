//lib
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { FadeIn } from "../../util/animation";
import { tab, sp } from "../../util/MediaQuery";
import { SNS } from "../SNS/SNS";

export const Footer: React.FC = () => {
  const scrollUp = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <SFooter>
      <SNS />
      <p>&copy; 2021 kiyo</p>
      <SContentsWrapper>
        <div
          style={{
            textAlign: "center",
            color: "#a09b9d",
          }}
        >
          <SScrollIcon
            icon={faChevronCircleUp}
            size={"4x"}
            onClick={scrollUp}
          />
        </div>
      </SContentsWrapper>
    </SFooter>
  );
};

const SFooter = styled.footer`
  min-height: 150px;
  line-height: 75px;
  width: 100%;
  text-align: center;
  color: #5c6880;
  font-size: 0.875rem;
  background-color: #d3d3d3;
`;

const SContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 1rem;
`;

const SScrollIcon = styled(FontAwesomeIcon)`
  top: 0;
  animation: ${FadeIn} 1s infinite;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  ${tab`font-size: 4rem;`}
  ${sp`font-size: 2.5rem;`}
`;
