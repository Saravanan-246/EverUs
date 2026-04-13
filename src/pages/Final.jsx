import { useEffect, useState } from "react";

export default function FinalReveal() {
  const [mounted, setMounted] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // ✅ mount animation trigger
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ optimized mouse tracking (clean + safe)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ✅ reusable transform style (cleaner)
  const glowTransform = `translate(${mousePos.x}px, ${mousePos.y}px)`;

  return (
    <div style={styles.container}>
      {/* ATMOSPHERE */}
      <div style={styles.vignette} />
      <div
        style={{
          ...styles.ambientGlow,
          opacity: isAccepted ? 0.4 : 0.1,
          transform: glowTransform,
        }}
      />
      <div className="grain-overlay" />

      <main
        style={{
          ...styles.main,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(1.05)",
        }}
      >
        {/* HEADER */}
        <header style={styles.header}>
          <span className="serial-number">
            AUTH_TOKEN // FINAL_SEQUENCE
          </span>

          <div style={styles.titleWrapper}>
            <h1 className="name-reveal" style={styles.heroName}>
              Dharshika
            </h1>

            <div className="ampersand-container">
              <div className="horizontal-line" />
              <span style={styles.ampersand}>&</span>
              <div className="horizontal-line" />
            </div>

            <h1
              className="name-reveal delay-1"
              style={styles.heroName}
            >
              Vikram
            </h1>
          </div>
        </header>

        {/* BODY */}
        <div style={styles.body}>
          {!isAccepted ? (
            <div className="content-reveal" style={styles.contentFlow}>
              <p style={styles.paragraph}>
                The calculations are complete. Every moment led here. <br />
                <span style={styles.highlight}>
                  A lifetime of code, a forever of us.
                </span>
              </p>

              <div className="interaction-zone">
                <h2 style={styles.question}>
                  Commit to our future?
                </h2>

                <button
                  onClick={() => setIsAccepted(true)}
                  style={styles.cta}
                  className="btn-premium"
                >
                  <span className="btn-text">
                    INITIALIZE FOREVER
                  </span>
                  <div className="btn-liquid" />
                </button>
              </div>
            </div>
          ) : (
            <div className="final-sequence">
              <div className="success-icon">∞</div>

              <h1 className="infinite-text">INFINITE</h1>

              <div style={styles.metaFooter}>
                <span className="timestamp">
                  SYSTEM_EST // MARCH_07
                </span>
                <div className="status-dot" />
                <span className="timestamp">
                  STATUS // LOCKED
                </span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&family=Playfair+Display:ital,wght@1,500&display=swap');

        .grain-overlay {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.04;
          filter: contrast(150%) brightness(150%);
        }

        .name-reveal {
          animation: text-clip 1.5s cubic-bezier(0.77, 0, 0.175, 1) both;
        }

        .delay-1 {
          animation-delay: 0.3s;
        }

        @keyframes text-clip {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
            transform: translateX(-20px);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translateX(0);
          }
        }

        .serial-number {
          font-size: 9px;
          letter-spacing: 6px;
          color: rgba(255,255,255,0.2);
          display: block;
          margin-bottom: 30px;
          font-family: 'Space Grotesk', sans-serif;
        }

        .ampersand-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin: 15px 0;
        }

        .horizontal-line {
          width: 40px;
          height: 1px;
          background: rgba(255,51,102,0.3);
        }

        .btn-premium {
          all: unset;
          cursor: pointer;
          position: relative;
          background: transparent;
          padding: 22px 50px;
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          transition: 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          margin-top: 50px;
        }

        .btn-text {
          position: relative;
          z-index: 10;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 5px;
          color: #fff;
        }

        .btn-liquid {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: #ff3366;
          transition: 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          z-index: 1;
        }

        .btn-premium:hover {
          border-color: #ff3366;
          transform: translateY(-5px);
        }

        .btn-premium:hover .btn-liquid {
          top: 0;
        }

        .infinite-text {
          font-size: clamp(40px, 10vw, 100px);
          font-weight: 700;
          letter-spacing: 20px;
          color: #fff;
          margin: 0;
          animation: focus-in 2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }

        @keyframes focus-in {
          0% {
            filter: blur(20px);
            opacity: 0;
            letter-spacing: 0px;
          }
          100% {
            filter: blur(0);
            opacity: 1;
            letter-spacing: 20px;
          }
        }

        .success-icon {
          font-size: 40px;
          color: #ff3366;
          margin-bottom: 20px;
          opacity: 0.8;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .status-dot {
          width: 4px;
          height: 4px;
          background: #ff3366;
          border-radius: 50%;
          box-shadow: 0 0 10px #ff3366;
        }

        .timestamp {
          font-size: 9px;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.3);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#020202",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    color: "#fff",
    fontFamily: "'Space Grotesk', sans-serif",
  },

  vignette: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    background:
      "radial-gradient(circle at center, transparent 20%, #000 100%)",
  },

  ambientGlow: {
    position: "absolute",
    width: "80vw",
    height: "80vh",
    background:
      "radial-gradient(circle at center, rgba(255,51,102,0.12) 0%, transparent 70%)",
    zIndex: 1,
    filter: "blur(100px)",
    transition: "opacity 2s ease",
  },

  main: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    width: "100%",
    maxWidth: "1000px",
    transition: "all 2s cubic-bezier(0.16, 1, 0.3, 1)",
  },

  titleWrapper: { marginBottom: "40px" },

  heroName: {
    fontSize: "clamp(45px, 12vw, 110px)",
    fontWeight: "700",
    margin: 0,
    letterSpacing: "-5px",
    lineHeight: "0.9",
  },

  ampersand: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "28px",
    color: "#ff3366",
    fontStyle: "italic",
  },

  paragraph: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.4)",
    fontWeight: "300",
    letterSpacing: "1px",
    lineHeight: "2",
  },

  highlight: {
    color: "#fff",
    fontWeight: 400,
  },

  question: {
    fontSize: "18px",
    fontWeight: "300",
    marginTop: "40px",
    letterSpacing: "4px",
    color: "rgba(255,255,255,0.7)",
  },

  metaFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
  },
};