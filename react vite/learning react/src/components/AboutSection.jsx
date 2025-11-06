import React from "react";

const AboutSection = () => {
  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 24px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>
        About <span style={{ color: "#2563eb" }}>E-Commerce</span>
      </h1>

      <p
        style={{
          color: "gray",
          maxWidth: "700px",
          margin: "0 auto 48px",
          lineHeight: "1.6",
        }}
      >
        Welcome to E-Commerce, your number one destination for high-quality products.
        We’re dedicated to giving you the best shopping experience, focusing on
        reliability, customer service, and uniqueness.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginBottom: "64px",
        }}
      >
        <div
          style={{
            backgroundColor: "#0f172a",
            color: "white",
            padding: "24px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h2 style={{ color: "#60a5fa", fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>
            Our Mission
          </h2>
          <p>
            Our mission is to provide top-quality products at competitive prices while
            ensuring the best customer experience. We strive to be your most trusted
            online shopping destination.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#0f172a",
            color: "white",
            padding: "24px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h2 style={{ color: "#60a5fa", fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>
            Our Vision
          </h2>
          <p>
            We aim to revolutionize online shopping by making it effortless, affordable,
            and enjoyable. Our goal is to bring the best products from around the world
            right to your doorstep.
          </p>
        </div>
      </div>

      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "40px" }}>
        Why <span style={{ color: "#2563eb" }}>Choose Us?</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "64px",
        }}
      >
        <div
          style={{
            backgroundColor: "#0f172a",
            color: "white",
            padding: "24px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ color: "#60a5fa", fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
            High-Quality Products
          </h3>
          <p style={{ color: "#d1d5db" }}>
            We offer a carefully curated selection of premium products.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#0f172a",
            color: "white",
            padding: "24px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ color: "#60a5fa", fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
            Fast & Secure Shipping
          </h3>
          <p style={{ color: "#d1d5db" }}>
            Get your orders delivered quickly and securely.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#0f172a",
            color: "white",
            padding: "24px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ color: "#60a5fa", fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
            Excellent Customer Support
          </h3>
          <p style={{ color: "#d1d5db" }}>
            Our support team is available 24/7 to assist you.
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}>
          Start Shopping Now!
        </h3>
        <p style={{ color: "gray", marginBottom: "20px" }}>
          Explore our wide range of products and enjoy an amazing shopping experience.
        </p>
        <a
          href="#"
          style={{
            display: "inline-block",
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Browse Products
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
