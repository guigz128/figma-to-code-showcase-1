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

// Badge Check Icon (Verified)
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
    <circle cx="8" cy="8" r="1" stroke="#5D748D" strokeWidth="1" />
    <circle cx="8" cy="3.33" r="1" stroke="#5D748D" strokeWidth="1" />
    <circle cx="8" cy="12.67" r="1" stroke="#5D748D" strokeWidth="1" />
  </svg>
);

// Checkmark Icon
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 11L12 14L22 4"
      stroke="#03C5B8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
      stroke="#03C5B8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface MobileAppV3Props {
  onBack?: () => void;
  onMenu?: () => void;
  onYes?: () => void;
  onNo?: () => void;
}

export default function MobileAppV3({ onBack, onMenu, onYes, onNo }: MobileAppV3Props) {
  return (
    <div
      style={{
        width: "376px",
        minHeight: "812px",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#FFFFFF",
          padding: "16px",
          position: "sticky",
          top: 0,
          zIndex: 10,
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

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "24px 16px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Feedback Section */}
        <div
          style={{
            backgroundColor: "#F5F7FD",
            padding: "16px",
            borderRadius: "16px",
          }}
        >
          {/* Question Text */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "120%",
                color: "#6274A0",
                margin: 0,
              }}
            >
              Est-il votre artisan pour ce projet ?
            </p>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Yes Button */}
            <button
              onClick={onYes}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                padding: "16px 24px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #03C5B8",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#03C5B8",
                transition: "all 0.2s ease",
              }}
            >
              <CheckIcon />
              Oui
            </button>

            {/* No Button */}
            <button
              onClick={onNo}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 24px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E9ECEF",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#6274A0",
                transition: "all 0.2s ease",
              }}
            >
              Non
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
