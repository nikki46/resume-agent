import ScoutFirefly from "./scout-firefly";
export default function JourneyArt() {
  return <div className="journey-art" role="img" aria-label="An illustrated path connecting books, people, and technology">
    <div className="map-label"><span className="tiny-star">✳</span> EVERY EXPERIENCE CONNECTS</div>
    <svg className="landscape" viewBox="0 0 600 470" fill="none" aria-hidden="true">
      <circle cx="462" cy="116" r="57" fill="#dce6c5"/><circle cx="462" cy="116" r="42" stroke="#9daf8a" strokeDasharray="2 7"/>
      <path d="M0 344C96 224 184 393 282 278S491 245 600 177V470H0Z" fill="#e3e9d2"/>
      <path d="M0 407C106 316 209 443 339 334S510 298 600 346V470H0Z" fill="#cddbb9"/>
      <path d="M-15 460C92 383 182 469 295 405S481 390 620 424" stroke="#adc198" strokeWidth="68"/>
      <path d="M91 341C31 252 232 286 217 195S444 232 456 126" stroke="#81957a" strokeWidth="2" strokeDasharray="5 8" strokeLinecap="round"/>
      <g transform="translate(62 290) rotate(-9)"><rect width="71" height="56" rx="5" fill="#faf7e9" stroke="#4b6650" strokeWidth="2"/><path d="M35 5V51M7 14Q18 9 29 14M7 23Q18 18 29 23M43 14Q54 9 65 14M43 23Q54 18 65 23" stroke="#9da88a" strokeWidth="2"/></g>
      <g transform="translate(383 88) rotate(7)"><rect width="86" height="58" rx="7" fill="#f7f4e8" stroke="#4b6650" strokeWidth="2"/><path d="M9 10H77V46H9Z" fill="#2e5847"/><path d="m32 23-6 5 6 5m21-10 6 5-6 5m-8-12-5 18" stroke="#dfca77" strokeWidth="2" strokeLinecap="round"/><path d="M-7 60H93L85 68H1Z" fill="#f7f4e8" stroke="#4b6650" strokeWidth="2"/></g>
      <g transform="translate(190 164)"><path d="M0 24C0 11 11 0 26 0H58C73 0 84 11 84 24S73 48 58 48H37L18 61 21 48C8 46 0 37 0 24Z" fill="#f7f4e8" stroke="#4b6650" strokeWidth="2"/><circle cx="26" cy="24" r="3" fill="#4b6650"/><circle cx="42" cy="24" r="3" fill="#4b6650"/><circle cx="58" cy="24" r="3" fill="#4b6650"/></g>
      <g stroke="#647d58" strokeWidth="2" strokeLinecap="round"><path d="M44 413v-29m0 15-10-9m10 1 10-10M516 390v-44m0 25-13-14m13 2 13-17M549 411v-25m0 12 10-10M157 392v-20m0 12-8-7"/></g>
      <g fill="#f6edc6"><circle cx="44" cy="382" r="6"/><circle cx="516" cy="343" r="6"/><circle cx="549" cy="385" r="5"/><circle cx="157" cy="369" r="4"/></g>
      <g fill="#9aab85"><path d="m115 113 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z"/><path d="m344 55 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z"/><circle cx="325" cy="293" r="3"/><circle cx="530" cy="217" r="3"/></g>
    </svg>
    <div className="art-scout"><ScoutFirefly happy /></div>
    <span className="art-note note-one">a knack for people</span><span className="art-note note-two">a spark of curiosity</span>
    <div className="scout-intro"><span className="mini-dot"/> Meet Scout. Your curious little guide.</div>
  </div>;
}
