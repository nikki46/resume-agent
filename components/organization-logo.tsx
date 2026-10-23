const organizations = {
  "sf-state": { name: "San Francisco State University", src: "/organizations/sf-state.png", width: 1579, height: 293 },
  "shake-shack": { name: "Shake Shack", src: "/organizations/shake-shack.svg", width: 566, height: 124 },
  kizuki: { name: "Kizuki Ramen & Izakaya", src: "/organizations/kizuki.png", width: 200, height: 78 },
} as const;

export type OrganizationId = keyof typeof organizations;

export default function OrganizationLogo({ organization }: { organization: OrganizationId }) {
  const brand = organizations[organization];
  return <div className={`organization-logo organization-logo--${organization}`}>
    <img src={brand.src} alt={`${brand.name} logo`} width={brand.width} height={brand.height} loading="lazy" decoding="async"/>
  </div>;
}
