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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          animi facere incidunt dolorem aperiam, beatae minima, fuga consectetur
          cum quasi vel vero repellendus ut saepe repudiandae magni molestiae
          quas impedit.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          animi facere incidunt dolorem aperiam, beatae minima, fuga consectetur
          cum quasi vel vero repellendus ut saepe repudiandae magni molestiae
          quas impedit.
        </p>
        <Button_more variant="secondary" size="sm"></Button_more>
      </div>
    </section>
  );
}

export default AboutSection;
