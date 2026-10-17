export const quizMeta = {
  title: "Remodel Readiness Diagnostic",
  academyName: "Smart Tools Construction Academy",
  subtitle: "Smart Tools Construction Academy",
  badge: "REMODEL READINESS DIAGNOSTIC",
  heroTitle: "Are You Really Ready to Start Your",
  heroTitleAccent: "Remodel?",
  heroSubtitle: "Discover the hidden gaps in your remodeling plan before they turn into expensive mistakes.",
  ctaText: "Start the Diagnostic",
  metaInfo: "15 questions, about 4 minutes.",
  keyboardHint: "Keyboard: press 1-4 to choose an answer, Enter to continue.",
  configWebhookUrl: ""
};

export const sections = [
  { id: 1, name: "Your remodeling journey", label: "YOUR REMODELING JOURNEY", questions: [1, 2, 3] },
  { id: 2, name: "Budget reality check", label: "THE BUDGET REALITY CHECK", questions: [4, 5, 6] },
  { id: 3, name: "Contractor and project risks", label: "CONTRACTOR AND PROJECT RISKS", questions: [7, 8, 9] },
  { id: 4, name: "Planning and execution", label: "PLANNING AND EXECUTION", questions: [10, 11, 12] },
  { id: 5, name: "Confidence and readiness", label: "CONFIDENCE AND READINESS", questions: [13, 14, 15] }
];

