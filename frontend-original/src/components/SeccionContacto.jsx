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
        <li>Correo electrónico: grupo20@gmail.com</li>
        <li>Dirección: Jujuy, HCA 4630, ARG</li>
        <li>Dirección: Jujuy, PALPALA 258, ARG</li>
      </ul>
    </div>
  );
};

export default ContactSection;