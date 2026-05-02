export type PamphletAudience =
  | "professionals"
  | "clergy"
  | "newcomers"
  | "women"
  | "service"
  | "general";

export type Pamphlet = {
  title: string;
  slug: string;
  description: string;
  audience: PamphletAudience[];
  file: string;
  sourceUrl: string;
  featured?: boolean;
};

export const pamphlets: Pamphlet[] = [
  {
    title: "SA as a Resource for the Health & Helping Professional",
    slug: "health-helping-professional",
    description:
      "A concise introduction for therapists, counselors, doctors, rehab teams, and other referral partners.",
    audience: ["professionals"],
    file: "/pamphlets/sa-resource-health-helping-professional.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=4241",
    featured: true,
  },
  {
    title: "Members of the Clergy Ask About Sexaholics Anonymous",
    slug: "clergy-ask-about-sa",
    description:
      "An overview for pastors, priests, chaplains, and ministry leaders who want to understand SA.",
    audience: ["clergy"],
    file: "/pamphlets/members-of-the-clergy-ask-about-sa.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=9817",
    featured: true,
  },
  {
    title: "To The Newcomer",
    slug: "to-the-newcomer",
    description:
      "A first-step pamphlet for anyone wondering what SA is and whether recovery is possible.",
    audience: ["newcomers", "general"],
    file: "/pamphlets/to-the-newcomer.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=4236",
    featured: true,
  },
  {
    title: "SA is for Women",
    slug: "sa-is-for-women",
    description:
      "An introduction to recovery in SA for women and the professionals who support them.",
    audience: ["women", "professionals", "general"],
    file: "/pamphlets/sa-is-for-women.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8208",
  },
  {
    title: "Am I Too Young to Be a Sexaholic?",
    slug: "am-i-too-young",
    description:
      "A youth-facing pamphlet that can also help families and professionals recognize early patterns.",
    audience: ["general", "professionals"],
    file: "/pamphlets/am-i-too-young-to-be-a-sexaholic.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8211",
  },
  {
    title: "Do You Have a Problem with Pornography or Lust on the Internet?",
    slug: "pornography-or-internet-lust",
    description:
      "A focused resource on compulsive online sexual behavior, pornography, and internet-based acting out.",
    audience: ["general", "newcomers", "professionals"],
    file: "/pamphlets/problem-with-pornography-or-internet-lust.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8217",
  },
  {
    title: "First Find Your Dr. Bob",
    slug: "first-find-your-dr-bob",
    description:
      "A service-oriented pamphlet on recovery relationships and trusted guidance in the fellowship.",
    audience: ["service", "general"],
    file: "/pamphlets/first-find-your-dr-bob.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8220",
  },
  {
    title: "Practical Guidelines For Group Recovery",
    slug: "practical-guidelines-group-recovery",
    description:
      "Practical support material for members and service structures focused on healthy group life.",
    audience: ["service", "general"],
    file: "/pamphlets/practical-guidelines-for-group-recovery.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8215",
  },
  {
    title: "SA Check Meetings",
    slug: "sa-check-meetings",
    description:
      "A service resource that explains the function and value of SA check meetings.",
    audience: ["service"],
    file: "/pamphlets/sa-check-meetings.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8221",
  },
  {
    title: "SA Sponsorship",
    slug: "sa-sponsorship",
    description:
      "A guide to sponsorship for members seeking accountability and support in recovery.",
    audience: ["general", "newcomers"],
    file: "/pamphlets/sa-sponsorship.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=4239",
  },
  {
    title: "So, You're Going to Prison?",
    slug: "going-to-prison",
    description:
      "A correctional resource for people entering prison and those supporting them.",
    audience: ["service", "general"],
    file: "/pamphlets/so-youre-going-to-prison.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8219",
  },
  {
    title: "So, You're Leaving Prison?",
    slug: "leaving-prison",
    description:
      "A correctional re-entry pamphlet for members transitioning out of prison.",
    audience: ["service", "general"],
    file: "/pamphlets/so-youre-leaving-prison.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8216",
  },
  {
    title: "The SA Correctional Facilities Committee",
    slug: "correctional-facilities-committee",
    description:
      "A service pamphlet for correctional outreach, coordination, and committee support.",
    audience: ["service"],
    file: "/pamphlets/the-sa-correctional-facilities-committee.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=4243",
  },
  {
    title: "The SA Home Group",
    slug: "the-sa-home-group",
    description:
      "A short guide to home group life, belonging, and accountability in SA.",
    audience: ["general", "newcomers"],
    file: "/pamphlets/the-sa-home-group.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8218",
  },
  {
    title: "The Spirituality of Service",
    slug: "spirituality-of-service",
    description:
      "A literature piece on service, surrender, and spiritual growth within SA.",
    audience: ["service", "clergy", "general"],
    file: "/pamphlets/the-spirituality-of-service.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8214",
  },
  {
    title: "Why Stop Lusting?",
    slug: "why-stop-lusting",
    description:
      "An accessible resource on the role of lust in addiction and the need for recovery.",
    audience: ["general", "newcomers"],
    file: "/pamphlets/why-stop-lusting.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=4228",
  },
  {
    title: "Why Working the Steps is Important",
    slug: "why-working-the-steps-is-important",
    description:
      "A short explanation of why the Twelve Steps remain central to recovery in SA.",
    audience: ["general", "newcomers"],
    file: "/pamphlets/why-working-the-steps-is-important.pdf",
    sourceUrl: "https://www.sa.org/?sdm_process_download=1&download_id=8209",
  },
];

export const audienceLabels: Record<PamphletAudience, string> = {
  professionals: "Professionals",
  clergy: "Clergy",
  newcomers: "Newcomers",
  women: "Women",
  service: "Service",
  general: "General Recovery",
};
