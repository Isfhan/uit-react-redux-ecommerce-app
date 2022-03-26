import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import banner from './banner.jpg';
import './Landing.css';

function Landing() {
  return (
    <div>
      <Header />
      <div className="landing-page-content-wrapper">
        <img src={banner} alt="Banner" />
      </div>
      <Footer />
    </div>
  )
}

export default Landing;
