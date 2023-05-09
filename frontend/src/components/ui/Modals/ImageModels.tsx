import { Modal, Image } from 'react-bootstrap';
import { Photo } from '../../../types/photos';

const ImageModal = ({ title, thumbnailUrl, show, onHide}: Photo & any) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      s
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={thumbnailUrl} rounded />
      </Modal.Body>
    </Modal>
  );
}

export default ImageModal;