//lib
import { useState } from 'react';
import styled from 'styled-components';
//functions
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
            <SInput type="text" placeholder="例) 田中 太郎" />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="name">
              メールアドレス<SRed>※</SRed>
            </SLabel>
            <SInput type="text" placeholder="例) xxxxxxxxxxx@gmail.com" />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="name">タイトル</SLabel>
            <SInput type="text" placeholder="例) サイトの感想" />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="name">
              メッセージ<SRed>※</SRed>
            </SLabel>
            <STextArea
              name="message"
              cols="30"
              rows="10"
              placeholder="メッセージ欄です。ご自由に!"
            />
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
`;

const STitle = styled.h1`
  font-size: 2.75rem;
  color: #898a8a;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
  ${media.tablet`font-size: 2rem;`}
  ${media.phone`font-size: 1.5rem; margin-top: 3rem;`}
  :before {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    background-color: #898a8a;
    left: 36%;
    top: 18%;
    ${media.tablet`display:none;`}
  }
  :after {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    background-color: #898a8a;
    right: 36%;
    top: 18%;
    ${media.tablet`display:none;`}
  }
`;

const SContactWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const SContactBox = styled.div`
  width: 100%;
  margin-bottom: 2.5%;
  max-width: 1500px;
`;

const SLabel = styled.label`
  font-size: 1rem;
  color: #615c5c;
  ${media.tablet`font-size: 0.8rem;`}
  ${media.phone`font-size: 0.5rem;`}
`;

const SRed = styled.span`
  color: red;
`;

const SInput = styled.input`
  width: 100%;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border: 3px solid #fff;
  border-radius: 8px;
  ${media.tablet` font-size: 0.75rem;`}
  ${media.phone` font-size: 0.75rem;`}
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const STextArea = styled.textarea`
  width: 100%;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border: 3px solid #fff;
  border-radius: 8px;
  height: 6rem;
  ${media.tablet`height: 5rem; font-size: 0.75rem;`}
  ${media.phone`height: 3rem; font-size: 0.5rem;`} 
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
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
  padding: 15px 0;
  color: #fff;
  background: #0bd;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  ${media.tablet`font-size: 0.7rem; padding: 10px `}
  ${media.phone`font-size: 1rem; padding: 6px `}
  :hover {
    background: #0090aa;
  }
`;
