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
    alert("Form data submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div id="container-text-contact">
        <span>Rua Tardariz, 323. 4510-442, Porto - Portugal</span>
        <span>Tel: +351 938545781</span>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your mensage"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div id="button-position">
        <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
