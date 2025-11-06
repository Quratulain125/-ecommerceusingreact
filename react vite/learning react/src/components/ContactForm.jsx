import React, { useState } from "react";

function ContactForm(props) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.onSubmit) {
      props.onSubmit({ email, subject, message });
    }

    console.log({ email, subject, message });

    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "8px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            color: "#4b5563",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Have any questions? Feel free to reach out to us!
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label
              htmlFor="email"
              style={{ display: "block", color: "#374151", fontWeight: "500", marginBottom: "4px" }}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              style={{ display: "block", color: "#374151", fontWeight: "500", marginBottom: "4px" }}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{ display: "block", color: "#374151", fontWeight: "500", marginBottom: "4px" }}
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#2563eb",
              color: "#fff",
              fontWeight: "500",
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
