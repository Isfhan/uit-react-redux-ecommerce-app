import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Cart() {
  return (
    <>
    <Header />
      <Container fluid className="isf-container-height">
        <h1>Cart</h1>
      </Container>
    <Footer />
    </>
  )
}

export default Cart;