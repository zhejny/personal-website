import { useState, useEffect } from "react";

export const LoadingModal = ({ isLoading, progress }: { isLoading: boolean; progress: number }) => {
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "1.5rem",
        zIndex: 1000,
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.5s ease",
        pointerEvents: "none",
      }}
    >
      <p>Loading samples...</p>
      <p>{progress}%</p>

      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "10px",
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#fff",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};
