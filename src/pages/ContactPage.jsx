import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.8275480410302!2d-48.35744742395574!3d-18.894730182272873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4417bcad34449%3A0x295d6389a8c384f!2sR.%20Casuarina%2C%2035%20-%20Morada%20do%20Sol%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038415-486%2C%20Brasil!5e0!3m2!1spt-PT!2spt!4v1758126154083!5m2!1spt-PT!2spt"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <ContactForm />
    </>
  );
}

export default ContactPage;
