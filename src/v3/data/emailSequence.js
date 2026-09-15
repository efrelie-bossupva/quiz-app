/**
 * GoHighLevel Automation & Nurture Email Sequence Definitions
 * 5 Emails over 9 Days
 */

export const EMAIL_SEQUENCE = [
  {
    day: 0,
    emailId: 'email_1',
    subject: 'Your result: {{quiz_result_band}}',
    purpose: 'Deliver full personalized result based on score.',
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName, bandTitle, resultSummary) => `
Hi ${firstName},

Here is your full personalized result from the Brand Diagnostic: ${bandTitle}.

${resultSummary}

If you are ready to review your brand positioning and see whether the structure underneath still fits your business, let's talk.

[BEGIN A CONVERSATION]

Best,
Heather
`
  },
  {
    day: 1,
    emailId: 'email_2',
    subject: 'The part nobody says out loud',
    purpose: "Name the fear directly: 'What if the business I built isn't working anymore?' Frame rebuilding as a normal response to a changed market.",
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName) => `
Hi ${firstName},

What if the business you built isn't working the way it used to?

Most founders hesitate to admit that out loud. They assume it means they failed, or that they made a mistake somewhere along the line.

It doesn't.

Markets change. Buying behavior shifts. AI alters client expectations. Rebuilding your positioning isn't an admission of failure — it's the normal, necessary response to an evolving market.

If you're feeling that shift, let's look at what changed.

[BEGIN A CONVERSATION]

Best,
Heather
`
  },
  {
    day: 3,
    emailId: 'email_3',
    subject: 'Twenty-three years in that house',
    purpose: "Tell Heather's house story with restrained, personal writing.",
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName) => `
Hi ${firstName},

I stood in front of my own house after twenty-three years in it and did not want to start over.

I didn't want to rebuild. I wanted my house back.

But it had burned down, and wanting it back wasn't one of the options.

So you rebuild. On the same ground. For the business you actually run now. For a market that exists now. That's the whole job. And it's the only thing that works.

[BEGIN A CONVERSATION]

Heather
`
  },
  {
    day: 5,
    emailId: 'email_4',
    subject: "Why more marketing didn't fix it",
    purpose: 'Explain that marketing amplifies underlying structure. Reference Q7 website hesitation.',
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName) => `
Hi ${firstName},

Marketing amplifies the structure underneath it.

If your positioning is outdated or your message is unclear, spending more money on marketing simply sends more people to the exact same problem.

If you hesitate before sending someone to your own website, more traffic isn't the first problem to solve. Your website is supposed to make the conversation easier — not be something you have to overcome.

Let's fix the structure first.

[BEGIN A CONVERSATION]

Best,
Heather
`
  },
  {
    day: 9,
    emailId: 'email_5',
    subject: 'What a rebuild actually looks like',
    purpose: "Explain Heather's 3 engagement levels (STANDOUT, STANDALONE, UNMISTAKABLE) without pricing.",
    cta: 'BEGIN A CONVERSATION',
    getContent: (firstName) => `
Hi ${firstName},

When clients work with me to rebuild their brand foundation, it takes one of three forms:

1. STANDOUT — I rebuild the strategy and give you clear direction. You or your team execute it.
2. STANDALONE — I rebuild the strategy, and my team builds the new brand and presence. Your team takes over from there.
3. UNMISTAKABLE — We rebuild it, my team builds it, and we run the marketing engine with you.

If you'd like to see which approach fits where you are right now, let's connect.

[BEGIN A CONVERSATION]

Best,
Heather
`
  }
];

export const GHL_AUTOMATION_RULES = {
  onSubmission: {
    STRUCTURALLY_SOUND: {
      scoreRange: '0–6',
      tag: 'quiz-brand-structurally-sound',
      workflow: [
        'Save tag "quiz-brand-structurally-sound" to quiz_tag field',
        'Send initial result email',
        'Add to the standard follow-up sequence',
        'If they do not book: Move to Heather\'s monthly email list'
      ]
    },
    YOU_SMELL_SMOKE: {
      scoreRange: '7–14',
      tag: 'quiz-brand-smell-smoke',
      workflow: [
        'Save tag "quiz-brand-smell-smoke" to quiz_tag field',
        'Send initial result email',
        'Add to follow-up sequence (Primary CTA: BEGIN A CONVERSATION)',
        'If they book: Remove from quiz nurture sequence'
      ]
    },
    ITS_ALREADY_BURNED: {
      scoreRange: '15–21',
      tag: 'quiz-brand-already-burned',
      workflow: [
        'Save tag "quiz-brand-already-burned" to quiz_tag field',
        'Send initial result email',
        'Add to follow-up sequence (Primary CTA: BEGIN A CONVERSATION)',
        'If they book: Immediately remove from nurture sequence',
        'If they complete the sequence and DO NOT book: Create a task in GoHighLevel for Heather to personally follow up (human outreach, not automated 6th email)'
      ]
    }
  },
  onBooking: {
    rule: 'Immediately exit/remove contact from quiz nurture sequence upon booking.'
  }
};
