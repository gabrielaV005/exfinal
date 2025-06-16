import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal2(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <img src="../orfanato.jpg" alt="" />
      <Button color="danger" onClick={toggle}>
        El Orfanato
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>El Orfanato</ModalHeader>
        <ModalBody>
          Laura se instala con su familia en el orfanato en el que creció de niña. Su propósito es abrir una residencia para niños discapacitados, pero su hijo desaparece y sus planes se desvanecen. Varios meses después de la desaparición, Laura escucha voces de espíritus y se convence de que ellos le pueden ayudar a encontrar a su hijo.

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

export default Modal2;