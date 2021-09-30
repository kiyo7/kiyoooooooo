//lib
import styled from 'styled-components';
//components
import { SkillIcon } from '../Introduction/SkillIcon';

const my = [
  {
    question: '[Name]',
    answer: '清川  尚',
  },
  {
    question: '[Age and Birthday]',
    answer: '20歳       [2001/03/24]',
  },
  {
    question: '[Hobby]',
    answer: 'ガジェット好き ネットサーフィン ダーツ 音楽を聴く',
  },
];

export const Introduction = () => {
  return (
    <SIntroWrapper>
      {my.map((m, key) => {
        return (
          <SIntroWrapper key={key}>
            <Desc>
              {m.question}
              <SSelfIntroduction>{m.answer}</SSelfIntroduction>
            </Desc>
          </SIntroWrapper>
        );
      })}
      <Desc>
        [Skill]
        <SSelfIntroduction>
          <SkillIcon />
        </SSelfIntroduction>
      </Desc>
    </SIntroWrapper>
  );
};

const Desc = styled.p`
  position: relative;
  text-align: left;
  font-size: 1rem;
  color: #898a8a;
  font-family: 'Josefin Sans', sans-serif;
  margin: 2% 0;

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 90%;
    height: 3px;
    background-color: #d5d5d5;
  }
`;
const SIntroWrapper = styled.div`
  margin-bottom: 4%;
`;
const SSelfIntroduction = styled(Desc)`
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #747373;

  :after {
    content: none;
  }
`;
