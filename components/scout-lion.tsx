export default function ScoutLion({ className = "", happy = false }: { className?: string; happy?: boolean }) {
  return <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true">
    <ellipse cx="80" cy="146" rx="36" ry="5" fill="#173e3518"/>
    <path d="M106 124c29 4 30-25 19-29" stroke="#c58b45" strokeWidth="8" strokeLinecap="round"/>
    <path d="M124 95q-13-14 0-19 13 4 0 19" fill="#93603b"/>
    <ellipse cx="80" cy="117" rx="29" ry="28" fill="#e8b964"/>
    <ellipse cx="80" cy="122" rx="17" ry="20" fill="#fae0a3"/>
    <ellipse cx="59" cy="139" rx="15" ry="8" fill="#e8b964"/><ellipse cx="101" cy="139" rx="15" ry="8" fill="#e8b964"/>
    <path d="M53 139h12m30 0h12" stroke="#bc884c" strokeWidth="2" strokeLinecap="round"/>
    <path d="M80 18c9-7 21-2 25 6 13-2 23 7 23 19 12 6 15 19 8 29 6 12 0 24-12 28-3 13-16 19-27 13-10 9-24 9-34 0-12 5-24-2-27-14-12-4-18-17-11-28-6-11-2-24 10-29 0-12 10-20 23-18 5-9 15-13 22-6Z" fill="#ad7143"/>
    <circle cx="45" cy="45" r="14" fill="#e8b964"/><circle cx="115" cy="45" r="14" fill="#e8b964"/>
    <circle cx="45" cy="46" r="7" fill="#d59b61"/><circle cx="115" cy="46" r="7" fill="#d59b61"/>
    <rect x="42" y="34" width="76" height="71" rx="34" fill="#f2cc80"/>
    <path d="m71 35 8-8 3 9 9-5-3 11" fill="#f2cc80"/>
    {happy ? <path d="M57 65q6-8 12 0m22 0q6-8 12 0" stroke="#3d3e2c" strokeWidth="3.5" strokeLinecap="round"/> : <><ellipse cx="63" cy="63" rx="4" ry="5" fill="#3d3e2c"/><ellipse cx="97" cy="63" rx="4" ry="5" fill="#3d3e2c"/><circle cx="64" cy="61" r="1.2" fill="white"/><circle cx="98" cy="61" r="1.2" fill="white"/></>}
    <ellipse cx="54" cy="76" rx="7" ry="4" fill="#df986d" opacity=".7"/><ellipse cx="106" cy="76" rx="7" ry="4" fill="#df986d" opacity=".7"/>
    <ellipse cx="71" cy="84" rx="12" ry="10" fill="#ffebbc"/><ellipse cx="89" cy="84" rx="12" ry="10" fill="#ffebbc"/>
    <path d="M74 76q6-4 12 0l-6 7Z" fill="#654832"/>
    <path d="M80 83v5m0 0q-5 6-10 0m10 0q5 6 10 0" stroke="#654832" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="m62 108 18 7 18-7-5 13H67Z" fill="#365a45"/><path d="m82 116 9 18 7-8-9-12" fill="#365a45"/>
  </svg>;
}
