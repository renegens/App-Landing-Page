// The three consulting offers. Used on the home page (short) and /services (full).

export const offers = [
  {
    id: 'assessment',
    name: 'AI Opportunity Assessment',
    summary:
      'A 60 to 90 minute interview with your team and a written report: where AI saves real time, where it does not, and the first workflow to change.',
    length: 'One session plus a written report',
    youGet: [
      'An interview with the people who do the work',
      'A map of where work waits today: review, testing, hand-offs',
      'A written report with the first workflow to automate and why',
      'A short list of what not to automate yet',
    ],
    fitIf: 'You want to use AI but do not know where to start, or a first try did not stick.',
  },
  {
    id: 'setup',
    name: 'Team setup sprint',
    summary:
      'One to two weeks setting up coding agents in your codebase, with the checks that make their work safe to merge.',
    length: '1 to 2 weeks',
    youGet: [
      'An AGENTS.md that tells any agent how your project works',
      'Skills for the workflows your team repeats',
      'CI checks that catch agent mistakes before review does',
      'Review rules: who checks agent work and what evidence comes back',
      'A one-page AI policy: tools, data, and what stays human',
    ],
    fitIf: 'Your developers already use AI, but each in their own way, and review is starting to pile up.',
  },
  {
    id: 'ongoing',
    name: 'Ongoing support',
    summary:
      'Two calls a month. Each one turns one manual workflow into an automation, with a shared log of what changed and the time it saved.',
    length: 'Monthly, cancel any time',
    youGet: [
      'Two working sessions a month on your screen and your tools',
      'One workflow audited, trimmed and automated per session',
      'A shared log of every change and the time it saved',
      'Questions answered between calls',
    ],
    fitIf: 'You have the basics in place and want steady progress without hiring.',
  },
];
