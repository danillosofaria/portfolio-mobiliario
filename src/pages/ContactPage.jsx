import ContactForm from "../components/ContactForm";
import "./ContactPage.css"

function ContactPage() {
  return (
    <div className="container-contacts">
      <img src="/public/tipi_escora_paufurado.webp" alt="" />
      <ContactForm />
    </div>
  );
}

export default ContactPage;
