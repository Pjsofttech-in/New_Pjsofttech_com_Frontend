import React, { useState, useEffect, useRef } from "react";

const solutionsData = {
  Education: [
    {
      name: "Student Management System",
      url: "https://www.pjsofttech.com/student-information-system",
    },
    {
      name: "School Management Software",
      url: "https://www.pjsofttech.com/school-management-software",
    },
    {
      name: "College Management Software",
      url: "https://www.pjsofttech.com/college-management-software",
    },
    {
      name: "Online Examination System",
      url: "https://www.pjsofttech.com/online-examination-system",
    },
    {
      name: "Attendance Management System",
      url: "httpsj://www.pjsofttech.com/attendance-management-system",
    },
  ],
  Business: [
    { name: "CRM Solutions", url: "https://www.pjsofttech.com/crm-solutions" },
    { name: "ERP Systems", url: "https://www.pjsofttech.com/erp-systems" },
    {
      name: "HR Management System",
      url: "https://www.pjsofttech.com/hr-management-system",
    },
    {
      name: "Project Management System",
      url: "https://www.pjsofttech.com/project-management-system",
    },
    {
      name: "Shipment Management System",
      url: "https://www.pjsofttech.com/shipment-management-system",
    },
  ],
  Finance: [
    {
      name: "Fees Management System",
      url: "https://www.pjsofttech.com/fees-management-system",
    },
    {
      name: "Income Expenses Management System",
      url: "https://www.pjsofttech.com/income-expenses-management-system",
    },
    {
      name: "Payroll System",
      url: "https://www.pjsofttech.com/payroll-system",
    },
  ],
  Specialized: [
    {
      name: "Hospital Management Software",
      url: "https://www.pjsofttech.com/hospital-management-software",
    },
    {
      name: "Hostel Management Systems",
      url: "https://www.pjsofttech.com/hostel-management-systems",
    },
    {
      name: "Library Management System",
      url: "https://www.pjsofttech.com/library-management-system",
    },
    {
      name: "Enquiry Management System",
      url: "https://www.pjsofttech.com/enquiry-management-system",
    },
  ],
  Other: [
    {
      name: "Employee Management System",
      url: "https://www.pjsofttech.com/employee-management-system",
    },
    {
      name: "Institute Management Software",
      url: "https://www.pjsofttech.com/institute-management-software",
    },
    {
      name: "StudyPoint Management System",
      url: "https://www.pjsofttech.com/studypoint-management-system",
    },
  ],
};
const styles = {
  chatbotBox: {
    display: "none",
    position: "fixed",
    bottom: 80,
    right: 20,
    background: "white",
    border: "1px solid #ccc",
    padding: 16,
    width: 300,
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    borderRadius: 8,
    zIndex: 1000,
  },
  chatbotBoxVisible: {
    display: "block",
    position: "fixed",
    bottom: 80,
    right: 20,
    background: "white",
    border: "1px solid #ccc",
    padding: 16,
    width: 300,
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    borderRadius: 8,
    zIndex: 1000,
  },
  chatbotButton: {
    position: "fixed",
    bottom: 20,
    right: 20,
    background: "#007BFF",
    color: "white",
    padding: "10px 20px",
    borderRadius: 20,
    cursor: "pointer",
    border: "none",
    fontSize: 18,
    zIndex: 1001,
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 16,
    boxSizing: "border-box",
  },
  sendButton: {
    color: "#fff",
    background: "linear-gradient(135deg, #269DD7 0%, #2874A6 100%)",
    border: "none",
    borderRadius: 16,
    padding: "0 22px",
    minWidth: 48,
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
    boxShadow: "0 2px 8px rgba(38,157,215,0.13)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
    float: "right",
    height: 40,
  },
  response: {
    marginTop: 10,
    minHeight: 30,
    color: "#2874A6",
    fontWeight: 500,
    fontSize: 15,
    whiteSpace: "pre-line",
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: 20,
    float: "right",
    cursor: "pointer",
    color: "#888",
  },
};

