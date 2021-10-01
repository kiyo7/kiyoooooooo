//lib
import { useReducer } from 'react';
import styled from 'styled-components';
//functions
import { media } from '../util/MediaQuery';

const initialState = { name: '', email: '', title: '', message: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'title':
      return { ...state, title: action.payload };
    case 'message':
      return { ...state, message: action.payload };
    default:
      throw new Error();
  }
};

export const ContactPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = () => {};

  return (
    <SContact>
      <STitle>CONTACT</STitle>
      <SContactWrapper>
        <form action="submit">
          <SContactBox>
            <SLabel htmlFor="name">
              名前<SRed>※</SRed>
            </SLabel>
            <SInput
              id="name"
              type="text"
              placeholder="例) 田中 太郎"
              onChange={(e) => {
                dispatch({ type: 'name', payload: e.target.value });
              }}
            />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="email">
              メールアドレス<SRed>※</SRed>
            </SLabel>
            <SInput
              id="email"
              type="text"
              placeholder="例) xxxxxxxxxxx@gmail.com"
              onChange={(e) => {
                dispatch({ type: 'email', payload: e.target.value });
              }}
            />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="title">タイトル(任意)</SLabel>
            <SInput
              id="title"
              type="text"
              placeholder="例) サイトの感想"
              onChange={(e) => {
                dispatch({ type: 'title', payload: e.target.value });
              }}
            />
          </SContactBox>
          <SContactBox>
            <SLabel htmlFor="message">
              メッセージ<SRed>※</SRed>
            </SLabel>
            <STextArea
              id="message"
              cols="30"
              rows="10"
              placeholder="メッセージ欄です。ご自由に!"
              onChange={(e) => {
                dispatch({ type: 'message', payload: e.target.value });
              }}
            />
          </SContactBox>
        </form>
        <SButtonWrapper>
          <SSubmitButton onClick={() => submit()} type="button" value="送信" />
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
  ${media.phone`font-size: 2.5rem; margin-top: 3rem;`} /* :before {
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
  } */
`;

const SContactWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
`;

const SContactBox = styled.div`
  width: 100%;
  margin-bottom: 2.5%;
  max-width: 1500px;
`;

const SLabel = styled.label`
  font-size: 1.2rem;
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
  ${media.tablet`height: 6rem;`}
  ${media.phone`height: 5rem; font-size: 0.75rem;`} 
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const SButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const SSubmitButton = styled.input`
  width: 60%;
  border: none;
  cursor: pointer;
  line-height: 1;
  padding: 15px 0;
  color: #fff;
  background: #0bd;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  ${media.tablet`font-size: 1rem; padding: 10px `}
  ${media.phone`font-size: 1rem; padding: 8px `}
  :hover {
    background: #0090aa;
  }
`;
