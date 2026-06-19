/* ===== Chapter 02 - Ideation and Picking the Wedge - Build Live Products (2026) =====
   AI-native. Worked example = GeniOS (public framing: Context Brain for AI Agents). No em-dashes. */

"2.1": `
<div class="wrap">
  <div class="les-kicker">Chapter 2 · Lesson 2.1</div>
  <h1 class="les-title">Solutions Are Cheap: Generate 10 Wedges</h1>
  <div class="les-meta">
    <span class="pill">Solution Design</span><span class="pill">~13 min</span>
    <span class="pill">AI-native</span><span class="pill">core</span>
  </div>
  <p class="motto">Every problem has a hundred solutions. The rare skill is disciplined breadth: resist marrying the first wedge, and generate at least ten before you commit to one.</p>

  <p class="lead">By the end you will have generated <em class="k">ten candidate wedges</em> against your validated problem, each wedge targeting a different user segment, job, or channel. You will pressure-test them against each other with AI, and most importantly, you will know why you are picking the narrowest, most defensible wedge to ship first instead of trying to solve the whole problem at once.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">Generate breadth of wedge options, not depth. Commit late, not early.</div>
  <p>Your mandate here is to resist falling in love with your first solution idea. Amateurs find one idea, fall in love with it, and ship it. Operators generate ten candidate <em class="k">wedges</em> against the same validated problem, each one narrower than the last: targeting one specific user segment, solving one specific job, accessible through one specific channel. A wedge is the narrowest entry point that solves one slice of the problem for one specific user. Your job is to vary the wedges by segment, by job, and by channel, then use AI to pressure-test them fast. You own the breadth of candidates; the market will show you which one to commit to.</p>

  <h2><span class="ix">2</span> You Own vs. You Do NOT Own</h2>
  <div class="sub">The wedges you generate, the ones you eliminate, and the ones you keep open.</div>
  <table>
    <tr><th>You own</th><th>You do NOT own</th></tr>
    <tr><td><strong>Wedge generation.</strong> At least ten variants, each narrower than the last, crossing segment × job × channel.</td><td><strong>The final wedge.</strong> You will not commit to wedge 1 of 10 today. That commitment comes after testing.</td></tr>
    <tr><td><strong>Wedge pressure-testing.</strong> Using Perplexity and Grok to ask: which wedge would a real user pick up and use?</td><td><strong>Feature completeness.</strong> Each wedge stays minimal: one job, one user segment, one tight feature set.</td></tr>
    <tr><td><strong>Wedge elimination.</strong> Kill the weakest wedges ruthlessly when data shows they have no traction.</td><td><strong>Betting all-in on one.</strong> You keep multiple wedges open until pilot data proves otherwise.</td></tr>
    <tr><td><strong>Access and channel strategy.</strong> How will users find this wedge? Referral-only, free, paid, app store, API, direct outreach?</td><td><strong>Why now, part 2.</strong> That validation happened in Chapter 1. Here, you pick the wedge that rides the tailwind best.</td></tr>
  </table>

  <h2><span class="ix">3</span> Wedge Signals: What to Watch When Testing</h2>
  <div class="sub">Signals that tell you a wedge is alive or dead.</div>
  <table>
    <tr><th>Signal</th><th>Reads as</th><th>Why it matters</th></tr>
    <tr><td><strong>User response to "is this for you?"</strong></td><td>Strong: "Yes, this is exactly my problem." Weak: "Maybe?" and hedging.</td><td>Specificity is the wedge's power. If the user has to think, the wedge is too broad.</td></tr>
    <tr><td><strong>Deposit or pilot agreement.</strong> Did a user offer time, money, or access to try this wedge within 48 hours of hearing about it?</td><td>Very strong: commitment beats words.</td><td>Money and time are the only real signals. Everything else is conversation.</td></tr>
    <tr><td><strong>Message clarity velocity.</strong> Across qualified users, did message resonance on one wedge outperform others noticeably?</td><td>Very strong: the wedge is legible and lands.</td><td>If wedges have equal appeal, none is narrow enough. The winning wedge should dominate, not tie.</td></tr>
    <tr><td><strong>Zero deposits in two weeks.</strong></td><td>Very strong signal to kill.</td><td>Two weeks is long enough for a narrow wedge to surface real interest. Silence is a decision.</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The premature commitment trap</div>
    <p>Founders fall in love with wedge 1 and ship it. When it gains zero traction, they blame the market instead of admitting they married the first idea without testing alternatives. Generate ten, pressure-test all of them, and only then commit. Speed through the testing, not through wedge generation.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here: Wedge Design Matrix</h2>
  <div class="sub">A mental model for generating wedge variants fast.</div>
  <div class="fig">
    <div class="fig-title">WEDGE DESIGN MATRIX: SEGMENT x JOB x CHANNEL</div>
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif"><text x="260" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">Cross 3 segments &times; 3 jobs &times; 3 channels</text><rect x="40" y="44" width="120" height="46" rx="8" fill="#f5f5f7" stroke="#86868b" stroke-width="1.2"/><text x="100" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">Segment</text><text x="100" y="80" text-anchor="middle" font-size="8.5" fill="#86868b">who you serve</text><rect x="200" y="44" width="120" height="46" rx="8" fill="#f5f5f7" stroke="#86868b" stroke-width="1.2"/><text x="260" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">Job</text><text x="260" y="80" text-anchor="middle" font-size="8.5" fill="#86868b">what they need</text><rect x="360" y="44" width="120" height="46" rx="8" fill="#f5f5f7" stroke="#86868b" stroke-width="1.2"/><text x="420" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d1d1f">Channel</text><text x="420" y="80" text-anchor="middle" font-size="8.5" fill="#86868b">how you reach</text><line x1="100" y1="90" x2="200" y2="120" stroke="#86868b" stroke-width="1"/><line x1="260" y1="90" x2="260" y2="120" stroke="#86868b" stroke-width="1"/><line x1="420" y1="90" x2="320" y2="120" stroke="#86868b" stroke-width="1"/><text x="260" y="113" text-anchor="middle" font-size="9.5" fill="#86868b">10 candidate wedges &middot; most weak, a few resonate</text><rect x="158" y="126" width="36" height="36" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/><rect x="200" y="126" width="36" height="36" rx="6" fill="#4f46e5" opacity="0.12"/><rect x="200" y="126" width="36" height="36" rx="6" fill="none" stroke="#4f46e5" stroke-width="1.5"/><rect x="242" y="126" width="36" height="36" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/><rect x="284" y="126" width="36" height="36" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/><rect x="326" y="126" width="36" height="36" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/><rect x="158" y="168" width="36" height="36" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/><rect x="200" y="168" width="36" height="36" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/><rect x="242" y="168" width="36" height="36" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/><rect x="284" y="168" width="36" height="36" rx="6" fill="#4f46e5" opacity="0.12"/><rect x="284" y="168" width="36" height="36" rx="6" fill="none" stroke="#4f46e5" stroke-width="1.5"/><rect x="326" y="168" width="36" height="36" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/><text x="218" y="149" text-anchor="middle" font-size="13" font-weight="700" fill="#3730a3">&#10003;</text><text x="302" y="191" text-anchor="middle" font-size="13" font-weight="700" fill="#3730a3">&#10003;</text><text x="394" y="150" font-size="9.5" fill="#86868b">gray = weak fit</text><text x="394" y="166" font-size="9.5" fill="#3730a3" font-weight="700">accent = resonates</text><text x="260" y="232" text-anchor="middle" font-size="9" fill="#86868b">strongest "yes, this is for me" wins the pilot</text><rect x="70" y="252" width="380" height="44" rx="9" fill="#4f46e5" opacity="0.07"/><rect x="70" y="252" width="380" height="44" rx="9" fill="none" stroke="#4f46e5" stroke-width="1.4"/><text x="260" y="272" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">Solutions are cheap: generate 10, commit to 1</text><text x="260" y="288" text-anchor="middle" font-size="9.5" fill="#1d1d1f">test every wedge before you pick the one that resonates</text></svg>
    <div class="fig-cap">Cross segment, job, and channel into 10 candidate wedges; most stay gray, so test all of them and commit only to the few that resonate.</div>
  </div>
  <ol>
    <li><strong>Name at least 3 user segments</strong> that face your problem differently. VCs might prioritize speed; founders might prioritize debugging visibility; support teams might prioritize escalation legibility.</li>
    <li><strong>Name at least 3 distinct jobs</strong> each segment wants to accomplish. The same user might have multiple jobs (speed AND debugging AND collaboration); pick the one they will pay for first.</li>
    <li><strong>Name at least 3 channels</strong> to reach them. Referral-only feels exclusive (signals quality, attracts status-seekers). Free (API or freemium) feels maximally accessible. Paid (SaaS, on-prem) feels premium. Each channel filters users differently.</li>
    <li><strong>Cross them to generate 27 variants; filter to 10.</strong> Most combinations repeat or contradict. Keep only the ten wedges where segment, job, and channel align: the segment genuinely wants the job, and the channel is the way they discover solutions in that domain.</li>
  </ol>
  <div class="callout accent">
    <div class="ch">Say this to yourself</div>
    <p>"I am not picking the best wedge today. I am generating ten, testing them in parallel, and committing only when the data shows which one users reach for without hesitation."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three tools to generate and filter wedges this week.</div>
  <h3>① The Wedge Framework: Narrow, Reachable, Repeatable</h3>
  <p>Define a wedge with four diagnostic questions: (1) Who is this definitely NOT for? (2) What specific problem are we solving this quarter? (3) What measurable outcome should buyers achieve in 90 days? (4) Why are we the obvious choice for this segment? Test the wedge in three waves: Wave 0 (private beta, some customers, weeks), Wave 1 (limited availability, weeks), Wave 2 (general availability). Kill the wedge if zero deposits or pilot agreements arrive within two weeks. Expansion trigger: consistent, repeatable wins within the initial segment AND clear understanding of why those wins occur. For multiple wedge candidates, run parallel message clarity tests (comparing qualified visits to competing hero sections), offer acceptance tests (priced diagnostics or pilots as signal), and outbound split tests (varying triggers, timelines, urgency).</p>
  <h3>② Jobs-to-Be-Done (JTBD) Segmentation for Wedge Variation</h3>
  <p>Instead of demographic segmentation (job title, company size), segment by the outcome the customer seeks. Identify which job each user is trying to accomplish: for agents, the job might be "run multi-day workflows," "debug agent failures," or "preserve experimental state." Outcome-based segmentation reveals unmet needs that demographics cannot. For each identified job, define the minimum viable feature set and channel access that uniquely serves that job. Test whether premium pricing, exclusivity (referral-only), or ease-of-use (API first) best moves the needle for each segment. Generate 3-5 wedge hypotheses by crossing user segment × job × channel, run 2-4 week pilots with each, and commit to the wedge with strongest product-market-fit signals and lowest customer acquisition cost before scaling.</p>
  <h3>③ AI-Powered Wedge Pressure-Testing: Perplexity &amp; Grok for Fast Iteration</h3>
  <p>Use Perplexity to ask: "For this wedge (specific segment, specific job, specific channel), what are the strongest objections a real user would raise?" It surfaces the friction: "You are missing mobile," "Your pricing is wrong for that segment," "That channel does not reach those users." Grok lets you test messaging: "Would a [role] on X find this message compelling? What would they say in response?" Run the same wedge framing past multiple qualified users on X or via cold outreach, measure response time and deposit rate, and kill wedges with low deposit rates after two weeks. Speed through wedge testing using AI, but close the loop with real user signal.</p>

  <h2><span class="ix">6</span> Worked Solution: How GeniOS Generated and Tested Wedges</h2>
  <div class="sub">My real process for generating 10 wedges from one problem. Follow along.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"My validated problem is agents lose context and memory across sessions. What are 10 different entry points to solve this, each wedge narrower than the last, targeting different segments and jobs?"</p>
  </div>
  <p><strong>Step 1: Identify user segments.</strong> Who faces the "agent loses context" problem? I listed: (1) AI researchers and builders testing new architectures; (2) Founders and product teams deploying agents in production; (3) Support and operations teams using agents to escalate; (4) Enterprises running agents for workflow automation; (5) Individual developers shipping side projects.</p>
  <p><strong>Step 2: Identify distinct jobs within each segment.</strong> Researchers want "preserve experimental state and reproducibility"; founders want "debug agent failures without losing history"; ops teams want "escalate without losing context"; enterprises want "compliance and audit trails"; developers want "plug-and-play memory that doesn't require rewriting." One segment, multiple jobs.</p>
  <p><strong>Step 3: Identify channel access for each job.</strong> Researchers often prefer free, open-source, or academic pricing. Founders prefer API or plug-in (low friction). Ops teams prefer SaaS with admin controls. Enterprises prefer on-prem or vendor partnerships. Developers prefer freemium with expansion into paid tiers.</p>
  <p><strong>Step 4: Cross them to generate candidates.</strong> I generated combinations and filtered to 10 distinct wedges by eliminating duplicates and misaligns (e.g., "researchers plus expensive enterprise SaaS" was a mismatch; I killed it).</p>
  <div class="flow">
<span class="st">[Wedge 1]</span> <span class="nt">Researchers: reproducible experiments plus free API</span>
   <span class="ar">↓</span>
<span class="st">[Wedge 2]</span> <span class="nt">Founders: production debugging plus SDK / plugin</span>
   <span class="ar">↓</span>
<span class="st">[Wedge 3]</span> <span class="nt">Ops teams: escalation legibility plus SaaS admin</span>
   <span class="ar">↓</span>
<span class="st">[Wedges 4-10]</span> <span class="nt">Developers, Enterprises, Consultants, etc.</span>
   <span class="ar">↓</span>
<span class="st">[Test Wave 0]</span> <span class="nt">Users each wedge, weeks, measure deposits</span>
   <span class="ar">↓</span>
<span class="st">[Decision: commit to wedge with highest deposit rate]</span>
  </div>
  <p><strong>Step 5: Test in Wave 0.</strong> I took the top three wedges (researchers, founders, ops teams) and built the thinnest version of each: a private beta with users per wedge, 2-week windows, and one simple ask: "Would you pay for this?" or "Do you want access?" Within two weeks, two wedges had zero deposits. The third (founding teams using agents in production who needed debugging visibility) had strong user signal and asked for early access. That became wedge 1.0.</p>
  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>I did not fall in love with the first wedge. I generated ten, pressure-tested three in the first wave, and only committed to the one with real signal. The discipline to generate breadth first, commit late, and let the market show you which wedge to own is how you avoid building the wrong thing.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case: Candle Generated Its Wedge Out of Pivot Hell</h2>
  <div class="sub">More than ten cheap experiments in four months, until one accidental wedge pulled.</div>
  <h3>Candle: How Parallel Cheap Bets Surfaced a Wedge Nobody Planned</h3>
  <p><strong>The company:</strong> Candle (Y Combinator Fall 2024) is a lightweight, gamified app that helps couples and close friends stay connected through daily prompts, games, photo sharing, and streaks. It was founded by Alex Ruber (CEO, a former Apple engineer) and Parth Chopra (CTO, a former Asana and Twitter engineer). The pair did not get into YC with Candle. They got in with Encore, a conversational AI shopping tool for secondhand goods that raised about $2 million. The tech worked, but the unit economics did not, so the founders entered a stretch that reporters described as pivot hell, with the clock on their seed money running down. <strong>The move:</strong> instead of marrying a single replacement idea, they ran disciplined breadth. From roughly December to April (about four to five months) they tested more than ten different product ideas, spanning areas as far apart as fashion and sports, each one a cheap, fast experiment rather than a big bet. <strong>Why it worked:</strong> the winning wedge, a swipeable deck of conversation questions for partners, emerged almost by accident. An intern (later the marketing lead) posted a TikTok that went viral and drove unexpected early traction, especially in Europe. The market, not the founders' opinion, pointed at the wedge with real pull.</p>
  <ul>
    <li><strong>They generated the option space cheaply instead of betting early.</strong> More than ten ideas in four to five months means a new experiment roughly every couple of weeks. None was a heavy build. That is exactly the breadth-first discipline this lesson asks for: resist the first solution, keep many candidates alive, and let each cheap test eliminate itself if it has no pull.</li>
    <li><strong>The variants spanned different segments and jobs, not minor tweaks.</strong> Fashion and sports concepts target completely different users and jobs than a couples connection app. That divergence is what made the search productive. Ten variations on one theme would have been one wedge repeated; genuinely different bets are what let a surprising winner show up.</li>
    <li><strong>The winning wedge was validated by external signal before they committed.</strong> A swipeable deck of conversation questions for couples is a narrow entry point (one segment, one job, one channel), and the viral TikTok was the deposit-grade signal that it landed. Per TechCrunch (September 2025, about six months after launch), Candle reported 300,000 total users including 150,000 couples, more than 250,000 monthly actives, and over $1M ARR, with backers including Goodwater Capital, Pioneer Fund, Progression Fund, and Y Combinator.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The builder takeaway</div>
    <p>Candle is what generating ten wedges looks like in the wild. The founders did not reason their way to a couples app on a whiteboard. They ran more than ten cheap, divergent experiments in parallel and let one of them get validated by the market (a viral TikTok) before committing. When your first idea dies, do not search for the one perfect replacement. Generate breadth, test cheaply, and commit late to the wedge that pulls on its own.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>
  <div class="quiz" data-correct="2">
    <div class="q">You have generated five candidate wedges for your problem. One has strong signal (deposits in the first week). Should you commit all resources to building it now?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Yes, strong early signal means you have found product-market fit and should go all-in.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Yes, one real deposit is better than no deposits. Start building the full feature set immediately.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>No. Test all five wedges for two weeks, kill the ones with zero deposits, and then commit resources to the top 2-3 with strongest signals.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>No, because early adopters are never representative of the broader market.</span></div>
    <div class="qexp">C: One strong wedge is a signal, not proof. You test all candidates in parallel, kill the zero-deposit wedges ruthlessly, and commit to the top performers only after the full two-week window. Speed through testing, not through commitment.</div>
  </div>
  <div class="quiz" data-correct="1">
    <div class="q">Which wedge design is most likely to be too broad and not defensible?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>VCs in early-stage AI companies, whose agents need to debug failures in production, accessed via API.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Anyone who uses AI, for any reason, on any platform.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Enterprise operations teams, who use agents for workflow automation, accessed via on-prem infrastructure.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Researchers in NLP, whose agents need reproducible experimental state, accessed via free academic API.</span></div>
    <div class="qexp">B: "Anyone, for any reason, on any platform" is not a wedge; it is the entire market. A wedge is defined by a specific segment, a specific job, and a specific channel. Candle won because they picked couples, staying connected through daily prompts, and a viral social channel. Broadness kills defensibility.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">Generate your own ten wedges against your validated problem. About 30 minutes.</div>
  <div class="callout">
    <div class="ch">Your rep</div>
    <p style="font-family:var(--font-ui);font-weight:600;">Take your validated problem from Chapter 1 Lesson 1.3. Name at least 3 user segments that face it differently. For each segment, identify 3 distinct jobs they want to accomplish. For each job, pick 3 channel access modes (referral-only, free, paid, API, etc.). Cross them to generate combinations. Filter to exactly 10 wedges by killing repeats and weak misalignments. For each of your 10 wedges, write: (1) the segment, (2) the job, (3) the channel, (4) one-sentence proof of why this segment would pick it up. Then pick your top 3 wedges and write out what a Wave 0 beta test (users, weeks, one clear ask) would look like.</p>
  </div>
  <p><strong>Hints</strong> (peek only if you are stuck):</p>
  <ul>
    <li>If all ten wedges appeal to the same type of user, you have not varied by segment enough. Push yourself to 5 or more different user archetypes.</li>
    <li>If all ten wedges ask the same job ("make X faster"), you are not varying the job. Brainstorm adjacent jobs: reduce errors, improve visibility, enable compliance, simplify debugging.</li>
    <li>Channel matters more than it looks. The same wedge accessed via referral-only (status, elite) filters users completely differently than free or paid.</li>
  </ul>
  <table>
    <tr><th>A strong wedge list</th><th>A weak wedge list</th></tr>
    <tr><td>Clearly different segments (researchers, founders, enterprises, consultants). Jobs that diverge (reproducibility, speed, compliance, visibility). Channels that filter distinctly (free, paid, exclusive, API).</td><td>All wedges target "knowledge workers." All jobs are "go faster." All channels are "freemium SaaS." This is one wedge repeated, not ten wedges tested.</td></tr>
    <tr><td>At least 3 wedges with zero current competitors (underserved niches). At least 2 with existing competitors (proof of market). At least 1 that feels left-field but solves the problem differently.</td><td>All wedges assume existing competition. No wedge explores an underserved angle. No creative alternatives generated.</td></tr>
    <tr><td>Wave 0 test plan for top 3 wedges: users, 2-week window, one ask (deposit, pilot, or referral sign-up).</td><td>No test plan. No clarity on how you will measure which wedge wins.</td></tr>
  </table>
  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Post your 10 wedges (segment, job, channel) on a public note or X thread. Ask one peer: "Which wedge do you think will win, and why?" Getting one outside opinion beats zero. Naming your wedges publicly is the first real rep toward committing to one.</p>
  </div>

  __NAV__
</div>
`,

