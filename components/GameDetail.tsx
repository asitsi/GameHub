"use client";

import { useEffect, useState } from "react";

import type { Game } from "../types/game";
import { GlitchText } from "./GlitchText";
import { StarRating } from "./StarRating";

type GameDetailProps = {
  game: Game;
  onBack: () => void;
};

export function GameDetail({ game, onBack }: GameDetailProps) {
  const [loaded, setLoaded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07070f",
        color: "#f0f0ff",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "480px",
          overflow: "hidden",
          background: game.gradient,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(${game.accentColor}11 1px, transparent 1px),
              linear-gradient(90deg, ${game.accentColor}11 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridMove 20s linear infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 30% 50%, ${game.accentColor}22 0%, transparent 60%)`,
          }}
        />

        <button
          onClick={onBack}
          style={{
            position: "absolute",
            top: "32px",
            left: "40px",
            background: "rgba(0,0,0,0.5)",
            border: `1px solid ${game.accentColor}44`,
            color: game.accentColor,
            fontFamily: "'Courier New', monospace",
            fontSize: "12px",
            letterSpacing: "2px",
            padding: "10px 20px",
            cursor: "pointer",
            backdropFilter: "blur(10px)",
            borderRadius: "4px",
            transition: "all 0.2s",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${game.accentColor}22`;
            e.currentTarget.style.borderColor = game.accentColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.5)";
            e.currentTarget.style.borderColor = `${game.accentColor}44`;
          }}
        >
          ← BACK
        </button>

        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "40px",
            right: "40px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontFamily: "'Courier New', monospace",
              color: game.accentColor,
              letterSpacing: "4px",
              marginBottom: "10px",
              textTransform: "uppercase",
            }}
          >
            ◈ {game.genre} · {game.year}
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 88px)",
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              lineHeight: 0.95,
              letterSpacing: "4px",
              margin: "0 0 16px",
              textShadow: `0 0 60px ${game.accentColor}44`,
            }}
          >
            <GlitchText text={game.title} color="#f0f0ff" />
          </h1>

          <p
            style={{
              fontSize: "18px",
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "500px",
            }}
          >
            {game.shortDescription}
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            right: "80px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "160px",
            opacity: 0.2,
            filter: `drop-shadow(0 0 40px ${game.accentColor})`,
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <img
            src={game.image}
            alt={game.title}
            width={200}
            height={200}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "32px",
            right: "40px",
            background: game.tagColor,
            color: "#fff",
            fontSize: "10px",
            fontFamily: "'Courier New', monospace",
            fontWeight: "900",
            letterSpacing: "3px",
            padding: "8px 16px",
            borderRadius: "2px",
            boxShadow: `0 0 20px ${game.tagColor}66`,
          }}
        >
          {game.tag}
        </div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "60px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "10px",
                fontFamily: "'Courier New', monospace",
                color: game.accentColor,
                letterSpacing: "4px",
                marginBottom: "20px",
              }}
            >
              ◈ ABOUT THIS GAME
            </div>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.85,
                color: "#b0b0cc",
                fontFamily: "'Georgia', serif",
                marginBottom: "40px",
              }}
            >
              {game.description}
            </p>

            <div
              style={{
                fontSize: "10px",
                fontFamily: "'Courier New', monospace",
                color: game.accentColor,
                letterSpacing: "4px",
                marginBottom: "16px",
              }}
            >
              ◈ TAGS
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11px",
                    fontFamily: "'Courier New', monospace",
                    color: game.accentColor,
                    border: `1px solid ${game.accentColor}44`,
                    padding: "6px 14px",
                    borderRadius: "2px",
                    background: `${game.accentColor}0d`,
                    letterSpacing: "1px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "48px",
                padding: "28px",
                background: "#0d0d14",
                border: "1px solid #1e1e2e",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontFamily: "'Courier New', monospace",
                  color: "#5a5a7a",
                  letterSpacing: "3px",
                  marginBottom: "12px",
                }}
              >
                COMMUNITY RATING
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    fontSize: "56px",
                    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                    color: "#ffb800",
                    lineHeight: 1,
                    textShadow: "0 0 30px #ffb80066",
                  }}
                >
                  {game.rating}
                </div>
                <div>
                  <StarRating rating={game.rating} />
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#4a4a6a",
                      fontFamily: "'Courier New', monospace",
                      marginTop: "6px",
                    }}
                  >
                    Based on 10k+ reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <a
              href={game.androidBuild}
              download
              style={{
                display: "inline-block",
                width: "100%",
                padding: "18px",
                background: `linear-gradient(135deg, ${game.accentColor}, ${game.tagColor})`,
                border: "none",
                color: "#000",
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: "20px",
                letterSpacing: "4px",
                cursor: "pointer", 
                borderRadius: "4px",
                marginBottom: "12px",
                boxShadow: `0 8px 30px ${game.accentColor}44`,
                transition: "all 0.2s",
                textAlign: "center",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ⬇ DOWNLOAD ANDROID APK 
            </a>

            <button
              style={{
                width: "100%",
                padding: "14px",
                background: wishlisted ? game.accentColor : "transparent",
                border: `1px solid ${
                  wishlisted ? game.accentColor : "#2a2a3a"
                }`,
                color: wishlisted ? "#000" : "#7a7a9a",
                fontFamily: "'Courier New', monospace",
                fontSize: "12px",
                letterSpacing: "3px",
                cursor: "pointer",
                borderRadius: "4px",
                marginBottom: "32px",
                transition: "all 0.2s",
                fontWeight: wishlisted ? "bold" : "normal",
              }}
              onClick={() => setWishlisted((prev) => !prev)}
              onMouseEnter={(e) => {
                if (!wishlisted) {
                  e.currentTarget.style.borderColor = "#3a3a5a";
                  e.currentTarget.style.color = "#aaa";
                }
              }}
              onMouseLeave={(e) => {
                if (!wishlisted) {
                  e.currentTarget.style.borderColor = "#2a2a3a";
                  e.currentTarget.style.color = "#7a7a9a";
                }
              }}
            >
              + ADD TO WISHLIST
            </button>

            <div
              style={{
                background: "#0d0d14",
                border: "1px solid #1e1e2e",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid #1e1e2e",
                  fontSize: "10px",
                  fontFamily: "'Courier New', monospace",
                  color: game.accentColor,
                  letterSpacing: "3px",
                }}
              >
                ◈ GAME INFO
              </div>

              {[
                { label: "PLAYERS", value: game.players },
                { label: "AVG PLAYTIME", value: game.stats.playtime },
                { label: "DIFFICULTY", value: game.stats.difficulty },
                { label: "UPDATES", value: game.stats.updates },
                { label: "RELEASE", value: game.year },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    borderBottom: "1px solid #1e1e2e",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Courier New', monospace",
                      color: "#4a4a6a",
                      letterSpacing: "2px",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Courier New', monospace",
                      color: "#c0c0e0",
                      fontWeight: "bold",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
