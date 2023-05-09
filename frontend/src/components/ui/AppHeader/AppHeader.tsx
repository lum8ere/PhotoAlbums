import { Container, Navbar } from 'react-bootstrap';

export const AppHeader = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            PhotoAlbum
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}