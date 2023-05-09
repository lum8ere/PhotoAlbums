import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { api } from '../service/api';
import { Album } from '../types/album';
import { AlbumCard } from '../components/ui/Card/Card';
import './style.css'

const AlbumList = () => {
    const [albums, setAlbums] = useState<Album[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const albumsPerPage = 10;

    const loadAlbums = async () => {
        try {
            const response = await api.get('albums')
            setAlbums(response.data);
            } catch (error) {
            console.error('Failed to load albums:', error);
        }
    }

    useEffect(() => {
        loadAlbums()
    }, []);

      // Определяем индексы первой и последней фотографии на текущей странице
    const indexOfLastAlbum = currentPage * albumsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
    const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

    // Изменяем текущую страницу
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className='albumContainer' key='AlbumList'>
                {currentAlbums.map((album: Album) => (
                    <AlbumCard id={album.id} title={album.title} userId={album.userId}/>
                ))}
            </div>
            <Pagination style={{ display: 'flex', justifyContent: 'center' }}>
                {Array.from({ length: Math.ceil(albums.length / albumsPerPage) }).map((_, idx) => (
                <Pagination.Item
                    key={idx + 1}
                    active={currentPage === idx + 1}
                    onClick={() => handlePageChange(idx + 1)}
                >
                    {idx + 1}
                </Pagination.Item>
                ))}
            </Pagination>
        </>
    )
}

export default AlbumList;