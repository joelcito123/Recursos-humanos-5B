import '../assets/styles/seccionContacto.css'

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>Contáctanos</h2>
      <p>
        Si tienes alguna pregunta o necesitas más información, no dudes en
        ponerte en contacto con nosotros:
      </p>
      <ul>
        <li>Teléfono: +01 234 567 89</li>
        <li>Correo electrónico: contact@example.com</li>
        <li>Dirección: San Francisco, CA 94126, USA</li>
      </ul>
    </div>
  );
};

export default ContactSection;