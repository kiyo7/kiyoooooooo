import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../util/MediaQuery';
import logo from '../images/logo.png';

export const LogoLink = () => {
  return (
    <Link to="/kiyoooooooo">
      <SLogo src={logo} alt="logo" />
    </Link>
  );
};

const SLogo = styled.img`
  ${media.phone`width: 60%;`}
`;
