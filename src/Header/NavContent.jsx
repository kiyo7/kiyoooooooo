import styled from 'styled-components';

export const NavContent = (props) => {
  const { children } = props;
  return <SNavContent>{children}</SNavContent>;
};

const SNavContent = styled.li`
  margin-left: 30px;
  font-size: 2rem;
  line-height: 100px;
  font-family: 'Scheherazade New', serif;
  font-style: italic;
  :hover {
    cursor: pointer;
    color: #7acbe1;
  }
`;
