export const siteConfig = {
  name: "AMITOP Tech",
  legalName: "Amitop Technologies",
  tagline: "Nigeria's Infrastructure, Engineered for What's Next",
  description:
    "AMITOP designs, installs, and maintains solar power, fiber optic, structured cabling, and network infrastructure for businesses across Nigeria — built to enterprise-grade standards.",
  url: "https://www.amitopng.com",
  ogImage: "/images/og-cover.jpg",
  email: "kadiri.aliu@amitopng.com",
  phone: "+234 8077856633",
  address: "15 Ogunlana Drive, Surulere, Lagos, Nigeria",
  links: {
    linkedin: "https://linkedin.com/company/amitop",
    twitter: "https://twitter.com/amitop",
    instagram: "https://instagram.com/amitop",
  },
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceSubOptions: Record<string, string[]> = {
  "solar-energy-systems": [
    "New Installation",
    "Inverter Fault",
    "Battery/Backup Issue",
    "System Underperforming",
  ],
  "fiber-optic-installation": [
    "New Installation",
    "Fiber Cut/Break",
    "Signal Loss/Attenuation",
    "Splicing/Termination Issue",
  ],
  "cat6-cat7-cabling": [
    "Fallen Trunk",
    "Face-Plate Damage",
    "Troubleshooting of Network Cables",
  ],
  "structured-cabling": [
    "New Installation",
    "Cable Relocation",
    "Certification/Testing Request",
    "Pathway/Containment Damage",
  ],
  "wireless-network-installation": [
    "New Installation",
    "Weak Signal/Dead Zones",
    "Access Point Not Working",
    "Network Congestion",
  ],
  "pabx-ip-pbx-installation": [
    "New Installation",
    "Extension Not Working",
    "Call Quality Issue",
    "System Expansion",
  ],
  "cctv-installation": [
    "New Installation",
    "Camera Not Recording",
    "No Remote Access",
    "Camera/Cable Damage",
  ],
  "network-design-deployment": [
    "New Network Design",
    "Network Expansion",
    "Performance/Downtime Issue",
    "Security/VLAN Configuration",
  ],
  "data-center-setup": [
    "New Server Room Setup",
    "Rack Expansion",
    "Cooling/Power Issue",
    "Cabling Reorganization",
  ],
  "it-infrastructure-consulting": [
    "Infrastructure Audit",
    "Technology Roadmap",
    "Vendor Selection Support",
    "Budget Planning",
  ],
  "maintenance-technical-support": [
    "Emergency Repair",
    "Scheduled Maintenance Signup",
    "General Troubleshooting",
    "Contract/SLA Inquiry",
  ],
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  category: "Power" | "Network" | "Security" | "IT Services";
  benefits: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "solar-energy-systems",
    title: "Solar Energy System Installation",
    shortDescription:
      "Reliable, grid-independent power for homes, offices, and industrial sites.",
    description:
      "End-to-end solar design and installation — from load assessment and panel sizing to inverter configuration and battery backup — built to keep Nigerian businesses running through outages.",
    icon: "Sun",
    category: "Power",
    benefits: [
      "Load assessment sized to your actual consumption, not guesswork",
      "Hybrid inverter and battery backup configured for seamless grid switching",
      "Panel and mounting hardware rated for Nigerian weather conditions",
      "Ongoing performance monitoring after commissioning",
    ],
    process: [
      "Site survey and load/energy audit",
      "System design and equipment sizing",
      "Installation and inverter/battery configuration",
      "Testing, commissioning, and handover documentation",
    ],
  },
  {
    slug: "fiber-optic-installation",
    title: "Fiber Optic Installation & Termination",
    shortDescription:
      "High-speed fiber backbone installation, splicing, and termination.",
    description:
      "Certified fiber optic cabling, fusion splicing, and OTDR-tested termination for carrier-grade and enterprise networks, indoor and outdoor plant.",
    icon: "Cable",
    category: "Network",
    benefits: [
      "Fusion splicing with OTDR-verified loss testing on every run",
      "Indoor and outdoor plant cabling for campus and multi-building sites",
      "Single-mode and multi-mode fiber matched to your bandwidth needs",
      "Clean termination and labeling for easy future troubleshooting",
    ],
    process: [
      "Route planning and fiber count design",
      "Cable pulling and duct/conduit installation",
      "Fusion splicing and connector termination",
      "OTDR testing and certification report",
    ],
  },
  {
    slug: "cat6-cat7-cabling",
    title: "CAT6/CAT7 Network Cabling",
    shortDescription:
      "Structured copper cabling built for speed, longevity, and clean pathways.",
    description:
      "Precision-terminated CAT6 and CAT6A/CAT7 cabling with certified testing, cable management, and labeling that scales with your growing network.",
    icon: "Network",
    category: "Network",
    benefits: [
      "CAT6/CAT6A/CAT7 options matched to current and future bandwidth needs",
      "Certified testing on every run — no guessing on link performance",
      "Structured labeling and patch panel organization",
      "Cable pathways designed for clean expansion later",
    ],
    process: [
      "Outlet count and pathway planning",
      "Cable pulling and containment installation",
      "Termination at patch panels and outlets",
      "Certification testing and as-built documentation",
    ],
  },
  {
    slug: "structured-cabling",
    title: "Structured Cabling",
    shortDescription:
      "Standardized cabling infrastructure for offices, campuses, and facilities.",
    description:
      "TIA/EIA-compliant structured cabling systems covering horizontal and backbone cabling, patch panels, and telecom rooms designed for future expansion.",
    icon: "Layers",
    category: "Network",
    benefits: [
      "TIA/EIA-compliant horizontal and backbone cabling design",
      "Telecom room and patch panel layout built for growth",
      "Single standard applied consistently across every floor or building",
      "Reduces long-term maintenance cost versus ad-hoc cabling",
    ],
    process: [
      "Facility assessment and cabling standard selection",
      "Telecom room and pathway design",
      "Installation across horizontal and backbone runs",
      "Testing, labeling, and system documentation",
    ],
  },
  {
    slug: "wireless-network-installation",
    title: "Wireless Network (WiFi) Installation",
    shortDescription:
      "Enterprise WiFi with full coverage, capacity, and roaming design.",
    description:
      "Site-surveyed wireless network design and deployment using enterprise access points, controller configuration, and coverage heat-mapping for seamless roaming.",
    icon: "Wifi",
    category: "Network",
    benefits: [
      "Pre-deployment site survey with coverage heat-mapping",
      "Enterprise-grade access points sized to real device density",
      "Seamless roaming across floors and buildings",
      "Guest, staff, and secure network segmentation",
    ],
    process: [
      "Wireless site survey and capacity planning",
      "Access point placement and design",
      "Installation and controller configuration",
      "Coverage validation and handover",
    ],
  },
  {
    slug: "pabx-ip-pbx-installation",
    title: "PABX/IP PBX Installation",
    shortDescription:
      "Modern voice systems for internal and external business communication.",
    description:
      "PABX and IP PBX system design, installation, and extension configuration, integrated with existing infrastructure for reliable business communication.",
    icon: "PhoneCall",
    category: "IT Services",
    benefits: [
      "Extension and call routing configured to how your teams actually work",
      "Integration with existing network and internet lines",
      "Voicemail, call groups, and IVR setup where needed",
      "Staff training included at handover",
    ],
    process: [
      "Requirements gathering and extension planning",
      "System installation and network integration",
      "Extension and call-routing configuration",
      "Testing and staff handover",
    ],
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    shortDescription:
      "IP and analog surveillance systems with remote monitoring.",
    description:
      "Camera placement planning, IP/analog CCTV installation, NVR/DVR configuration, and remote monitoring setup for round-the-clock site security.",
    icon: "Camera",
    category: "Security",
    benefits: [
      "Camera placement planned around actual blind spots and entry points",
      "IP and analog options depending on site and budget",
      "Remote viewing set up on phone and desktop",
      "Storage sized to your required retention period",
    ],
    process: [
      "Site walkthrough and camera placement planning",
      "Cabling and camera installation",
      "NVR/DVR and storage configuration",
      "Remote access setup and handover",
    ],
  },
  {
    slug: "network-design-deployment",
    title: "Network Design & Deployment",
    shortDescription:
      "Architecture, routing, and switching designed around your operations.",
    description:
      "Full network architecture — LAN/WAN design, VLAN segmentation, routing and switching configuration — planned around uptime and scalability.",
    icon: "Router",
    category: "Network",
    benefits: [
      "LAN/WAN architecture designed around how your business actually runs",
      "VLAN segmentation for security and traffic management",
      "Routing and switching configured for redundancy where it matters",
      "Documentation that makes future changes straightforward",
    ],
    process: [
      "Requirements and current-state assessment",
      "Network architecture and addressing design",
      "Router and switch configuration and deployment",
      "Testing, failover validation, and documentation",
    ],
  },
  {
    slug: "data-center-setup",
    title: "Data Center Setup",
    shortDescription:
      "Server rooms and data centers built to enterprise standards.",
    description:
      "Rack layout, power redundancy, structured cabling, cooling considerations, and server room build-outs designed for reliability and compliance.",
    icon: "Server",
    category: "IT Services",
    benefits: [
      "Rack layout planned for airflow, access, and future capacity",
      "Power redundancy considerations built into the design",
      "Structured cabling integrated cleanly into rack pathways",
      "Cooling and environmental factors accounted for from day one",
    ],
    process: [
      "Capacity planning and rack layout design",
      "Power and cooling assessment",
      "Rack installation and structured cabling",
      "Testing and operational handover",
    ],
  },
  {
    slug: "it-infrastructure-consulting",
    title: "IT Infrastructure Consultant",
    shortDescription:
      "Strategic guidance on infrastructure investment and technology planning.",
    description:
      "Independent assessment and roadmap planning for IT infrastructure investments, vendor selection, and technology upgrades aligned to business goals.",
    icon: "ClipboardList",
    category: "IT Services",
    benefits: [
      "Independent assessment, not tied to pushing specific hardware",
      "Roadmap planning aligned to your actual growth plans",
      "Vendor and equipment selection support",
      "Budget-aware recommendations, phased where it makes sense",
    ],
    process: [
      "Current infrastructure audit",
      "Requirements and goals workshop",
      "Roadmap and recommendation report",
      "Implementation support as needed",
    ],
  },
  {
    slug: "maintenance-technical-support",
    title: "Maintenance & Technical Support",
    shortDescription:
      "Proactive maintenance contracts and responsive technical support.",
    description:
      "Scheduled preventive maintenance and on-call technical support for power, network, and security systems — keeping infrastructure running at full uptime.",
    icon: "Wrench",
    category: "IT Services",
    benefits: [
      "Scheduled preventive checks instead of waiting for something to break",
      "Rapid-response support contracts with defined response times",
      "Coverage across power, network, and security systems in one contract",
      "Clear reporting after every visit",
    ],
    process: [
      "Infrastructure inventory and maintenance plan setup",
      "Scheduled preventive maintenance visits",
      "On-call incident response as issues arise",
      "Ongoing reporting and plan review",
    ],
  },
];
