import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function ProductListing() {
  return (
    <>
      <Header />
        <Container fluid>
          <h1>All Products</h1>
        </Container>
      <Footer />
    </>

  )
}

export default ProductListing;