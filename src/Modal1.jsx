import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal1(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <img src="../darcy.jpg" alt="" />
      <Button color="danger" onClick={toggle}>
        Orgullo & Prejuicio
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Orgullo & </ModalHeader>
        <ModalBody>
         "Orgullo y Prejuicio", de Jane Austen, es una novela que sigue la vida de la familia Bennet, especialmente la de sus cinco hijas solteras, y la búsqueda de un buen matrimonio. Elizabeth Bennet, la segunda hija, desarrolla una fuerte antipatía inicial por el rico y arrogante Mr. Darcy, pero, a través de una serie de eventos y un proceso de maduración, ambos superan sus prejuicios iniciales y encuentran el amor. 

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

export default Modal1;