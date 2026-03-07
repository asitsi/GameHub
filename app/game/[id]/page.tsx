"use client";

import { useParams, useRouter } from "next/navigation";

import { games } from "../../../data/games";
import { GameDetail } from "../../../components/GameDetail";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();

  const idParam = params?.id;
  const id = typeof idParam === "string" ? parseInt(idParam, 10) : NaN;

  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#07070f",
          color: "#f0f0ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Courier New', monospace",
        }}
      >
        <div>
          <p style={{ marginBottom: "16px", letterSpacing: "2px" }}>
            GAME NOT FOUND
          </p>
          <button
            onClick={() => router.push("/")}
            style={{
              padding: "10px 18px",
              borderRadius: "4px",
              border: "1px solid #2a2a3a",
              background: "transparent",
              color: "#7a7a9a",
              cursor: "pointer",
              letterSpacing: "2px",
              fontSize: "12px",
            }}
          >
            ← BACK TO GAMES
          </button>
        </div>
      </div>
    );
  }

  return <GameDetail game={game} onBack={() => router.push("/")} />;
}

