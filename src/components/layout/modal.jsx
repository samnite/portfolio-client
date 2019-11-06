import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Button } from "antd";
import githubFinder from "../../img/projects/github-finder.png";

const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;

const ModalWindow = ({ img, title }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const modalStyle = {
    top: 20
  };

  return (
    <StyledModal>
      <img src={img} alt={title} onClick={showModal} />
      <Modal
        style={modalStyle}
        width="90%"
        title={title}
        visible={visible}
        onCancel={hideModal}
        footer={null}
      >
        <StyledModal>
          <img src={img} alt="" />
        </StyledModal>
      </Modal>
    </StyledModal>
  );
};

export default ModalWindow;
