import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin-left: 20px;
  font-size: 3rem;
  line-height: 100px;
  font-family: 'Scheherazade New', serif;
  font-style: italic;
  transition-property: transform;
  transition-duration: 0.3s;
  ${media.tablet`font-size: 1.7rem; margin-top: 0px`}
  :hover {
    cursor: pointer;
    color: #c9c6c6;
    transform: translateX(-10px);
  }
`;

const SLink = styled(Link)`
  color: #898a8a;
`;
