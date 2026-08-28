import React, { useState } from "react";

export default function ChatbotWidget() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}

      <button
        onClick={() => setChatbotOpen(true)}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 2000,
          //   background: "linear-gradient(135deg, #269DD7 0%, #2874A6 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 64,
          height: 64,
          boxShadow: "0 8px 32px rgba(38,157,215,0.18)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s, box-shadow 0.2s",
          animation: "chatbot-float 2s infinite alternate",
          padding: 0,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 12px 36px rgba(38,157,215,0.28)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(38,157,215,0.18)";
        }}
        aria-label="Open Chatbot"
      >
        <img
          src="/images/bot.png"
          alt="chatbot"
          style={{
            width: 60,
            height: 60,
            objectFit: "contain",
            display: "block",
          }}
        />
      </button> 

      {/* Chatbot Panel */}

      {chatbotOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 40,
            right: 32,
            width: "370px",
            maxWidth: "98vw",
            height: "600px",
            background: "#fff",
            boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
            zIndex: 2100,
            display: "flex",
            flexDirection: "column",
            borderRadius: "16px",
            overflow: "hidden",
            transition: "all 0.3s",
          }}
        >
          {/* Close Button */}

          <div
            style={{ padding: 8, textAlign: "right", 
                background: "#f5faff" }}
          >
            <button
              onClick={() => setChatbotOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: 28,
                color: "#269DD7",
                cursor: "pointer",
              }}
              aria-label="Close Chatbot"
            >
              ×
            </button>
          </div>
          <iframe
            src="../Chatbot/Chatbot.js"
            title="PJ Softtech Chatbot"
            style={{
              flex: 1,
              width: "100%",
              border: "none",
              minHeight: 0,
            }}
          />
        </div>
      )}
      {/* Floating animation keyframes */}
      <style>
        {`
        @keyframes chatbot-float {
          0% { transform: translateY(0);}
          100% { transform: translateY(-8px);}
        }
        `}
      </style>
    </>
  );
}
