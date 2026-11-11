// ─────────────────────────────────────────────────────────────
//  ALL site content lives in this ONE file. Edit here — you
//  never need to touch the components. Search "TODO" for the
//  values you must personalize.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Sean", // TODO: your full name
  handle: "sean@homelab", // terminal-style handle shown in the nav
  role: "Software Engineering Student",
  tagline:
    "I build full-stack apps and deploy them on infrastructure I run myself — Oracle Cloud at the edge, my own homelab behind it.",
  location: "Sitiawan, Perak, Malaysia",
  email: "hello@example.com", // TODO: your email
  github: "https://github.com/seanneol88",
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO: your LinkedIn URL
  resumeUrl: "/resume.pdf", // TODO: drop your resume.pdf into /public
  availability: "Open to software engineering internships — 2026",
};

export const stats = [
  { value: "3", label: "projects shipped" }, // TODO: keep this honest as you build
  { value: "2", label: "servers self-managed" },
  { value: "12", label: "containers running" },
  { value: "99.9%", label: "monitored uptime" },
];

export const terminalLines: { prompt: string; output: string }[] = [
  { prompt: "whoami", output: "software-engineering-student" },
  { prompt: "cat /etc/motd", output: "Build, ship, break, fix, repeat." },
  {
    prompt: "docker ps --format '{{.Names}}'",
    output: "portfolio  uptime-kuma  nextcloud  caddy", // TODO: your real services
  },
  {
    prompt: "systemctl status homelab.service",
    output: "● active (running) — uptime 90 days",
  },
];

export type SkillGroup = { title: string; items: string[] };

// TODO: trim this to what you can actually defend in an interview.
// Fewer honest skills > a long list you cannot back up.
export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "PHP", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Laravel (learning)"],
  },
  {
    title: "Data",
    items: ["MySQL", "PostgreSQL", "Prisma", "Redis (learning)"],
  },
  {
    title: "DevOps & Infra",
    items: [
      "Docker",
      "GitHub Actions",
      "Nginx / Caddy",
      "Linux (Ubuntu)",
      "WireGuard / Tailscale",
      "Oracle Cloud",
    ],
  },
];

export type ProjectStatus = "live" | "building" | "planned";

export type Project = {
  name: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "This portfolio",
    status: "live",
    description:
      "The site you are reading. Next.js + Tailwind, containerized with Docker, and deployed by GitHub Actions to my Oracle Cloud VM behind Caddy HTTPS. Push to main = live in ~2 minutes.",
    tags: ["Next.js", "Tailwind CSS", "Docker", "GitHub Actions", "Oracle Cloud"],
    liveUrl: "https://your-domain.com", // TODO: your real domain once deployed
    repoUrl: "https://github.com/seanneol88/My-portfolio",
  },
  {
    name: "Saku — expense & gig-income tracker",
    status: "building",
    description:
      "Full-stack tracker for freelance income and expenses in RM. Auth, budgets, monthly charts, CSV export — built to manage my own tutoring and freelance money.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"],
    repoUrl: "https://github.com/seanneol88", // TODO: real repo once created
  },
  {
    name: "Homelab status dashboard",
    status: "planned",
    description:
      "Public status page for everything I self-host: service health, uptime history, server metrics, and incident notes — powered by Uptime Kuma and a small custom API.",
    tags: ["Uptime Kuma", "REST API", "Docker Compose", "WireGuard"],
  },
];

export const pipelineSteps = [
  { title: "git push", detail: "merge to main triggers the pipeline" },
  {
    title: "GitHub Actions",
    detail: "lint → type-check → build → Docker image",
  },
  { title: "GHCR", detail: "versioned image pushed to the registry" },
  {
    title: "Oracle Cloud VM",
    detail: "Always Free tier · pulls the image over SSH",
  },
  { title: "Caddy", detail: "automatic HTTPS → live in ~2 minutes" },
];

export const infraPoints = [
  "Push-to-deploy: every merge to main redeploys automatically",
  "Containerized with Docker — identical environments from laptop to server",
  "Hybrid architecture: Oracle Cloud as the public edge, homelab (via WireGuard) for heavier services",
  "Monitored with Uptime Kuma — a public status page is next on the roadmap",
];

export const homelabServices = [
  "Proxmox VE",
  "Uptime Kuma",
  "Nextcloud",
  "Pi-hole",
  "WireGuard",
]; // TODO: your actual services

export const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];
