import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FaChevronCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import banner from "./banner.jpg";
import './Landing.css';

function Landing() {

  const products = useSelector((state) => state.products.slice(0, 3));
  console.log(products);
  const viewProductDetail = (pid) => {
    console.log(pid);
  };


  const featuredProducts = () => {
    return products.map((product, index) => (
      <Col sm={12} md={6} lg={4} key={"featuredProducts" + index} >
        <Card style={{ width: '70%', margin: '0 auto 5% auto', height: '100%' }}>
          <Card.Img variant="top" src={product.image} className="isf-card-image" />
          <Card.Body>
            <Card.Title style={{ fontWeight: '700' }}>
              {product.title}
            </Card.Title>
            <Card.Text >
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
      <Container fluid>
        <h1 className="text-center pt-3 pb-3">Featured Product</h1>
        <Row className="pt-4 pb-4">
          {featuredProducts()}
        </Row>
      </Container>
      <Footer />
    </>

  )
}

export default Landing;
