//lib
import styled from 'styled-components';

//function
import { icons } from './skill';
import { sp } from '../../util/MediaQuery';

export const SkillIcon: React.FC = () => {
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
  width: 9%;
  display: flex;
  margin: 2% 0;
  ${sp`margin-bottom: 6%;`};
`;

const SIcon = styled.img`
  width: 100%;
  margin: 0 30%;
  opacity: 0.75;
`;