export const questions = [
  {
    id: 1,
    sectionId: 1,
    sectionName: "Your remodeling journey",
    sectionLabel: "YOUR REMODELING JOURNEY",
    question: "Where are you in your remodeling journey?",
    subtext: "There's no wrong stage. This sets the context for the rest of your answers.",
    isScored: false,
    options: [
      { key: "a", label: "I'm just exploring ideas", score: 0 },
      { key: "b", label: "I know what I want but haven't planned the details", score: 1 },
      { key: "c", label: "I'm budgeting and talking to contractors", score: 2 },
      { key: "d", label: "I'm preparing to start construction", score: 3 }
    ]
  },
  {
    id: 2,
    sectionId: 1,
    sectionName: "Your remodeling journey",
    sectionLabel: "YOUR REMODELING JOURNEY",
    question: "What best describes your remodeling experience?",
    subtext: "Experience changes which risks matter most, not whether you can succeed.",
    isScored: false,
    options: [
      { key: "a", label: "This is my first major remodel", score: 0 },
      { key: "b", label: "I've completed a few small DIY projects", score: 1 },
      { key: "c", label: "I've managed or participated in a remodel before", score: 2 },
      { key: "d", label: "I'm experienced with remodeling projects", score: 3 }
    ]
  },
  {
    id: 3,
    sectionId: 1,
    sectionName: "Your remodeling journey",
    sectionLabel: "YOUR REMODELING JOURNEY",
    category: "planning",
    question: "How clear is your vision for the finished project?",
    subtext: "Contractors price, schedule, and build from scope. A vague scope is a frequent source of disputes and change orders.",
    isScored: true,
    options: [
      { key: "a", label: "I have a general idea", score: 0 },
      { key: "b", label: "I know what I want but haven't defined everything", score: 1 },
      { key: "c", label: "I have a fairly detailed plan", score: 2 },
      { key: "d", label: "I have a clear, documented scope of work", score: 3 }
    ]
  },
  {
    id: 4,
    sectionId: 2,
    sectionName: "Budget reality check",
    sectionLabel: "THE BUDGET REALITY CHECK",
    category: "budget",
    question: "How confident are you in your remodeling budget?",
    subtext: "A budget is only as reliable as the costs behind it.",
    isScored: true,
    options: [
      { key: "a", label: "I haven't established a budget", score: 0 },
      { key: "b", label: "I have a rough number in mind", score: 1 },
      { key: "c", label: "I've researched costs and received some estimates", score: 2 },
      { key: "d", label: "I have a detailed budget with contingency funds", score: 3 }
    ]
  },
  {
    id: 5,
    sectionId: 2,
    sectionName: "Budget reality check",
    sectionLabel: "THE BUDGET REALITY CHECK",
    category: "budget",
    question: "What would happen if your remodel cost 20% more than expected?",
    subtext: "Remodels regularly uncover conditions no one could see until walls and floors were opened.",
    isScored: true,
    options: [
      { key: "a", label: "I wouldn't know how to cover it", score: 0 },
      { key: "b", label: "I'd have to pause or reduce the project", score: 1 },
      { key: "c", label: "I could adjust, but it would be stressful", score: 2 },
      { key: "d", label: "I have contingency funds and a plan for changes", score: 3 }
    ]
  },
  {
    id: 6,
    sectionId: 2,
    sectionName: "Budget reality check",
    sectionLabel: "THE BUDGET REALITY CHECK",
    category: "budget",
    question: "How well do you understand what's included in your contractor estimates?",
    subtext: "Two estimates with similar totals can describe very different projects.",
    isScored: true,
    options: [
      { key: "a", label: "I don't know what should be included", score: 0 },
      { key: "b", label: "I mostly compare the total prices", score: 1 },
      { key: "c", label: "I review the major items and costs", score: 2 },
      { key: "d", label: "I compare scope, exclusions, allowances, and payment terms", score: 3 }
    ]
  },
  {
    id: 7,
    sectionId: 3,
    sectionName: "Contractor and project risks",
    sectionLabel: "CONTRACTOR AND PROJECT RISKS",
    category: "contractor",
    question: "How would you choose the right contractor?",
    subtext: "Who you hire affects cost, quality, schedule, and how problems get resolved.",
    isScored: true,
    options: [
      { key: "a", label: "Mostly based on price", score: 0 },
      { key: "b", label: "Based on recommendations and reviews", score: 1 },
      { key: "c", label: "By comparing experience, references, and estimates", score: 2 },
      { key: "d", label: "Through a structured screening and bid-review process", score: 3 }
    ]
  },
  {
    id: 8,
    sectionId: 3,
    sectionName: "Contractor and project risks",
    sectionLabel: "CONTRACTOR AND PROJECT RISKS",
    category: "contractor",
    question: "What would you do if a contractor requested additional money for unexpected work?",
    subtext: "Change requests are normal. How they're evaluated and documented is what protects you.",
    isScored: true,
    options: [
      { key: "a", label: "I'd probably approve it to keep the project moving", score: 0 },
      { key: "b", label: "I'd ask why but wouldn't know how to evaluate it", score: 1 },
      { key: "c", label: "I'd request a breakdown and explanation", score: 2 },
      { key: "d", label: "I'd review the scope, documentation, and written change order before approving", score: 3 }
    ]
  },
  {
    id: 9,
    sectionId: 3,
    sectionName: "Contractor and project risks",
    sectionLabel: "CONTRACTOR AND PROJECT RISKS",
    category: "contractor",
    question: "How prepared are you to manage contractor communication and expectations?",
    subtext: "Many contractor conflicts begin as unclear expectations.",
    isScored: true,
    options: [
      { key: "a", label: "I expect the contractor to handle everything", score: 0 },
      { key: "b", label: "I'll check in when something seems wrong", score: 1 },
      { key: "c", label: "I plan to communicate regularly", score: 2 },
      { key: "d", label: "I have a clear process for updates, decisions, and documentation", score: 3 }
    ]
  },
  {
    id: 10,
    sectionId: 4,
    sectionName: "Planning and execution",
    sectionLabel: "PLANNING AND EXECUTION",
    category: "planning",
    question: "How detailed is your remodeling project plan?",
    subtext: "The order work happens in drives cost, schedule, and how many decisions you'll make under pressure.",
    isScored: true,
    options: [
      { key: "a", label: "I haven't created one", score: 0 },
      { key: "b", label: "I have a general list of things to do", score: 1 },
      { key: "c", label: "I have a basic schedule and task list", score: 2 },
      { key: "d", label: "I have a documented scope, sequence, and project schedule", score: 3 }
    ]
  },
  {
    id: 11,
    sectionId: 4,
    sectionName: "Planning and execution",
    sectionLabel: "PLANNING AND EXECUTION",
    category: "planning",
    question: "How prepared are you for delays or unexpected problems?",
    subtext: "Material lead times, inspections, and hidden conditions can all move a schedule.",
    isScored: true,
    options: [
      { key: "a", label: "I expect things to go according to plan", score: 0 },
      { key: "b", label: "I know problems happen but don't have a backup plan", score: 1 },
      { key: "c", label: "I've considered some possible delays", score: 2 },
      { key: "d", label: "I've built flexibility and contingency plans into the project", score: 3 }
    ]
  },
  {
    id: 12,
    sectionId: 4,
    sectionName: "Planning and execution",
    sectionLabel: "PLANNING AND EXECUTION",
    category: "permits",
    question: "How familiar are you with permits, inspections, and local building requirements?",
    subtext: "Requirements vary by location and type of work. Who is responsible should be confirmed, not assumed.",
    isScored: true,
    options: [
      { key: "a", label: "I haven't looked into them", score: 0 },
      { key: "b", label: "I assume my contractor will handle them", score: 1 },
      { key: "c", label: "I know some requirements but need clarification", score: 2 },
      { key: "d", label: "I've verified applicable requirements and responsibilities", score: 3 }
    ]
  },
  {
    id: 13,
    sectionId: 5,
    sectionName: "Confidence and readiness",
    sectionLabel: "CONFIDENCE AND READINESS",
    question: "If construction started tomorrow, how confident would you feel?",
    subtext: "Answer for how you'd actually feel, not how you'd like to feel.",
    isScored: false,
    options: [
      { key: "a", label: "Overwhelmed and unprepared", score: 0 },
      { key: "b", label: "Excited but worried about what I'm missing", score: 1 },
      { key: "c", label: "Mostly confident, with a few concerns", score: 2 },
      { key: "d", label: "Prepared, with key details and responsibilities confirmed", score: 3 }
    ]
  },
  {
    id: 14,
    sectionId: 5,
    sectionName: "Confidence and readiness",
    sectionLabel: "CONFIDENCE AND READINESS",
    question: "What concerns you most about your remodel?",
    subtext: "This shapes how your report is framed.",
    isScored: false,
    options: [
      { key: "a", label: "Spending more than I can afford", score: 0 },
      { key: "b", label: "Hiring the wrong contractor", score: 1 },
      { key: "c", label: "Delays, mistakes, and project confusion", score: 2 },
      { key: "d", label: "Making sure everything is properly planned and executed", score: 3 }
    ]
  },
  {
    id: 15,
    sectionId: 5,
    sectionName: "Confidence and readiness",
    sectionLabel: "CONFIDENCE AND READINESS",
    question: "What would help you feel most confident moving forward?",
    subtext: "This helps match your recommendation to the kind of help you want.",
    isScored: false,
    options: [
      { key: "a", label: "Understanding where to begin", score: 0 },
      { key: "b", label: "Learning how to budget and avoid costly mistakes", score: 1 },
      { key: "c", label: "Having a step-by-step remodeling roadmap", score: 2 },
      { key: "d", label: "Getting expert feedback on my specific project", score: 3 }
    ]
  }
];

