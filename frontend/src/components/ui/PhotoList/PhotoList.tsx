import { useEffect, useState } from 'react';
import { Image, Pagination } from 'react-bootstrap';
import { Photo } from '../../../types/photos';
import { Album } from '../../../types/album';
import { api } from '../../../service/api';
import './PhotoList.css';
import ImageModal from '../Modals/ImageModels';
import LoadingSpinner from '../Spinner/Spinner';

const PhotoList = ({ id }: Album) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 3;

  const loadPhotos = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/albums/${id}/photos`);
      setPhotos(response.data);
    } catch (error) {
      console.error('Failed to load photos:', error);
    } finally {
      setLoading(false); // Устанавливаем значение false после завершения загрузки
    }
  };

  useEffect(() => {
    loadPhotos();
  }, [id]);

  // Определяем индексы первой и последней фотографии на текущей странице
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Изменяем текущую страницу
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className='photoContainer'>
      {loading ? (
        <LoadingSpinner />
      ) : (
        currentPhotos.map((photo: Photo, idx: number) => (
          <Image
            src={photo.url}
            key={idx}
            rounded
            className='image'
            onClick={() => {
              setSelectedPhoto(photo);
              setModalShow(true);
            }}
          />
        ))
      )}
    </div>
      <Pagination style={{ display: 'flex', justifyContent: 'center' }}>
        {Array.from({ length: Math.ceil(photos.length / photosPerPage) }).map((_, idx) => (
          <Pagination.Item
            key={idx + 1}
            active={currentPage === idx + 1}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      {selectedPhoto?.thumbnailUrl ? (
        <ImageModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={selectedPhoto?.title || ''}
          thumbnailUrl={selectedPhoto?.thumbnailUrl || ''}
        />
      ) : null}
    </>
  );
};

export default PhotoList;