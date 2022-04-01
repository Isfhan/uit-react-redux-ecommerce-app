import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Header() {

  const cart = useSelector((state) => {
    return state.cart;
  });

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="isf-navbar" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >
            E-STORE 🌎
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/product-listing">Products</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cart">
                <Container>
                  <FaShoppingCart /> {cart.length}
                </Container>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/action" >Action</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to="/action/2" >Another action</NavDropdown.Item>
                            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header;