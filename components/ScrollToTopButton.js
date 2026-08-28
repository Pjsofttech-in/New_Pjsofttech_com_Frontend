// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import the CSS file for styling

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

   // Open chatbot in new tab
  const openChatbot = () => {
    window.open('https://pjsofttech.in/chatbot/');
  };

  // OPEN WHATSAPP CHAT
  const openWhatsApp = () => {
    window.open("https://wa.me/7020615206", "_blank");
  };


  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
     <div className="scroll-to-top">
        {/* Chatbot */}
        <iframe
          src="https://pjsofttech.com/chatbot/"
          title="AI Chatbot"
          className="chatbot-frame"
        />

      {/* WhatsApp Button */}
      {isVisible && (
        <>
          <button onClick={openWhatsApp} className="whatsapp-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="whatsapp-icon"
            />
          </button>

          <button onClick={scrollToTop} className="scroll-to-top-button">
            &#8679; {/* Up arrow icon */}
          </button>   
              
        </>
      )}
    </div>
  );
}
export default ScrollToTopButton;
