import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductDetail.css';

function ProductDetail() {

  const { id } = useParams();

  const singleProductDetail = useSelector((state) => {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === Number(id)) return state.products[i];
    }
  });


  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="mt-4 mb-4">
            <Card className="flex-row">
              <Card.Img variant="top" src={singleProductDetail.image} className="isf-prodct-detail-image" />
              <Card.Body>
                <Card.Title style={{ fontWeight: '700' }}>{singleProductDetail.title}</Card.Title>
                <Card.Text >
                  {singleProductDetail.description}
                </Card.Text>
                <p className="isf-prodct-detail-price"> Price : $ {singleProductDetail.price}</p>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>



      </Container>
      <Footer />
    </>
  )
}

export default ProductDetail;