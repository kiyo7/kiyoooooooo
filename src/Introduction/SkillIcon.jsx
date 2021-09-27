import styled from 'styled-components';

import { icons } from './skill';

export const SkillIcon = () => {
  return (
    <>
      <SIconWrapper>
        {icons.map((icon) => {
          return <SIcon src={icon} alt="icon" />;
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
  margin: 0 20px;
  opacity: 0.8;
`;