export const blindSpotsData = {
  budget: {
    key: "budget",
    title: "Budget and cost control",
    headline: "Your Budget May Be More Vulnerable Than You Think.",
    description: "Your answers suggest you may not have fully accounted for unexpected expenses, estimate details, or changes during construction.",
    actions: [
      "Review the complete project scope",
      "Compare itemized estimates",
      "Establish appropriate contingency funds"
    ],
    costRisk: "Underestimating the true project budget",
    neededChange: "Establish a realistic budget"
  },
  contractor: {
    key: "contractor",
    title: "Contractor selection and communication",
    headline: "The Wrong Contractor Decision Can Affect Your Entire Project.",
    description: "Your answers suggest you may need a stronger process for evaluating bids, documenting agreements, and managing changes.",
    actions: [
      "Compare contractor qualifications",
      "Review scope and exclusions",
      "Document decisions and change orders"
    ],
    costRisk: "Misunderstanding contractor estimates",
    neededChange: "Understand common mistakes before hiring"
  },
  planning: {
    key: "planning",
    title: "Project planning and scheduling",
    headline: "Project Delays and Hidden Work Can Spiral.",
    description: "Your answers indicate the sequence of work and trade coordination may not yet be locked down.",
    actions: [
      "Create a detailed work breakdown and schedule",
      "Confirm material lead times in advance",
      "Align contractor milestones with progress payments"
    ],
    costRisk: "Making expensive decisions too late",
    neededChange: "Define your project scope and sequence"
  },
  permits: {
    key: "permits",
    title: "Permits, inspections and oversight",
    headline: "Code and Permitting Gaps Create Costly Redos.",
    description: "Unverified permit responsibilities and lack of formal inspection milestones put the homeowner at serious legal and financial risk.",
    actions: [
      "Contact local building department to verify required permits",
      "Confirm in writing who pulls and pays for each permit",
      "Require signed inspection sign-offs prior to releasing progress payments"
    ],
    costRisk: "Unpermitted work issues and municipal penalties",
    neededChange: "Verify municipal permit responsibilities"
  }
};

