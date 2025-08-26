import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowToBuy from "./components/HowToBuy";
import TokenInfo from "./components/TokenInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="features"><Features /></div>
      <div id="howtobuy"><HowToBuy /></div>   
      <div id="tokeninfo"><TokenInfo /></div>
      <Footer />
    </>
  );
}

export default App;