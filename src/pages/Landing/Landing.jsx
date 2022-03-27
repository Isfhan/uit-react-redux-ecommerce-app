import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FaChevronCircleRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import banner from "./banner.jpg";

function Landing() {

  const products = useSelector((state) => state.products.slice(0, 3));
  console.log(products);

  const history = useHistory();

  const viewProductDetail = (pid) => {
    history.push("/product/" + pid);
  };


  const featuredProducts = () => {
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
      <Image src={banner} alt="Banner" fluid />
      <Container fluid className="isf-container-height">
        <h1 className="text-center pt-3 pb-3">Featured Product</h1>
        <Row className="pt-4 pb-4">
          {featuredProducts()}
        </Row>
        <Row className="pt-4 pb-4 justify-content-center">
          <Col sm={3} md={3} lg={3}>
            <Button variant="success" size="lg" className="d-flex align-items-center gap-2">
              See all products <FaChevronCircleRight />
            </Button>
          </Col>
        </Row>

      </Container>
      <Footer />
    </>

  )
}

export default Landing;
