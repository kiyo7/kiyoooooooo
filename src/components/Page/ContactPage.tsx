/* eslint-disable react/jsx-no-target-blank */
//lib
import { useState } from 'react';
import styled from 'styled-components';

//function
import { tab, sp } from '../../util/MediaQuery';

//hooks
import { useSendEmail } from '../../hooks/useSendEmail';

//types
import { ActionType } from '../../reducer/reducer';

//components
import { CheckModal } from '../modal/CheckModal';

export const ContactPage: React.FC = () => {
  const { state, sendEmail, sendSelf, dispatch } = useSendEmail();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sendEmail();
    sendSelf();
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const disableSend = () => {
    return state.name === '' || state.email === '' || state.message === '';
  };

  return (
    <>
      {isModalVisible ? (
        <CheckModal
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          submit={submit}
          state={state}
        />
      ) : (
        <SContact>
          <STitle>CONTACT</STitle>
          <p
            style={{ textAlign: 'center', fontSize: '1rem', color: 'red' }}
          ></p>
          <SContactWrapper>
            <form action="submit">
              <SContactBox>
                <SLabel htmlFor="name">
                  名前<SRed>※</SRed>
                </SLabel>
                <SInput
                  id="name"
                  type="text"
                  value={state.name}
                  placeholder="例) 田中 太郎"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch({
                      type: ActionType.NAME,
                      payload: { ...state, name: e.target.value },
                    });
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
                  value={state.email}
                  placeholder="例) xxxxxxxxxxx@gmail.com"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch({
                      type: ActionType.EMAIL,
                      payload: { ...state, email: e.target.value },
                    });
                  }}
                />
              </SContactBox>
              <SContactBox>
                <SLabel htmlFor="title">タイトル</SLabel>
                <SInput
                  id="title"
                  type="text"
                  value={state.title}
                  placeholder="例) サイトの感想"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch({
                      type: ActionType.TITLE,
                      payload: { ...state, title: e.target.value },
                    });
                  }}
                />
              </SContactBox>
              <SContactBox>
                <SLabel htmlFor="message">
                  メッセージ<SRed>※</SRed>
                </SLabel>
                <STextArea
                  id="message"
                  value={state.message}
                  cols={30}
                  rows={10}
                  placeholder="メッセージ欄です。ご自由にどうぞ!"
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    dispatch({
                      type: ActionType.MESSAGE,
                      payload: { ...state, message: e.target.value },
                    });
                  }}
                />
              </SContactBox>
            </form>
            <SButtonWrapper>
              <SSubmitButton
                onClick={() => showModal()}
                disabled={disableSend()}
              >
                確 認
              </SSubmitButton>

              <h3>
                メールの処理はEmail.jsライブラリを使用させていただいています。
                <span>
                  <a
                    href="https://www.emailjs.com/"
                    target="_blank"
                    style={{ textDecoration: 'underline' }}
                  >
                    こちら
                  </a>
                </span>
              </h3>
            </SButtonWrapper>
          </SContactWrapper>
        </SContact>
      )}
    </>
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
  ${tab`font-size: 2rem; margin-top:5rem;`}
  ${sp`font-size: 2.5rem; margin-top: 3rem;`}
`;

//****************************Form********************************** */

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
  ${tab`font-size: 0.8rem;`}
  ${sp`font-size: 0.5rem;`}
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
  ${tab` font-size: 0.75rem;`}
  ${sp` font-size: 0.75rem;`}
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
  ${tab`height: 6rem;`}
  ${sp`height: 5rem; font-size: 0.75rem;`} 
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const SButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const SSubmitButton = styled.button`
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
  ${tab`font-size: 1rem; padding: 10px `}
  ${sp`font-size: 1rem; padding: 8px `}
  :hover {
    background: #0090aa;
    cursor: pointer;
  }
  :disabled {
    background: #a1c9d0;
  }
`;
