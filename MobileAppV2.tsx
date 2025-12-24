import React from "react";

// Back Arrow Icon
const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 12L6 8L10 4"
      stroke="#5D748D"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Badge Check Icon
const BadgeCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#03C5B8"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Menu Icon (3 dots vertical)
const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z"
      stroke="#5D748D"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4C8.36819 4 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 4 8 4Z"
      stroke="#5D748D"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z"
      stroke="#5D748D"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface MobileAppProps {
  onBack?: () => void;
  onMenu?: () => void;
}

export default function MobileAppV2({ onBack, onMenu }: MobileAppProps) {
  return (
    <div
      style={{
        width: "376px",
        minHeight: "812px",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#FFFFFF",
          padding: "16px",
          position: "sticky",
          top: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Back Button */}
          <button
            onClick={onBack}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "4px",
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <BackIcon />
          </button>

          {/* Title with Badge */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "1px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "120%",
                  color: "#465C88",
                }}
              >
                Services Plomberie Aqua
              </span>
            </div>
            <div style={{ width: "24px", height: "24px" }}>
              <BadgeCheckIcon />
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={onMenu}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "9999px",
              backgroundColor: "#EEF0F7",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Main Content Container */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "calc(100% - 64px)",
        }}
      >
        {/* Tab Container - Placeholder for content */}
        <div
          style={{
            padding: "16px",
            color: "#6274A0",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "14px", margin: 0 }}>
            Main content area
          </p>
        </div>
      </div>
    </div>
  );
}