"2.2": `
<div class="wrap">

  <!-- ===== HEADER ===== -->
  <div class="les-kicker">Chapter 2 · Lesson 2.2</div>
  <h1 class="les-title">The Wedge Test: Is Your Problem Narrow Enough to Win?</h1>
  <div class="les-meta">
    <span class="pill">Problem Scoping</span><span class="pill">~13 min</span>
    <span class="pill">Founder skill</span><span class="pill">core</span>
  </div>
  <p class="motto">Narrow and deep beats broad and shallow. The best wedge is the one you could be the undisputed best at, not the biggest one you can see.</p>

  <p class="lead">By the end you will know how to <em class="k">test whether a problem is narrow enough to win</em>: tight enough that you can become the best-in-the-world at it, specific enough that a real payer exists today, and defensible enough that bigger players cannot copy it trivially. You will run four wedge tests on your candidate and decide whether it is a wedge worth building, or another boil-the-ocean platform that will fail.</p>

  <!-- ===== BLOCK 1: MANDATE ===== -->
  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">Narrow your problem until it is narrow enough to be best-in-world.</div>
  <p>Most founders fear narrowness. They see a small wedge and think it is too small to matter. The opposite is true: every great company started with a wedge so narrow that bigger players ignored it. Your mandate here is to <em class="k">test and defend the tightness of your wedge</em>. Can you become undisputed leader in this exact slice? Is there a specific payer who will pay today, or just a vague market? Does your wedge have a credible path to expand (land narrow, then expand), or does it die when you run out of early adopters? Can a bigger player trivially copy you and steal the market? Answer these and you will know whether you have a wedge or a platform that will sprawl and fail.</p>

  <!-- ===== BLOCK 2: RESPONSIBILITIES ===== -->
  <h2><span class="ix">2</span> You Own vs. You Do Not Own</h2>
  <div class="sub">The wedge is tight. Your job is to defend that tightness.</div>
  <table>
    <tr><th>You own</th><th>You do NOT own</th></tr>
    <tr><td><strong>Narrowness defensibility</strong>: Can you be the best-in-world at this slice? If every player could do it equally well, you have no edge.</td><td><strong>The whole market</strong>: You are not solving for everyone yet. Anyone claiming to do that at launch is building a platform, not a wedge.</td></tr>
    <tr><td><strong>Specific payer identification</strong>: Who will pay, and can you name them right now? A vague market ("companies that need better data") is not a wedge; a specific segment ("Series A startups hiring their first contractor") is.</td><td><strong>Total addressable market size</strong>: TAM matters for Series A fundraising, not for wedge validation. A tiny TAM with a specific, urgent payer is better than a huge vague one.</td></tr>
    <tr><td><strong>Land-narrow-then-expand path</strong>: How do you move from this wedge to adjacent opportunities? Amazon started with books, then expanded to all retail. Without the path, you are dead when the wedge saturates.</td><td><strong>The expansion itself</strong>: You do not build expansion features yet. You build for the wedge and validate the path exists. Expansion comes after dominance.</td></tr>
    <tr><td><strong>Incumbent defensibility</strong>: Why can't Salesforce, AWS, Google, or Workday just copy you in two quarters and crush you? If they can, your wedge is not defensible.</td><td><strong>Perfect competitive moat</strong>: You only need to be defensible enough that bigger players would rather partner or buy you than rebuild. Perfect moats are rare.</td></tr>
  </table>

  <!-- ===== BLOCK 3: METRICS ===== -->
  <h2><span class="ix">3</span> Signals That Your Wedge Is Real</h2>
  <div class="sub">The tests that separate strong wedges from weak ones.</div>
  <table>
    <tr><th>Signal</th><th>Reads as</th><th>Why it matters</th></tr>
    <tr><td><strong>Specific payer willing to pay today</strong></td><td>Very strong: not a vague market, but a person or team who will actually pay this week.</td><td>If you cannot name the exact buyer and their budget owner, the wedge is too broad. Specific beats vague every time.</td></tr>
    <tr><td><strong>Narrowness creates uniqueness</strong></td><td>Strong: the tighter your wedge, the easier it is to become the best. Narrowness is an advantage, not a limitation.</td><td>Broad platforms require thousands of engineers. Tight wedges let small teams own the whole space and move faster.</td></tr>
    <tr><td><strong>Incumbent cannot copy without cannibalizing margin</strong></td><td>Very strong: bigger players would rather buy or partner than rebuild their own cheaper version.</td><td>This is why Deel succeeded where others failed. Workday could not copy Deel's affordable contractor offering without destroying their enterprise margin. Copies are blocked by incentives, not just technology.</td></tr>
    <tr><td><strong>Credible land-narrow-then-expand path</strong></td><td>Strong: you can name the next two wedges after this one, and they use the same infrastructure.</td><td>Without a path, investors will see a limited business. With a path, they see dominance in a slice becoming dominance in a category.</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The trap</div>
    <p>Confusing <em class="k">small TAM</em> with <em class="k">weak wedge</em>. A small TAM with a specific, urgent payer and a clear expansion path is not a trap; it is the entire strategy. A weak wedge is a broad problem where no specific payer will move quickly, and bigger players can copy you instantly. Size is secondary. Specificity and defensibility are primary.</p>
  </div>

  <!-- ===== BLOCK 4: HOW TO THINK (must contain at least one SVG figure) ===== -->
  <h2><span class="ix">4</span> How to Think Here: The Wedge Test</h2>
  <div class="sub">Four gates that separate winners from boil-the-ocean platforms.</div>

  <div class="fig">
    <div class="fig-title">THE FOUR WEDGE GATES</div>
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
  <text x="260" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1d1d1f">THE FOUR WEDGE GATES</text>
  <text x="260" y="48" text-anchor="middle" font-size="9.5" fill="#86868b">A wedge enters only if every gate is open</text>

  <rect x="28" y="74" width="104" height="86" rx="8" fill="#4f46e5" opacity="0.12"/>
  <rect x="28" y="74" width="104" height="86" rx="8" fill="none" stroke="#4f46e5" stroke-width="1.4"/>
  <text x="80" y="94" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">GATE 1</text>
  <text x="80" y="113" text-anchor="middle" font-size="9.5" fill="#3730a3">Best in the</text>
  <text x="80" y="125" text-anchor="middle" font-size="9.5" fill="#3730a3">world here?</text>
  <text x="80" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#0a7d3c">OPEN</text>

  <rect x="146" y="74" width="104" height="86" rx="8" fill="#4f46e5" opacity="0.12"/>
  <rect x="146" y="74" width="104" height="86" rx="8" fill="none" stroke="#4f46e5" stroke-width="1.4"/>
  <text x="198" y="94" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">GATE 2</text>
  <text x="198" y="113" text-anchor="middle" font-size="9.5" fill="#3730a3">A payer who</text>
  <text x="198" y="125" text-anchor="middle" font-size="9.5" fill="#3730a3">buys now?</text>
  <text x="198" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#0a7d3c">OPEN</text>

  <rect x="264" y="74" width="104" height="86" rx="8" fill="#4f46e5" opacity="0.12"/>
  <rect x="264" y="74" width="104" height="86" rx="8" fill="none" stroke="#4f46e5" stroke-width="1.4"/>
  <text x="316" y="94" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">GATE 3</text>
  <text x="316" y="113" text-anchor="middle" font-size="9.5" fill="#3730a3">A clear path</text>
  <text x="316" y="125" text-anchor="middle" font-size="9.5" fill="#3730a3">to expand?</text>
  <text x="316" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#0a7d3c">OPEN</text>

  <rect x="382" y="74" width="104" height="86" rx="8" fill="#f5f5f7"/>
  <rect x="382" y="74" width="104" height="86" rx="8" fill="none" stroke="#86868b" stroke-width="1.4"/>
  <text x="434" y="94" text-anchor="middle" font-size="9" font-weight="700" fill="#86868b">GATE 4</text>
  <text x="434" y="113" text-anchor="middle" font-size="9.5" fill="#86868b">Hard for big</text>
  <text x="434" y="125" text-anchor="middle" font-size="9.5" fill="#86868b">players to copy?</text>
  <text x="434" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#b25000">SHUT</text>

  <line x1="80" y1="160" x2="80" y2="184" stroke="#4f46e5" stroke-width="1.3"/>
  <line x1="198" y1="160" x2="198" y2="184" stroke="#4f46e5" stroke-width="1.3"/>
  <line x1="316" y1="160" x2="316" y2="184" stroke="#4f46e5" stroke-width="1.3"/>
  <line x1="434" y1="160" x2="434" y2="184" stroke="#86868b" stroke-width="1.3" stroke-dasharray="3 3"/>

  <rect x="28" y="184" width="340" height="48" rx="8" fill="#4f46e5" opacity="0.12"/>
  <rect x="28" y="184" width="340" height="48" rx="8" fill="none" stroke="#4f46e5" stroke-width="1.4"/>
  <text x="198" y="205" text-anchor="middle" font-size="10.5" font-weight="700" fill="#3730a3">Three gates open is not enough</text>
  <text x="198" y="221" text-anchor="middle" font-size="9" fill="#3730a3">The wedge still cannot pass through</text>

  <rect x="382" y="184" width="104" height="48" rx="8" fill="#f5f5f7"/>
  <rect x="382" y="184" width="104" height="48" rx="8" fill="none" stroke="#86868b" stroke-width="1.4"/>
  <text x="434" y="205" text-anchor="middle" font-size="10" font-weight="700" fill="#86868b">One shut gate</text>
  <text x="434" y="221" text-anchor="middle" font-size="9" fill="#86868b">blocks the rest</text>

  <text x="260" y="266" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">All four gates must be open, or the wedge is too broad to win.</text>
  <text x="260" y="290" text-anchor="middle" font-size="9.5" fill="#86868b">A single shut gate means bigger players copy you or ignore you.</text>
</svg>
    <div class="fig-cap">A wedge wins only when all four gates open at once; one shut gate, and incumbents copy you or ignore you.</div>
  </div>

  <ol>
    <li><strong>Gate 1: Can you be best-in-world?</strong> If a thousand companies could execute this equally well, it is not a wedge; it is a feature. Your wedge must be tight enough that your team, with your specific knowledge and constraints, can become undisputed leader faster than anyone else.</li>
    <li><strong>Gate 2: Is there a specific payer now?</strong> Name the person. What is their title? What budget does it come from? When will they buy? If you cannot answer this in one sentence, your wedge is too broad. "Companies that need better AI" fails. "Series A startups hiring their first five international contractors, budget from ops" passes.</li>
    <li><strong>Gate 3: Is there a credible expand path?</strong> What is wedge two and three? How do they build on your wedge one? Amazon wedge one was books; wedge two was other physical media (music, video); wedge three was all retail. Each one was defensible from the previous one and used the same supplier relationships and logistics. Without this path, you are a feature, not a company.</li>
    <li><strong>Gate 4: Can incumbents copy you easily?</strong> If yes, you fail. Incumbent defensibility does not mean perfect moat; it means they have more to lose than to gain by copying. Deel passed because Workday would destroy their enterprise margin with an affordable contractor offering. Rational incumbents do not copy; they acquire or partner.</li>
  </ol>

  <div class="callout accent">
    <div class="ch">Say this to yourself</div>
    <p>"I am not looking for the biggest market I can see. I am looking for the smallest wedge I can be undisputed best-in-world at, where a real payer exists today and bigger players cannot chase me without destroying their own margin."</p>
  </div>

  <!-- ===== BLOCK 5: FRAMEWORKS ===== -->
  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Named tools to test wedge strength, run by name in interviews and on the job.</div>

  <h3>1. Sean Ellis' "Very Disappointed" Test</h3>
  <p>Survey users: "How would you feel if you could no longer use this product?" Track the percentage who answer "very disappointed." When a significant portion report they would be very disappointed, you have achieved product-market fit and validated your wedge is real. Superhuman, co-founded by Rahul Vohra, pioneered this metric by systematically narrowing from all users to high-expectation customers (founders, VCs, managers receiving many emails daily). This quantifies whether your wedge is genuinely valuable enough to the right segment.</p>

  <h3>2. a16z Speedrun "Right-Size Problem for Right-Size Team" Framework</h3>
  <p>Test your wedge with four questions: (1) Can your team execute this in first-class way with limited resources? (2) Is an MVP achievable in months? (3) Does it rest on earned secrets only you possess? (4) Can you describe your initial market in one sentence? If you answer "no" to any, your wedge is too broad. Then validate expandability: does it have a credible land-narrow-then-expand path (e.g., Amazon: books, then all retail; Facebook: colleges, then all users)? The narrowest wedges pass all tests; boil-the-ocean platforms fail question four.</p>

  <h3>3. Every.to Dual-Feasibility Framework: Demand-Side &amp; Supply-Side</h3>
  <p>A killer wedge must be easy to adopt for customers and easy to deliver for startups simultaneously. Demand-side: Is it simple to understand, low-risk to try, and does it fit existing workflows? Supply-side: Does it require no network effects, no scale economies, and no ecosystem completeness? Strong wedges (Airbnb's airbeds, Superhuman's email shortcuts for VCs) satisfy both. Weak wedges fail one side. Test both sides to ensure your wedge can expand without requiring reinvention.</p>

  <!-- ===== BLOCK 6: WORKED SOLUTION ===== -->
  <h2><span class="ix">6</span> Worked Solution: How I Tested My Wedge</h2>
  <div class="sub">Real process against the four gates. Follow along; then test your own wedge.</div>
  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"I think the problem is that AI agents lose context across sessions. Is this narrow enough to win? Who will pay? What is the expansion path? Why can't major AI platforms just copy this?"</p>
  </div>

  <p><strong>Step 1: Test Gate 1, Narrowness and Best-in-World Potential.</strong> I asked: Could a small team become undisputed leader in agent memory faster than big players? General automation failed: major platforms already do it. There is no edge in broad automation; big players own that. But context and memory? Narrower. More defensible. That is where agents actually broke. I could become best-in-world at this slice because the big players were not narrowly focused here; they were building general platforms. Narrowness is the wedge.</p>

  <p><strong>Step 2: Test Gate 2, Specific Payer Today.</strong> I did not say "companies that use AI agents." I got specific: "teams building AI agents for production use who lose context between sessions and need it to work reliably this quarter." Even narrower: "framework maintainers in the Python ecosystem where agents are a new surface area." The budget owner is the head of product or head of platform engineering, approved through engineering spend, not as a separate line item. I could name actual people at actual companies who would pay this week to solve context loss. I could not name "the AI industry." That would fail the gate.</p>

  <p><strong>Step 3: Test Gate 3, Expansion Path.</strong> Wedge one: context and memory for AI agents (narrowest, most defensible). Wedge two: agent orchestration and workflow management (builds on memory, uses the same infrastructure). Wedge three: enterprise AI governance and audit logs (expands to the buyer's broader needs, but built on wedges one and two). I could draw the path. I was not dead after the first wedge saturated.</p>

  <p><strong>Step 4: Test Gate 4, Incumbent Defensibility.</strong> Why could not major AI platforms copy me? They could copy the technology in weeks. But they would not, because the wedge is too small for their model. The major platforms are building general ecosystems; context memory is one feature in many. Agent memory is one add-on. They have no incentive to narrow this far. It would cannibalize their general positioning. Small, focused teams win here. Big players ignore or buy. Rational economics block the copy.</p>

  <div class="flow">
<span class="st">[Gate 1: best-in-world?]</span> <span class="nt">narrower than broad automation, focused on actual agent bottleneck</span>
   <span class="ar">↓</span>
<span class="st">[Gate 2: specific payer now?]</span> <span class="nt">framework teams, head of product/platform, engineering budget, this quarter</span>
   <span class="ar">↓</span>
<span class="st">[Gate 3: expand path?]</span> <span class="nt">memory → orchestration → governance, each built on previous</span>
   <span class="ar">↓</span>
<span class="st">[Gate 4: incumbent defensible?]</span> <span class="nt">big players would cannibalize margin; they ignore or buy</span>
   <span class="ar">↓</span>
<span class="st">[Decision: wedge passes all gates. Build.]</span>
  </div>

  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>I did not chase the biggest market. I found the narrowest defensible slice, a specific payer in cash today, a path to expand without pivoting the foundation, and a wedge that big players would rationally not copy. That is how startups win: narrow, deep, defensible. The market size is secondary.</p>
  </div>

  <!-- ===== BLOCK 7: INDUSTRY CASE ===== -->
  <h2><span class="ix">7</span> Industry Case: Casca, From SBA Loan Origination to AGI for Banking</h2>
  <div class="sub">Real company, real wedge, documented history.</div>

  <h3>Casca: One Painful Workflow as the Entry Ramp to a Platform</h3>

  <p><strong>The company:</strong> Casca (legally Cascading AI) is a Y Combinator Summer 2023 company building an AI-native loan origination system for banks and lenders. It was founded by Lukas Haffer (CEO, who holds an MBA from Stanford Graduate School of Business) and Isaiah Williams (CTO, Stanford computer science, previously a machine learning engineer at EliseAI). <strong>The move:</strong> Rather than trying to rebuild all of banking at once, Casca deliberately picked one narrow, document-heavy beachhead: small-business loan origination, with a sharp focus on the painful SBA lending workflow. Its AI agent (named Leo) emails and texts applicants, chases the missing paperwork, and assembles a clean loan file for a human underwriter, automating the manual grind that banks used to staff with people. <strong>Why it worked:</strong> That single winnable slice was concrete enough to land design-partner banks and prove value fast, while the founders openly frame it as a wedge toward a far larger vision they call "AGI for Banking." The narrow start was never the ceiling; it was the ramp.</p>

  <ul>
    <li><strong>The wedge was a specific, urgent payer, not a vague market.</strong> Bankwell Bank became Casca's first customer and ran real small-business loan applications through the platform before investing in the company. Casca later signed SBA-heavy lenders including Live Oak Bank and Huntington National Bank, and several of those customers also invested in its Series A. Naming the buyer (a bank originating SBA loans) is exactly what passes Gate 2.</li>
    <li><strong>Narrowness funded the expansion, in sequence.</strong> Casca raised a $3.9M pre-seed (announced February 2024), then a $29M Series A in August 2025 led by Canapi Ventures, bringing total funding to roughly $33M. The company markets that banks process applications with about 90% less manual effort and materially higher conversion, and that it funds commercial loans far faster than industry averages. It won the wedge first, then raised to expand from it.</li>
    <li><strong>The expand path is visible, not hypothetical.</strong> Beyond the lending agent, Casca already markets adjacent agents for customer service and for resolving halted back-office payments. Same banks, same system of record, new surfaces. That is land-narrow-then-expand made concrete: dominate one workflow, then walk outward into the buyer's larger set of problems.</li>
  </ul>

  <div class="callout accent">
    <div class="ch">The builder takeaway</div>
    <p>Casca passes the wedge test on every gate. It did not pitch "AI for all of banking" on day one; it picked the narrowest painful workflow it could be best-in-world at (SBA loan origination), found banks who would pay and process real loans this quarter, and only then expanded into customer service and payments agents on the same foundation. The grand vision ("AGI for Banking") earns its credibility precisely because the beachhead was narrow enough to actually win. Narrow to win, then expand from strength.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">You have identified a potential wedge: "Help distributed teams communicate better." Which statement best describes the wedge test result?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>This wedge passes Gate 2 because many companies hire distributed teams.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>This wedge is strong because it is a big market, and bigger markets are always better.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>This wedge fails Gate 2 because "distributed teams" is too broad. You need a specific payer: e.g., "Series B startups with staff, budget from VP Ops, need to reduce communication overhead by end of Q3."</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>This wedge passes if you can name one competitor that tried to solve it.</span></div>
    <div class="qexp">C: Gate 2 requires a specific payer you can name now, not a vague market. "Distributed teams" could mean anyone from a two-person startup to a large enterprise. Narrow it down to one buyer type, one budget, one timeline. Vague markets fail the wedge test every time.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Casca (Cascading AI) deliberately started with one narrow workflow, small-business SBA loan origination, before marketing adjacent customer service and payments agents. Why is this a textbook wedge?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Because SBA lending is the biggest market in banking, and bigger markets are always the right place to start.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>The narrow workflow had a specific payer who would buy now (banks originating SBA loans, like its first customer Bankwell), let a small team be best-in-world at one painful slice, and opened a credible expand path into the rest of banking.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Because they wanted to copy an incumbent core-banking vendor's approach.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Because they read an analyst report that said lending was a growing market.</span></div>
    <div class="qexp">B: This is a textbook wedge. Casca named the buyer (banks doing SBA lending), proved value on hundreds of real applications with a design partner, and only then expanded to customer service and payments agents on the same foundation. Narrow to win, then expand from strength.</div>
  </div>

  <!-- ===== APPLY IT YOURSELF ===== -->
  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">Test your wedge against all four gates. No worked answer; this is your rep. About 15 minutes.</div>

  <div class="callout">
    <div class="ch">Your problem</div>
    <p style="font-family:var(--font-ui);font-weight:600;">Take your problem candidate from Lesson 2.1 (the one you think has strong product-market fit). Run it through all four wedge gates. For each gate, write one sentence: (1) Can you be best-in-world at this slice? (2) Can you name a specific payer and their budget right now? (3) What is your expansion path after this wedge? (4) Why would an incumbent pass on copying you? If you say "I don't know" or "it's too hard to answer" to any gate, your wedge is too broad. Go back and narrow it.</p>
  </div>

  <p><strong>Hints</strong> (peek only if you are stuck):</p>
  <ul>
    <li>Gate 1 is not about market size; it is about defensibility. Can your small team beat anyone else at this specific thing?</li>
    <li>Gate 2 fails if you say "companies" or "teams." It passes if you say "VP of Ops at Series B SaaS companies, annual budget, approves by end of Q2."</li>
    <li>Gate 3 fails if you cannot draw a three-wedge path. If you cannot name what comes after this wedge, you are a feature, not a company.</li>
    <li>Gate 4 passes if incumbent economics make copying irrational. Ask: would this destroy their margin, anger their enterprise customers, or require them to rebuild their sales model?</li>
  </ul>

  <table>
    <tr><th>A strong wedge answer</th><th>A weak wedge answer</th></tr>
    <tr><td>Passes all four gates. Specific payer identified with budget and timeline. Clear expansion path. Incumbent defensibility based on margin or positioning, not just secrecy.</td><td>Fails one or more gates. Vague payer ("companies that need X"). No expansion path. Assumes big players will be too busy to copy, rather than economically blocked.</td></tr>
  </table>

  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Run the four gates on your wedge right now and write down your answers. Then send them to a peer or founder you trust and ask: "Does this pass the wedge test, or am I still too broad?" Outside eyes catch the broadness you missed. Narrow it until a founder says, "Yes, that is defensible and specific enough to win."</p>
  </div>

  __NAV__
</div>
`,