// ---------------------------------------------------------------
// Result links (doc tab: "Link results")
// ---------------------------------------------------------------
export const offerLinks = {
  free: "https://smarttoolsconstructionacademy.com/free-guide",
  starter: "https://smarttoolsconstructionacademy.com/diy-starter-pack",
  course: "https://smarttoolsconstructionacademy.com/course",
  coach: "https://coach.smarttoolsconstructionacademy.com/"
};

// ---------------------------------------------------------------
// Readiness profiles (doc tab: "QUIZ SCORING" > READINESS PROFILES)
// ---------------------------------------------------------------
const profiles = [
  {
    id: "unprepared",
    name: "The Unprepared Remodeler",
    tier: "Unprepared",
    tierIndex: 0,
    ctaLabel: "Get My Free Remodeling Guide",
    ctaUrl: offerLinks.free,
    headline: "You Have the Vision. But Not Yet the Plan.",
    description: [
      "You're excited about improving your home, but several important pieces of your remodeling plan are still missing.",
      "Right now, you're relying more on ideas and assumptions than a clear process.",
      "That doesn't mean you can't have a successful remodel. It means the smartest thing you can do is prepare before committing significant money."
    ],
    costs: [
      { text: "Underestimating the true project budget", cat: "budget" },
      { text: "Making expensive decisions too late", cat: "planning" },
      { text: "Misunderstanding contractor estimates", cat: "contractor" },
      { text: "Starting work before key details are settled", cat: "permits" }
    ],
    changes: [
      { text: "Define your project scope", cat: "planning" },
      { text: "Establish a realistic budget", cat: "budget" },
      { text: "Learn the remodeling process", cat: "permits" },
      { text: "Understand common mistakes before hiring", cat: "contractor" }
    ]
  },
  {
    id: "at-risk",
    name: "The At-Risk Planner",
    tier: "At Risk",
    tierIndex: 1,
    ctaLabel: "Start With the DIY Starter Pack — $27",
    ctaUrl: offerLinks.starter,
    headline: "You're Getting Started. But Costly Gaps Remain.",
    description: [
      "You've taken the first steps and have good ideas in place, but parts of your plan are still exposed.",
      "Gaps in your budget, contractor process, or project plan can turn into cost overruns, misunderstandings, and delays.",
      "Closing those gaps now is far cheaper than fixing them once construction begins."
    ],
    costs: [
      { text: "Budget overruns", cat: "budget" },
      { text: "Unexpected change orders", cat: "contractor" },
      { text: "Contractor misunderstandings", cat: "permits" },
      { text: "Delays caused by incomplete planning", cat: "planning" }
    ],
    changes: [
      { text: "Strengthen your budgeting process", cat: "budget" },
      { text: "Learn to evaluate contractor estimates", cat: "contractor" },
      { text: "Document your project scope", cat: "planning" },
      { text: "Build a more reliable project plan", cat: "permits" }
    ]
  },
  {
    id: "almost-ready",
    name: "The Almost-Ready Remodeler",
    tier: "Almost Ready",
    tierIndex: 2,
    ctaLabel: "Explore the DIY Remodel Roadmap — $497",
    ctaUrl: offerLinks.course,
    headline: "You're Close. A Few Details Could Make or Break It.",
    description: [
      "You understand the remodeling process better than most homeowners and you have a solid foundation in place.",
      "A few remaining details could still cause avoidable problems once work begins.",
      "Finalizing them now will help you start with real confidence."
    ],
    costs: [
      { text: "Missed planning details", cat: "planning" },
      { text: "Confusion between project phases", cat: "permits" },
      { text: "Last-minute decisions", cat: "contractor" },
      { text: "Preventable scheduling and budget issues", cat: "budget" }
    ],
    changes: [
      { text: "Finalize your scope and budget", cat: "budget" },
      { text: "Establish a clear project sequence", cat: "planning" },
      { text: "Understand contractor coordination", cat: "contractor" },
      { text: "Prepare for changes before they happen", cat: "permits" }
    ]
  },
  {
    id: "confident-planner",
    name: "The Confident Remodel Planner",
    tier: "Confident Planner",
    tierIndex: 3,
    ctaLabel: "Explore Project Advisory",
    ctaUrl: offerLinks.coach,
    headline: "You're Well Prepared. Now Pressure-Test the Plan.",
    description: [
      "Your answers show a clear scope, a realistic budget, and a disciplined approach to contractors and planning.",
      "Even well-prepared remodelers can miss project-specific issues that general checklists don't cover.",
      "An independent review is the best way to confirm nothing important slipped through."
    ],
    costs: [
      { text: "Overlooking project-specific issues", cat: "permits" },
      { text: "Missing details in contractor proposals", cat: "contractor" },
      { text: "Underestimating complicated work", cat: "planning" },
      { text: "Making decisions without independent review", cat: "budget" }
    ],
    changes: [
      { text: "Review your complete project plan", cat: "planning" },
      { text: "Validate estimates and assumptions", cat: "budget" },
      { text: "Confirm permits and responsibilities", cat: "permits" },
      { text: "Identify remaining project risks", cat: "contractor" }
    ]
  }
];

