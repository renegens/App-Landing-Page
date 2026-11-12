// Table of contents and pull quotes for the book teaser.
// Source: ~/Work/AI Book/Chapter Titles.md and Book Draft.md. Update by hand.

export const parts = [
  {
    title: 'Why should I care?',
    chapters: [
      'I change my mind about AI every three months',
      'Will AI take my job, or give me more work?',
    ],
  },
  {
    title: 'How do I work with one agent?',
    chapters: [
      'What is an agent, and how does it actually work?',
      'What is a harness, and which one should I use?',
      "I want to use AI, but I don't know where to start",
      'The agent started coding before I knew what I wanted',
      'What is an AGENTS.md, and what makes a good one?',
      'The agent re-reads my whole project for every task',
      'What is a skill, and do I need plugins and MCPs?',
    ],
  },
  {
    title: 'How do I know the agent did it right?',
    chapters: [
      "I can't tell whether the agent's code is correct",
      'My agent keeps writing junk tests',
      'How do I assign reviewers to agent work?',
    ],
  },
  {
    title: 'How do I let it run further?',
    chapters: [
      'How do I stop an autonomous agent from doing damage?',
      'My token bill is too high and the agent is still slow',
      'I have ten agents and no idea what any of them is doing',
      'How do I keep agents running while I sleep?',
    ],
  },
  {
    title: 'How do I take this beyond my own code?',
    chapters: [
      "My company can't decide whether to allow AI",
      'How can I make money with these skills?',
    ],
  },
];

// Quotes copied word for word from the draft.
export const quotes = [
  {
    text: 'Multiply a clean codebase with good tests and you get a lot of good software fast. Multiply a mess and you get a bigger mess, faster.',
    chapter: 1,
  },
  {
    text: "Files can be re-read. Chat history can't.",
    chapter: 3,
  },
  {
    text: 'Trust is earned per workflow, not granted all at once.',
    chapter: 5,
  },
  {
    text: 'Ten agents producing work one person must review is inventory piled in front of the slow machine.',
    chapter: 15,
  },
];
