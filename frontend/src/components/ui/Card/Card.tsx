import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button , Card } from 'react-bootstrap';
import { Album } from '../../../types/album';
import { User } from '../../../types/user';
import { api } from '../../../service/api';

export const AlbumCard =  ({ id, title, userId }: Album) => {

  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  const loadUser = async () => {
      const response = await api.get(`users/${userId}`)
      setUser(await response.data)
  }

  useEffect(() => {
      loadUser();
  }, [userId])

  const handleButtonClick = () => {
    navigate(`/album/${id}`);
  };

  return (
    <Card style={{ width: '18rem', marginLeft: '5px', marginRight: '5px', marginBottom: '5px' }} key={id}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by {user?.username}</Card.Subtitle>
        <Button variant="primary" onClick={handleButtonClick}>To album</Button>
      </Card.Body>
    </Card>
  );
}