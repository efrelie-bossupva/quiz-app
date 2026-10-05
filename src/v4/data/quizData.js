export const quizMeta = {
  title: "Beyond Hustle",
  subtitle: "Freedom Stage Quiz",
  heroSubtitle: "What Stage Is Your Business In?",
  metaText: "9 questions. 4 minutes.",
  description: "This quiz will reveal your business stage, where you're stuck, and what needs to change.",
  logoUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/763Ziu1WjXtalReMr0YY/media/698ac601a41b87882e36368e.png",
  heroImageUrl: "https://assets.cdn.filesafe.space/bKVt6IBff7ilk4bzve8Q/media/6a0f16a1a33d272edaa8e398.png"
};

export const questions = [
  {
    id: 1,
    category: "FRONT END",
    subCategory: "Reactivate",
    question: "When did the people who already know you — past clients, old leads, people who said \"not right now\" — last hear from you?",
    options: [
      { key: "a", label: "They're on a schedule. It goes out whether I'm busy or not.", score: 3 },
      { key: "b", label: "Every month or two, when I think of it.", score: 2 },
      { key: "c", label: "When I need something.", score: 1 },
      { key: "d", label: "I couldn't tell you. I'd have to look.", score: 0 }
    ]
  },
  {
    id: 2,
    category: "FRONT END",
    subCategory: "Borrow",
    question: "In the last 30 days, how many times have you been in front of someone else's audience — a podcast, a panel, a stage, a newsletter, a partner's group?",
    options: [
      { key: "a", label: "Three or more, and they were booked in advance.", score: 3 },
      { key: "b", label: "Once or twice, because someone asked me.", score: 2 },
      { key: "c", label: "None, but I've been meaning to.", score: 1 },
      { key: "d", label: "I don't really do that.", score: 0 }
    ]
  },
  {
    id: 3,
    category: "FRONT END",
    subCategory: "Known-for",
    question: "Can you finish this sentence in ten words or less: \"People come to me when they need ___\"?",
    options: [
      { key: "a", label: "Yes, and I say it the same way every time.", score: 3 },
      { key: "b", label: "Yes, but it comes out differently depending on who's asking.", score: 2 },
      { key: "c", label: "Sort of. It depends what they need.", score: 1 },
      { key: "d", label: "Not really. I do a lot of things.", score: 0 }
    ]
  },
  {
    id: 4,
    category: "FRONT END",
    subCategory: "Known-for (verified)",
    question: "If I asked your last five clients what you're known for, how many would say the same thing?",
    options: [
      { key: "a", label: "All five.", score: 3 },
      { key: "b", label: "Three or four.", score: 2 },
      { key: "c", label: "Two.", score: 1 },
      { key: "d", label: "I honestly don't know.", score: 0 }
    ]
  },
  {
    id: 5,
    category: "FRONT END",
    subCategory: "Deal flow",
    question: "Where did your last three clients actually come from?",
    options: [
      { key: "a", label: "I can name the exact source for all three, and I could repeat it.", score: 3 },
      { key: "b", label: "I know roughly — mostly referrals.", score: 2 },
      { key: "c", label: "They found me. I'm not sure how.", score: 1 },
      { key: "d", label: "Different every time. It's unpredictable.", score: 0 }
    ]
  },
  {
    id: 6,
    category: "STRUCTURAL",
    subCategory: "Transferability",
    question: "If you were completely unreachable for 30 days, what happens to your business?",
    options: [
      { key: "a", label: "It runs. Someone else has the instructions and the access.", score: 3 },
      { key: "b", label: "It runs, but slower, and a few things would wait for me.", score: 2 },
      { key: "c", label: "It holds for a week or two, then it stalls.", score: 1 },
      { key: "d", label: "It stops. Everything comes through me.", score: 0 }
    ]
  },
  {
    id: 7,
    category: "STRUCTURAL",
    subCategory: "Recurrence",
    question: "How much of what you'll earn next month is already committed — retainers, subscriptions, contracts — before you sell anything new?",
    options: [
      { key: "a", label: "Most of it. I know roughly what next month looks like.", score: 3 },
      { key: "b", label: "About half.", score: 2 },
      { key: "c", label: "A little. Most months I start close to zero.", score: 1 },
      { key: "d", label: "None. Every month I start over.", score: 0 }
    ]
  },
  {
    id: 8,
    category: "STRUCTURAL",
    subCategory: "Leverage",
    question: "When you want to earn more, what do you actually do?",
    options: [
      { key: "a", label: "I sell something that doesn't cost me more hours to deliver.", score: 3 },
      { key: "b", label: "I raise my prices.", score: 2 },
      { key: "c", label: "I take on more clients and work more hours.", score: 1 },
      { key: "d", label: "I work more hours at the same rate.", score: 0 }
    ]
  },
  {
    id: 9,
    category: "STRUCTURAL",
    subCategory: "Ownership",
    question: "What would someone be buying if they bought your business tomorrow?",
    options: [
      { key: "a", label: "Contracts, systems, a team, and a client list that stays after I leave.", score: 3 },
      { key: "b", label: "A client list and some processes, but they'd need me for a while.", score: 2 },
      { key: "c", label: "Mostly my relationships. It would be hard to explain what else.", score: 1 },
      { key: "d", label: "Me. There isn't anything to sell without me.", score: 0 }
    ]
  }
];

