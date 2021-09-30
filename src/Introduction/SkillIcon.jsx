//lib
import styled from 'styled-components';
//functions
import { icons } from './skill';

export const SkillIcon = () => {
  return (
    <>
      <SIconWrapper>
        {icons.map((icon, key) => {
          return <SIcon key={key} src={icon} alt="icon" />;
        })}
      </SIconWrapper>
    </>
  );
};
const SIconWrapper = styled.div`
  width: 10%;
  display: flex;
`;

const SIcon = styled.img`
  width: 100%;
  margin: 0 20%;
  opacity: 0.75;
`;
