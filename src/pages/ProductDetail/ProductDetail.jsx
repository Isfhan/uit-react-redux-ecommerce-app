import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetail.css';

function ProductDetail() {

  const { id } = useParams();


  const singleProductDetail = useSelector((state) => {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === Number(id)) return state.products[i];
    }
  });

  const dispatch = useDispatch();

  const cart = useSelector((state) => {
    return state.basket;
  })
  console.log(cart);

  const addProductInCart = (productId) => {
    dispatch({ type: "cart/add", payload: { "id": productId, "quantity": 1 } });
  }

  return (
    <>
      <Header />
      <Container className="isf-container-height">
        <ul>
          {cart.map((product, index) => (
            <li key={"cart" + index}>{product.quantity}</li>
          ))}
        </ul>

        <Row>
          <Col className="mt-4 mb-4">
            <Card className="flex-row border-0">
              <Row>
                <Col sm={12} md={6} lg={4}>
                  <Card.Img variant="top" src={singleProductDetail.image} className="isf-product-detail-image" />
                </Col>
                <Col sm={12} md={6} lg={8}>
                  <Card.Body>
                    <Card.Title>
                      <h2>
                        {singleProductDetail.title}
                      </h2>
                    </Card.Title>
                    <Card.Text >
                      {singleProductDetail.description}
                    </Card.Text>
                    <Row className="text-end">
                      <Col className="mt-5">
                        <p className="isf-product-detail-price"> Price : $ {singleProductDetail.price}</p>
                        <Button variant="success" onClick={() => addProductInCart(singleProductDetail.id)}>Add to cart</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default ProductDetail;