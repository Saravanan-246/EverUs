import { useState, useEffect } from "react";

export default function Meaning({ next }) {
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const handleNext = () => {
    setIsExiting(true);
    setTimeout(() => { if (next) next(); }, 1000);
  };

  return (
    <div style={styles.container}>
      {/* 1. LAYERED BACKGROUND DEPTH */}
      <div style={styles.backgroundCanvas}>
        <div style={{ ...styles.softGlow, top: '10%', left: '20%' }} />
        <div style={{ ...styles.softGlow, bottom: '10%', right: '20%', background: 'rgba(255, 51, 102, 0.04)' }} />
      </div>

      {/* 2. MINIMAL TIMELINE CONTENT */}
      <div style={{ 
        ...styles.wrapper, 
        filter: isExiting ? 'blur(20px)' : 'blur(0px)',
        opacity: isExiting ? 0 : 1 
      }}>
        
        <header style={styles.header}>
          <span className="fade-in" style={styles.kicker}>CHRONICLES // 2026</span>
          <div style={styles.verticalLine} />
        </header>

        <div style={styles.timeline}>
          {/* ENTRY 01 */}
          <section style={{ ...styles.entry, opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'translateY(0)' : 'translateY(20px)' }}>
            <div style={styles.meta}>
              <h2 style={styles.date}>07.03</h2>
              <div style={styles.dot} />
            </div>
            <div style={styles.descriptionBox}>
              <h3 style={styles.title}>THE FIRST SPARK</h3>
              <p style={styles.details}>March 7th. The day the world became a little brighter, and our story officially began.</p>
            </div>
          </section>

          {/* ENTRY 02 */}
          <section style={{ ...styles.entry, opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? 'translateY(0)' : 'translateY(20px)' }}>
            <div style={styles.meta}>
              <h2 style={styles.date}>03.04</h2>
              <div style={styles.dot} />
            </div>
            <div style={styles.descriptionBox}>
              <h3 style={styles.title}>THE REALITY</h3>
              <p style={styles.details}>April 3rd. No longer just a dream. The moment I knew I wanted this to be my forever.</p>
            </div>
          </section>
        </div>

        {/* 3. FINAL MESSAGE & ACTION */}
        <footer style={{ ...styles.footer, opacity: step >= 3 ? 1 : 0 }}>
          <div style={styles.conclusion}>
            <p style={styles.quote}>"Two dates, one journey, infinite memories."</p>
          </div>
          
          <button onClick={handleNext} style={styles.googleBtn} className="premium-btn">
            CONTINUE TO THE END
            <div className="btn-fill" />
          </button>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;700&display=swap');

        .fade-in { animation: fadeIn 2s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .premium-btn {
          all: unset;
          position: relative;
          cursor: pointer;
          background: #fff;
          color: #000;
          padding: 18px 45px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(255,255,255,0.1);
        }

        .btn-fill {
          position: absolute;
          inset: 0;
          background: #ff3366;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease;
          z-index: -1;
        }

        .premium-btn:hover {
          color: #fff;
        }

        .premium-btn:hover .btn-fill {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "#050505",

  display: "block", // 🔥 CHANGE (was flex)

  position: "relative",

  overflowX: "hidden",
  overflowY: "auto",

  color: "#fff",
  fontFamily: "'Plus Jakarta Sans', sans-serif",

  WebkitOverflowScrolling: "touch",
    },
    
  backgroundCanvas: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none", // ✅ prevents scroll block
  },

  softGlow: {
    position: "absolute",
    width: "50vw",
    height: "50vh",
    background: "rgba(255,255,255,0.02)",
    filter: "blur(120px)",
    borderRadius: "50%",
  },

wrapper: {
  position: "relative",
  zIndex: 10,
  width: "100%",
  maxWidth: "700px",

  margin: "0 auto", // 🔥 center horizontally
  padding: "80px 20px", // 🔥 gives vertical space

  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
},

  header: {
    textAlign: "center",
    marginBottom: "60px",
  },

  kicker: {
    fontSize: "10px",
    letterSpacing: "6px",
    color: "rgba(255,255,255,0.3)",
    fontWeight: "700",
  },

  verticalLine: {
    width: "1px",
    height: "40px",
    background: "rgba(255,255,255,0.1)",
    margin: "20px auto",
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "60px",
  },

  entry: {
    display: "flex",
    alignItems: "flex-start",
    gap: "40px",
    transition: "all 1s ease",
  },

  meta: {
    textAlign: "right",
    minWidth: "100px",
  },

  date: {
    fontSize: "32px",
    fontWeight: "700",
    margin: 0,
    letterSpacing: "-1px",
  },

  dot: {
    width: "6px",
    height: "6px",
    background: "#ff3366",
    borderRadius: "50%",
    margin: "10px 0 0 auto",
  },

  descriptionBox: {
    borderLeft: "1px solid rgba(255,255,255,0.1)",
    paddingLeft: "40px",
  },

  title: {
    fontSize: "12px",
    letterSpacing: "4px",
    color: "rgba(255,255,255,0.5)",
    fontWeight: "700",
    margin: "0 0 10px 0",
  },

  details: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.4)",
    fontWeight: "300",
    lineHeight: "1.6",
    margin: 0,
  },

  footer: {
    marginTop: "80px",
    textAlign: "center",
    transition: "all 1.2s ease",
  },

  conclusion: {
    marginBottom: "40px",
  },

  quote: {
    fontSize: "18px",
    color: "rgba(255,255,255,0.6)",
    fontStyle: "italic",
    fontWeight: "200",
  },
};