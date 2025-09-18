import "./AboutSection.css";
import Button_more from "./Button_more";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="content-section">
        <div className="header-about-section">
          <h3>about</h3>
          <h2>STUDIO</h2>
        </div>
        <p>
          Danillo Faria is a designer and craftsman behind Oficio Lenho, a
          studio dedicated to creating handcrafted furniture and unique
          products. Passionate about materials, textures, and innovative
          joinery, Danillo designs and produces each piece manually, blending
          originality, functionality, and high-quality craftsmanship.
        </p>
        <div className="position-button-about">
          <a href="/studio">
            <Button_more variant="secondary" size="sm" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
