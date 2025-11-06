import React from "react";

const ButtonGroup = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    textAlign: "center",
    padding: "20px",
  };

  const buttonStyle = {
    border: "1px solid #ccc",
    padding: "10px 20px",
    borderRadius: "8px",
    backgroundColor: "#60a5fa",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  };

  const hoverIn = (e) => (e.target.style.backgroundColor = "#3b82f6");
  const hoverOut = (e) => (e.target.style.backgroundColor = "#60a5fa");

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onMouseOver={hoverIn} onMouseOut={hoverOut}>
        1
      </button>
      <button style={buttonStyle} onMouseOver={hoverIn} onMouseOut={hoverOut}>
        2
      </button>
      <button style={buttonStyle} onMouseOver={hoverIn} onMouseOut={hoverOut}>
        3
      </button>
    </div>
  );
};

export default ButtonGroup;
