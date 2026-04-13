import { useState, useEffect } from "react";

export default function Intro({ next }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 900),
      setTimeout(() => setStep(3), 1400),
      setTimeout(() => setStep(4), 1900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={styles.container}>
      {/* 1. BACKGROUND LAYER */}
      <div style={styles.imageLayer}>
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="mobile-panel"
            style={{
              backgroundImage: `url('https://picsum.photos/seed/${n + 120}/600/900')`,
              left: `${(n - 1) * 22}%`,
              animationDelay: `-${n * 3}s`,
            }}
          />
        ))}
      </div>

      <div style={styles.vignette} />

      {/* 2. CONTENT - MOBILE OPTIMIZED SPACING */}
      <div style={styles.content}>
        <div className={`reveal ${step >= 1 ? 'active' : ''}`}>
          <span style={styles.protocolText}>SYSTEM_INIT // 01</span>
        </div>
        
        <div className={`reveal ${step >= 2 ? 'active' : ''}`}>
          <h1 style={styles.heroTitle}>
            Hey <span className="name-accent">Dharshika</span>
          </h1>
        </div>

        <div className={`reveal ${step >= 3 ? 'active' : ''}`}>
          <p style={styles.description}>
            The world moves fast, but some moments are worth stopping for. 
            I’ve crafted this digital space just for you.
          </p>
        </div>

        <div className={`reveal ${step >= 4 ? 'active' : ''}`} style={styles.btnArea}>
          <button onClick={next} className="premium-btn">
            EXPLORE JOURNEY
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .mobile-panel {
          position: absolute;
          width: 35vw;
          height: 60vh;
          background-size: cover;
          background-position: center;
          opacity: 0.1;
          filter: grayscale(100%);
          border-radius: 4px;
          animation: slowFloat 15s ease-in-out infinite;
        }

        .reveal {
          opacity: 0;
          transform: translateY(15px);
          filter: blur(5px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }

        .name-accent {
          color: #fff;
          position: relative;
          white-space: nowrap;
        }

        .name-accent::after {
          content: '';
          position: absolute;
          bottom: 8px; left: 0; width: 100%; height: 4px;
          background: rgba(255, 51, 102, 0.3);
          z-index: -1;
        }

        .premium-btn {
          all: unset;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 16px 32px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          border-radius: 2px;
          transition: 0.3s;
        }

        .premium-btn:active {
          transform: scale(0.95);
          background: #fff;
          color: #000;
        }

        @media (min-width: 769px) {
          .mobile-panel { width: 15vw; height: 40vh; opacity: 0.15; }
          .premium-btn:hover { background: #fff; color: #000; transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#030303",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontFamily: "-apple-system, Inter, sans-serif",
  },
  imageLayer: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at center, transparent 0%, #030303 90%)",
    zIndex: 2,
  },
  content: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    padding: "0 30px",
    width: "100%",
  },
  protocolText: {
    fontSize: "10px",
    letterSpacing: "5px",
    color: "rgba(255,255,255,0.4)",
    fontWeight: "700",
    marginBottom: "15px",
    display: "block"
  },
  heroTitle: {
    fontSize: "clamp(48px, 14vw, 85px)",
    fontWeight: "900",
    color: "#fff",
    margin: "0 0 20px 0",
    letterSpacing: "-3px",
    lineHeight: "1.1",
  },
  description: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.5)",
    maxWidth: "320px",
    margin: "0 auto 40px auto",
    lineHeight: "1.6",
    fontWeight: "300",
  },
  btnArea: {
    display: "flex",
    justifyContent: "center",
  }
};