const suggestions = [
  "What services do you offer?",
  "Tell me about your CRM solutions",
  "What ERP systems do you provide?",
  "How can I contact support?",
  "List all software solutions",
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages] = useState([
    {
      sender: "chatbot",
      text: "Hello! I'm your PJ Softtech assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing] = useState(false);
  const [setResponse] = useState("");
  const [setLoading] = useState(false);

  const chatRef = useRef();

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);


  // Handle sending a message
  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("https://pjsofttech.com:21443/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });
      const data = await res.json();
      setResponse(data.answer || "No answer received.");
    } catch (err) {
      setResponse("Sorry, something went wrong.");
    }
    setLoading(false);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // Handle suggestion click
  const handleSuggestion = (s) => {
    setInput(s);
    sendMessage(s);
  };

  // Simple bot response logic
  function getBotResponse(q) {
    const lower = q.toLowerCase();
    if (lower.includes("service")) {
      return "PJ Softtech provides software development, AI solutions, cloud computing, and IT consulting services.";
    }
    if (lower.includes("crm")) {
      return "Our CRM Solutions help you manage customer relationships efficiently. Learn more at our website.";
    }
    if (lower.includes("erp")) {
      return "We offer robust ERP systems for business automation. Contact us for a demo!";
    }
    if (lower.includes("contact") || lower.includes("support")) {
      return "You can contact PJ Softtech via email at support@pjsofttech.com or call (+91) 99235 70901.";
    }
    if (
      lower.includes("list all software") ||
      lower.includes("list of all softwares")
    ) {
      return generateSoftwareList();
    }
    return "Sorry, I don't have an answer for that. Please ask about PJ Softtech's services, products, or contact support@pjsofttech.com for more help.";
  }

  // Generate software list HTML
  function generateSoftwareList() {
    return (
      <div className="software-list">
        <p>
          Here are all the software solutions we offer, categorized by type:
        </p>
        {Object.keys(solutionsData).map((category) => (
          <div className="software-category" key={category}>
            <div className="software-category-name">{category}:</div>
            <div className="software-items">
              {solutionsData[category].map((software) => (
                <div className="software-item" key={software.name}>
                  <a
                    href={software.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#269DD7",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {software.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 2000,
            background: "linear-gradient(135deg, #269DD7 0%, #2874A6 100%)",
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
          aria-label="Open Chatbot"
        >
          <img
            src="/images/bot.png"
            alt="chatbot"
            style={{
              width: 36,
              height: 36,
              objectFit: "contain",
              display: "block",
            }}
          />
        </button>
      )}

      {/* Chatbot Panel */}
      {open && (
        <div
          className="chat-container"
          style={{
            position: "fixed",
            bottom: 40,
            right: 32,
            width: "370px",
            maxWidth: "98vw",
            height: "600px",
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0 8px 32px rgba(38,157,215,0.18)",
            zIndex: 2100,
            display: "flex",
            flexDirection: "column",
            borderRadius: "24px",
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(38,157,215,0.10)",
            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 12,
              right: 16,
              background: "rgba(255,255,255,0.7)",
              color: "#269DD7",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              fontSize: 22,
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: 100,
              boxShadow: "0 2px 6px rgba(38, 157, 215, 0.08)",
              transition: "background 0.2s",
            }}
            aria-label="Close Chatbot"
          >
            ×
          </button>
          {/* Header */}
          <div
            className="chat-header"
            style={{
              padding: 22,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              textAlign: "center",
              fontWeight: 700,
              fontSize: 20,
              color: "white",
              background: "linear-gradient(90deg, #269DD7 0%, #2874A6 100%)",
              letterSpacing: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <img
              src="/images/bot.png"
              alt="chatbot"
              style={{
                width: 32,
                height: 32,
                objectFit: "contain",
                background: "#fff",
                borderRadius: "50%",
                boxShadow: "0 2px 8px rgba(38,157,215,0.13)",
              }}
            />
            PJ Softtech Assistant
          </div>
          {/* Messages */}
          <div
            className="chat-messages"
            ref={chatRef}
            style={{
              flex: 1,
              padding: 20,
              overflowY: "auto",
              background: "linear-gradient(120deg, #e3f2fd 0%, #f5faff 100%)",
            }}
          >
            {messages.map((msg, idx) =>
              typeof msg.text === "string" ? (
                <div
                  key={idx}
                  className={`message ${msg.sender}-message`}
                  style={{
                    marginBottom: 18,
                    maxWidth: "80%",
                    padding: "14px 18px",
                    borderRadius: 18,
                    lineHeight: 1.6,
                    position: "relative",
                    wordWrap: "break-word",
                    fontSize: 15,
                    fontWeight: 500,
                    boxShadow:
                      msg.sender === "user"
                        ? "0 2px 8px rgba(38,157,215,0.13)"
                        : "0 2px 8px rgba(52,152,219,0.07)",
                    marginLeft: msg.sender === "user" ? "auto" : undefined,
                    marginRight: msg.sender === "bot" ? "auto" : undefined,
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(135deg, #269DD7 0%, #2874A6 100%)"
                        : "rgba(255,255,255,0.95)",
                    color: msg.sender === "user" ? "#fff" : "#1a1a1a",
                    transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                    animation: "fadeInMsg 0.5s",
                  }}
                >
                  {msg.text}
                  <div
                    className="timestamp"
                    style={{
                      fontSize: 11,
                      color: "#666",
                      marginTop: 6,
                      textAlign: "right",
                    }}
                  >
                    {msg.time}
                  </div>
                </div>
              ) : (
                <div key={idx} style={{ marginBottom: 18 }}>
                  {msg.text}
                </div>
              )
            )}
            {typing && (
              <div
                className="typing-indicator"
                style={{
                  display: "flex",
                  padding: "12px 16px",
                  backgroundColor: "#ffffff",
                  borderRadius: 12,
                  marginRight: "auto",
                  marginBottom: 16,
                  width: "fit-content",
                  borderBottomLeftRadius: 4,
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
                }}
              >
                <div
                  className="typing-dot"
                  style={{
                    width: 8,
                    height: 8,
                    background: "#269DD7",
                    borderRadius: "50%",
                    margin: "0 3px",
                    animation: "typingAnimation 1.4s infinite ease-in-out",
                  }}
                />
                <div
                  className="typing-dot"
                  style={{
                    width: 8,
                    height: 8,
                    background: "#269DD7",
                    borderRadius: "50%",
                    margin: "0 3px",
                    animation: "typingAnimation 1.4s infinite ease-in-out",
                    animationDelay: "0.2s",
                  }}
                />
                <div
                  className="typing-dot"
                  style={{
                    width: 8,
                    height: 8,
                    background: "#269DD7",
                    borderRadius: "50%",
                    margin: "0 3px",
                    animation: "typingAnimation 1.4s infinite ease-in-out",
                    animationDelay: "0.4s",
                  }}
                />
              </div>
            )}
          </div>
          {/* Suggestions */}
          <div
            className="suggestions"
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: 12,
              background: "rgba(249, 250, 251, 0.7)",
              borderTop: "1px solid rgba(0, 0, 0, 0.05)",
              gap: 8,
              justifyContent: "center",
            }}
          >
            {suggestions.map((s, i) => (
              <div
                key={i}
                className="suggestion"
                style={{
                  background:
                    "linear-gradient(90deg, #e3f2fd 0%, #f5faff 100%)",
                  color: "#269DD7",
                  padding: "8px 16px",
                  borderRadius: 16,
                  margin: 2,
                  fontSize: 13,
                  cursor: "pointer",
                  border: "1px solid #e0eafc",
                  fontWeight: 500,
                  boxShadow: "0 2px 8px rgba(52,152,219,0.07)",
                  transition: "background 0.2s, color 0.2s",
                  animation: "fadeInChip 0.5s",
                }}
                onClick={() => handleSuggestion(s)}
              >
                {s}
              </div>
            ))}
          </div>
          {/* Input */}
          <div
            className="chat-input"
            style={{
              display: "flex",
              padding: 16,
              borderTop: "1px solid rgba(0, 0, 0, 0.05)",
              background: "#fff",
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              gap: 10,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              style={{
                flex: 1,
                padding: "14px 18px",
                border: "1.5px solid #e0eafc",
                borderRadius: 16,
                outline: "none",
                fontSize: 15,
                background: "#f8fafc",
                boxShadow: "0 2px 8px rgba(52,152,219,0.07)",
                transition: "border 0.2s",
              }}
              autoFocus
            />
            <button
              onClick={() => sendMessage(input)}
              style={{
                color: "#fff",
                background: "linear-gradient(135deg, #269DD7 0%, #2874A6 100%)",
                border: "none",
                borderRadius: 16,
                padding: "0 22px",
                minWidth: 48,
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(38,157,215,0.13)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path d="M3 12l18-7-7 18-2.5-7.5L3 12z" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Animations and Responsive */}
      <style>
        {`
    @keyframes chatbot-float {
      0% { transform: translateY(0);}
      100% { transform: translateY(-8px);}
    }
    @keyframes typingAnimation {
      0%, 60%, 100% { transform: translateY(0);}
      30% { transform: translateY(-3px);}
    }
    @keyframes fadeInMsg {
      from { opacity: 0; transform: translateY(20px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @keyframes fadeInChip {
      from { opacity: 0; transform: scale(0.8);}
      to { opacity: 1; transform: scale(1);}
    }
    @media (max-width: 600px) {
      .chat-container {
        width: 100vw !important;
        max-width: 100vw !important;
        min-width: 0 !important;
        margin: 0 !important;
        border-radius: 0 !important;
        height: 100vh !important;
        box-shadow: none !important;
        border: none !important;
      }
      .chat-header,
      .chat-input {
        border-radius: 0 !important;
      }
      .chat-messages {
        padding: 10px !important;
      }
      .suggestions {
        padding: 6px !important;
      }
    }
    .software-item a {
      text-decoration: none !important;
      color: #269DD7;
      cursor: pointer;
    }
    .software-item a:hover {
      text-decoration: underline;
    }
    `}
      </style>
    </>
  );
}
