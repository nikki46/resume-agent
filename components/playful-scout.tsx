"use client";
import { useEffect, useState } from "react";
import ScoutLion from "./scout-lion";

const reactions = [
  { name: "roar", greeting: "Rrrroar!" },
  { name: "swat", greeting: "Just a playful paw." },
  { name: "stretch", greeting: "Biiig stretch." },
] as const;

export default function PlayfulScout({ className = "", happy = false, label = "Play with Scout" }: { className?: string; happy?: boolean; label?: string }) {
  const [play, setPlay] = useState({ count: 0, active: false });
  const reaction = reactions[Math.max(0, play.count - 1) % reactions.length];
  useEffect(() => {
    if (!play.active) return;
    const timer = window.setTimeout(() => setPlay(current => ({ ...current, active: false })), 2600);
    return () => window.clearTimeout(timer);
  }, [play.count, play.active]);

  return <div className={`scout-playful ${play.active ? "is-playing" : ""} ${className}`}>
    <button type="button" className="scout-play-button" aria-label={label} onClick={() => setPlay(current => ({ count: current.count + 1, active: true }))}>
      <span key={play.count} className={`scout-reaction ${play.active ? `scout-reaction--${reaction.name}` : ""}`}><ScoutLion happy={play.active ? reaction.name !== "roar" : happy}/></span>
    </button>
    <span className="sr-only" role="status" aria-live="polite">{play.active ? reaction.greeting : ""}</span>
  </div>;
}
