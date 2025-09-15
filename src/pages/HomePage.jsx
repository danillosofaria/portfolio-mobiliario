import "./homepage.css";
import Header from "../components/Header";
import NewsSection from "../components/NewsSection";
import CardProduct from "../components/CardProduct";
import CardList from "../components/CardList";
import ProductsSection from "../components/ProductsSection";

function App() {
  return (
    <>
      <Header></Header>

      <main className="main-home">
        <NewsSection></NewsSection>
        <ProductsSection></ProductsSection>
      </main>
    </>
  );
}

export default App;
