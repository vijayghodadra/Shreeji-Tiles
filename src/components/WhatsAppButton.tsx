import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/919909713197" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.whatsapp}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className={styles.tooltip}>Chat with us!</span>
    </a>
  );
};

export default WhatsAppButton;
