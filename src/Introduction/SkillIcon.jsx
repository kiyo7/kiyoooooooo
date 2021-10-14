//lib
import styled from 'styled-components';

//function
import { icons } from './skill';
import { media } from '../util/MediaQuery';

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
  margin-bottom: 1%;
  ${media.phone`margin-bottom: 6%;`};
`;

const SIcon = styled.img`
  width: 100%;
  margin: 0 30%;
  opacity: 0.75;
`;
