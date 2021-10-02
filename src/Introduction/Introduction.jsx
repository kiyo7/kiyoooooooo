//lib
import styled from 'styled-components';

//function
import { media } from '../util/MediaQuery';

//component
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
    answer: '20歳 [2001/03/24]',
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
          [Skill]
          {/* <SSkillIconWrapper> */}
          <SkillIcon />
          {/* </SSkillIconWrapper> */}
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
  ${media.phone`margin-bottom: 6%;`}
`;

const SSelfIntroduction = styled(Desc)`
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.3rem;
  ${media.phone`letter-spacing: 0.08rem;`}

  color: #747373;

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
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #d5d5d5;
  }
`;
