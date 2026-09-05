const WHATSAPP_NUMBER = '919687567294';

const WhatsAppFloat = () => (
  <a
    className="whatsapp-float"
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Techno Dorbit on WhatsApp"
  >
    <i className="bi bi-whatsapp" aria-hidden="true"></i>
    <span>Chat with us</span>
  </a>
);

export default WhatsAppFloat;
