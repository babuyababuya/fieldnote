const CASES = [
  {
    id: "crm-attribution",
    idea: "CRM attribution for Shopify brands",
    company: "Harborline",
    founder: "Mara Ellison",
    revenue: 100000,
    cost: 1000,
    days: 30,
    type: "Software",
    tools: ["Custom app", "BigQuery", "Stripe"],
    growth: ["SEO", "Partner webinars"],
    lanes: ["micro-saas", "solo"],
    solo: true,
    free: true,
    interview: true,
    featured: false,
    headline: "The unglamorous report brands already export, resold as a subscription",
    updated: "Sep 2026",
    pricingNote: "$79–$299 / mo by ad-spend tier",
    blocks: [
      ["Where it came from", "Mara was the analyst inside a six-person skincare brand. Every Monday she pasted Meta, Klaviyo, and Shopify exports into the same Sheet so the founder could see which campaign actually paid for itself. Agencies kept asking for the file. She turned the Sheet into a hosted report and charged the first agency $79 to stop maintaining it."],
      ["How the first money showed up", "She did not buy ads. She published twelve teardown posts aimed at the exact query brands type after a bad month: which campaign paid back. Those posts still bring the trials. The webinar channel came later, when two agencies asked to show the report to their own clients and take a cut."],
      ["Why it keeps paying", "The data is painful to recreate and boring to look at, which is the moat. Churn is low because the report is forwarded into Monday meetings. Expansion happens when a brand’s ad spend crosses the next tier, not when Mara ships a new feature."]
    ]
  },
  {
    id: "airtable-bridge",
    idea: "No-code Airtable API bridge",
    company: "Sheetbridge",
    founder: "Jonah Peck",
    revenue: 20000,
    cost: 100,
    days: 90,
    type: "Software",
    tools: ["Airtable", "Make", "Stripe"],
    growth: ["Word of mouth", "Communities"],
    lanes: ["nocode", "solo", "side"],
    solo: true,
    free: true,
    interview: false,
    featured: false,
    headline: "",
    updated: "Aug 2026",
    pricingNote: "$29 / mo, usage cap on synced rows",
    blocks: [
      ["Where it came from", "Jonah ran operations for a furniture studio that lived in Airtable and broke every time a partner asked for an API. He packaged the sync he had already built for himself."],
      ["How the first money showed up", "A Make community thread, not a launch. Someone asked how to expose a base without writing a server. He posted the workaround, then the paid version when the workaround hit rate limits."],
      ["Why it keeps paying", "Buyers are operators, not developers. They pay to avoid hiring one. Support is the cost center: most tickets are schema questions, so the docs are the product."]
    ]
  },
  {
    id: "pdf-statements",
    idea: "PDF bank statement converter",
    company: "Statementfold",
    founder: "Priya Raman",
    revenue: 40000,
    cost: 100,
    days: 14,
    type: "Software",
    tools: ["Node", "Playwright", "Stripe"],
    growth: ["SEO", "Comparison pages"],
    lanes: ["micro-saas", "ai", "solo", "side"],
    solo: true,
    free: true,
    interview: true,
    featured: false,
    headline: "Fourteen days, a hundred dollars, and a job accountants already hate",
    updated: "Sep 2026",
    pricingNote: "$19 / mo or $0.12 a statement",
    blocks: [
      ["Where it came from", "Priya’s brother runs a three-person bookkeeping shop. Every tax season they retype PDF statements from regional banks that refuse CSV. She scripted one bank over a weekend. The shop paid the first invoice before the landing page existed."],
      ["How the first money showed up", "Comparison pages. Each page names one bank and the phrase accountants search in March. There is no social strategy. The calendar is the distribution: traffic triples for ten weeks, then sleeps."],
      ["Why it keeps paying", "Willingness to pay is seasonal and sharp. A bookkeeper will subscribe in March to save a weekend, then forget to cancel. Annual plans sold in February are most of the profit. The model breaks if a bank ships a clean export, so she adds banks faster than she polishes the UI."]
    ]
  },
  {
    id: "ai-music-video",
    idea: "AI music video generator",
    company: "Reelscore",
    founder: "Chris Adelayo",
    revenue: 22000,
    cost: 500,
    days: 40,
    type: "Software",
    tools: ["Modal", "FFmpeg", "Stripe"],
    growth: ["Short video", "Affiliates"],
    lanes: ["ai", "digital", "solo"],
    solo: true,
    free: false,
    interview: false,
    featured: false,
    headline: "",
    updated: "Jul 2026",
    pricingNote: "Credit packs, $12–$49",
    blocks: [
      ["Where it came from", "Chris edited videos for independent musicians who could not afford a shoot. The brief was always the same: artwork, a lyric, a loop. He wrapped that brief in a form."],
      ["How the first money showed up", "Fifteen-second before-and-after clips, posted by the musicians, not by him. Affiliates are small producers who already have a newsletter. They take 20% because their audience trusts a tool recommendation more than an ad."],
      ["Why it keeps paying", "Credits match the job. A musician needs one video a month, not a seat. Margin lives in batching GPU time overnight. The risk is model cost, not demand."]
    ]
  },
  {
    id: "operator-courses",
    idea: "Courses for operators leaving employment",
    company: "Deskcourse",
    founder: "Helen Cho",
    revenue: 80000,
    cost: 1000,
    days: 90,
    type: "Ecommerce",
    tools: ["Teachable", "ConvertKit"],
    growth: ["Email", "YouTube"],
    lanes: ["digital", "solo"],
    solo: true,
    free: false,
    interview: true,
    featured: false,
    headline: "She sells the same syllabus every quarter and lets the list do the launch",
    updated: "Jun 2026",
    pricingNote: "$400 a seat, four cohorts a year",
    blocks: [
      ["Where it came from", "Helen spent ten years running customer success at companies that never promoted operators into founders. The course is the promotion path she wanted: pick a narrow service, price it, and get the first three retainers."],
      ["How the first money showed up", "A YouTube series that shows one former student’s first invoice, redacted. The video is the ad. The email list is the store. Cohort revenue is lumpy on purpose: four opens a year, then silence, which keeps refund requests down."],
      ["Why it keeps paying", "She does not add courses. Alumni pay to be in the room where the next cohort asks questions, and that room is a second subscription. Sponsorships inside the launch emails are a third line, sold only to tools the students already have to buy."]
    ]
  },
  {
    id: "linkedin-outreach",
    idea: "LinkedIn outreach for boutique recruiters",
    company: "Pinglane",
    founder: "Samir Haddad",
    revenue: 60000,
    cost: 100,
    days: 120,
    type: "Software",
    tools: ["Playwright", "Postgres"],
    growth: ["Cold email", "Affiliates"],
    lanes: ["automation", "micro-saas", "solo"],
    solo: true,
    free: false,
    interview: true,
    featured: true,
    headline: "Recruiters do not want another inbox. They want Monday’s list already written.",
    updated: "Sep 2026",
    pricingNote: "$149 / mo per recruiter seat",
    blocks: [
      ["Where it came from", "Samir recruited for two startups and hated writing the same first line fifty times. Pinglane drafts the line from a job post and a profile, then stops. It does not send. Sending is how accounts get banned, and banned accounts churn."],
      ["How the first money showed up", "He emailed forty boutique firms and offered to run their hardest role for a week. Six said yes. Two are still customers. Affiliates are recruiting coaches who already sell a course; the tool is the homework."],
      ["Why it keeps paying", "The sponsor on this row is not an accident. Tool companies pay to be the default ‘send with’ button because the user is sitting on a buying decision. Seats expand when a firm hires a second recruiter. The product risk is platform policy, so the roadmap is export quality, not more automation."]
    ]
  },
  {
    id: "excel-formulas",
    idea: "AI Excel formula generator",
    company: "Formulab",
    founder: "David Berg",
    revenue: 30000,
    cost: 200,
    days: 30,
    type: "Software",
    tools: ["Model API", "Framer"],
    growth: ["Short video", "Word of mouth"],
    lanes: ["ai", "nocode", "side", "solo"],
    solo: true,
    free: true,
    interview: false,
    featured: false,
    headline: "",
    updated: "May 2026",
    pricingNote: "$12 / mo, free tier with a watermark",
    blocks: [
      ["Where it came from", "David answered formula questions on a forum for two years. The paid product is that answer, instant, inside a sheet-shaped box."],
      ["How the first money showed up", "Short videos of an ugly spreadsheet becoming a clean one. Comments ask for the template. The template is free. The generator that builds the next one is not."],
      ["Why it keeps paying", "The free tier is the distribution. Finance teams upgrade when the watermark shows up in a deck their director will see. That is a status purchase, not a productivity one."]
    ]
  },
  {
    id: "visa-rules",
    idea: "Visa requirement pages by passport",
    company: "Visaledger",
    founder: "Hari Menon",
    revenue: 20000,
    cost: 100,
    days: 60,
    type: "Publication",
    tools: ["Node", "Postgres"],
    growth: ["SEO"],
    lanes: ["directory", "side", "solo"],
    solo: true,
    free: false,
    interview: false,
    featured: false,
    headline: "",
    updated: "Apr 2026",
    pricingNote: "Display ads plus a $9 trip checklist",
    blocks: [
      ["Where it came from", "Hari got a passport question wrong and missed a flight. He built the page he had needed: one passport, one destination, the rule, the source, the date it was checked."],
      ["How the first money showed up", "Search. The pages are dull and specific, which is what ranks. Ads pay the hosting. The checklist is what people buy the night before they fly."],
      ["Why it keeps paying", "Freshness is the work. A stale rule is worse than no page, so a weekly review queue matters more than a redesign. Affiliate insurance links exist and are labeled; they are not the business."]
    ]
  },
  {
    id: "blogging-benchmarks",
    idea: "Blogging benchmarks for operators",
    company: "Marginpost",
    founder: "Ruth Keller",
    revenue: 40000,
    cost: 500,
    days: 7,
    type: "Publication",
    tools: ["Ghost", "Plausible"],
    growth: ["SEO", "Newsletter"],
    lanes: ["newsletter", "digital", "solo"],
    solo: true,
    free: true,
    interview: true,
    featured: false,
    headline: "A newsletter that sells the ads, then sells the archive",
    updated: "Sep 2026",
    pricingNote: "Two sponsor slots a week, plus a $129 / yr archive",
    blocks: [
      ["Where it came from", "Ruth published one table: what 40 niche sites actually earned per thousand visits, with the niche named. Operators forwarded it. She has published a version of that table every week since."],
      ["How the first money showed up", "A hosting company asked to sit under the table. She charged for the slot as if the newsletter were already a media kit, because the forward rate was the kit. The archive came a year later, when readers asked for the back issues before a planning meeting."],
      ["Why it keeps paying", "Sponsorship is most of the month. The archive is the hedge: if a sponsor leaves, the readers who already pay do not. She will not take a third ad. Two slots stay expensive because they stay scarce."]
    ]
  },
  {
    id: "social-scheduler",
    idea: "Scheduler for multi-brand agencies",
    company: "Queuebird",
    founder: "Tim Boyer",
    revenue: 90000,
    cost: 100,
    days: 30,
    type: "Software",
    tools: ["Rails", "Sidekiq"],
    growth: ["SEO", "Affiliates"],
    lanes: ["micro-saas", "automation"],
    solo: false,
    free: false,
    interview: false,
    featured: false,
    headline: "",
    updated: "Aug 2026",
    pricingNote: "$40 / brand / mo",
    blocks: [
      ["Where it came from", "Tim’s agency ran eleven brand accounts and paid for eleven logins of a tool priced for single creators. Queuebird bills by brand, with one login for the team."],
      ["How the first money showed up", "Pages that compare per-brand pricing against the incumbents. Affiliates are freelance social leads who bring the agency with them when they change jobs."],
      ["Why it keeps paying", "Agencies add brands. That is the expansion math. A second product would dilute the page that ranks. The team is three, and the third person is support."]
    ]
  },
  {
    id: "amazon-transfer",
    idea: "Amazon inventory transfer planner",
    company: "Cargohop",
    founder: "Todd Ibarra",
    revenue: 70000,
    cost: 50000,
    days: 180,
    type: "Software",
    tools: ["AWS", "Help desk"],
    growth: ["Paid search", "Partnerships"],
    lanes: ["micro-saas"],
    solo: false,
    free: false,
    interview: false,
    featured: false,
    headline: "",
    updated: "Mar 2026",
    pricingNote: "$499 / mo, annual contracts",
    blocks: [
      ["Where it came from", "Todd ran logistics for a seller doing $4M a year. Moving stock between fulfillment centers was a spreadsheet that cost real freight money when it was wrong."],
      ["How the first money showed up", "Not content. He bought the keywords sellers use when Amazon forces a transfer, and he split the first contracts with a freight broker who already had the relationships."],
      ["Why it keeps paying", "This is the expensive counterexample in the ledger. It took half a year and real capital because the buyer is a company, the integration is ugly, and the sale is a contract. Margin is high after the sale. Getting the sale is the whole company."]
    ]
  },
  {
    id: "pinterest-training",
    idea: "Training for Pinterest assistants",
    company: "Pinbench",
    founder: "Krista Lang",
    revenue: 55000,
    cost: 200,
    days: 30,
    type: "Ecommerce",
    tools: ["Teachable", "Tailwind"],
    growth: ["Affiliates", "Pinterest"],
    lanes: ["digital", "affiliate", "solo"],
    solo: true,
    free: false,
    interview: false,
    featured: false,
    headline: "",
    updated: "Feb 2026",
    pricingNote: "$800 course, plus a $39 / mo practice desk",
    blocks: [
      ["Where it came from", "Krista hired three assistants who could design pins and none who could read a client’s analytics. The course is the job description she wished she could hand someone."],
      ["How the first money showed up", "Pins. The channel she teaches is the channel that sells the teaching. Affiliates are designers who want a referral fee more than another client."],
      ["Why it keeps paying", "The course is a spike. The practice desk is the subscription: templates and a monthly critique. People renew when they have a client, and cancel when they do not, so she teaches them how to keep one."]
    ]
  },
  {
    id: "box-reviews",
    idea: "Subscription box reviews in one niche",
    company: "Boxreview",
    founder: "Adam Ruiz",
    revenue: 48000,
    cost: 210,
    days: 10,
    type: "Publication",
    tools: ["WordPress", "Pinterest"],
    growth: ["SEO", "Affiliates"],
    lanes: ["affiliate", "directory", "side", "solo"],
    solo: true,
    free: true,
    interview: false,
    featured: false,
    headline: "",
    updated: "Jan 2026",
    pricingNote: "Affiliate commissions, almost no ads",
    blocks: [
      ["Where it came from", "Adam’s partner subscribed to four snack boxes and could not remember which one was worth it. He reviewed the category the way a buyer actually chooses: price per ounce, skip policy, what shows up damaged."],
      ["How the first money showed up", "A single comparison page ranked. The links are affiliate links and they are labeled at the top of the page, because the trust is the asset. A hidden link would pay once."],
      ["Why it keeps paying", "The niche is narrow enough that he can reorder every box twice a year. Breadth would lower the commission rate that matters: people buy the one he ranks first."]
    ]
  },
  {
    id: "oss-alts",
    idea: "Directory of open-source alternatives",
    company: "Altstack",
    founder: "Leah Ostrow",
    revenue: 7200,
    cost: 0,
    days: 2,
    type: "Publication",
    tools: ["Next.js", "Plausible"],
    growth: ["SEO", "Launch communities"],
    lanes: ["directory", "side", "solo"],
    solo: true,
    free: false,
    interview: true,
    featured: false,
    headline: "Built in a weekend. The money showed up when sponsors asked where to stand.",
    updated: "Sep 2026",
    pricingNote: "Category sponsors, plus a monthly pin on one listing",
    blocks: [
      ["Where it came from", "Leah was tired of ten-tab comparisons every time a team wanted to leave a paid tool. She listed the open-source option, the hosted option, and the thing you lose if you switch. The first version was a weekend."],
      ["How the first money showed up", "Not on day two. Search traffic took most of a year. The first dollar was a maintainer asking to be pinned at the top of a category. She had not planned a paid tier. She priced the pin as a monthly listing and left the rest of the page alone."],
      ["Why it keeps paying", "Pins are the simple product. A sponsor across the category pages is the larger one. Referrals to hosted versions are real and small. One stream would be a hobby. Three streams on the same pages are the business. She spends a few hours a week on it."]
    ]
  },
  {
    id: "city-index",
    idea: "City index for remote workers",
    company: "Waystation",
    founder: "Nia Cole",
    revenue: 33000,
    cost: 0,
    days: 14,
    type: "Community",
    tools: ["Rails", "Chat"],
    growth: ["Public build log", "Community"],
    lanes: ["community", "directory", "solo"],
    solo: true,
    free: false,
    interview: true,
    featured: false,
    headline: "The spreadsheet was free. People paid to be in the room attached to it.",
    updated: "Aug 2026",
    pricingNote: "Was a paid membership; now nearly free, sponsors carry more of the month",
    blocks: [
      ["Where it came from", "Nia posted a public sheet: rent, internet, safety, a score. People corrected the cells. The corrections were the product. She did not write the database. Residents did."],
      ["How the first money showed up", "A one-time membership to join the chat next to the sheet. The price filtered the room more than it maximized revenue. For years that membership was the business, and the sheet was the reason to visit."],
      ["Why it keeps paying", "A paid room has a ceiling: a higher price means fewer new people, and the room is the point. She later dropped the membership to a token fee and let a travel-insurance sponsor fund the upkeep. The lesson in this row is the shift, not a single price. The asset that does not copy is the decade of corrections and the people who already know each other."]
    ]
  },
  {
    id: "micro-exits",
    idea: "Marketplace for tiny profitable apps",
    company: "Microlot",
    founder: "Owen Marsh",
    revenue: 6000,
    cost: 500,
    days: 60,
    type: "Marketplace",
    tools: ["Next.js", "Stripe"],
    growth: ["Newsletter", "Founder communities"],
    lanes: ["marketplace", "solo"],
    solo: true,
    free: false,
    interview: true,
    featured: false,
    headline: "Buyers paid for the deal flow before sellers paid a commission",
    updated: "Jul 2026",
    pricingNote: "$299 / yr for buyers, later a 6–10% transfer fee",
    blocks: [
      ["Where it came from", "Owen wanted to buy a small plugin with real revenue and could not find numbers he trusted. The listings are side projects, extensions, and newsletters, mostly between a few hundred dollars and six figures."],
      ["How the first money showed up", "From the demand side. Sellers would list for free. Buyers paid for verified numbers and a way to contact the seller. Charging sellers first would have emptied the shelf."],
      ["Why it keeps paying", "A subscription on buyers is steady and small. The larger month arrives when the site also handles the transfer and takes a success fee. He added that only after people were already closing. The catalog is the trust. The fee is the reward for not making them leave to finish."]
    ]
  },
  {
    id: "founder-brief",
    idea: "Strategy letter for working founders",
    company: "Weekproof",
    founder: "Ada Ferris",
    revenue: 31000,
    cost: 200,
    days: 21,
    type: "Publication",
    tools: ["Letterpress", "Plain text"],
    growth: ["Referrals", "Sponsorships"],
    lanes: ["newsletter", "solo"],
    solo: true,
    free: false,
    interview: true,
    featured: false,
    headline: "Two ad slots a send, and she will not add a third",
    updated: "Sep 2026",
    pricingNote: "Sponsors per issue, plus paid origin stories",
    blocks: [
      ["Where it came from", "Ada wrote the letter she wanted on Sunday night: one operating decision, the number attached to it, and the mistake. No funding news. The readers are founders who already have customers."],
      ["How the first money showed up", "A tool company asked for a mention after a reader forwarded an issue into a partner channel. She kept the issue to two slots and turned the second request away. Scarcity is the rate card."],
      ["Why it keeps paying", "The audience is narrow, so the rate holds. A longer reported story, written with a company, is a separate product and costs more than a slot. She marks those issues in the subject line. The list also fills her other company’s pipeline, which is not on this revenue line and still matters."]
    ]
  },
  {
    id: "directory-kit",
    idea: "A kit for launching a niche directory",
    company: "Rowhouse",
    founder: "Elena Voss",
    revenue: 5000,
    cost: 300,
    days: 45,
    type: "Software",
    tools: ["Next.js", "Stripe"],
    growth: ["Public build log", "Affiliates"],
    lanes: ["micro-saas", "directory", "nocode"],
    solo: true,
    free: false,
    interview: false,
    featured: false,
    headline: "",
    updated: "Jun 2026",
    pricingNote: "$149 once, plus a $29 / mo hosted tier",
    blocks: [
      ["Where it came from", "Elena kept seeing the same directory shape: a category, a listing, a featured slot, a sponsor bar. She extracted the shape after the third rebuild."],
      ["How the first money showed up", "People who had watched her publish the revenue of her own directory asked for the code. The buyers are builders, which makes the public numbers the sales page."],
      ["Why it keeps paying", "The one-time kit is the door. Hosting is the subscription, because directories that start ranking do not want to migrate. She does not sell coaching."]
    ]
  }
];

