//lib
import { useState } from 'react';
import { Drawer, Button, Divider } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import 'antd/dist/antd.css';

//components
import { LinkTag } from '../route/LinkTag';

//functions
import { media } from '../util/MediaQuery';

export const Humbugger = () => {
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
      <Drawer placement="right" onClose={onClose} visible={visible} width="50%">
        <LinkTag to="/kiyoooooooo">Top</LinkTag>
        <Divider />
        <LinkTag to="/contact">Contact</LinkTag>
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
  ${media.tablet`  font-size: 1.3rem;
    width: 70px;
  height: 70px;`}
  ${media.phone`  font-size: 0.825rem;  width: 50px;
  height: 50px;`}
`;