// ---------------------------------------------------------------
// Offer catalogue (doc tab: "QUIZ SCORING" > RECOMMENDED OFFER LOGIC)
// ---------------------------------------------------------------
const offers = {
  free: {
    title: "Free Remodeling Guide",
    body: "Start with the free guide to understand the remodeling process, the most common homeowner mistakes, and what to settle before you spend money.",
    btnText: "Get My Free Remodeling Guide",
    url: offerLinks.free
  },
  starter: {
    title: "DIY Starter Pack — $27",
    body: "A practical starter kit to tighten your budget, compare contractor estimates, and document your scope before construction starts.",
    btnText: "Start With the DIY Starter Pack — $27",
    url: offerLinks.starter
  },
  course: {
    title: "DIY Remodel Roadmap — $497",
    body: "A step-by-step roadmap that takes you from plan to finished project, covering sequencing, contractor coordination, and managing change.",
    btnText: "Explore the DIY Remodel Roadmap — $497",
    url: offerLinks.course
  },
  advisory: {
    title: "Project Advisory",
    body: "Get expert feedback on your specific project, estimates, and plan before you commit.",
    btnText: "Explore Project Advisory",
    url: offerLinks.coach
  }
};

// Q15 index: 0 = where to begin, 1 = budget, 2 = roadmap, 3 = expert feedback
function getOfferKeys(profileIndex, q15Index) {
  const roadmap = q15Index === 2;
  const expert = q15Index === 3;
  switch (profileIndex) {
    case 0:
      return { primary: "free", also: roadmap || expert ? "starter" : null };
    case 1:
      return { primary: "starter", also: roadmap ? "course" : null };
    case 2:
      if (expert) return { primary: "advisory", also: "course" };
      if (roadmap) return { primary: "course", also: null };
      return { primary: "course", also: "starter" };
    default:
      return { primary: "advisory", also: null };
  }
}

// ---------------------------------------------------------------
// Category definitions (doc tab: "QUIZ SCORING" > CATEGORY RISK INDICATORS)
// Permits and oversight = (Q12 x 2) + Q9, max 9. Q9 also counts toward Contractor.
// ---------------------------------------------------------------
const CATEGORY_PRIORITY = ["budget", "contractor", "planning", "permits"];

const categoryNames = {
  budget: "Budget readiness",
  contractor: "Contractor readiness",
  planning: "Project planning",
  permits: "Permits and oversight"
};

