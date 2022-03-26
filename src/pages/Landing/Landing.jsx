import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Image from 'react-bootstrap/Image';
import banner from './banner.jpg';
import './Landing.css';
import { Container } from "react-bootstrap";

function Landing() {
  return (
    <>
      <Header />
        <Image src={banner} alt="Banner" fluid />
        <Container fluid>
          <h1>Top 3 Product</h1>
        </Container>
      <Footer />
    </>

  )
}

export default Landing;
