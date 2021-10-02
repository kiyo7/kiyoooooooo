//lib
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//function
import { media } from '../util/MediaQuery';

//image
import logo from '../images/logo.png';

//animation
import { LogoSpin } from '../util/animation';

export const LogoLink = () => {
  return (
    <Link to="/kiyoooooooo">
      <SLogo src={logo} alt="logo" />
    </Link>
  );
};

const SLogo = styled.img`
  animation: ${LogoSpin} 2.5s infinite ease-in-out alternate;
  ${media.phone`width: 60%;`};
`;
