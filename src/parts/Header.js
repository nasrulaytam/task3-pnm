import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/icon/pnm.png";

function BasicExample() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={Icon} style={{ height: 30 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
            <Nav.Link href="#home" className="text-white font-weight-bold">
              Beranda
            </Nav.Link>
            <Nav.Link href="#link" className="text-white font-weight-bold">
              Tentang Kami
            </Nav.Link>
            <Nav.Link href="#link" className="text-white font-weight-bold">
              Produk & Kinerja
            </Nav.Link>
            <Nav.Link href="#link" className="text-white font-weight-bold">
              Berita & Edukasi
            </Nav.Link>
            <Nav.Link href="#link" className="text-white font-weight-bold">
              PNM Sijaga
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
