import { useEffect, useState } from "react";

export default function StoryCard({ title, text, buttonText, onNext }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        zIndex: 5,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "50px 35px",
          borderRadius: "28px",
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          border: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
          color: "white",
          transition: "all 0.6s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          boxShadow:
            "0 25px 80px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05)",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          {title}
        </h1>

        {/* Divider */}
        <div
          style={{
            width: "50px",
            height: "2px",
            margin: "10px auto 20px",
            background: "rgba(255,255,255,0.3)",
          }}
        />

        {/* Text */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            opacity: 0.85,
            whiteSpace: "pre-line",
          }}
        >
          {text}
        </p>

        {/* Button */}
        {buttonText && (
          <button
            onClick={onNext}
            style={{
              marginTop: "30px",
              padding: "12px 32px",
              borderRadius: "30px",
              border: "none",
              background: "white",
              color: "#222",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow =
                "0 10px 30px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}