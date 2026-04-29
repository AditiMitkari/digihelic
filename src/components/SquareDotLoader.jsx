"use client";

import { useEffect, useState } from "react";

export default function SquareDotLoader({ duration = 800 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(t);
  }, [duration]);

  if (!show) return null;

  return (
    <div className="sq-loader-wrapper">
      <div className="sq-loader">
        <span className="sq-dot sq-red" />
        <span className="sq-dot sq-orange" />
        <span className="sq-dot sq-blue" />
        <span className="sq-dot sq-purple" />
        <span className="sq-dot sq-pink" />
      </div>

      <style jsx>{`
        .sq-loader-wrapper {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          z-index: 9999;
        }

        .sq-loader {
          display: flex;
          gap: 14px;
        }

        .sq-dot {
          width: 14px;
          height: 14px;
          background: currentColor;
          border-radius: 2px;
          position: relative;
          animation: sq-bounce 0.55s ease-in-out infinite;
        }

        .sq-dot::after {
          content: "";
          position: absolute;
          top: 22px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 4px;
          background: currentColor;
          opacity: 0.25;
          animation: sq-shadow 0.55s ease-in-out infinite;
        }

        .sq-dot:nth-child(1),
        .sq-dot:nth-child(1)::after { animation-delay: 0s; }

        .sq-dot:nth-child(2),
        .sq-dot:nth-child(2)::after { animation-delay: 0.08s; }

        .sq-dot:nth-child(3),
        .sq-dot:nth-child(3)::after { animation-delay: 0.16s; }

        .sq-dot:nth-child(4),
        .sq-dot:nth-child(4)::after { animation-delay: 0.24s; }

        .sq-dot:nth-child(5),
        .sq-dot:nth-child(5)::after { animation-delay: 0.32s; }

        .sq-red { color: #ff1a1a; }
        .sq-orange { color: #ffb020; }
        .sq-blue { color: #0b5ed7; }
        .sq-purple { color: #6f42c1; }
        .sq-pink { color: #c2185b; }

        @keyframes sq-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        @keyframes sq-shadow {
          0%, 100% {
            transform: translateX(-50%) scaleX(1);
            opacity: 0.25;
          }
          50% {
            transform: translateX(-50%) scaleX(0.6);
            opacity: 0.08;
          }
        }
      `}</style>
    </div>
  );
}
