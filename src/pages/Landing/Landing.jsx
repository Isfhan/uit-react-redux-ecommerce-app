import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FaArrowRight } from "react-icons/fa";
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

  const viewAllProducts = () => {
    history.push("/product-listing");
  };


  const featuredProducts = () => {
    return products.map((product, index) => (
      <Col sm={12} md={6} lg={4} key={"featuredProducts" + index} className="mb-3" >
        <Card className="isf-card">
          <Card.Img variant="top" src={product.image} className="isf-card-image" />
          <Card.Body className="isf-card-body d-flex flex-column justify-content-between">
            <Card.Title style={{ fontWeight: '700' }}>
              {product.title}
            </Card.Title>
            <Card.Text>
              {product.description.slice(0, 100)}...
            </Card.Text>
            <Button variant="primary" style={{ fontWeight: '500' }} className="d-flex align-items-center gap-3 justify-content-center" onClick={() => viewProductDetail(product.id)}>
              View detail <FaArrowRight />
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
      <Container className="isf-container-height">
        <h1 className="text-center mb-4 mt-4">Featured Product</h1>
        <Row className="pt-4 pb-4">
          {featuredProducts()}
        </Row>
        <Row className="pt-4 pb-4">
          <Col className="d-flex justify-content-center">
            <Button variant="success" size="lg" className="d-flex align-items-center gap-3" onClick={viewAllProducts}>
              See all products <FaArrowRight />
            </Button>
          </Col>
        </Row>

      </Container>
      <Footer />
    </>

  )
}

export default Landing;
