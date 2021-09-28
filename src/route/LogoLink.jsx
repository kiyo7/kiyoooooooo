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
from {
  transform: rotate(15deg)
}
to {
  transform: rotate(-15deg);
}`;

const SLogo = styled.img`
  animation: ${LogoSpin} 2.5s infinite linear alternate;
  ${media.phone`width: 60%;`};
`;
