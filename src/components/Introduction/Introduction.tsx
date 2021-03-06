//lib
import styled from 'styled-components';

//function
import { sp } from '../../util/MediaQuery';
import { getAge } from '../../util/getAge';

//component
import { SkillIcon } from './SkillIcon';
import { ScrollRevealContainer } from '../../util/ScrollRevealContainer';

//types
import { Birthday } from '../../types/type';

const birthday: Birthday = {
  year: 2001,
  month: 3,
  date: 24,
};

const my = [
  {
    question: '[Name]',
    answer: '清川  尚 / Hisashi Kiyokawa',
  },
  {
    question: '[Age Birthday]',
    answer: getAge(birthday) + '歳 [2001/03/24]',
  },
  {
    question: '[Hobby]',
    answer: 'ガジェット収集 YouTube視聴 ダーツ 麻雀 プログラミング ',
  },
  {
    question: '[Like]',
    answer: '猫',
  },
];

export const Introduction: React.FC = () => {
  return (
    <ScrollRevealContainer move="left">
      {my.map((m, key) => {
        return (
          <SIntroWrapper key={key}>
            <Desc>{m.question}</Desc>
            <SSelfIntroduction>{m.answer}</SSelfIntroduction>
          </SIntroWrapper>
        );
      })}
      <SIntroWrapper>
        <SSkillIconWrapper>
          <Desc>[Skill]</Desc>
          <SkillIcon />
        </SSkillIconWrapper>
      </SIntroWrapper>
    </ScrollRevealContainer>
  );
};

const Desc = styled.p`
  position: relative;
  text-align: left;
  font-size: 1rem;
  color: #898a8a;
  font-family: 'Josefin Sans', sans-serif;
`;

const SIntroWrapper = styled.div`
  margin-bottom: 4%;
  ${sp`margin-bottom: 6%;`}
`;

const SSelfIntroduction = styled(Desc)`
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.3rem;
  color: #747373;
  ${sp`letter-spacing: 0.08rem; font-size: 0.8rem`}

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    margin-top: 1%;
    background-color: #d5d5d5;
  }
`;

const SSkillIconWrapper = styled.div`
  :after {
    content: '';
    display: flex;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #d5d5d5;
  }
`;
