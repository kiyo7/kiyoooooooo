//lib
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//function
import { media } from '../util/MediaQuery';

export const LinkTag = (props) => {
  const { to, children = '' } = props;

  return (
    <SNavContent>
      <SLink to={to}>{children}</SLink>
    </SNavContent>
  );
};
const SNavContent = styled.div`
  margin-left: 50px;
  font-size: 2rem;
  line-height: 100px;
  font-family: 'Josefin Sans', sans-serif;
  font-style: italic;
  transition-property: transform;
  transition-duration: 0.3s;
  ${media.tablet`font-size: 1.7rem; margin-top: 0px`}
  ${media.phone`font-size: 1.3rem;`}
  :hover {
    cursor: pointer;
    color: #c9c6c6;
    transform: translateX(-20px);
  }
`;

const SLink = styled(Link)`
  color: #898a8a;
`;
