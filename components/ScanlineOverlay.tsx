export function ScanlineOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
