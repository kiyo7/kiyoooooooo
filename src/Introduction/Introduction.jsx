//lib
import styled from 'styled-components';

//function
import { media } from '../util/MediaQuery';

//components
import { SkillIcon } from '../Introduction/SkillIcon';
import { ScrollRevealContainer } from '../util/ScrollRevealContainer';

const my = [
  {
    question: '[Name]',
    answer: '清川  尚 / Hisashi Kiyokawa',
    delay: '0s',
  },
  {
    question: '[Age and Birthday]',
    answer: '20歳       [2001/03/24]',
    delay: '0.5s',
  },
  {
    question: '[Hobby]',
    answer:
      'ガジェット好き ネットサーフィン ダーツ 音楽を聴く バスケ 猫と戯れる ',
    delay: '1s',
  },
];

export const Introduction = () => {
  return (
    <ScrollRevealContainer move="left">
      <div>
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
      </div>
    </ScrollRevealContainer>
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
    width: 100%;
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
  letter-spacing: 0.3rem;
  color: #747373;
  :after {
    content: none;
  }
`;
