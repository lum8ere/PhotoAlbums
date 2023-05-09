import { useState, useEffect } from 'react';
import { Modal, Image } from 'react-bootstrap';
import { Photo } from '../../../types/photos';
import LoadingSpinner from '../Spinner/Spinner';

const ImageModal = ({ title, thumbnailUrl, show, onHide }: Photo & any) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [thumbnailUrl, title]);

  return (
    <Modal
      show={show}
      onHide={onHide}
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
        {loading ? <LoadingSpinner /> : <Image src={thumbnailUrl} rounded />}
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;