import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useSelector } from 'react-redux';
import { FaImage, FaMoneyBillWave } from 'react-icons/fa';
import { MdShoppingCart } from "react-icons/md";
import './Cart.css';


function Cart() {


  const cart = useSelector((state) => {
    return state.cart;
  });

  return (
    <>
      <Header />
      <Container className="isf-container-height">
        <h1 className="text-center pt-3 pb-3">Shopping Cart</h1>
        <Row className="mb-5">
          <Card className="flex-row mb-3 text-center align-items-center">
            <Col>
              <h3>
                <FaImage /> Image
              </h3>
            </Col>
            <Col>
              <h3>
                <MdShoppingCart /> Quantity
              </h3>
            </Col>
            <Col>
              <h3>
                <FaMoneyBillWave /> SubTotal
              </h3>
            </Col>
          </Card>

          {
            cart.map((product, index) => (
              <Card className="flex-row mb-3 text-center align-items-center" key={"cart-product-" + index}>
                <Col>
                  <h6 className="pt-2 pb-2">{product.title}</h6>
                  <Card.Img variant="top" src={product.image} className="isf-product-cart-image" />
                </Col>
                <Col>
                  <h6>
                    {product.quantity}
                  </h6>
                </Col>
                <Col>
                  <h6>
                    $ {product.totalPrice}
                  </h6>
                </Col>
              </Card>
            ))
          }
        </Row>

      </Container>
      <Footer />
    </>
  )
}

export default Cart;