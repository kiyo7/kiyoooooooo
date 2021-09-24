import styled from 'styled-components';

export const Footer = () => {
  return (
    <SCopyRight>
      <p>&copy; 2021 kiyo</p>
    </SCopyRight>
  );
};

const SCopyRight = styled.footer`
  height: 10%;
  line-height: 100px;
  color: white;
  text-align: center;
  font-size: 20px;
  background-color: #d3d3d3;
`;
