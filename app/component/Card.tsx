import React from "react";
import Image from "next/image";

export default function Card({ image, firstName, lastName, email }: any) {
  const cardStyle = {
    
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  };

  const contentStyle = {
    padding: "16px",
    textAlign: "center",
  };

  const nameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "8px 0",
  };

  const emailStyle = {
    color: "#666",
    margin: "8px 0",
  };

  return (
    <div style={cardStyle}>
      <Image src={image} width={100} height={100} alt="img" />
      <div>
        <div style={nameStyle}>
          {firstName} {lastName}
        </div>
        <div style={emailStyle}>{email}</div>
      </div>
    </div>
  );
}
