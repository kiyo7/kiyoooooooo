//lib
import { useState } from 'react';
import { Drawer, Button, Divider } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import 'antd/dist/antd.css';

//component
import { LinkTag } from '../route/LinkTag';

//function
import { sp, tab } from '../../util/MediaQuery';

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons';

export const Humbugger: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <SButton onClick={showDrawer}>
        <AlignLeftOutlined />
      </SButton>
      <Drawer placement="right" onClose={onClose} visible={visible} width="70%">
        <LinkTag to="/">
          <FontAwesomeIcon icon={faHome} />
          &ensp;Home
        </LinkTag>
        <Divider />
        <LinkTag to="/contact">
          <FontAwesomeIcon icon={faAddressCard} />
          &ensp;Contact
        </LinkTag>
        <Divider />
      </Drawer>
    </>
  );
};

const SButton = styled(Button)`
  position: fixed;
  top: 6%;
  right: 6.725%;
  color: white;
  background-color: #3a3a3a;
  border: 0;
  border-radius: 25px;
  z-index: 1;
  :hover {
    opacity: 0.9;
    color: #bab7b7;
  }
  ${tab`  font-size: 1.3rem;
    width: 70px;
  height: 70px;`}
  ${sp`  font-size: 0.825rem;  width: 50px;
  height: 50px;`}
`;
