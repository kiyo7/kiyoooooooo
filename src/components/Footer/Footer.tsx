//lib
import styled from "styled-components";
import { SNS } from "../SNS/SNS";

export const Footer: React.FC = () => {
  return (
    <SFooter>
      <SNS />
      <p>&copy; 2021 kiyo</p>
    </SFooter>
  );
};

const SFooter = styled.footer`
  width: 100%;
  text-align: center;
  padding-top: 30px;
  color: #5c6880;
  font-size: 0.875rem;
  background-color: #d3d3d3;
`;
