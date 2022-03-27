import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaChevronCircleRight } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductListing() {
  const products = useSelector((state) => state.products);
  console.log(products);

  const history = useHistory();

  const viewProductDetail = (pid) => {
    history.push("/product/" + pid);
  };

  const renderAllProducts = () => {
    return products.map((product, index) => (
      <Col sm={12} md={6} lg={4} key={"featuredProducts" + index} className="mb-3" > 
        <Card className="isf-card">
          <Card.Img variant="top" src={product.image} className="isf-card-image" />
          <Card.Body className="isf-card-body">
            <Card.Title style={{ fontWeight: '700' }}>
              {product.title}
            </Card.Title>
            <Card.Text>
              {product.description.slice(0, 50)}...
            </Card.Text>
            <Button variant="primary" onClick={() => viewProductDetail(product.id)}>
              View detail <FaChevronCircleRight />
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <>
      <Header />
      <Container fluid className="isf-container-height">
        <h1 className="text-center pt-3 pb-3">All Product</h1>
        <Row className="pt-4 pb-4">
          {renderAllProducts()}
        </Row>
      </Container>
      <Footer />
    </>

  )
}

export default ProductListing;