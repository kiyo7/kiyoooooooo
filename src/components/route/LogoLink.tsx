//lib
import styled from "styled-components";
import { Link } from "react-router-dom";

//function
import { sp } from "../../util/MediaQuery";

//image
import nekonu from "../../images/nekonu.png";

//animation
import { RoupInf } from "../../util/animation";

export const LogoLink: React.FC = () => {
  return (
    <Link to="/" title={"HOMEページに移動します"}>
      <SLogo src={nekonu} alt="logo" />
    </Link>
  );
};

const SLogo = styled.img`
  animation: ${RoupInf} infinite 10s linear;

  width: 100%;
  ${sp`width: 60%;`};
`;
