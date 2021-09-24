import { useState } from 'react';
import styled from 'styled-components';

import { media } from '../util/MediaQuery';

export const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  return (
    <SContact>
      <STitle>CONTACT</STitle>
      <SContactWrapper>
        <form action="submit">
          <SContactBox>
            <SLabel htmlFor="name">
              名前<SRed>※</SRed>
            </SLabel>
            <SInput type="text" />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="name">
              メールアドレス<SRed>※</SRed>
            </SLabel>
            <SInput type="text" />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="name">タイトル</SLabel>
            <SInput type="text" />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="name">
              メッセージ<SRed>※</SRed>
            </SLabel>
            <STextArea name="message" cols="30" rows="10" />
          </SContactBox>
        </form>
        <SButtonWrapper>
          <SSubmitButton type="button" value="送信" />
        </SButtonWrapper>
      </SContactWrapper>
    </SContact>
  );
};

const SContact = styled.div`
  width: 100%;
  height: 87vh;
`;

const STitle = styled.h1`
  font-size: 5rem;
  color: #898a8a;

  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
  ${media.tablet`font-size: 3rem;`}
  ${media.phone`font-size: 1.2rem;`}
`;

const SContactWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const SContactBox = styled.div`
  width: 100%;
  margin-bottom: 3%;
  max-width: 1500px;
`;

const SLabel = styled.label`
  font-size: 2rem;
  color: #615c5c;
  ${media.tablet`font-size: 1.5rem;`}
  ${media.phone`font-size: 1rem;`}
`;

const SRed = styled.span`
  color: red;
`;

const SInput = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1.75rem;
  background: rgba(255, 255, 255, 0.5);
  border: 3px solid #fff;
  border-radius: 8px;
  ${media.tablet`padding: 10px; font-size: 1rem;`}
  ${media.phone`padding: 10px; font-size: 0.75rem;`}
`;

const STextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 1.75rem;
  background: rgba(255, 255, 255, 0.5);
  border: 3px solid #fff;
  border-radius: 8px;
  height: 10rem;
  ${media.tablet`height: 10rem; font-size: 1rem;`}
  ${media.tablet`height: 6rem; font-size: 0.75rem;`}
`;

const SButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const SSubmitButton = styled.input`
  width: 50%;
  border: none;
  cursor: pointer;
  line-height: 1;
  padding: 18px 32px;
  color: #fff;
  background: #0bd;
  border-radius: 8px;
  font-size: 1.75rem;
  ${media.tablet`font-size: 1.25rem; padding: 15px 26px`}
  ${media.phone`font-size: 1rem; padding: 10px 22px`}
  :hover {
    background: #0090aa;
  }
`;