const categoryAreaNames = {
  budget: "Budget and cost control",
  contractor: "Contractor selection and communication",
  planning: "Project planning and scheduling",
  permits: "Permits, inspections and oversight"
};

const concernCategory = ["budget", "contractor", "planning", "permits"]; // Q14 A-D

const concernLabels = [
  "spending more than you can afford",
  "hiring the wrong contractor",
  "delays, mistakes, and project confusion",
  "making sure everything is properly planned and executed"
];

function getBarLabel(pct) {
  if (pct >= 75) return "Strong";
  if (pct >= 50) return "Developing";
  if (pct >= 25) return "Needs work";
  return "High risk";
}

export function calculateQuizResults(answers) {
  const s = (id) => answers[id]?.score ?? 0;

  // Only Q3-Q12 count toward the readiness score (max 30)
  const totalScore = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((sum, id) => sum + s(id), 0);
  const percentage = Math.round((totalScore / 30) * 100);

  // Profile: 0-8 / 9-16 / 17-24 / 25-30
  const profileIndex = totalScore <= 8 ? 0 : totalScore <= 16 ? 1 : totalScore <= 24 ? 2 : 3;
  const profile = profiles[profileIndex];

  const points = {
    budget: s(4) + s(5) + s(6),
    contractor: s(7) + s(8) + s(9),
    planning: s(3) + s(10) + s(11),
    permits: s(12) * 2 + s(9)
  };

  const categories = CATEGORY_PRIORITY.map((key) => {
    const pct = Math.round((points[key] / 9) * 100);
    return {
      key,
      name: categoryNames[key],
      areaName: categoryAreaNames[key],
      score: points[key],
      max: 9,
      pct,
      risk: getBarLabel(pct)
    };
  });

  // Strongest area = highest %, "Evenly matched" if all equal
  const maxPct = Math.max(...categories.map((c) => c.pct));
  const minPct = Math.min(...categories.map((c) => c.pct));
  const allEqual = maxPct === minPct;
  const strongest = categories.find((c) => c.pct === maxPct);

  const strongestAreaText = allEqual ? "Evenly matched" : strongest.name;
  const strongestDesc = allEqual
    ? `All four areas scored ${maxPct}%. No single area is carrying the others.`
    : `Scored highest at ${strongest.pct}%.`;

  // Biggest risk / blind spot = lowest %, ties show top two in priority order
  const lowestCats = categories.filter((c) => c.pct === minPct);
  const blindSpotCats = lowestCats.slice(0, 2);
  const isTieForLowest = blindSpotCats.length > 1;
  const lowIsStrong = minPct >= 75;

  const biggestRiskText = `${blindSpotCats.map((c) => c.name).join(" and ")}, ${minPct}%`;
  const biggestRiskDesc = lowIsStrong
    ? "Your lowest area is still strong. Treat it as a place to double-check, not a warning."
    : blindSpotCats[0].key === "budget"
      ? "Your budget may not yet absorb surprises or estimate gaps."
      : blindSpotCats[0].key === "contractor"
        ? "Your contractor process may leave gaps in scope, comparison, or change control."
        : blindSpotCats[0].key === "planning"
          ? "Your plan may not yet cover sequence, schedule, or delays."
          : "Permit and inspection responsibilities may not be confirmed.";

  const blindSpotCards = blindSpotCats.map((c) => ({
    ...blindSpotsData[c.key],
    scorePct: c.pct
  }));

  const blindSpotSubtitle = lowIsStrong
    ? "Your lowest area is still strong. Treat this as a place to double-check, not a warning."
    : isTieForLowest
      ? "Two areas tied for lowest. Both deserve attention before you commit."
      : "The area where preparation gaps create the highest risk of delays and added cost.";

  // 3 of the 4 profile items, choosing items tied to the weakest categories first
  const rank = (cat) => categories.find((x) => x.key === cat).pct * 10 + CATEGORY_PRIORITY.indexOf(cat);
  const pick = (items) =>
    [...items]
      .sort((a, b) => rank(a.cat) - rank(b.cat))
      .slice(0, 3)
      .map((i) => ({ text: i.text, areaName: categoryAreaNames[i.cat] }));
  const costItems = pick(profile.costs);
  const changeItems = pick(profile.changes);

  // Personalized notes ("Reading your answers")
  const q1 = answers[1]?.score;
  const q2 = answers[2]?.score;
  const q13 = answers[13]?.score;
  const q14 = answers[14]?.score;
  const readingYourAnswers = [];

  if (q1 === 0) {
    readingYourAnswers.push("You're still exploring, so gaps are expected at this stage. Read this score as a map of what to work on before you commit money, not as a judgment of your project.");
  } else if (q1 === 3 && totalScore <= 16) {
    readingYourAnswers.push("You're preparing to start, so these gaps are more urgent. It is much cheaper to close them before work begins.");
  } else if (q1 === 2 && totalScore <= 16) {
    readingYourAnswers.push("You're budgeting and bidding, so these gaps are turning into commitments. Now is the right time to close them.");
  }

  if (q2 === 0) {
    readingYourAnswers.push("As a first major remodel, much of this process will be new. That's normal. The goal is to learn the expensive lessons from preparation rather than from the job site.");
  }

  if ((q13 === 2 || q13 === 3) && totalScore <= 16) {
    readingYourAnswers.push("There's a confidence gap: you feel more ready than your answers support. Confidence helps, but it is worth checking it against the details.");
  } else if ((q13 === 0 || q13 === 1) && totalScore >= 17) {
    readingYourAnswers.push("You're better prepared than you feel. Your answers show a stronger foundation than your confidence suggests.");
  }

  if (q14 !== undefined) {
    const concern = concernCategory[q14];
    if (lowestCats.some((c) => c.key === concern)) {
      readingYourAnswers.push(`You said your biggest concern is ${concernLabels[q14]}. Your answers agree: ${categoryNames[concern].toLowerCase()} is where you're most exposed, so your instinct is pointing in the right direction.`);
    } else {
      readingYourAnswers.push(`You said your biggest concern is ${concernLabels[q14]}. Your answers point to ${blindSpotCats[0].name.toLowerCase()} as the more immediate gap.`);
    }
  }

  // Recommended offer
  const q15 = answers[15]?.score ?? 0;
  const offerKeys = getOfferKeys(profileIndex, q15);
  const primary = offers[offerKeys.primary];
  const also = offerKeys.also ? offers[offerKeys.also] : null;

  // Risk tags saved with each lead
  const journeyTags = ["exploring", "defined-not-planned", "budgeting-bidding", "pre-construction"];
  const experienceTags = ["first-remodel", "small-diy", "prior-remodel", "experienced"];
  const supportTags = ["where-to-begin", "budgeting", "roadmap", "expert-feedback"];
  const tags = [
    `stage:${profile.id}`,
    ...categories.filter((c) => c.pct < 50).map((c) => `risk:${c.key}`),
    ...blindSpotCats.map((c) => `blindspot:${c.key}`),
    ...(q14 !== undefined ? [`concern:${concernCategory[q14]}`] : []),
    ...(answers[15] ? [`support:${supportTags[q15]}`] : []),
    ...(q1 !== undefined ? [`journey:${journeyTags[q1]}`] : []),
    ...(q2 !== undefined ? [`experience:${experienceTags[q2]}`] : [])
  ];
  if ((q13 === 2 || q13 === 3) && totalScore <= 16) tags.push("confidence-gap:overconfident");
  if ((q13 === 0 || q13 === 1) && totalScore >= 17) tags.push("confidence-gap:underconfident");

  return {
    totalScore,
    maxScore: 30,
    percentage,
    profile: {
      name: profile.name,
      tier: profile.tier,
      tierIndex: profile.tierIndex,
      headline: profile.headline,
      description: profile.description
    },
    categories,
    strongestAreaText,
    strongestDesc,
    biggestRiskText,
    biggestRiskDesc,
    blindSpotCards,
    blindSpotSubtitle,
    readingYourAnswers,
    costItems,
    changeItems,
    recommendedNextStep: {
      title: primary.title,
      body: primary.body,
      btnText: profile.ctaLabel,
      url: profile.ctaUrl,
      also: also ? { title: also.title, btnText: also.btnText, url: also.url } : null
    },
    tags,
    isTieForLowest
  };
}


