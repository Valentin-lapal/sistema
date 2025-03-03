import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Sistema</Navbar.Brand>
        <Navbar.Brand as={Link} to="/historial">Historial</Navbar.Brand>
        <Navbar.Brand as={Link} to="/estilos">Estados</Navbar.Brand>
        <Navbar.Brand href="#home">Configuraciones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;