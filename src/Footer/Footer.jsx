import styled from 'styled-components';

export const Footer = () => {
  return (
    <SCopyRight>
      <p>
        <small>&copy; 2021 kiyo </small>
      </p>
    </SCopyRight>
  );
};

const SCopyRight = styled.footer`
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  background-color: #dcd7d7;
`;