import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2>Contato</h2>
      <p>Entre em contato conosco preenchendo o formulário abaixo:</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