const LANES = [
  { id: "micro-saas", title: "Micro-SaaS", desc: "Lean software with a recurring bill." },
  { id: "solo", title: "Solopreneurs", desc: "One founder, no fundraising story." },
  { id: "side", title: "Beside a job", desc: "Started without quitting first." },
  { id: "directory", title: "Directories", desc: "A list people return to, then pay to be on." },
  { id: "newsletter", title: "Newsletters", desc: "A list narrow enough that sponsors overpay." },
  { id: "digital", title: "Digital products", desc: "Courses, templates, and credit packs." },
  { id: "ai", title: "Model wrappers", desc: "A job somebody already does, with a model inside." },
  { id: "marketplace", title: "Marketplaces", desc: "Charge the side that is hungry for supply." },
  { id: "nocode", title: "No-code stacks", desc: "Shipped on tools the buyer already understands." },
  { id: "automation", title: "Automation", desc: "A repeated chore, packaged." },
  { id: "community", title: "Paid rooms", desc: "The database is public. The room is the product." },
  { id: "affiliate", title: "Affiliate desks", desc: "Trust first, commission second." }
];

const state = {
  q: "",
  band: "all",
  soloOnly: false,
  sort: "revenue",
  dir: "desc",
  saved: loadSaved(),
  pro: localStorage.getItem("fieldnote-pro") === "1",
  toast: ""
};

