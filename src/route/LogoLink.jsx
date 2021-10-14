//lib
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//function
import { media } from '../util/MediaQuery';

//image
import nekonu from '../images/nekonu.png';

//animation
import { RoupInf } from '../util/animation';

export const LogoLink = () => {
  return (
    <Link to="/kiyoooooooo">
      <SLogo src={nekonu} alt="logo" />
    </Link>
  );
};

const SLogo = styled.img`
  animation: ${RoupInf} infinite 10s linear;

  width: 100%;
  ${media.phone`width: 60%;`};
`;
