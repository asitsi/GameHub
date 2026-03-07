type StarRatingProps = {
  rating: number;
};

export function StarRating({ rating }: StarRatingProps) {
  const stars = Math.round(rating / 2);

  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            fontSize: "10px",
            color: s <= stars ? "#ffb800" : "#333",
            textShadow: s <= stars ? "0 0 6px #ffb800" : "none",
          }}
        >
          ★
        </span>
      ))}
      <span
        style={{
          fontSize: "11px",
          color: "#ffb800",
          marginLeft: "4px",
          fontFamily: "'Courier New', monospace",
          fontWeight: "bold",
        }}
      >
        {rating}
      </span>
    </div>
  );
}
