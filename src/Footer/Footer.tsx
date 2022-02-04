//lib
import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <SCopyRight>
      <p>&copy; 2021 kiyo</p>
    </SCopyRight>
  );
};

const SCopyRight = styled.footer`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 0.875rem;
  background-color: #d3d3d3;
`;