export const archetypes = {
  hustler: {
    name: "Hustler",
    headline: "You're a Hustler. The business is you, and right now that's the whole ceiling."
  },
  operator: {
    name: "Operator",
    headline: "You're an Operator. You've built something real — and it still can't run without you."
  },
  builder: {
    name: "Builder",
    headline: "You're a Builder. The structure is forming. The gap now is what happens when you step back."
  },
  owner: {
    name: "Owner",
    headline: "You're an Owner. You've built the thing most people only talk about."
  }
};

export const engineDetails = {
  KNOWN_FOR: {
    title: "Known-For",
    text: "Your known-for is the gap. You can describe what you do — your clients describe it differently. Until the market says one thing about you, nothing downstream compounds: ads accelerate the confusion, referrals stay random, and every conversation starts from scratch."
  },
  REACTIVATE: {
    title: "Reactivate",
    text: "Reactivation is your gap. The people most likely to buy from you already know you — and they only hear from you when you remember. That is not a list problem. It is the absence of a schedule somebody owns."
  },
  BORROW: {
    title: "Borrow",
    text: "Borrowed trust is your gap. You're building on your own audience only, which means your growth is capped at the speed you can grow it. The women ahead of you are in front of somebody else's room every week, on purpose, booked in advance."
  }
};

export function calculateQuizResults(answers) {
  // 1. Archetype Score (from Q6, Q7, Q8, Q9 only - max 12 pts)
  const q6Score = answers[6]?.score ?? 0;
  const q7Score = answers[7]?.score ?? 0;
  const q8Score = answers[8]?.score ?? 0;
  const q9Score = answers[9]?.score ?? 0;
  const structuralScore = q6Score + q7Score + q8Score + q9Score;

  let archetype;
  if (structuralScore <= 3) {
    archetype = archetypes.hustler;
  } else if (structuralScore <= 6) {
    archetype = archetypes.operator;
  } else if (structuralScore <= 9) {
    archetype = archetypes.builder;
  } else {
    archetype = archetypes.owner;
  }

  // 2. Engine Scores (Q1 - Q4)
  const reactivateScore = answers[1]?.score ?? 0; // max 3
  const borrowScore = answers[2]?.score ?? 0;     // max 3
  const knownForScore = (answers[3]?.score ?? 0) + (answers[4]?.score ?? 0); // max 6

  // Ratios out of 1.0 to find lowest engine score
  const knownForRatio = knownForScore / 6;
  const reactivateRatio = reactivateScore / 3;
  const borrowRatio = borrowScore / 3;

  // Tie-breaker rule: Known-For beats Reactivate beats Borrow (i.e. Known-For is highest priority if tied)
  let weakestEngineKey = "KNOWN_FOR";
  let minRatio = knownForRatio;

  if (reactivateRatio < minRatio) {
    minRatio = reactivateRatio;
    weakestEngineKey = "REACTIVATE";
  }

  if (borrowRatio < minRatio) {
    minRatio = borrowRatio;
    weakestEngineKey = "BORROW";
  }

  const weakestEngine = engineDetails[weakestEngineKey];

  // 3. Deal flow conditional line (Q5 answered c or d)
  const q5Key = answers[5]?.key;
  const showDealFlowLine = q5Key === 'c' || q5Key === 'd';

  return {
    archetype,
    structuralScore,
    weakestEngine,
    showDealFlowLine
  };
}
