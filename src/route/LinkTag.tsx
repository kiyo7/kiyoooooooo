//lib
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//function
import { tab, sp } from '../util/MediaQuery';

interface Props {
  to: string;
  children: JSX.Element | string | React.ReactNode;
  title?: string;
}

export const LinkTag: React.FC<Props> = (props) => {
  const { to, children = '', title } = props;

  return (
    <SNavContent>
      <SLink to={to} title={title}>
        {children}
      </SLink>
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
  ${tab`font-size: 1.7rem; margin-top: 0px`}
  ${sp`font-size: 1.3rem;`}
  :hover {
    cursor: pointer;
    color: #c9c6c6;
    transform: translateX(-20px);
  }
`;

const SLink = styled(Link)`
  color: #898a8a;
`;
