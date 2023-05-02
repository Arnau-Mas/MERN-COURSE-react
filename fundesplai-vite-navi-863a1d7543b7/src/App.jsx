import './App.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/p1" className='nav-link'>P1</Link>
              <Link to="/p2" className='nav-link'>P2</Link>
              <Link to="/p3" className='nav-link'>P3</Link>
              <NavDropdown title="Fotos" id="fotos-dropdown">
                <Link className='dropdown-item' to="/foto/moto">Moto</Link>
                <Link className='dropdown-item' to="/foto/bici">Bici</Link>
                <Link className='dropdown-item' to="/foto/cotxe">Cotxe</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Container>
        {/* l'outlet s'utilitza x dir on vols que renderitzi les rutes anidades dins del ROUTE principal del main.jsx. Osigui, li dius q el route principal és App i a dins tens unes rutes anidades (la resta de rutes, dojncs a Outlet és on es mostra tota la resta. Així fas que sempre es vegi el nav i el footer sense haver d'importar-los als altres components també.)  */}
        <Outlet />
      </Container>
    </>
  )
}

export default App
