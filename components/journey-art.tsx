export default function JourneyArt() {
  return <figure className="portrait-card">
    <div className="portrait-decoration" aria-hidden="true">✳</div>
    <div className="portrait-frame"><img src="/nicole-leon.jpeg" alt="Nicole Leon smiling" width={400} height={400} fetchPriority="high"/></div>
    <figcaption><span className="portrait-caption">A little more than a resume.</span><span className="portrait-note">Meet the person behind the experience.</span></figcaption>
  </figure>;
}
