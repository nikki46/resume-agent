export default function ScoutFirefly({ className = "", happy = false }: { className?: string; happy?: boolean }) {
  return <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true">
    <ellipse cx="80" cy="142" rx="28" ry="5" fill="#173e3522" />
    <g className="scout-wings"><ellipse cx="48" cy="74" rx="23" ry="36" transform="rotate(-35 48 74)" fill="#e5eed5" stroke="#315b4a" strokeWidth="2" /><ellipse cx="112" cy="74" rx="23" ry="36" transform="rotate(35 112 74)" fill="#e5eed5" stroke="#315b4a" strokeWidth="2" /><path d="M38 61 61 93M122 61 99 93" stroke="#9aaa85" strokeWidth="2" /></g>
    <ellipse cx="80" cy="101" rx="28" ry="33" fill="#ebc85b" stroke="#254c3d" strokeWidth="2.5" />
    <path d="M55 100Q80 114 105 100" stroke="#a88d31" strokeWidth="2" />
    <path d="M69 47Q60 27 52 30M90 47Q101 27 109 31" stroke="#254c3d" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="51" cy="29" r="4" fill="#d9af46" /><circle cx="110" cy="30" r="4" fill="#d9af46" />
    <rect x="51" y="44" width="58" height="49" rx="24" fill="#2c5848" />
    {happy ? <path d="M65 65q5-7 10 0M85 65q5-7 10 0" stroke="#fff8de" strokeWidth="3" strokeLinecap="round" /> : <><ellipse cx="69" cy="64" rx="3.5" ry="5" fill="#fff8de" /><ellipse cx="91" cy="64" rx="3.5" ry="5" fill="#fff8de" /></>}
    <path d="M74 77Q80 82 86 77" stroke="#fff8de" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="61" cy="73" rx="5" ry="3" fill="#bb8467" /><ellipse cx="99" cy="73" rx="5" ry="3" fill="#bb8467" />
    <path d="M58 112 45 119M102 112 115 119" stroke="#254c3d" strokeWidth="2.5" strokeLinecap="round" />
  </svg>;
}
