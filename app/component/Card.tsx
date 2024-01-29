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
    padding: "5px",
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
      <div
        style={{
          textAlign: "left",
          padding: "10px 0 10px 15px",
        }}
      >
        <div style={nameStyle}>
          Name: {firstName} {lastName}
        </div>
        <div style={emailStyle}>Email: {email}</div>
      </div>
    </div>
  );
}
