import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from "../images/hrklogo.jpg";

function BasicExample() {
  const [navbarStyle, setNavbarStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarStyle({ backgroundColor: 'rgb(10, 10, 10)' });
      } else {
        setNavbarStyle({ backgroundColor: '' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" style={navbarStyle} className="fixed-top m-0 p-1" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/" className='fs-2'><Link to="/"><img alt='Logo' src={Logo} className='img-fluid rounded-circle' width={45}/></Link>&nbsp;Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='fs-5 nav-link active me-2'>Home</Link>
            <Nav.Link href='https://github.com/Haamidraza03' target='_blank' rel="noreferrer" className='fs-5 nav-link active me-2'>Github</Nav.Link>
            <Nav.Link href='#contact' className='fs-5 nav-link active me-3'>Contact</Nav.Link>
            <Form className="d-flex">
              <Button variant="outline-info" href='tel:+91 942-267-1453' className='btn px-3 fs-5'>Call Me</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
