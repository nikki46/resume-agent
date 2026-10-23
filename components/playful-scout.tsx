"use client";
import { useEffect, useState } from "react";
import ScoutLion from "./scout-lion";

const reactions = [
  { name: "hop", greeting: "Roar-some!" },
  { name: "twirl", greeting: "A little lion magic." },
  { name: "dance", greeting: "You made my mane day!" },
] as const;

export default function PlayfulScout({ className = "", happy = false, hint = false, label = "Play with Scout" }: { className?: string; happy?: boolean; hint?: boolean; label?: string }) {
  const [play, setPlay] = useState({ count: 0, active: false });
  const reaction = reactions[Math.max(0, play.count - 1) % reactions.length];
  useEffect(() => {
    if (!play.active) return;
    const timer = window.setTimeout(() => setPlay(current => ({ ...current, active: false })), 1800);
    return () => window.clearTimeout(timer);
  }, [play.count, play.active]);

  return <div className={`scout-playful ${play.active ? "is-playing" : ""} ${className}`}>
    <button type="button" className="scout-play-button" aria-label={label} title="Click Scout for a little lion joy" onClick={() => setPlay(current => ({ count: current.count + 1, active: true }))}>
      <span key={play.count} className={`scout-reaction ${play.active ? `scout-reaction--${reaction.name}` : ""}`}><ScoutLion happy={happy || play.active}/></span>
      {play.active && <span key={`sparkles-${play.count}`} className="scout-sparkles" aria-hidden="true">{["✦", "✧", "✦", "✧", "✦", "✧"].map((star, index) => <span key={index}>{star}</span>)}</span>}
    </button>
    {hint && <span className="scout-play-hint" aria-hidden="true">Psst… tap Scout</span>}
    <span className={`scout-reaction-caption ${play.active ? "is-visible" : ""}`} role="status" aria-live="polite">{play.active ? reaction.greeting : ""}</span>
  </div>;
}
