import "./homepage.css";
import Header from "../components/Header";
import NewsSection from "../components/NewsSection";
import CardProduct from "../components/CardProduct";

function App() {
  return (
    <>
      <Header></Header>

      <main className="main-home">
        <NewsSection></NewsSection>
        <CardProduct></CardProduct>
      </main>
    </>
  );
}

export default App;
