import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal3(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <img src="../dica.jpg" alt="" />
      <Button color="danger" onClick={toggle}>
        El Diario de un Rebelde
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>El Diario de un Rebelde</ModalHeader>
        <ModalBody>
          Jim es un joven poeta y músico de Nueva York, que se sirve de su experiencia con las drogas, alcohol y delincuencia para desarrollar su propia obra.

        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>
            ATRAS
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modal3;