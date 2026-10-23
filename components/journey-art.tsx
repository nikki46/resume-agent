import Image from "next/image";

export default function JourneyArt() {
  return <figure className="portrait-card" data-reveal data-reveal-delay="150">
    <div className="portrait-decoration" aria-hidden="true">✳</div>
    <div className="portrait-frame"><Image src="/nicole-leon.png" alt="Nicole Leon" width={1086} height={1448} sizes="(max-width: 760px) 350px, 405px" priority/></div>
    <figcaption><span className="portrait-caption">A little more than a resume.</span><span className="portrait-note">Meet the person behind the experience.</span></figcaption>
  </figure>;
}