function loadSaved() {
  try {
    const raw = JSON.parse(localStorage.getItem("fieldnote-saved") || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function fmtK(n) {
  if (n >= 1000) {
    const k = n / 1000;
    const text = Number.isInteger(k) ? String(k) : String(Math.round(k * 10) / 10);
    return `$${text}K`;
  }
  return `$${n}`;
}

function fmtCost(n) {
  if (n === 0) return "$0";
  if (n >= 1000) return fmtK(n);
  return `$${n}`;
}

function median(nums) {
  if (!nums.length) return 0;
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2) return sorted[mid];
  return Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

function route() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const [path, query = ""] = raw.split("?");
  return { path: path || "/", params: new URLSearchParams(query) };
}

function laneFromRoute() {
  const { path, params } = route();
  if (path !== "/") return "all";
  return params.get("lane") || "all";
}

function filtered() {
  const q = state.q.trim().toLowerCase();
  const lane = laneFromRoute();
  const rows = CASES.filter((item) => {
    if (lane === "saved" && !state.saved.includes(item.id)) return false;
    if (lane !== "all" && lane !== "saved" && !item.lanes.includes(lane)) return false;
    if (state.soloOnly && !item.solo) return false;
    if (state.band === "10-50" && (item.revenue < 10000 || item.revenue > 50000)) return false;
    if (state.band === "50+" && item.revenue < 50000) return false;
    if (state.band === "under10" && item.revenue >= 10000) return false;
    if (!q) return true;
    const hay = [item.idea, item.company, item.founder, item.type, item.pricingNote, ...item.tools, ...item.growth, ...item.lanes]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
  const factor = state.dir === "asc" ? 1 : -1;
  rows.sort((a, b) => {
    if (state.sort === "idea") return a.idea.localeCompare(b.idea) * factor;
    return (a[state.sort] - b[state.sort]) * factor;
  });
  return rows;
}

function moneyCell(n) {
  return `<span class="money">${fmtK(n)}<span>/mo</span></span>`;
}

function rowHtml(item) {
  const sponsor = item.featured ? `<span class="tag-sponsored">Sponsored</span>` : "";
  return `<tr class="${item.featured ? "featured" : ""}" data-open="${item.id}">
    <td><span class="idea">${esc(item.idea)}${sponsor}</span><span class="company">${esc(item.company)} · ${esc(item.founder)}</span></td>
    <td>${moneyCell(item.revenue)}</td>
    <td>${esc(item.founder)}</td>
    <td>${fmtCost(item.cost)}</td>
    <td>${item.days} days</td>
    <td>${esc(item.type)}</td>
    <td><div class="pills">${item.tools.slice(0, 2).map((tool) => `<span class="pill">${esc(tool)}</span>`).join("")}</div></td>
    <td><div class="pills">${item.growth.map((channel) => `<span class="pill">${esc(channel)}</span>`).join("")}</div></td>
  </tr>`;
}

function mobileCard(item) {
  return `<button class="mobile-card" data-open="${item.id}">
    <div class="row-meta"><span class="kicker">${esc(item.type)}</span>${moneyCell(item.revenue)}</div>
    <strong>${esc(item.idea)}</strong>
    <div class="row-meta"><span class="muted">${esc(item.founder)}</span><span>${fmtCost(item.cost)} · ${item.days}d</span></div>
  </button>`;
}

function previewTable(rows) {
  const top = rows.slice(0, 6);
  if (!top.length) return `<div class="empty">No profiles match that search.</div>`;
  return `<div class="table-wrap compact only-desk"><table>
    <thead><tr><th>Idea</th><th>Revenue</th><th>To start</th></tr></thead>
    <tbody>${top.map((item) => `<tr data-open="${item.id}"><td><span class="idea">${esc(item.idea)}</span><span class="company">${esc(item.company)}</span></td><td>${moneyCell(item.revenue)}</td><td>${fmtCost(item.cost)} / ${item.days} days</td></tr>`).join("")}</tbody>
  </table></div>
  <div class="only-mobile">${top.map(mobileCard).join("")}</div>`;
}

function fullTable(rows) {
  if (!rows.length) return `<div class="empty">Nothing in this cut of the ledger. Clear a filter or try a tool name.</div>`;
  const sortBtn = (key, label) => `<button data-sort="${key}" type="button">${label}${state.sort === key ? (state.dir === "desc" ? " ↓" : " ↑") : ""}</button>`;
  return `<div class="table-wrap only-desk"><table>
    <thead><tr>
      <th>${sortBtn("idea", "Idea")}</th>
      <th>${sortBtn("revenue", "Revenue")}</th>
      <th>Founder</th>
      <th>${sortBtn("cost", "Cost")}</th>
      <th>${sortBtn("days", "Time")}</th>
      <th>Type</th>
      <th>Built with</th>
      <th>Growth</th>
    </tr></thead>
    <tbody>${rows.map(rowHtml).join("")}</tbody>
  </table></div>
  <div class="only-mobile">${rows.map(mobileCard).join("")}</div>`;
}

function laneCards() {
  return LANES.map((lane) => {
    const rows = CASES.filter((item) => item.lanes.includes(lane.id));
    const mid = median(rows.map((item) => item.revenue));
    return `<button class="lane" data-lane="${lane.id}">
      <div class="count">${rows.length} profiles</div>
      <div class="title">${esc(lane.title)}</div>
      <div class="desc">${esc(lane.desc)}</div>
      <div class="med"><b>${fmtK(mid)}</b> /mo median</div>
    </button>`;
  }).join("");
}

function storyCards() {
  const items = CASES.filter((item) => item.interview).slice(0, 3);
  return items.map((item, index) => `<button class="story-card ${index === 0 ? "lead" : ""}" data-open="${item.id}">
    <div>
      <div class="kicker">${esc(item.company)}</div>
      <h3>${esc(item.headline)}</h3>
    </div>
    <div class="row-meta"><span>${fmtK(item.revenue)}/mo</span><span class="${index === 0 ? "" : "muted"}">${esc(item.updated)}</span></div>
  </button>`).join("");
}

function chips() {
  const lane = laneFromRoute();
  const items = [
    ["all", "All"],
    ["micro-saas", "Micro-SaaS"],
    ["nocode", "No-code"],
    ["directory", "Directory"],
    ["newsletter", "Newsletter"],
    ["marketplace", "Marketplace"],
    ["ai", "AI"],
    ["saved", `Saved (${state.saved.length})`]
  ];
  const bands = [
    ["all", "Any revenue"],
    ["10-50", "$10K–$50K"],
    ["50+", "$50K+"],
    ["under10", "Under $10K"]
  ];
  const laneHtml = items.map(([id, label]) => `<button class="chip" data-lane="${id}" aria-pressed="${lane === id ? "true" : "false"}">${label}</button>`).join("");
  const bandHtml = bands.map(([id, label]) => `<button class="chip" data-band="${id}" aria-pressed="${state.band === id ? "true" : "false"}">${label}</button>`).join("");
  const solo = `<button class="chip" data-solo="1" aria-pressed="${state.soloOnly ? "true" : "false"}">Solopreneur</button>`;
  return laneHtml + bandHtml + solo;
}

function shell(main) {
  const { path } = route();
  const proLabel = state.pro ? "Pro on" : "Get Pro";
  return `<header class="topbar"><div class="wrap nav">
      <button class="brand" data-go="#/">Fieldnote <i>ledger</i></button>
      <nav class="nav-links">
        <button data-go="#/" aria-current="${path === "/" ? "page" : "false"}">Database</button>
        <button data-go="#/interviews" aria-current="${path === "/interviews" ? "page" : "false"}">Interviews</button>
        <button data-go="#/pricing" aria-current="${path === "/pricing" ? "page" : "false"}">Pricing</button>
      </nav>
      <div class="nav-spacer"></div>
      <button class="btn ghost" data-go="#/pricing">${proLabel}</button>
    </div></header>
    <div class="sponsor"><div class="wrap"><span><span class="kicker">Sponsor</span> · <b>Northwind Ledger</b> — monthly books for solo software companies.</span><span>Featured placement, priced by the month.</span></div></div>
    <main>${main}</main>
    <footer class="site"><div class="wrap"><span>Fieldnote is an original demo. Every profile is fictional. The shape follows public founder-database sites: search, revenue, cost, time, stack, then a paid archive.</span><span>${CASES.length} sample profiles · not a live directory</span></div></footer>
    ${state.toast ? `<div class="toast" role="status">${esc(state.toast)}</div>` : ""}`;
}

function homeView() {
  const rows = filtered();
  const total = rows.reduce((sum, item) => sum + item.revenue, 0);
  const totalLabel = rows.length === CASES.length ? "combined in this sample" : "in this cut";
  return `<section class="hero"><div class="wrap">
      <p class="kicker">Sample ledger · updated this week</p>
      <h1>Find the small businesses that already make money.</h1>
      <p class="lede">Search ${CASES.length} revenue-bearing profiles — what they cost to start, how long they took, the tools they shipped on, and the channel that actually moved.</p>
      <label class="search"><span class="kicker">Search</span><input id="q" value="${esc(state.q)}" placeholder="Ideas, tools, channels, founders" autocomplete="off" /></label>
      <div class="stats"><span><strong>${rows.length}</strong> showing</span><span><strong>${fmtK(total)}/mo</strong> ${totalLabel}</span><span>Figures are illustrative</span></div>
    </div></section>
    <div class="wrap"><div class="chips">${chips()}</div></div>
    <section class="section" id="ledger"><div class="wrap">
      ${previewTable(rows)}
    </div></section>
    <section class="section"><div class="wrap">
      <h2>The full ledger.</h2>
      <p class="sub">No fundraising rounds. Cost to start, time to a first version, and the channel that brought the money in.</p>
      ${fullTable(rows)}
      <p class="note">Sort the money, the cost, or the time. Open a row for the mechanism. Saving a row keeps it in this browser.</p>
    </div></section>
    <section class="section"><div class="wrap">
      <h2>Pick a lane.</h2>
      <p class="sub">Twelve cuts of the same sample. The median is there so a loud outlier does not pick your idea for you.</p>
      <div class="lanes">${laneCards()}</div>
    </div></section>
    <section class="section"><div class="wrap">
      <h2>The longer interviews.</h2>
      <p class="sub">A few profiles go past the table: where the first dollar came from, and which line item actually carries the month.</p>
      <div class="stories">${storyCards()}</div>
    </div></section>`;
}

function caseView(id) {
  const item = CASES.find((entry) => entry.id === id);
  if (!item) {
    return `<section class="section"><div class="wrap"><div class="empty">That profile is not in the sample.</div></div></section>`;
  }
  const locked = !item.free && !state.pro;
  const blocks = locked ? item.blocks.slice(0, 1) : item.blocks;
  const saved = state.saved.includes(item.id);
  return `<article class="wrap case-top">
      <button class="back" data-go="#/">← All profiles</button>
      <p class="kicker">${esc(item.company)} · ${esc(item.updated)}</p>
      <h1>${esc(item.headline || item.idea)}</h1>
      <p class="lede">${esc(item.idea)}. ${item.solo ? "Solo." : "Small team."} ${esc(item.pricingNote)}.</p>
    </article>
    <div class="wrap case-grid">
      <div class="prose">
        ${blocks.map(([title, body]) => `<h2>${esc(title)}</h2><p>${esc(body)}</p>`).join("")}
        ${locked ? `<div class="paywall"><p class="kicker">Pro archive</p><h3>The rest of this one is behind the membership.</h3><p>Free profiles stay open. The longer breakdown — first customers, pricing, and the line that actually carries the month — is the paid half, which is how this kind of site stops depending on sponsors alone.</p><button class="btn" data-go="#/pricing">See Pro</button></div>` : ""}
      </div>
      <aside class="side-card">
        <span class="kicker">Revenue</span>
        ${moneyCell(item.revenue)}
        <div class="kv">
          <span>Cost</span><b>${fmtCost(item.cost)}</b>
          <span>Time</span><b>${item.days} days</b>
          <span>Type</span><b>${esc(item.type)}</b>
          <span>Team</span><b>${item.solo ? "Solo" : "Small team"}</b>
        </div>
        <div class="kicker">Built with</div>
        <div class="pills" style="margin:8px 0 12px">${item.tools.map((tool) => `<span class="pill">${esc(tool)}</span>`).join("")}</div>
        <div class="kicker">Growth</div>
        <div class="pills" style="margin:8px 0 16px">${item.growth.map((channel) => `<span class="pill">${esc(channel)}</span>`).join("")}</div>
        <button class="btn ghost" data-save="${item.id}" style="width:100%">${saved ? "Saved in this browser" : "Save profile"}</button>
      </aside>
    </div>`;
}

function interviewsView() {
  const items = CASES.filter((item) => item.interview);
  return `<section class="hero"><div class="wrap">
      <p class="kicker">Interviews</p>
      <h1>The longer version of the table.</h1>
      <p class="lede">These are the profiles with a mechanism, not just a monthly number. A handful stay free. The rest are the membership.</p>
    </div></section>
    <section class="section"><div class="wrap interviews">
      ${items.map((item) => `<button class="interview" data-open="${item.id}">
        <div class="money">${fmtK(item.revenue)}<span style="font-size:14px">/mo</span></div>
        <div><h3>${esc(item.headline)}</h3><div class="muted">${esc(item.founder)} · ${esc(item.company)} · ${item.free || state.pro ? "Open" : "Pro"}</div></div>
        <div class="kicker">${esc(item.updated)}</div>
      </button>`).join("")}
    </div></section>`;
}

function pricingView() {
  return `<section class="hero"><div class="wrap">
      <p class="kicker">How a ledger like this gets paid</p>
      <h1>Sponsors fill the week. Members buy the archive.</h1>
      <p class="lede">The public table is the distribution. The membership exists so one lost sponsor does not zero the month. Tool mentions stay labeled and stay the smallest line.</p>
    </div></section>
    <section class="section"><div class="wrap pricing">
      <article class="plan">
        <p class="kicker">Free</p>
        <h3>The table</h3>
        <div class="fee">$0</div>
        <ul>
          <li>Search, lanes, and revenue bands</li>
          <li>Open interviews stay open</li>
          <li>The sponsor bar you already saw</li>
        </ul>
        <button class="btn ghost" data-go="#/">Back to the ledger</button>
      </article>
      <article class="plan featured-plan">
        <p class="kicker">Pro · demo</p>
        <h3>The archive</h3>
        <div class="fee">$149<span style="font-size:18px">/yr</span></div>
        <ul>
          <li>Every longer breakdown</li>
          <li>CSV of the rows you filtered</li>
          <li>Saved profiles across refreshes</li>
        </ul>
        <button class="btn" id="unlock" style="background:#f4f1ea;color:#161513">${state.pro ? "Pro is on" : "Unlock Pro here"}</button>
      </article>
      <article class="plan">
        <p class="kicker">Desk</p>
        <h3>The sponsor</h3>
        <div class="fee">$1.8K<span style="font-size:18px">/mo</span></div>
        <ul>
          <li>The bar at the top of the ledger</li>
          <li>One featured row, marked</li>
          <li>Sold only when the category already has readers</li>
        </ul>
        <button class="btn ghost" id="export">Export the filter</button>
      </article>
    </div>
    <div class="wrap"><p class="note">Unlocking Pro stores a flag in this browser. Nothing is charged. Export downloads the rows currently matching your search, and it stays a Pro action so the demo matches the paywall.</p></div>
    </section>`;
}

function render() {
  const { path } = route();
  let main = homeView();
  let title = "Fieldnote — Real businesses, real revenue";
  if (path.startsWith("/case/")) {
    const id = decodeURIComponent(path.slice("/case/".length));
    main = caseView(id);
    const item = CASES.find((entry) => entry.id === id);
    title = item ? `${item.company} · Fieldnote` : title;
  } else if (path === "/interviews") {
    main = interviewsView();
    title = "Interviews · Fieldnote";
  } else if (path === "/pricing") {
    main = pricingView();
    title = "Pricing · Fieldnote";
  }
  document.title = title;
  const focus = document.activeElement && document.activeElement.id === "q";
  const caret = focus ? document.activeElement.selectionStart : null;
  document.getElementById("app").innerHTML = shell(main);
  if (focus) {
    const input = document.getElementById("q");
    if (input) {
      input.focus();
      if (caret != null) input.setSelectionRange(caret, caret);
    }
  }
}

function setToast(message) {
  state.toast = message;
  render();
  clearTimeout(setToast._t);
  setToast._t = setTimeout(() => {
    state.toast = "";
    render();
  }, 2400);
}

function exportCsv() {
  if (!state.pro) {
    setToast("Export sits on the Pro side of the ledger.");
    return;
  }
  const rows = filtered();
  const header = ["idea", "company", "founder", "revenue", "cost", "days", "type", "tools", "growth"];
  const body = rows.map((item) => header.map((key) => {
    const value = Array.isArray(item[key]) ? item[key].join("|") : item[key];
    return `"${String(value).replaceAll('"', '""')}"`;
  }).join(","));
  const blob = new Blob([[header.join(","), ...body].join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "fieldnote-ledger.csv";
  link.click();
  URL.revokeObjectURL(url);
}

document.getElementById("app").addEventListener("click", (event) => {
  const target = event.target.closest("[data-go],[data-open],[data-lane],[data-band],[data-solo],[data-sort],[data-save],#unlock,#export");
  if (!target) return;
  if (target.dataset.go) {
    location.hash = target.dataset.go;
    return;
  }
  if (target.dataset.open) {
    location.hash = `#/case/${target.dataset.open}`;
    return;
  }
  if (target.dataset.lane) {
    if (target.dataset.lane === "all") {
      state.band = "all";
      state.soloOnly = false;
    }
    const next = target.dataset.lane === "all" ? "#/" : `#/?lane=${encodeURIComponent(target.dataset.lane)}`;
    if (location.hash === next || (next === "#/" && (location.hash === "" || location.hash === "#"))) {
      render();
      return;
    }
    location.hash = next;
    return;
  }
  if (target.dataset.band) {
    state.band = target.dataset.band;
    render();
    return;
  }
  if (target.dataset.solo) {
    state.soloOnly = !state.soloOnly;
    render();
    return;
  }
  if (target.dataset.sort) {
    if (state.sort === target.dataset.sort) state.dir = state.dir === "desc" ? "asc" : "desc";
    else {
      state.sort = target.dataset.sort;
      state.dir = state.sort === "idea" ? "asc" : "desc";
    }
    render();
    return;
  }
  if (target.dataset.save) {
    const id = target.dataset.save;
    state.saved = state.saved.includes(id) ? state.saved.filter((item) => item !== id) : [...state.saved, id];
    localStorage.setItem("fieldnote-saved", JSON.stringify(state.saved));
    render();
    return;
  }
  if (target.id === "unlock") {
    state.pro = true;
    localStorage.setItem("fieldnote-pro", "1");
    setToast("Pro is on for this browser. Open any profile.");
    return;
  }
  if (target.id === "export") exportCsv();
});

document.getElementById("app").addEventListener("input", (event) => {
  if (event.target.id !== "q") return;
  state.q = event.target.value;
  render();
});

window.addEventListener("hashchange", () => {
  render();
  const { path, params } = route();
  if (path === "/" && params.get("lane")) {
    document.getElementById("ledger")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
render();
