import { useParams } from 'react-router-dom';
import PhotoList from '../components/ui/PhotoList/PhotoList';

const Photos = () => {
  const { albumId } = useParams();

  return <PhotoList id={albumId || ''} userId={0} title={''} />;
};

export default Photos;