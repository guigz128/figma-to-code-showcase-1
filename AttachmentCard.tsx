import React from "react";

interface AttachmentCardProps {
  title: string;
  onClick?: () => void;
}

// Document Icon Component (receipt-text from Figma)
const DocumentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="#6778ED"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 2V8H20" stroke="#6778ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 13H8" stroke="#6778ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 17H8" stroke="#6778ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 9H9H8" stroke="#6778ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Chevron Icon Component (chevron-right from Figma)
const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 12L10 8L6 4"
      stroke="#6778ED"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AttachmentCard({ title, onClick }: AttachmentCardProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px",
        backgroundColor: "#ffffff",
        border: "1px solid #6778ED",
        borderRadius: "8px",
        cursor: "pointer",
        width: "100%",
        textAlign: "left",
      }}
    >
      {/* Document Icon */}
      <div style={{ width: "24px", height: "24px", flexShrink: 0 }}>
        <DocumentIcon />
      </div>

      {/* Title */}
      <span
        style={{
          flex: 1,
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "120%",
          color: "#6274A0",
        }}
      >
        {title}
      </span>

      {/* Chevron Icon */}
      <div style={{ width: "16px", height: "16px", flexShrink: 0 }}>
        <ChevronIcon />
      </div>
    </button>
  );
}
