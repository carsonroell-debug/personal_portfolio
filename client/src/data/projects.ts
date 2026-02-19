export interface Project {
  id: string;
  name: string;
  one_liner: string;
  url: string;
  featured: boolean;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "link-rescue",
    name: "LinkRescue",
    one_liner: "Recover broken affiliate links automatically.",
    url: "https://linkrescue-web.vercel.app",
    featured: true,
    thumbnail: "/projects/link-rescue.svg",
  },
  {
    id: "bigflightdeals",
    name: "BigFlightDeals",
    one_liner: "AI-powered flight deal discovery for solo travelers.",
    url: "https://www.bigflightdeals.com",
    featured: false,
    thumbnail: "/projects/bigflightdeals.svg",
  },
  {
    id: "travelpackai",
    name: "TravelPackAI",
    one_liner: "Smart packing + travel planning assistant.",
    url: "https://travelpackai-sable.vercel.app",
    featured: false,
    thumbnail: "/projects/travelpackai.svg",
  },
  {
    id: "updatemate",
    name: "UpdateMate",
    one_liner: "Client job update portal for small service teams.",
    url: "https://jobupdate-mvp-3uu6.vercel.app",
    featured: false,
    thumbnail: "/projects/updatemate.svg",
  },
];

export const tools: Project[] = [
  {
    id: "utm-qr-builder",
    name: "UTM QR Builder",
    one_liner: "Generate trackable UTM links with QR codes.",
    url: "https://utm-qr-builder.vercel.app",
    featured: false,
    thumbnail: "/projects/utm-qr-builder.svg",
  },
  {
    id: "linklytics",
    name: "Linklytics",
    one_liner: "Link analytics and management platform.",
    url: "https://linklytics-mu.vercel.app",
    featured: false,
    thumbnail: "/projects/linklytics.svg",
  },
  {
    id: "tiny-habit-dashboard",
    name: "Tiny Habit Dashboard",
    one_liner: "Track micro habits that compound over time.",
    url: "https://tiny-habit-dashboard.vercel.app",
    featured: false,
    thumbnail: "/projects/tiny-habit.svg",
  },
];