"2.3": `
<div class="wrap">

  <div class="les-kicker">Chapter 2 · Lesson 2.3</div>
  <h1 class="les-title">Kill Your Favorite Idea: Pain x Reach x Willingness to Pay</h1>
  <div class="les-meta">
    <span class="pill">Wedge Selection</span><span class="pill">~13 min</span>
    <span class="pill">AI-native</span><span class="pill">core</span>
  </div>
  <p class="motto">The hardest discipline: killing the wedge you love because the evidence does not support it. Founders die slowly, not from wrong decisions, but from loyalty to a beloved idea that nobody pays for.</p>

  <p class="lead">By the end you will have <em class="k">scored your candidate wedges on pain, reach, and willingness to pay</em>, and you will kill without mercy any wedge that scores low on any axis. You will pick the highest-scoring wedge even if it is not your favorite, and you will run the real scoring process: one that killed beloved ideas and landed on the winning wedge, not because it was flashiest, but because the evidence was strongest.</p>

  <h2><span class="ix">1</span> Your Mandate</h2>
  <div class="sub">Score ruthlessly. Kill the wedge your ego loves if the data does not back it.</div>
  <p>You own the discipline to evaluate every wedge candidate you have surfaced on three non-negotiable axes: <em class="k">pain</em> (how badly it hurts), <em class="k">reach</em> (how many people have it), and <em class="k">willingness to pay</em> (will they actually pay). A wedge with high pain but zero reach is not a company, it is a feature for a niche. A wedge with massive reach but no pain is a vitamin that gets dropped. A wedge with pain and reach but no willingness to pay is a consulting job, not a product. You kill ruthlessly. Low scores mean feature, not wedge. Your mandate is to name the winner by evidence, not by gut, and to let the data override your favorite idea.</p>

  <h2><span class="ix">2</span> What You Score vs. What You Do NOT Yet</h2>
  <div class="sub">The boundary between "this wedge is worth building" and "this solution is the right one".</div>
  <table>
    <tr><th>You own</th><th>You do NOT own</th></tr>
    <tr><td><strong>Pain scoring.</strong> How badly does the target segment hurt? Weekly or monthly? Costs them time, money, or reputation?</td><td><strong>The feature set.</strong> Whether your specific product will fix it is next lesson. This is wedge selection, not product design.</td></tr>
    <tr><td><strong>Reach estimation.</strong> How many people in an addressable market have this pain? Thousands or millions? Narrow or broad?</td><td><strong>Exact TAM numbers.</strong> Estimation is enough. Precise market size matters for fundraising, not for killing wedges.</td></tr>
    <tr><td><strong>Willingness to pay signals.</strong> Are people already buying, building workarounds, or shipping solutions today? That beats any survey.</td><td><strong>Your own preference.</strong> Whether you love the wedge idea is irrelevant. The score is all that matters.</td></tr>
    <tr><td><strong>Contrast between wedges.</strong> Which one scores highest on all three? That is the winner, even if wedge #2 excites you more.</td><td><strong>Justifying sunk time.</strong> You may have researched a wedge for weeks. Killing it now is not wasted time; continuing to pursue it is.</td></tr>
  </table>

  <h2><span class="ix">3</span> The Signals That Tell You a Wedge Scores High</h2>
  <div class="sub">These metrics separate viable wedges from features and consulting jobs.</div>
  <table>
    <tr><th>Axis</th><th>High Score Signals</th><th>Low Score Signals</th></tr>
    <tr><td><strong>Pain</strong></td><td>Unprompted complaint by multiple customer interviews; costs hours weekly or causes measurable loss (revenue, sleep, reputation).</td><td>Customers only complain when prompted; "it would be nice to fix"; does not surface in a top-three priority list.</td></tr>
    <tr><td><strong>Reach</strong></td><td>Addressable market of thousands to millions in a defined role (founders, VCs, power users); growing segment, not shrinking.</td><td>Reach is single-digit or double-digit niches; requires explanation ("people who work on Tuesdays"); market is static or declining.</td></tr>
    <tr><td><strong>Willingness to Pay</strong></td><td>Customers already buy or ship workarounds today; premium pricing survives scrutiny; they defer other purchases to pay for this first.</td><td>Customers say "I would use it but I would not pay"; free tier dominates adoption; they use free competitors.</td></tr>
  </table>
  <div class="callout warn">
    <div class="ch">The sunk-cost trap</div>
    <p>You have researched a wedge for weeks. You have written a pitch for it. You have told friends you are building it. Killing it now feels like failure. It is not. Killing a low-scoring wedge early is the only rational move. The trap is doubling down on the wedge you love because you already invested time, not because the evidence improved. Kill it faster, not slower.</p>
  </div>

  <h2><span class="ix">4</span> How to Think Here: The Pain-Reach-WTP Matrix</h2>
  <div class="sub">Score each wedge and let the matrix pick the winner.</div>

  <div class="fig">
    <div class="fig-title">PAIN x REACH x WILLINGNESS TO PAY SCORING MATRIX</div>
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif"><text x="260" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1d1d1f">Pain &middot; Reach &middot; Pay ,  you multiply, never add</text><text x="260" y="48" text-anchor="middle" font-size="10" fill="#86868b">One weak axis collapses the whole score</text><rect x="60" y="74" width="80" height="44" rx="6" fill="#4f46e5" opacity="0.12"/><rect x="60" y="74" width="80" height="44" rx="6" fill="none" stroke="#4f46e5" stroke-width="1.3"/><text x="100" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Pain</text><text x="100" y="109" text-anchor="middle" font-size="14" font-weight="700" fill="#3730a3">9</text><text x="160" y="102" text-anchor="middle" font-size="16" font-weight="700" fill="#86868b">&times;</text><rect x="180" y="74" width="80" height="44" rx="6" fill="#4f46e5" opacity="0.12"/><rect x="180" y="74" width="80" height="44" rx="6" fill="none" stroke="#4f46e5" stroke-width="1.3"/><text x="220" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Reach</text><text x="220" y="109" text-anchor="middle" font-size="14" font-weight="700" fill="#3730a3">9</text><text x="280" y="102" text-anchor="middle" font-size="16" font-weight="700" fill="#86868b">&times;</text><rect x="300" y="74" width="80" height="44" rx="6" fill="#f5f5f7" stroke="#b25000" stroke-width="1.4"/><text x="340" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="#b25000">Pay</text><text x="340" y="109" text-anchor="middle" font-size="14" font-weight="700" fill="#b25000">2</text><text x="400" y="102" text-anchor="middle" font-size="16" font-weight="700" fill="#86868b">=</text><rect x="420" y="74" width="74" height="44" rx="6" fill="#f5f5f7" stroke="#86868b" stroke-width="1.2"/><text x="457" y="92" text-anchor="middle" font-size="10" font-weight="600" fill="#86868b">Score</text><text x="457" y="109" text-anchor="middle" font-size="14" font-weight="700" fill="#86868b">162</text><text x="260" y="138" text-anchor="middle" font-size="9" fill="#86868b">General Automation: huge pain &amp; reach, no one pays &rarr; dead</text><line x1="60" y1="156" x2="494" y2="156" stroke="#86868b" stroke-width="0.8"/><rect x="60" y="172" width="80" height="44" rx="6" fill="#4f46e5" opacity="0.12"/><rect x="60" y="172" width="80" height="44" rx="6" fill="none" stroke="#4f46e5" stroke-width="1.3"/><text x="100" y="190" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Pain</text><text x="100" y="207" text-anchor="middle" font-size="14" font-weight="700" fill="#3730a3">9</text><text x="160" y="200" text-anchor="middle" font-size="16" font-weight="700" fill="#86868b">&times;</text><rect x="180" y="172" width="80" height="44" rx="6" fill="#4f46e5" opacity="0.12"/><rect x="180" y="172" width="80" height="44" rx="6" fill="none" stroke="#4f46e5" stroke-width="1.3"/><text x="220" y="190" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Reach</text><text x="220" y="207" text-anchor="middle" font-size="14" font-weight="700" fill="#3730a3">8</text><text x="280" y="200" text-anchor="middle" font-size="16" font-weight="700" fill="#86868b">&times;</text><rect x="300" y="172" width="80" height="44" rx="6" fill="#4f46e5" opacity="0.12"/><rect x="300" y="172" width="80" height="44" rx="6" fill="none" stroke="#4f46e5" stroke-width="1.3"/><text x="340" y="190" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Pay</text><text x="340" y="207" text-anchor="middle" font-size="14" font-weight="700" fill="#3730a3">9</text><text x="400" y="200" text-anchor="middle" font-size="16" font-weight="700" fill="#86868b">=</text><rect x="420" y="172" width="74" height="44" rx="6" fill="#4f46e5"/><text x="457" y="190" text-anchor="middle" font-size="10" font-weight="600" fill="#ffffff">Score</text><text x="457" y="207" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">648</text><text x="260" y="236" text-anchor="middle" font-size="9" fill="#3730a3" font-weight="600">Context Brain: all three high &rarr; the wedge to build</text><rect x="60" y="262" width="434" height="44" rx="6" fill="#4f46e5" opacity="0.08"/><text x="277" y="281" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Takeaway</text><text x="277" y="298" text-anchor="middle" font-size="10" fill="#1d1d1f">A zero on willingness to pay makes a nonprofit, not a company.</text></svg>
    <div class="fig-cap">Because the three axes multiply, a single weak axis collapses the score: high pain and reach with no willingness to pay is a nonprofit feature, not a company to build.</div>
  </div>

  <ol>
    <li><strong>Score pain.</strong> On a scale of 1-10, how badly does this hurt? Does the customer volunteer the complaint unprompted, or only when pressed? Do they spend hours weekly, lose money, or damage their reputation?</li>
    <li><strong>Score reach.</strong> On a scale of 1-10, how many addressable customers have this pain? Thousands or millions? Is the segment growing or shrinking? Is it defined (founders, VCs, power users) or vague (people in general)?</li>
    <li><strong>Score willingness to pay.</strong> On a scale of 1-10, will they actually pay? Are they already buying or building solutions today? Can you charge a premium, or do free competitors dominate? Do they defer other work to pay for this first?</li>
    <li><strong>Multiply, do not sum.</strong> Score pain, reach, and willingness to pay from 1 to 10 each, then multiply them. Multiplying is the point: a single low axis collapses the whole score, exactly as it should. Any wedge with a single-digit axis is a feature or a consulting job. Pick the highest-scoring wedge and commit.</li>
  </ol>

  <div class="callout accent">
    <div class="ch">Say this in the interview</div>
    <p>"I scored each candidate wedge on pain, reach, and willingness to pay. The wedge with the highest score is not my favorite, but it is the one the market will actually pay for. That is why I am building it."</p>
  </div>

  <h2><span class="ix">5</span> Frameworks to Deploy</h2>
  <div class="sub">Three scoring and selection tools to run this week.</div>

  <h3>① The Product-Market Fit Test Applied to Wedge Selection</h3>
  <p>The core test separates viable wedges from features: when customers imagine losing your product, do they express genuine disappointment? This signal is stronger than any survey. If fewer than half your interview subjects say they would miss it, your willingness-to-pay score should be low. Superhuman used this exact discipline to validate their wedge: they started by narrowing ruthlessly to power users (founders, VCs), ignoring feedback from outside the segment. Over time, their core users became unable to imagine returning to standard email. This is the marker of a genuine wedge. Use this test to kill wedges that fail to inspire real attachment. If a wedge only generates mild disappointment, your willingness-to-pay score should be single digits. A wedge with low WTP is not a company.</p>

  <h3>② Pain-Reach-Willingness to Pay Scoring Framework: The Three-Axis Wedge Selector</h3>
  <p>For each candidate wedge, assign 1-10 scores on each axis. Pain: How badly it hurts, frequency and cost. Reach: How many addressable customers, addressable market size, and segment growth. Willingness to Pay: Do they already buy, can you charge premium pricing, do they prioritize this over other work? Sum the three scores (max 30). A score below 20 is a feature, not a wedge. A score of 20-24 is a viable wedge but not a clear winner. A score of 25 or higher is a wedge worth committing to. Superhuman scored high on all three: pain (high for power users), reach (significant in Silicon Valley, growing outward), willingness to pay (proven with sustained premium adoption despite free alternatives). Context Brain for AI Agents similarly scored high across the board: pain (acute, agents lose context constantly), reach (every AI builder), willingness to pay (customers already ship workarounds). Career OS scored low on WTP because the education market has structural low pricing power. General automation scored low on WTP because large players commoditized it. Ignore founder ego here; the score is final.</p>

  <h3>③ Paul Graham's Wedge-to-Continent: Start Narrow, Expand Later</h3>
  <p>The best wedges are narrow beachheads where you dominate completely before expanding. A wedge is <em class="k">not</em> a watered-down version of your original idea. It is a specific, narrow segment where pain is acute, reach is real, and willingness to pay is proven. Superhuman exemplifies this: they dominated premium email for Silicon Valley power users first, only expanding to teams and broader users after proving the wedge. Do not try to be a little bit better for everyone. Be exceptional for someone. The wedge is the someone. After you own the wedge and prove the model, then expand to the continent. Scoring on pain-reach-WTP ensures you pick a wedge where you can dominate, not one where you are perpetually fighting for scraps.</p>

  <h2><span class="ix">6</span> Worked Solution: How to Kill Your Favorites and Pick the Winner</h2>
  <div class="sub">The real scoring process. Three wedges, three scores, one winner. Follow along on yours.</div>

  <div class="callout">
    <div class="ch">The prompt</div>
    <p style="font-family:var(--font-ui);font-weight:600;">"I have three wedge candidates. Score them on pain, reach, and willingness to pay. Which one should I build, and why? Be ruthless: kill the one I love if the evidence does not back it."</p>
  </div>

  <p><strong>Step 1: Name three candidates.</strong> Three wedges emerged from customer conversations: a career operating system for students (a unified tool for job searches and internships), general automation for any workflow and role, and a context layer for AI agents (persistent memory and state across sessions).</p>

  <p><strong>Step 2: Score pain on each.</strong> Career OS pain: high (student job search is fragmented and stressful). General automation pain: high (every role has repetitive work). Context for agents pain: high (agents fail because they lose context). All three scored 8-9 on pain. Pain was not the differentiator.</p>

  <p><strong>Step 3: Score reach on each.</strong> Career OS reach: millions of students globally (large). General automation reach: anyone who does repetitive work (massive). Context for agents reach: growing cohort of AI builders (thousands, expanding). All three scored 8-9 on reach. Reach was not the differentiator either.</p>

  <p><strong>Step 4: Score willingness to pay.</strong> This is where the wedges diverged. Career OS WTP: 3. Why? The education market has structural low pricing power. Students are budget-conscious. Schools and universities resist paying software vendors. Premium pricing simply will not survive in this segment. General automation WTP: 2. Why? Large players (Zapier, cloud vendors) commoditized automation long ago. Customers expect free options and resist premium pricing. Context for agents WTP: 9. Why? Builders shipping production AI agents already buy solutions and will pay for things that prevent production failures. This was the only wedge where premium pricing was defensible.</p>

  <div class="flow">
    <span class="st">[Career OS: pain 8, reach 8, WTP 3]</span> <span class="nt">total 19/30 (feature, not wedge)</span>
     <span class="ar">↓</span>
    <span class="st">[General automation: pain 9, reach 9, WTP 2]</span> <span class="nt">total 20/30 (feature, not company)</span>
     <span class="ar">↓</span>
    <span class="st">[Context for agents: pain 9, reach 8, WTP 9]</span> <span class="nt">total 26/30 (clear winner)</span>
  </div>

  <p><strong>Step 5: Kill and commit.</strong> The career operating system had beautiful vision. A single tool for students to manage their entire job path from freshman year forward. But the evidence was clear: education markets have low pricing power. I killed it. General automation was exciting because the market seemed unlimited and easy to build. But customers did not want to pay for it once big players commoditized it. I killed that too. Context for agents scored highest and was the only wedge where all three axes were genuinely strong. That is the one I committed to.</p>

  <div class="callout good">
    <div class="ch">Why this wins</div>
    <p>I did not build the wedge I loved. I built the wedge the evidence backed. Career OS would have trapped me in education forever, with a slow-moving, low-pricing market. General automation would have put me in competition against entrenched players on price. Context for agents is a winner because the wedge is narrow (AI builders), the pain is acute (context loss causes production failures), and customers have pricing power and buy to solve it. The score forced discipline.</p>
  </div>

  <h2><span class="ix">7</span> Industry Case: Wuri Had Pain &amp; Novelty, But Nobody Would Pay</h2>
  <div class="sub">A single low axis, willingness to pay, quietly killed a promising AI reader.</div>
  <h3>Wuri: when a beloved consumer wedge fails the WTP test</h3>
  <p><strong>The company:</strong> Wuri (Y Combinator Winter 2024), founded by Akshay Megharaj and Pratik Gangwal, built an app that used AI to transform text-based web fiction into immersive visual novels, generating images, video, and audio in real time. The consumer reader concept was genuinely novel and demo-friendly. YC's launch post and the March 2024 announcement on X positioned it as a way for readers to consume fiction as Webtoon-style visual stories. <strong>The move:</strong> the team pursued the loved consumer wedge first, then pivoted from the consumer reader app toward enterprise AI during 2024 when the reader economics did not hold. <strong>Why it did not work:</strong> the pain and the novelty were real, but the willingness-to-pay axis stayed too low. Readers would not pay a premium for yet another AI interface layered on top of free fiction, acquisition costs kept rising, and once foundation models commoditized the thin UI and wrapper layer, there was no pricing moat left. Wuri is now listed as Inactive on its official YC company page.</p>
  <ul>
    <li><strong>High pain and high novelty could not rescue a low WTP score.</strong> Turning text into rich visual novels solved a real reader pain and looked impressive in demos, but interest and delight are not the same as a defensible price. The willingness-to-pay axis is the gate, and Wuri never cleared it.</li>
    <li><strong>The pivot was an attempt to buy pricing power, not just a new direction.</strong> Moving from the consumer reader toward enterprise AI was a hunt for a segment that would actually pay. Enterprises have more budget than casual readers, so the team chased pricing power the consumer wedge never had.</li>
    <li><strong>A thin wrapper has no pricing moat once the model layer commoditizes.</strong> When foundation models absorbed the image, video, and audio generation that was Wuri's core value, the remaining UI layer was easy to replicate. Low WTP plus rising customer-acquisition costs left no path to a business, and the company went inactive.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The builder takeaway</div>
    <p>Score every wedge on all three axes and let the lowest one decide. Wuri proves that acute pain and real novelty mean nothing if willingness to pay is weak. A single low axis kills the wedge no matter how much you love the demo. This is the cautionary mirror of the worked solution: where Context for Agents killed its favorites because WTP was strong, Wuri kept its favorite while WTP stayed low, and the market killed it instead.</p>
  </div>

  <h2><span class="ix">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">You have two wedge candidates. Wedge A: high pain (8), large reach (9), but low willingness to pay (2). Wedge B: lower pain (6), moderate reach (6), but very high willingness to pay (9). Which should you build?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Wedge A, because pain and reach are larger and the market is bigger.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Neither; both score too low to be worth a year of your life.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Wedge B, because willingness to pay is the strongest signal. Pain and reach are necessary, but WTP is the gate that separates companies from features or consulting jobs.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Wedge A, because pain is more important than pricing.</span></div>
    <div class="qexp">C: A wedge that scores low on any axis is not a company. Wedge A (8+9+2=19) is a feature or a nonprofit. Wedge B (6+6+9=21) is a viable wedge. The willingness-to-pay axis is the strongest signal that customers will actually buy, not just use. Ignore founder ego; the score decides.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">You have been working on a wedge for eight weeks and love the vision. The market research shows: pain is high, reach is reasonable, but willingness to pay is very low (customers expect it free or cheap). What is the right move?</div>
    <div class="opt" data-i="0"><span class="l">A</span><span>Build anyway; your passion and vision will overcome the pricing challenge.</span></div>
    <div class="opt" data-i="1"><span class="l">B</span><span>Kill the wedge now and move to the next candidate. Sunk time is not a reason to pursue a low-WTP wedge. Founders die slowly from loyalty to a beloved wedge nobody pays for.</span></div>
    <div class="opt" data-i="2"><span class="l">C</span><span>Pivot the wedge; maybe a different angle will fix the willingness-to-pay problem.</span></div>
    <div class="opt" data-i="3"><span class="l">D</span><span>Build an MVP and see if users will pay once they see the product.</span></div>
    <div class="qexp">B: Eight weeks of research is not wasted if you kill now. It is wasted if you build for another six months and discover the pricing problem is structural, not tactical. A low-WTP score is not a sign you have not built the product yet; it is a sign the market segment does not have pricing power. Kill it fast and move to the next candidate.</div>
  </div>

  <h2><span class="ix">✎</span> Apply It Yourself</h2>
  <div class="sub">Score three wedge candidates and kill all but the highest-scoring one. About 20 minutes.</div>

  <div class="callout">
    <div class="ch">Your rep</div>
    <p style="font-family:var(--font-ui);font-weight:600;">Name three wedge candidates (use your Lesson 2.2 list if you have one). For each, assign a 1-10 score on pain (how badly it hurts, frequency, cost), reach (addressable market size, segment growth), and willingness to pay (are they already buying, can you charge premium pricing). Sum each candidate. Kill any wedge that scores below 20 on total, or that has a single-digit score on any axis. Commit to the highest-scoring wedge, even if it is not your favorite. Write one sentence explaining why you killed the others.</p>
  </div>

  <p><strong>Hints</strong> (peek only if you are stuck):</p>
  <ul>
    <li>Willingness to pay is not what they say in a survey. It is what they already buy or build. Look at competing solutions customers are already paying for.</li>
    <li>A low pain plus high reach wedge is a vitamin. A high pain plus low reach wedge is a feature. Both kill. Only high on all three matters.</li>
    <li>If you love a wedge but the WTP score is low, kill it. Loyalty to a beloved idea that nobody pays for is how founders waste years.</li>
  </ul>

  <table>
    <tr><th>A strong scoring decision</th><th>A weak one</th></tr>
    <tr><td>Scores all three axes 1-10 based on evidence. Kills any candidate with a low score on any axis. Commits to the highest-scoring wedge even if it was not the founder's favorite. Explains why the others scored low.</td><td>Picks the wedge based on gut or founder preference. Ignores low scoring on WTP because "we have not built it yet so we don't know." Tries to build multiple wedges simultaneously instead of committing to one.</td></tr>
  </table>

  <div class="callout accent">
    <div class="ch">Make it live</div>
    <p>Score your three candidates right now in a doc or spreadsheet, then share your scores and your winner with one peer or mentor. Naming the decision out loud (and defending why you killed the others) is the first sign you own the wedge selection discipline.</p>
  </div>

  __NAV__
</div>
`