import { useEffect, useState } from "react";

export default function Background() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newItem = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: 200 + Math.random() * 200,
        duration: 15 + Math.random() * 10,
        opacity: 0.08 + Math.random() * 0.1,
      };

      setItems((prev) => [...prev.slice(-6), newItem]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        background: "linear-gradient(135deg, #0f0f1a, #1a0f1a)",
      }}
    >
      {/* Floating Glow Circles */}
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            position: "absolute",
            bottom: "-300px",
            left: `${item.left}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,60,120,0.3), transparent)",
            filter: "blur(120px)",
            opacity: item.opacity,
            animation: `floatUp ${item.duration}s linear forwards`,
          }}
        />
      ))}

      {/* Keyframes */}
      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            20% {
              opacity: 0.2;
            }
            100% {
              transform: translateY(-120vh) scale(1.3);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}