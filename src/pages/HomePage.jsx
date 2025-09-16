import "./homepage.css";
import Header from "../components/Header";
import NewsSection from "../components/NewsSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";

function App() {
  return (
    <>
      <Header></Header>

      <main className="main-home">
        <NewsSection></NewsSection>
        <ProductsSection></ProductsSection>
        <AboutSection></AboutSection>
      </main>
    </>
  );
}

export default App;
