import "./homepage.css";
import Header from "../components/Header";
import NewsSection from "../components/NewsSection";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main-home">
        <NewsSection></NewsSection>
      </main>
    </>
  );
}

export default App;
