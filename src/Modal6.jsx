import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal6(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <img src="../sold.jpg" alt="" />
      <Button color="danger" onClick={toggle}>
        Hasta el Ultimo Hombre 
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Hasta el Ultimo Hombre </ModalHeader>
        <ModalBody>
          Esta es la historia de Desmond T. Doss, un hombre contrario a la violencia que combatió como médico en la Segunda Guerra Mundial sin portar un arma. No disparó ni una bala, pero salvó a 75 personas de la muerte en la batalla de la isla de Okinawa. Gracias a su coraje, pasó de ser el objeto de las burlas de sus compañeros a ser reconocido por su enorme valía con la entrega de la Medalla de Honor del Congreso, otorgada por primera vez a un objetor de conciencia.

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

export default Modal6;