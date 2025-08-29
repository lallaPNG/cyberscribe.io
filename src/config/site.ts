type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Cyberscribe",
  description:
    "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "https://cyberscribe-io.vercel.app/",
  ogImage: "https://cyberscribe-io.vercel.app/og",
  links: {
    twitter: "",
    github: "https://github.com/lallaPNG",
  },
};