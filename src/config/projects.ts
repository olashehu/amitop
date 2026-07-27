export type Project = {
  slug: string;
  title: string;
  sector: string;
  category:
    | "Solar"
    | "Fiber & Cabling"
    | "Wireless"
    | "Security"
    | "Data Center"
    | "Voice & PBX";
  location: string;
  description: string;
  icon: string;
};

export const projects: Project[] = [
  {
    slug: "corporate-hq-network-overhaul",
    title: "Corporate HQ Network Overhaul",
    sector: "Logistics",
    category: "Fiber & Cabling",
    location: "Lagos",
    description:
      "Full structured cabling and enterprise WiFi redesign for a 6-floor headquarters, cutting reported connectivity issues to near zero.",
    icon: "Building2",
  },
  {
    slug: "industrial-site-solar-deployment",
    title: "Industrial Site Solar Deployment",
    sector: "Manufacturing",
    category: "Solar",
    location: "Abuja FCT",
    description:
      "Hybrid solar and battery installation for a manufacturing site, reducing generator dependency during grid outages.",
    icon: "Factory",
  },
  {
    slug: "multi-branch-bank-security-upgrade",
    title: "Multi-Branch Bank Security Upgrade",
    sector: "Financial Services",
    category: "Security",
    location: "Abuja",
    description:
      "CCTV and network infrastructure standardized across branch locations under one monitored architecture.",
    icon: "Landmark",
  },
  {
    slug: "campus-fiber-backbone",
    title: "University Campus Fiber Backbone",
    sector: "Education",
    category: "Fiber & Cabling",
    location: "Ibadan",
    description:
      "Outdoor fiber plant connecting 8 faculty buildings to a central data center, replacing an aging copper backbone.",
    icon: "GraduationCap",
  },
  {
    slug: "hotel-guest-wifi-rollout",
    title: "Hotel Guest & Staff WiFi Rollout",
    sector: "Hospitality",
    category: "Wireless",
    location: "Lagos",
    description:
      "Site-surveyed wireless deployment covering guest rooms, conference facilities, and staff areas on segmented networks.",
    icon: "Building2",
  },
  {
    slug: "regional-data-center-buildout",
    title: "Regional Data Center Build-Out",
    sector: "Telecommunications",
    category: "Data Center",
    location: "Port Harcourt",
    description:
      "Rack layout, structured cabling, and power redundancy planning for a new regional data center facility.",
    icon: "Server",
  },
  {
    slug: "retail-chain-cctv-network",
    title: "Retail Chain CCTV & Network Standardization",
    sector: "Retail",
    category: "Security",
    location: "Multiple states",
    description:
      "Consistent CCTV and network standards rolled out across retail outlets, monitored from a central operations point.",
    icon: "Landmark",
  },
  {
    slug: "hospital-ip-pbx-integration",
    title: "Hospital IP PBX Integration",
    sector: "Healthcare",
    category: "Voice & PBX",
    location: "Abuja",
    description:
      "IP PBX deployment integrating department extensions with existing network infrastructure for reliable internal communication.",
    icon: "Factory",
  },
  {
    slug: "office-park-solar-microgrid",
    title: "Office Park Solar Microgrid",
    sector: "Real Estate",
    category: "Solar",
    location: "Lekki, Lagos",
    description:
      "Shared solar microgrid serving a multi-tenant office park, sized to reduce collective generator reliance.",
    icon: "Factory",
  },
];

export const projectCategories = [
  "All",
  "Solar",
  "Fiber & Cabling",
  "Wireless",
  "Security",
  "Data Center",
  "Voice & PBX",
] as const;
