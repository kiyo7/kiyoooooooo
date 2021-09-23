import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContent = (props) => {
  const { to, children } = props;
  return (
    <SNavContent>
      <SLink to={to}>{children}</SLink>
    </SNavContent>
  );
};

const SNavContent = styled.li`
  margin-left: 20px;
  font-size: 3rem;
  line-height: 100px;
  font-family: 'Scheherazade New', serif;
  font-style: italic;
  transition-property: transform;
  transition-duration: 0.3s;
  :hover {
    cursor: pointer;
    color: #c9c6c6;
    transform: translateX(10px);
  }
`;

const SLink = styled(Link)`
  color: #b6b0b0;
`;
