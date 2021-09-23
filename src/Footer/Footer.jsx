import styled from 'styled-components';

export const Footer = () => {
  return (
    <SCopyRight>
      <p>&copy; 2021 kiyo</p>
    </SCopyRight>
  );
};

const SCopyRight = styled.footer`
  height: 100px;
  line-height: 100px;
  color: white;
  text-align: center;
  background-color: #d3d3d3;
`;
