import './App.css';
import Navbar from "./components/navbar";
import FirstLook from "./components/firstlook";
import Cards from "./components/cards";
import Freelancers from "./components/freelancer";
import Designs from "./components/designs";
import Categorys from "./components/categorys";
import PortfolioSection from "./components/portfolio-section";
import Subcription from "./components/subsciption";
import Footer from "./components/footer";
import Reserved from "./components/reserved";

function App() {
  return (
    <div>
      <div className="header">
      <Navbar title="Merhaba" />
      <FirstLook />
      </div>
      <Cards />
      <Freelancers />
      <div className="container" id="design">
      <Designs />
      <Categorys categoryName="Category" />
      <PortfolioSection />
      <Subcription/>
      <Footer/>
      <Reserved />
      </div>
    </div>
  );
}

export default App;
