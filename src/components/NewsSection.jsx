
import Button_more from "./Button_more";
import "./NewsSection.css";

function NewsSection() {
  return (
    <section className="news-section">
      <header className="header-news-section">
        <h3>hot off the studio</h3>
        <h2>NEW</h2>
      </header>
      <div className="news-card">
        <div></div>
        <div className="news-title">BANCO TIPI</div>
        <Button_more variant="secondary" size="sm" onClick={() => alert("Abrir notícia")} />
      </div>
    </section>
  );
}

export default NewsSection;
