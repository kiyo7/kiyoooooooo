//lib
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

//function
import { media } from '../util/MediaQuery';

//image
import logo from '../images/logo.png';

export const LogoLink = () => {
  return (
    <Link to="/kiyoooooooo">
      <SLogo src={logo} alt="logo" />
    </Link>
  );
};

const LogoSpin = keyframes`
0% {
    transform:translate(0, 0) rotate(-7deg);
  }
  50% {
    transform:translate(0, -7px) rotate(0deg);
  }
  100% {
    transform:translate(0, 0) rotate(7deg);
  }`;

const SLogo = styled.img`
  animation: ${LogoSpin} 2.5s infinite ease-in-out alternate;
  ${media.phone`width: 60%;`};
`;
