import { useState, useEffect } from "react";

export default function Memory({ next }) {
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNext = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (next) next();
    }, 1000);
  };

  return (
    <div style={{
      ...styles.container,
      background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #121212 0%, #000 60%)`
    }}>
      {/* SHUTTERS */}
      <div style={{ ...styles.shutter, top: 0, transform: isExiting ? "translateY(0)" : "translateY(-100%)" }} />
      <div style={{ ...styles.shutter, bottom: 0, transform: isExiting ? "translateY(0)" : "translateY(100%)" }} />

      <div style={{ ...styles.content, opacity: mounted && !isExiting ? 1 : 0 }}>
        
        <div style={styles.header}>
          <span className="reveal-text" style={styles.tag}>THE CHRONICLES</span>
          <h1 style={styles.title}>Do you remember?</h1>
        </div>

        <div style={styles.timeline}>
          {/* EVENT 01 */}
          <div className="memory-row" style={styles.row}>
            <div style={styles.dateBlock}>
              <h2 className="shimmer-text" style={styles.date}>07</h2>
              <span style={styles.month}>MARCH</span>
            </div>
            <div style={styles.connector} />
            <p style={styles.description}>The day the stars aligned and I met you.</p>
          </div>

          {/* EVENT 02 */}
          <div className="memory-row" style={{...styles.row, marginTop: '40px'}}>
            <div style={styles.dateBlock}>
              <h2 className="shimmer-text" style={styles.date}>03</h2>
              <span style={styles.month}>APRIL</span>
            </div>
            <div style={styles.connector} />
            <p style={styles.description}>A memory locked in the vault of my heart.</p>
          </div>
        </div>

        <div style={styles.footer}>
          <p style={styles.quote}>"Some moments belong only to us."</p>
          <button onClick={handleNext} style={styles.btn} className="premium-btn">
            KEEP GOING
            <div className="btn-line" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }

        .shimmer-text {
          background: linear-gradient(90deg, #555 20%, #fff 50%, #555 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite;
        }

        .memory-row {
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .memory-row:hover {
          transform: translateX(15px);
        }

        .premium-btn {
          position: relative;
          background: transparent;
          border: none;
          color: #fff;
          padding: 15px 40px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 4px;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .btn-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 20px;
          height: 1px;
          background: #ff3366;
          transition: all 0.4s ease;
          transform: translateX(-50%);
        }

        .premium-btn:hover {
          letter-spacing: 6px;
          color: #ff3366;
        }

        .premium-btn:hover .btn-line {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
  },
  shutter: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "#000",
    zIndex: 100,
    transition: "transform 0.8s cubic-bezier(0.86, 0, 0.07, 1)",
  },
  content: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    maxWidth: "800px",
    padding: "0 40px",
    transition: "opacity 1s ease",
  },
  header: {
    textAlign: "left",
    marginBottom: "60px",
  },
  tag: {
    fontSize: "11px",
    letterSpacing: "6px",
    color: "rgba(255,255,255,0.3)",
    fontWeight: "700",
  },
  title: {
    fontSize: "clamp(32px, 8vw, 64px)",
    fontWeight: "900",
    color: "#fff",
    marginTop: "10px",
    letterSpacing: "-2px",
  },
  timeline: {
    position: "relative",
  },
  row: {
    display: "flex",
    alignItems: "center",
  },
  dateBlock: {
    textAlign: "center",
    minWidth: "80px",
  },
  date: {
    fontSize: "48px",
    fontWeight: "900",
    margin: 0,
    lineHeight: 1,
  },
  month: {
    fontSize: "10px",
    letterSpacing: "3px",
    color: "#ff3366",
    fontWeight: "800",
  },
  connector: {
    width: "40px",
    height: "1px",
    background: "rgba(255,255,255,0.1)",
    margin: "0 30px",
  },
  description: {
    fontSize: "18px",
    color: "rgba(255,255,255,0.5)",
    fontWeight: "300",
    margin: 0,
  },
  footer: {
    marginTop: "80px",
    textAlign: "center",
  },
  quote: {
    fontSize: "14px",
    fontStyle: "italic",
    color: "rgba(255,255,255,0.2)",
    marginBottom: "30px",
  },
};