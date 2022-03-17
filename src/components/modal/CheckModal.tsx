//lib
import { Modal } from 'antd';

//types
import { State } from '../../types/type';

interface Props {
  isModalVisible: boolean;
  handleCancel: () => void;
  submit: any;
  state: State;
}

export const CheckModal: React.FC<Props> = (props) => {
  const { isModalVisible, handleCancel, submit, state } = props;

  return (
    <>
      <Modal
        title="送信内容の確認"
        visible={isModalVisible}
        onOk={(e) => submit(e)}
        onCancel={handleCancel}
        okText="送信する"
        cancelText="戻る"
      >
        <dt>名前</dt>
        <dl>{state.name}</dl>
        <dt>メールアドレス</dt>
        <dl>{state.email}</dl>
        <dt>タイトル</dt>
        <dl>{state.title ? state.title : 'なし'}</dl>
        <dt>メッセージ</dt>
        <dl>{state.message}</dl>
      </Modal>
    </>
  );
};
