export const site = {
  name: "Sexaholics Anonymous Kenya",
  shortName: "SA Kenya",
  description:
    "Sexaholics Anonymous Kenya offers 12 Step recovery support, literature, and referral resources for individuals, institutions, and professionals.",
  domain: "https://sexaholicsanonymous.or.ke",
  email: "sakenyanairobi@gmail.com",
  whatsapp: "+254782507625",
  analyticsId: "G-8GEMKQDL5M",
};

export type NavItem = {
  label: string;
  href?: string;
  children?: { href: string; label: string }[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "For Newcomers",
    children: [
      { href: "/problem/", label: "The Problem" },
      { href: "/solution/", label: "The Solution" },
      { href: "/test-yourself/", label: "Test Yourself" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: "/pamphlets/", label: "Pamphlets" },
      { href: "/resources/", label: "Pamphlet Library" },
      { href: "/12-steps-12-traditions/", label: "12 Steps & Traditions" },
      { href: "/podcasts/", label: "Podcasts" },
    ],
  },
  {
    label: "SIP",
    children: [
      { href: "/sip/", label: "SIP Home" },
      { href: "/sip/professionals/", label: "For Professionals" },
      { href: "/sip/clergy/", label: "For Clergy" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: `mailto:${site.email}` },
];

/** Flat nav for simple contexts (sitemap, mobile fallbacks). */
export const navigation = [
  { href: "/", label: "Home" },
  { href: "/problem/", label: "Problem" },
  { href: "/solution/", label: "Solution" },
  { href: "/test-yourself/", label: "Test Yourself" },
  { href: "/12-steps-12-traditions/", label: "12 Steps & Traditions" },
  { href: "/resources/", label: "Resources" },
  { href: "/podcasts/", label: "Podcasts" },
  { href: "/sip/", label: "SIP" },
  { href: "/pamphlets/", label: "Pamphlets" },
  { href: "/blog/", label: "Blog" },
];
