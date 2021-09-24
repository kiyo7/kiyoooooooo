import { useState } from 'react';
import { Drawer, Button, Divider } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { LinkTag } from '../route/LinkTag';

import 'antd/dist/antd.css';
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
      <Drawer placement="right" onClose={onClose} visible={visible} width="60%">
        <LinkTag to="/about">ABOUT</LinkTag>
        <Divider dashed />
        <LinkTag to="/contact">CONTACT</LinkTag>
      </Drawer>
    </>
  );
};

const SButton = styled(Button)`
  position: fixed;
  top: 4%;
  right: 6.725%;
  color: white;
  background-color: #3a3a3a;
  border: 0;
  border-radius: 25px;
  :hover {
    opacity: 0.9;
  }
  ${media.tablet`  font-size: 1.75rem;
    width: 100px;
  height: 80px;`}
  ${media.phone`  font-size: 1rem;  width: 60px;
  height: 60px;`}
`;
