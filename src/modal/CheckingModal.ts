// // //lib
// import { Modal } from 'antd';
// import styled from 'styled-components';

// interface Props {
//   checking: boolean;
//   setChecking?: any;
//   state: string;
// }

// export const CheckingModal: React.FC = (props) => {
//   const { checking, setChecking, state } = props;
//   const { name, email, title, message } = state;

//   const handleOk = () => {
//     setChecking(false);
//   };

//   const handleCancel = () => {
//     setChecking(false);
//   };

//   return (
//     <>
//       <Modal
//         title="問い合わせ内容の確認"
//         visible={checking}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <CheckModalWrap>
//           <Margin>
//             <label>名前 :</label>
//             <input type="text" value={name} readonly />
//           </Margin>
//           <Margin>
//             <label>メールアドレス :</label>
//             <input type="text" value={email} readonly />
//           </Margin>
//           <Margin>
//             <label>タイトル(任意) :</label>
//             <input type="text" value={title} readonly />
//           </Margin>
//           <Margin>
//             <label>メッセージ :</label>
//             <textarea value={message} cols="30" rows="10" readonly />
//           </Margin>
//         </CheckModalWrap>
//       </Modal>
//     </>
//   );
// };

// const CheckModalWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
// `;

// const Margin = styled.div`
//   margin: 3%;
// `;
export {};
