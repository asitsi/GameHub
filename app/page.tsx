"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { Game } from "../types/game";
import { games } from "../data/games";
import { ScanlineOverlay } from "../components/ScanlineOverlay";
import { GameCard } from "../components/GameCard";

export default function GamingSite() {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("ALL");
  const [headerLoaded, setHeaderLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHeaderLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const genres = ["ALL", "Sci-Fi Shooter", "Action RPG", "Strategy", "Racing", "Dark Fantasy RPG", "Puzzle Shooter"];
  const filtered = filter === "ALL" ? games : games.filter((g) => g.genre === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #07070f;
          min-height: 100vh;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #07070f; }
        ::-webkit-scrollbar-thumb { background: #2a2a4a; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #3a3a6a; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(-50%) rotate(-2deg); }
          50% { transform: translateY(calc(-50% - 16px)) rotate(2deg); }
        }

        @keyframes gridMove {
          from { backgroundPosition: 0 0; }
          to { backgroundPosition: 60px 60px; }
        }

        @keyframes glitch {
          0% { clip-path: inset(20% 0 60% 0); transform: translate(-4px); }
          25% { clip-path: inset(70% 0 10% 0); transform: translate(4px); }
          50% { clip-path: inset(40% 0 40% 0); transform: translate(-2px); }
          75% { clip-path: inset(5% 0 80% 0); transform: translate(3px); }
          100% { clip-path: inset(0); transform: translate(0); }
        }

        @keyframes scanPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes logoReveal {
          from { opacity: 0; letter-spacing: 20px; }
          to { opacity: 1; letter-spacing: 6px; }
        }
      `}</style>

      <ScanlineOverlay />

      <div style={{ minHeight: "100vh", background: "#07070f" }}>
          {/* Header */}
          <header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 100,
              backdropFilter: "blur(20px)",
              background: "rgba(7,7,15,0.9)",
              borderBottom: "1px solid #1e1e2e",
              padding: "0 40px",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "68px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: "28px",
                  letterSpacing: "6px",
                  color: "#f0f0ff",
                  animation: "logoReveal 0.8s ease forwards",
                }}
              >
                <span style={{ color: "#00f5d4" }}>Game</span>Hub
              </div>


              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00f5d4, #a259ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                👤
              </div>
            </div>
          </header>

          {/* Hero banner */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "80px 40px",
              background: "linear-gradient(180deg, #0d0d20 0%, #07070f 100%)",
              borderBottom: "1px solid #1e1e2e",
            }}
          >
            {/* Grid background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(#00f5d408 1px, transparent 1px), linear-gradient(90deg, #00f5d408 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 50% 0%, #00f5d415 0%, transparent 60%)",
              }}
            />

            <div
              style={{
                position: "relative",
                maxWidth: "1200px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontFamily: "'Courier New', monospace",
                  color: "#00f5d4",
                  letterSpacing: "6px",
                  marginBottom: "16px",
                  opacity: headerLoaded ? 1 : 0,
                  transition: "opacity 0.6s 0.2s",
                }}
              >
                ◈ THE FUTURE OF GAMING IS HERE ◈
              </div>

              <h1
                style={{
                  fontSize: "clamp(56px, 10vw, 110px)",
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  lineHeight: 0.9,
                  letterSpacing: "6px",
                  marginBottom: "24px",
                  opacity: headerLoaded ? 1 : 0,
                  transform: headerLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s 0.3s",
                }}
              >
                DISCOVER YOUR
                <br />
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #00f5d4",
                    textShadow: "0 0 40px #00f5d444",
                  }}
                >
                  NEXT WORLD
                </span>
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  color: "#5a5a7a",
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                  opacity: headerLoaded ? 1 : 0,
                  transition: "opacity 0.6s 0.5s",
                }}
              >
                {games.length} handpicked Games · Updated daily
              </p>
            </div>
          </div>

          {/* Game grid */}
          <main
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "32px 40px 80px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((game, i) => (
              <GameCard
                key={game.id}
                game={game}
                onClick={(g: Game) => router.push(`/game/${g.id}`)}
                index={i}
              />
            ))}
          </main>

          {/* Footer */}
          <footer
            style={{
              borderTop: "1px solid #1e1e2e",
              padding: "32px 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: "20px",
                letterSpacing: "6px",
                color: "#2a2a3a",
                marginBottom: "8px",
              }}
            >
              <span style={{ color: "#1a4a44" }}>Game</span>Hub
            </div>
            <div
              style={{
                fontSize: "10px",
                fontFamily: "'Courier New', monospace",
                color: "#2a2a3a",
                letterSpacing: "2px",
              }}
            >
              © 2025 GameHub · ALL RIGHTS RESERVED
            </div>
          </footer>
        </div>
    </>
  );
}
