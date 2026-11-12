// Site-wide settings. Change links and labels here, not in the pages.

export const site = {
  name: 'Giant Solutions',
  person: 'George Gens',
  url: 'https://giant-solutions.eu',
  description:
    'Giant Solutions, the consultancy of George Gens, helps software teams adopt AI coding agents and keep review, security and QA in step.',
  googleSiteVerification: 'wn2ihCpSIKJsIl58YsrX4PKx_V_DIKyMev8H6XXQtas',
  // Contact until a booking tool is chosen.
  contactUrl: 'https://forms.gle/XyBhSGeKcRLdVjFg9',
};

export const book = {
  title: 'AI for Developers',
  // Set buyUrl once a sales platform is chosen; the book page switches from
  // "coming soon" to a buy button automatically.
  buyUrl: null as string | null,
  buyLabel: 'Get the book',
};

// Apps shipped under Giant Solutions. Keep this list to apps that are live in a store.
// Older apps' privacy/terms pages stay in public/ regardless (see AGENTS.md).
export const apps = [
  {
    name: 'Minimal Agenda',
    description:
      'A minimal, private agenda for the calendars already on your phone. No data collected, no ads. Built with Kotlin Multiplatform.',
    platform: 'Android',
    playStore: 'https://play.google.com/store/apps/details?id=eu.giant.agenda',
    source: 'https://github.com/renegens/MinimalAgenda',
  },
];
