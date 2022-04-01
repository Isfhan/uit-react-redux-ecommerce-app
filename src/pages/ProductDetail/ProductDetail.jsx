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

  const allProducts = useSelector((state) => {
    return state.products;
  });

  const cart = useSelector((state) => {
    return state.basket;
  });

  console.log(cart);

  const checkProductInCart = (productId) => {
    let basket;
    cart.forEach((basketProduct, basketProductIndex) => {
      if (basketProduct.id === productId) {
        basket = { basketProduct, basketProductIndex }
      }
    });
    return basket;
  }


  const addProductInCart = (productId, quantity) => {
    const basket = checkProductInCart(productId);
    if (basket) {

      const { basketProduct, basketProductIndex } = basket;
      const totalQuantity = basketProduct.quantity + quantity;
      const totalPrice = (basketProduct.price * totalQuantity);

      cart[basketProductIndex] = {
        "id": basketProduct.id,
        "title": basketProduct.title,
        "price": basketProduct.price,
        "description": basketProduct.description,
        "image": basketProduct.image,
        "quantity": totalQuantity,
        "totalPrice": totalPrice
      }

    } else {

      const product = allProducts.find((product) => product.id === productId);

      cart.push({
        "id": product.id,
        "title": product.title,
        "price": product.price,
        "description": product.description,
        "image": product.image,
        "quantity": quantity,
        "totalPrice": (product.price * quantity)
      });
    }

    dispatch({ type: "cart/add", payload: cart });
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
                        <Button variant="success" onClick={() => addProductInCart(singleProductDetail.id,1)}>Add to cart</Button>
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