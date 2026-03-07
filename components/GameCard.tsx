"use client";

import { useState } from "react";

import type { Game } from "../types/game";
import { StarRating } from "./StarRating";

type GameCardProps = {
  game: Game;
  onClick: (game: Game) => void;
  index: number;
};

export function GameCard({ game, onClick, index }: GameCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(game)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#0d0d14",
        border: `1px solid ${hovered ? game.accentColor : "#1e1e2e"}`,
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 20px 60px ${game.accentColor}22, 0 0 0 1px ${game.accentColor}44`
          : "0 4px 20px rgba(0,0,0,0.5)",
        animationDelay: `${index * 0.08}s`,
        animation: "fadeSlideUp 0.6s ease forwards",
        opacity: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${game.accentColor}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      <div
        style={{
          background: game.gradient,
          padding: "32px 24px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            opacity: 0.5,
          }}
        />

        <div
          style={{
            fontSize: "52px",
            lineHeight: 1,
            marginBottom: "12px",
            filter: hovered ? `drop-shadow(0 0 20px ${game.accentColor})` : "none",
            transition: "filter 0.3s",
            display: "inline-block",
          }}
        >
          <img src={game.image} alt={game.title} width={100} height={100} />
        </div>

        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: game.tagColor,
            color: "#fff",
            fontSize: "9px",
            fontFamily: "'Courier New', monospace",
            fontWeight: "900",
            letterSpacing: "2px",
            padding: "4px 10px",
            borderRadius: "2px",
            boxShadow: `0 0 12px ${game.tagColor}88`,
          }}
        >
          {game.tag}
        </div>
      </div>

      <div style={{ padding: "20px 24px 24px" }}>
        <div
          style={{
            fontSize: "10px",
            fontFamily: "'Courier New', monospace",
            color: game.accentColor,
            letterSpacing: "3px",
            marginBottom: "6px",
            textTransform: "uppercase",
          }}
        >
          {game.genre}
        </div>

        <h3
          style={{
            fontSize: "22px",
            fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
            color: "#f0f0ff",
            margin: "0 0 8px",
            letterSpacing: "2px",
            lineHeight: 1.1,
          }}
        >
          {game.title}
        </h3>

        <p
          style={{
            fontSize: "13px",
            color: "#7a7a9a",
            margin: "0 0 16px",
            lineHeight: 1.5,
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
          }}
        >
          {game.shortDescription}
        </p>

        <StarRating rating={game.rating} />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginTop: "16px",
          }}
        >
          {game.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "10px",
                fontFamily: "'Courier New', monospace",
                color: "#5a5a7a",
                border: "1px solid #2a2a3a",
                padding: "2px 8px",
                borderRadius: "2px",
                letterSpacing: "1px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid #1e1e2e",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "#4a4a6a",
              fontFamily: "'Courier New', monospace",
            }}
          >
            {game.players}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: game.accentColor,
              fontSize: "12px",
              fontFamily: "'Courier New', monospace",
              fontWeight: "bold",
            }}
          >
            VIEW →
          </div>
        </div>
      </div>
    </div>
  );
}
