/* ===== Chapter 07 - Documentation: PRD and User Journey - Build Live Products (2026) =====
   AI-native. Worked example = GeniOS (public framing: Context Brain for AI Agents). No em-dashes. */

"7.1": `<div class="wrap">
<div class="les-kicker">Chapter 7 &middot; Lesson 7.1</div>
<h1 class="les-title">The One-Page PRD</h1>
<div class="les-meta">
<span class="pill">Documentation, the spec</span>
<span class="pill">~13 min</span>
<span class="pill">Founder skill</span>
<span class="pill">core</span>
</div>
<p class="motto">A short spec people read beats a long one nobody opens.</p>
<p class="lead">By the end you will have <em class="k">a one-page PRD for your next build</em> that names the user, the problem, the outcome, the core flow, the non-goals, and the done-bar, all on a single sheet someone can read in two minutes and act on without asking you a question.</p>

<h2><span class="ix">1</span> Your Mandate</h2>
<div class="sub">Write the spec everyone will actually open.</div>
<p>Your mandate is to compress an entire feature into one page that fits on one screen, so that any engineer, designer, or future-you can read it once and start building in the right direction. The temptation is to write more: more requirements, more edge cases, more diagrams, until the doc becomes a monument nobody reads and you become the only person who knows what to build. Resist it. A PRD is not a contract that protects you, it is a thinking tool that aligns people. The discipline of fitting six sections on one page forces you to decide what actually matters before you ask anyone to build it. If you cannot say who the user is, what they cannot do today, and how you will know you are done, in under a page, then you do not yet understand the work well enough to start it.</p>

<h2><span class="ix">2</span> You Own vs. You Do NOT Own</h2>
<div class="sub">The PRD is yours; the implementation is theirs.</div>
<table>
<tr><th>You own</th><th>You do NOT own</th></tr>
<tr><td><strong>The problem and the user.</strong> Naming exactly whose pain this solves and what that pain is.</td><td><strong>The internal architecture.</strong> How the team structures services, schemas, and modules to deliver it.</td></tr>
<tr><td><strong>The outcome.</strong> The single observable change in the world that means this shipped.</td><td><strong>The implementation tactics.</strong> Which libraries, patterns, or data stores the engineers reach for.</td></tr>
<tr><td><strong>The non-goals.</strong> What is explicitly out of scope so the build stays focused.</td><td><strong>The line-by-line UI.</strong> Exact pixel placement, copy, and component choices the designer makes.</td></tr>
<tr><td><strong>The done-bar.</strong> The concrete test that decides whether the work is finished.</td><td><strong>The day-to-day sequencing.</strong> The order tasks get picked up and who does what when.</td></tr>
</table>

<h2><span class="ix">3</span> Signals Your PRD Is Failing</h2>
<div class="sub">Watch for these before the build goes sideways.</div>
<table>
<tr><th>Signal</th><th>Reads as</th><th>Why it matters</th></tr>
<tr><td>Nobody references the doc after kickoff</td><td>It is too long or too vague to be useful</td><td>If it is not the source of truth, decisions get made in chat threads you cannot see</td></tr>
<tr><td>Engineers keep asking "is X in scope?"</td><td>Your non-goals section is empty or weak</td><td>Unbounded scope is how a two-week build becomes a two-month one</td></tr>
<tr><td>You cannot answer "how do we know it works?"</td><td>There is no done-bar, only a vibe</td><td>Without a finish line the team ships forever and never declares victory</td></tr>
<tr><td>The doc spills past one page</td><td>You are specifying solution detail, not intent</td><td>Length signals you are boxing in the builders instead of pointing them</td></tr>
</table>
<div class="callout warn">
<div class="ch">The length trap</div>
<p>A PRD that grows past one page is not more thorough, it is less read. Every paragraph you add lowers the odds anyone finishes it. When you feel the urge to add a section, ask whether it belongs in non-goals instead. Cutting scope is almost always the better edit.</p>
</div>

<h2><span class="ix">4</span> How to Think Here: One Page or It Does Not Exist</h2>
<div class="sub">The constraint is the feature, not a limitation.</div>
<div class="fig">
<div class="fig-title">THE ONE-PAGE PRD TEMPLATE</div>
<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif"><rect x="150" y="14" width="220" height="252" rx="6" fill="#ffffff" stroke="#1d1d1f" stroke-width="1.3"/><text x="260" y="34" text-anchor="middle" font-size="11" font-weight="700" fill="#1d1d1f">One sheet, six sections</text><rect x="166" y="44" width="188" height="30" rx="5" fill="#f5f5f7" stroke="#86868b" stroke-width="1"/><text x="260" y="63" text-anchor="middle" font-size="10" font-weight="700" fill="#1d1d1f">Title and owner</text><rect x="166" y="78" width="188" height="30" rx="5" fill="#f5f5f7" stroke="#86868b" stroke-width="1"/><text x="260" y="97" text-anchor="middle" font-size="10" font-weight="700" fill="#1d1d1f">User and problem</text><rect x="166" y="112" width="188" height="30" rx="5" fill="#f5f5f7" stroke="#86868b" stroke-width="1"/><text x="260" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#1d1d1f">Outcome</text><rect x="166" y="146" width="188" height="30" rx="5" fill="#f5f5f7" stroke="#86868b" stroke-width="1"/><text x="260" y="165" text-anchor="middle" font-size="10" font-weight="700" fill="#1d1d1f">Core flow (3 steps)</text><rect x="166" y="180" width="188" height="30" rx="5" fill="#f5f5f7" stroke="#86868b" stroke-width="1"/><text x="260" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="#1d1d1f">Non-goals</text><rect x="166" y="222" width="188" height="34" rx="5" fill="#4f46e5" opacity="0.12"/><rect x="166" y="222" width="188" height="34" rx="5" fill="none" stroke="#4f46e5" stroke-width="1.6"/><text x="260" y="237" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Done-bar</text><text x="260" y="250" text-anchor="middle" font-size="9" fill="#3730a3">the test that ends the work</text><path d="M 392 239 L 414 239" stroke="#4f46e5" stroke-width="1.4" fill="none"/><path d="M 408 234 L 414 239 L 408 244" stroke="#4f46e5" stroke-width="1.4" fill="none"/><text x="438" y="231" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">most</text><text x="438" y="243" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">often</text><text x="438" y="255" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">skipped</text><text x="260" y="294" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">If it fits on one page and names when you are done, it ships.</text></svg>
<div class="fig-cap">The whole PRD is one page of six sections, and the one that actually ends the build (the done-bar) is the one founders skip most.</div>
</div>
<ol>
<li><strong>Intent over implementation.</strong> Your job is to say what the user gets and why, not how the code achieves it. The moment you start specifying data models you have stopped writing a PRD and started doing the engineer's job badly.</li>
<li><strong>The non-goals do the heavy lifting.</strong> A one-pager stays one page because you wrote down what you are deliberately ignoring. Every "not now" you commit to in writing is a fight you do not have to have mid-build.</li>
<li><strong>A done-bar makes the work end.</strong> If you cannot describe a concrete test that flips the feature from unfinished to finished, you have not defined the work, you have only described a direction.</li>
</ol>
<div class="callout accent">
<div class="ch">Say this to yourself</div>
<p>If it does not fit on one page, I do not understand it well enough to ask anyone to build it.</p>
</div>

<h2><span class="ix">5</span> Frameworks to Deploy</h2>
<div class="sub">Three tools that keep the spec short and the build focused.</div>
<h3>The One-Page PRD</h3>
<p>Six sections, one sheet: the user, the problem, the outcome, the core user flow, the non-goals, and the done-bar (your definition of done). This is a lean-PRD convention you will see described by writers like Atlassian and others, not a single trademarked artifact, so treat it as a synthesis you adapt. Applied: instead of a ten-page requirements doc for a new export feature, you write one sheet. User is the analyst who lives in spreadsheets. Problem is they re-type data by hand every Monday. Outcome is they click once and get a clean file. Core flow is three steps. Non-goals exclude scheduling and formatting options. Done-bar is "the analyst exports last week's data and opens it in Excel with no manual cleanup." That sheet is enough to build from.</p>
<h3>Shape Up Pitch</h3>
<p>From Basecamp's Shape Up, a pitch has exactly five ingredients in this order: Problem, Appetite, Solution, rabbit holes, and no-gos. The Problem is the raw idea or use case that motivates the work. Appetite is "how much time we want to spend and how that constrains the solution." The Solution is the core elements you came up with, in a form people grasp immediately. Applied to your export feature: Problem is the Monday re-typing. Appetite is a small batch, one designer and a programmer for one to two weeks. Solution is a fat-marker sketch of one button and a download. Rabbit holes flag the messy date-format edge cases. No-gos exclude scheduling. The Shape Up pitch maps almost one-to-one onto your one-page PRD.</p>
<h3>Non-Goals as a First-Class Section</h3>
<p>Writing down what you will NOT build is the discipline that keeps the doc to one page and the build focused. It is the same move Shape Up calls no-gos: "anything specifically excluded from the concept." Applied: when you list "no scheduled exports, no custom column ordering, no PDF format" as explicit non-goals, three things happen at once. The doc shrinks because you stopped describing them. The build stays scoped because nobody quietly adds them. And the team stops asking you about them because the answer is already on the page. Non-goals are not an afterthought, they are the section that earns the other five their space.</p>

<h2><span class="ix">6</span> Worked Solution: How I Wrote the One-Page PRD for GeniOS</h2>
<div class="sub">Six sections for a Context Brain feature, on one sheet.</div>
<p><strong>Step 1: I named the user and the problem first.</strong> GeniOS is a Context Brain for AI Agents. The user is a team running agents in production whose agents lose context across sessions. The problem is concrete: an agent forgets who a user is, what state a task is in, and what it is authorized to do the moment a new session starts, so it repeats questions and makes decisions on stale information. I wrote that in two sentences and refused to expand it.</p>
<p><strong>Step 2: I wrote the outcome as one observable change.</strong> Not "better memory," which is a vibe. The outcome is that the agent recalls the right context at the moment it matters: the relationship between entities, the current state, and the authority it has, without the operator re-feeding any of it. One sentence, one observable change.</p>
<p><strong>Step 3: I reduced the core flow to three steps.</strong> Write context, store it across dimensions (relationship graph, state, authority), retrieve it on demand. That is the whole path. A plain vector database only finds similar memories, so I named the three-dimensional store as the differentiator inside the flow, not in a separate essay.</p>
<p><strong>Step 4: I made non-goals first-class to protect the page.</strong> I explicitly excluded user-tunable retrieval algorithms and enterprise multi-tenant controls. Both are real future asks, and writing "not in this build" stopped them from leaking in and doubling the scope. Those two lines saved me roughly half a page of caveats.</p>
<p><strong>Step 5: I wrote a done-bar that ends the work.</strong> The feature is done when the agent recalls correct context across a scripted test session: it answers a state question correctly after a session break, references the right relationship, and respects its authority, with zero manual re-feeding. That is a test, not a feeling, so the team knows exactly when to stop.</p>
<div class="flow">
<span class="st">[User: teams whose agents lose context]</span> <span class="ar">&rarr;</span> <span class="st">[Problem: forgets state and authority]</span> <br>
<span class="ar">&rarr;</span> <span class="st">[Outcome: recalls the right context when it matters]</span> <span class="ar">&rarr;</span> <span class="st">[Flow: write &middot; store across dimensions &middot; retrieve]</span> <br>
<span class="ar">&rarr;</span> <span class="st">[Non-goals: no tunable retrieval, no multi-tenant controls]</span> <span class="ar">&rarr;</span> <span class="nt">Done-bar: agent recalls correct context across a test session</span>
</div>
<div class="callout good">
<div class="ch">Why this matters</div>
<p>Every section above fits on one sheet, and the engineer who picks it up knows the user, the win, the path, the boundary, and the finish line without a single meeting. That is the entire point: the page does the alignment so you do not have to.</p>
</div>

<h2><span class="ix">7</span> Industry Case: OpenSpec Turns the Spec Into the Source of Truth</h2>
  <div class="sub">A whole company built on the idea that a short shaped spec beats jumping to code.</div>
  <h3>How a YC W26 startup made the concise spec the thing both humans and AI agents read first</h3>
  <p><strong>The company:</strong> OpenSpec, built by Fission AI in Y Combinator's Winter 2026 (W26) batch and founded by Tabish Bidiwale, previously an early engineer and team lead at quantum-computing startup Q-CTRL, is an open-source, spec-driven framework that captures what you are building, why, and how before a coding agent or a teammate writes a line of code. <strong>The move:</strong> instead of letting people vibe-code from a chat thread, OpenSpec adds a spec layer to the codebase. A living spec library of markdown documents describes how the system works, and a changes system gives every feature a proposal (the why), a design, an implementation task list, and spec deltas that merge back into the library when the work ships. <strong>Why it worked:</strong> the founder names the real bottleneck precisely. In his words, "The bottleneck isn't the model. It's underspecification." A concise shaped spec, read once, aligns both the humans and the agents before anyone starts building, which is exactly the bet behind a one-page PRD.</p>
  <ul>
    <li>Bidiwale describes teams shifting "from code review to plan review," and argues "It's easier to read a markdown spec than a large diff," the same reason a one-page PRD lands the alignment before the build instead of after.</li>
    <li>He frames the work as people management, noting "managing coding agents is a lot like managing a team" and that "Things break when there's no alignment on what you're building and why," which is the precise failure a concise spec is meant to prevent.</li>
    <li>OpenSpec is open source (MIT-licensed, TypeScript, repo Fission-AI/OpenSpec created around August 2025) and integrates with 20+ AI coding tools including Claude Code, Cursor, Windsurf, and Copilot. Its YC launch cited 27k+ GitHub stars in under six months, with the repo continuing its documented rapid climb into mid-2026.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The builder takeaway</div>
    <p>OpenSpec is a whole company built on this lesson: write the shaped spec first so your thinking persists and the team stays aligned. As the founder puts it, specs mean "Your thinking persists" instead of vanishing in a chat. Your one-page PRD is the small, durable version of the same move, the single source of truth people read before a line of code gets written.</p>
  </div>

  <h2><span class="ix">&#10003;</span> Check Yourself</h2>
<div class="quiz" data-correct="1">
<div class="q">Why does the non-goals section do so much work in keeping a PRD to one page?</div>
<div class="opt" data-i="0"><span class="l">A</span><span>It lists every edge case so engineers never have to ask questions</span></div>
<div class="opt" data-i="1"><span class="l">B</span><span>By committing in writing to what you will not build, you stop describing it and stop the team from quietly adding it</span></div>
<div class="opt" data-i="2"><span class="l">C</span><span>It replaces the done-bar by defining success as the absence of excluded features</span></div>
<div class="opt" data-i="3"><span class="l">D</span><span>It signals seniority to stakeholders, which shortens review meetings</span></div>
<div class="qexp">B is correct. Non-goals keep the page short because you stop writing about the excluded work, and they keep the build focused because nobody adds it mid-cycle. A confuses non-goals with exhaustive edge-case specs, C wrongly merges two distinct sections, and D mistakes a real scoping tool for a political one.</div>
</div>
<div class="quiz" data-correct="2">
<div class="q">In Shape Up, what is the difference between an appetite and an estimate?</div>
<div class="opt" data-i="0"><span class="l">A</span><span>An appetite is a more precise estimate produced after the design is finished</span></div>
<div class="opt" data-i="1"><span class="l">B</span><span>An appetite is the engineer's number and an estimate is the designer's number</span></div>
<div class="opt" data-i="2"><span class="l">C</span><span>An appetite starts with a fixed time budget and lets the design flex to fit it, the inverse of an estimate</span></div>
<div class="opt" data-i="3"><span class="l">D</span><span>An appetite applies only to six-week projects while estimates apply to everything smaller</span></div>
<div class="qexp">C is correct. Shape Up puts it as "Appetites start with a number and end with a design," the inverse of an estimate, under the principle "fixed time, variable scope." A reverses the direction, B invents a role split, and D wrongly ties appetite to one fixed size when small-batch and big-batch cycles are both examples.</div>
</div>

<h2><span class="ix">&#9998;</span> Apply It Yourself</h2>
<div class="sub">Write one real PRD. About 30 minutes.</div>
<div class="callout">
<div class="ch">Draft the one-page PRD for your next build</div>
<p style="font-family:var(--font-ui);font-weight:600;">Pick the next feature you actually plan to ship and write all six sections on a single page: title and owner, user and problem, outcome, core flow in three steps, non-goals, and a done-bar. If it spills past one page, cut by adding to non-goals, not by deleting intent.</p>
</div>
<p><strong>Hints</strong> (peek only if you are stuck):</p>
<ul>
<li>Write the user and problem before anything else. If you cannot name whose pain it is, you are not ready to spec it.</li>
<li>State the outcome as one observable change in the world, not an adjective like "faster" or "better."</li>
<li>Force the core flow to exactly three steps. If it needs more, the feature is two features.</li>
<li>Make the done-bar a test someone could run, not a feeling. "X user does Y and gets Z with no manual cleanup."</li>
</ul>
<table>
<tr><th>Strong</th><th>Weak</th></tr>
<tr><td>Done-bar: "Analyst exports last week's data and opens it in Excel with zero manual cleanup."</td><td>Done-bar: "Export feature feels polished and works well."</td></tr>
<tr><td>Non-goals: "No scheduled exports, no custom column order, no PDF."</td><td>Non-goals section left blank or marked "TBD."</td></tr>
</table>
<div class="callout accent">
<div class="ch">Make it live</div>
<p>Hand the page to one engineer or teammate and ask them to tell you, without you explaining anything, who the user is and how they will know the work is done. If they can, your spec works. If they cannot, you have found the section to rewrite before a single line of code gets written.</p>
</div>
__NAV__
</div>`,

"7.2": `<div class="wrap">
<div class="les-kicker">Chapter 7 &middot; Lesson 7.2</div>
<h1 class="les-title">Mapping the User Journey</h1>
<div class="les-meta">
<span class="pill">Documentation</span>
<span class="pill">~12 min</span>
<span class="pill">Founder skill</span>
<span class="pill">core</span>
</div>
<p class="motto">You do not ship screens. You ship a journey, and most of it happens where your screens cannot see.</p>
<p class="lead">By the end you will have <em class="k">a single-page journey map of your product, first touch to repeat use, with the friction marked and the value moment circled</em> so you find the broken parts of the experience before you spend a week building the wrong ones.</p>

<h2><span class="ix">1</span> Your Mandate</h2>
<div class="sub">See the whole experience, not just the parts you happen to be coding this week.</div>
<p>Your mandate is to draw the entire path a single user walks, from the moment they first hear your product exists to the moment they come back for the third time without being reminded, and to mark exactly where that path stalls. Most founders skip this because they already "know" the flow in their head. They do not. What lives in your head is the happy-path click sequence inside your app. The real journey includes the tab they opened before yours, the doubt they felt on the pricing page, the moment they got stuck and put their phone down, and the silence after signup where nothing pulled them back. You are mapping that whole thing on one page so that the friction is visible to your whole team, not buried in your assumptions.</p>

<h2><span class="ix">2</span> You Own vs. You Do NOT Own</h2>
<div class="sub">Map the experience the user has. Do not redesign the user.</div>
<table>
<tr><th>You own</th><th>You do NOT own</th></tr>
<tr>
<td><strong>The whole arc.</strong> Every stage from first touch to repeat use, including the gaps between screens where the user is offline, waiting, or deciding.</td>
<td><strong>The user's life.</strong> You do not control their schedule, their mood, or the seven other tabs competing for the next ten seconds of attention.</td>
</tr>
<tr>
<td><strong>The friction markers.</strong> Naming where the journey stalls, where someone hesitates, drops off, or has to think too hard, and being honest about it.</td>
<td><strong>The reason they came.</strong> You did not create their underlying goal. You can serve it or block it, but the motivation existed before you.</td>
</tr>
<tr>
<td><strong>The value moment.</strong> Defining the exact instant the user first gets the promised payoff, and protecting the shortest path to it.</td>
<td><strong>Their patience.</strong> You cannot grant yourself more steps before the payoff. Every step you add before value is spent, not earned.</td>
</tr>
<tr>
<td><strong>The emotional read.</strong> Capturing how each stage feels (curious, confused, relieved, hooked) so you design for the human, not the wireframe.</td>
<td><strong>The competitor's map.</strong> You do not get to assume your flow is the only one they know. They are comparing it to the smoothest app they used today.</td>
</tr>
</table>

<h2><span class="ix">3</span> Signals You Are Mapping It Right</h2>
<div class="sub">A real journey map surfaces things you did not already know.</div>
<table>
<tr><th>Signal</th><th>Reads as</th><th>Why it matters</th></tr>
<tr>
<td>The map includes moments with no screen attached</td>
<td>You are seeing the experience, not just the UI</td>
<td>The biggest friction usually lives offline, in waiting, doubt, or switching context, where your analytics are blind</td>
</tr>
<tr>
<td>You can point to one stage and say "this is the value moment"</td>
<td>You know what you are actually selling</td>
<td>If you cannot name it, you cannot shorten the path to it, and you will optimize the wrong steps</td>
</tr>
<tr>
<td>At least one stage makes the team uncomfortable</td>
<td>You found a real drop-off, not a flattering story</td>
<td>An honest map exposes the gap users fall into. A vanity map hides it and you build on the lie</td>
</tr>
<tr>
<td>Each stage has an emotion written next to it</td>
<td>You are designing for a person under pressure</td>
<td>Confusion and impatience kill activation faster than missing features. You only fix what you named</td>
</tr>
</table>
<div class="callout warn">
<div class="ch">The trap: mapping your product instead of their journey</div>
<p>If every box on your map is a screen in your app, you have drawn a sitemap, not a journey. A journey map starts before the user touches your product and continues after they close it. The frame where they almost did not sign up, the hour after onboarding where nothing brought them back: those are the boxes that decide whether you have a business. Draw them.</p>
</div>

<h2><span class="ix">4</span> How to Think Here: Find the Friction Before You Build It</h2>
<div class="sub">Walk the path as the user, in order, and mark where it hurts.</div>
<div class="fig">
<div class="fig-title">THE END-TO-END JOURNEY, WITH THE VALUE MOMENT STANDING OUT</div>
<svg viewBox="0 0 520 306" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
<text x="260" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#1d1d1f">The journey is a line. One stage delivers the promise.</text>

<line x1="34" y1="150" x2="486" y2="150" stroke="#86868b" stroke-width="2"/>
<polygon points="486,150 476,145 476,155" fill="#86868b"/>

<rect x="34" y="118" width="96" height="64" rx="8" fill="#f5f5f7" stroke="#1d1d1f" stroke-width="1.3"/>
<text x="82" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#1d1d1f">First touch</text>
<text x="82" y="163" text-anchor="middle" font-size="9" fill="#86868b">Curious</text>

<rect x="146" y="118" width="96" height="64" rx="8" fill="#f5f5f7" stroke="#1d1d1f" stroke-width="1.3"/>
<text x="194" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#1d1d1f">Onboarding</text>
<text x="194" y="163" text-anchor="middle" font-size="9" fill="#86868b">Effort, doubt</text>

<rect x="258" y="86" width="104" height="128" rx="10" fill="#4f46e5" opacity="0.12"/>
<rect x="258" y="86" width="104" height="128" rx="10" fill="none" stroke="#4f46e5" stroke-width="1.8"/>
<text x="310" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">VALUE MOMENT</text>
<text x="310" y="138" text-anchor="middle" font-size="9" fill="#3730a3">"it works"</text>
<text x="310" y="151" text-anchor="middle" font-size="9" fill="#3730a3">the aha</text>
<text x="310" y="180" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">delivers the</text>
<text x="310" y="193" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">promise</text>

<rect x="378" y="118" width="96" height="64" rx="8" fill="#f5f5f7" stroke="#1d1d1f" stroke-width="1.3"/>
<text x="426" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#1d1d1f">Repeat</text>
<text x="426" y="163" text-anchor="middle" font-size="9" fill="#86868b">Habit, trust</text>

<line x1="194" y1="200" x2="194" y2="226" stroke="#b25000" stroke-width="1.3"/>
<circle cx="194" cy="232" r="5" fill="#b25000"/>
<path d="M194 237 q-4 7 0 12 q4 -5 0 -12" fill="#b25000"/>
<text x="194" y="272" text-anchor="middle" font-size="10" font-weight="700" fill="#b25000">BLEEDING HERE</text>
<text x="194" y="286" text-anchor="middle" font-size="9" fill="#b25000">drop-off before value</text>

<line x1="34" y1="74" x2="242" y2="74" stroke="#86868b" stroke-width="1" stroke-dasharray="3,3"/>
<text x="138" y="66" text-anchor="middle" font-size="9" fill="#86868b">overhead &middot; shorten it</text>
</svg>
<div class="fig-cap">The whole journey is overhead except the indigo Value Moment, the one stage that delivers the promise; the orange leak marks where you bleed users before they ever reach it.</div>
</div>
<ol>
<li><strong>Walk it in order, as one person.</strong> Do not jump around your feature list. Start where the user starts (an ad, a tweet, a friend's link) and move forward one stage at a time, narrating what they want and what they do next.</li>
<li><strong>Write the emotion before the screen.</strong> At each stage ask "how does this feel?" first, "what do they tap?" second. Friction is an emotional event (confusion, impatience, distrust) long before it shows up as a churned account.</li>
<li><strong>Circle the value moment, then attack everything before it.</strong> Find the single stage where the user first gets what you promised. Every step earlier is overhead. Your job is to make the user reach the circle faster and almost guarantee they arrive.</li>
</ol>
<div class="callout accent">
<div class="ch">Say this to yourself</div>
<p>"My product is not the screens. It is the path. Show me where the path breaks before I build another feature nobody reaches."</p>
</div>

<h2><span class="ix">5</span> Frameworks to Deploy</h2>
<div class="sub">Three tools to draw the journey, locate the payoff, and see the moments your screens never show.</div>
<h3>The User Journey Map</h3>
<p>A journey map charts the experience across stages (first touch, onboarding, the core value moment, repeat and retention) and at each stage captures four things: the user's goal, their action, their emotion, and the friction they hit. It is a standard UX artifact precisely because it forces those four columns to be filled in honestly. Applied: for a note-taking app, the onboarding stage might read goal "capture my first thought," action "create a note," emotion "mild impatience at the empty state," friction "no prompt telling me what to do, so I close the tab." Now you know exactly what to fix in onboarding, and it is not a feature, it is a single empty-state instruction.</p>
<h3>The Critical Path and the Value Moment</h3>
<p>The value moment is the single instant the user first receives the promised value (the industry calls it the aha moment). Everything before it is overhead to be minimized, and the time it takes to get there is your time-to-value: the longer it is, the more users churn before they ever feel the payoff. Applied: for a payments tool, the value moment is "first dollar received," not "account created." So the critical path is everything strictly required to receive a dollar, and you ruthlessly cut steps that do not move the user toward that. Tax forms, team invites, and branding settings all wait. They are not on the critical path to the aha.</p>
<h3>Storyboarding</h3>
<p>Storyboarding draws the journey as frames, like a film, including the offline and emotional moments, not just the screens. Borrowed from animation, it forces you to depict the user in their real context: where they are, who is with them, what they feel between taps. Applied: storyboard a grocery-delivery user and you draw not just the checkout screen but the frame where they are standing in their kitchen wondering if the order will arrive before dinner, and the frame where the doorbell rings. Those offline frames reveal that the real anxiety is "will it come on time," which no checkout screen ever surfaced, and that is what you must design for.</p>

<h2><span class="ix">6</span> Worked Solution: How I Mapped the User Journey for GeniOS</h2>
<div class="sub">GeniOS is a Context Brain for AI Agents: it stores an agent's memory and context so agents do not lose what they knew across sessions.</div>
<p><strong>Step 1: Name the user and the promise.</strong> The user is a developer integrating GeniOS into their agent. The promise is simple: your agent will not forget. So I wrote the journey for one developer, not a buyer persona, and I held the promise next to every stage to ask "has the promise been delivered yet?" Until the answer is yes, everything is overhead.</p>
<p><strong>Step 2: List the stages in order.</strong> Discover GeniOS, sign up, connect the agent, write the first piece of context, retrieve it correctly across a new session, then rely on it repeatedly. Six stages, drawn left to right, before I touched a single screen design. I wrote the developer's emotion under each: curious, cautious, "is this wired up right," focused, and then the one that matters most.</p>
<p><strong>Step 3: Circle the value moment.</strong> The promise is "your agent does not lose context." That is not delivered at signup, and not when the first context is written. It is delivered the first time the agent starts a fresh session and retrieves the right context correctly, the relationship, the state, the authority, intact. That first successful retrieval is the activation moment. Everything before it is overhead I have to minimize.</p>
<p><strong>Step 4: Mark the friction before the value moment.</strong> The map exposed the danger zone: between "connect the agent" and "first successful retrieval," a developer can write context, start a new session, and get back something that looks plausible but is not what they meant (the failure mode of a plain vector store that only finds similar memories). If their very first retrieval is fuzzy, they conclude GeniOS is "just another vector database" and churn before activation. That gap, not any later feature, was the thing to fix first.</p>
<p><strong>Step 5: Shorten the path and protect the first retrieval.</strong> So I cut steps before value (no org setup, no dashboards required to write the first context) and I invested everything in making that first retrieval exact and obvious, with a clear "this is the right context, not just a similar one" confirmation. Activation goes up when the developer's first retrieval is unmistakably correct.</p>
<div class="flow">
<span class="st">[Discover]</span> <span class="ar">&rarr;</span> <span class="st">[Sign up]</span> <span class="ar">&rarr;</span> <span class="st">[Connect agent]</span><br>
<span class="ar">&rarr;</span> <span class="st">[Write first context]</span> <span class="ar">&rarr;</span> <span class="st">[First correct retrieval = aha]</span><br>
<span class="ar">&rarr;</span> <span class="st">[Rely on it across sessions]</span> <span class="ar">&rarr;</span> <span class="nt">Minimize everything before retrieval; make the first one unmistakably correct</span>
</div>
<div class="callout good">
<div class="ch">Why this matters</div>
<p>Before the map, I would have polished the signup flow and the dashboard. The journey map showed those are overhead. The whole business turns on one moment, the first correct retrieval, and on the friction sitting right before it. Map the journey and you stop optimizing the parts that do not decide whether the user stays.</p>
</div>

<h2><span class="ix">7</span> Industry Case: Ficra Turned Journey Mapping Into the Product</h2>
  <div class="sub">If teams burn a quarter of their time hunting for friction by hand, the live journey map is the product.</div>
  <h3>A source of truth for every screen and flow your users actually walk</h3>
  <p><strong>The company:</strong> Ficra, a Y Combinator Summer 2024 (S24) company founded in 2024 by Omar El-Sadany and Mohammed Abid, childhood friends of more than 25 years building their third company together. Omar had previously founded Sawa and was an early Tech Lead at Voicea (acquired by Cisco), while Mohammed led Salams, scaling it to millions of users before its acquisition by Match Group, so both had lived the pain of journey friction at scale before building a tool for it. <strong>The move:</strong> instead of treating the user journey as a one-time whiteboard exercise, Ficra built it into a live product, "a live, visual map of your users' journeys: every screen, flow, A/B test, push notification and email," positioned as "the source of truth for every product screen and user flow." <strong>Why it worked:</strong> it attacked a real, measured cost. Ficra's pitch is that product teams "no longer waste 25% of their time auditing complex user flows to assess product quality and find the blind spots in funnels," which is exactly the blind-spot-in-the-journey problem this lesson is about, made continuous.</p>
  <ul>
    <li>Ficra unifies the whole end-to-end path in one place: screens, flows, A/B tests, push notifications, and emails. That is the same insight as this lesson, that the journey is more than the screens you happen to be coding, except Ficra keeps the map live instead of letting it go stale the day after the workshop.</li>
    <li>The framing is explicitly about finding "blind spots in funnels," the offline and between-screen gaps where users drop off. Ficra is built on the premise that you must see the whole journey to know where friction actually sits, rather than guessing from the parts your analytics already cover.</li>
    <li>The founders' own history (scaling a consumer app to millions of users, then an acquisition) is a credible journey-friction origin story. Having repeatedly audited complex flows by hand, they turned the manual mapping work into a product so other teams stop spending a quarter of their time on it.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The builder takeaway</div>
    <p>Ficra is this lesson productized: you cannot fix friction you cannot see, so you map the entire journey, every screen and flow, not just the parts in front of you. Draw your end-to-end map by hand first, the way this lesson asks, and treat it as living. The blind spots in your funnel are where the users, and the business, are leaking.</p>
  </div>

  <h2><span class="ix">&#10003;</span> Check Yourself</h2>
<div class="quiz" data-correct="2">
<div class="q">You map your app's journey and every single stage corresponds to a screen in your product. What is the most likely problem?</div>
<div class="opt" data-i="0"><span class="l">A</span><span>Nothing, a journey should match your screens one to one</span></div>
<div class="opt" data-i="1"><span class="l">B</span><span>You have too many screens and should consolidate them</span></div>
<div class="opt" data-i="2"><span class="l">C</span><span>You drew a sitemap, not a journey; the offline and emotional moments where real friction lives are missing</span></div>
<div class="opt" data-i="3"><span class="l">D</span><span>You forgot to add analytics events to each screen</span></div>
<div class="qexp">C is correct. A journey map starts before the user touches your product and continues after they close it. If every box is a screen, you have charted your UI, not the experience, and the biggest friction (doubt, waiting, context switching, the offline stay) is invisible. That is exactly the kind of blind spot in the funnel that a live journey map exposes.</div>
</div>
<div class="quiz" data-correct="1">
<div class="q">For a payments product, which stage should you circle as the value moment, and what follows from that choice?</div>
<div class="opt" data-i="0"><span class="l">A</span><span>Account created, because it means onboarding succeeded</span></div>
<div class="opt" data-i="1"><span class="l">B</span><span>First dollar received, because that is when the promise is delivered, so everything before it is overhead to minimize</span></div>
<div class="opt" data-i="2"><span class="l">C</span><span>Branding settings saved, because a polished account signals seriousness</span></div>
<div class="opt" data-i="3"><span class="l">D</span><span>Team invited, because collaboration drives long-term retention</span></div>
<div class="qexp">B is correct. The value moment is the instant the user first gets the promised value (the aha moment). For a payments tool that is receiving money, not creating an account. Once you name it, the critical path is everything strictly required to get there, and tax forms, branding, and invites all wait because they are overhead, not value.</div>
</div>

<h2><span class="ix">&#9998;</span> Apply It Yourself</h2>
<div class="sub">About 45 to 60 minutes, one page, done by hand or in any tool.</div>
<div class="callout">
<div class="ch">Build your one-page journey map</div>
<p style="font-family:var(--font-ui);font-weight:600;">Draw your product's journey as four to six stages left to right, from first touch to repeat use. Under each stage, write the user's goal, their action, their emotion, and the friction. Then circle the single value moment and mark the worst friction point that sits before it. One page. No screens allowed unless a real human action happens on them.</p>
</div>
<p><strong>Hints</strong> (peek only if you are stuck):</p>
<ul>
<li>Start before your app. The first stage is how they hear you exist, not your login screen.</li>
<li>Write the emotion first at each stage, then the action. If you cannot name a feeling, you are mapping UI, not a person.</li>
<li>Find the value moment by asking "when does my promise become true for this user?" Circle that and only that.</li>
<li>Include at least one offline or waiting frame. Where is the user, and what are they feeling, when no screen is open?</li>
</ul>
<table>
<tr><th>Strong map</th><th>Weak map</th></tr>
<tr><td>Starts before signup, ends after the third return, includes offline moments</td><td>Starts at the login screen, ends at "purchase complete"</td></tr>
<tr><td>One value moment is circled and the path to it is the focus</td><td>Every stage looks equally important; no payoff is named</td></tr>
<tr><td>An emotion and a friction point sit under each stage</td><td>Only screen names and button labels, no human under pressure</td></tr>
</table>
<div class="callout accent">
<div class="ch">Make it live</div>
<p>Now walk the path yourself as a brand-new user, on a real device, timing how long it takes to reach the value moment you circled. Where you hesitate, get confused, or want to quit is your real friction, and it will rarely match where you guessed it was. Mark those spots on the map in red. That red is your build list for next week.</p>
</div>
__NAV__
</div>`,

"7.3": `<div class="wrap">

<div class="les-kicker">Chapter 7 &middot; Lesson 7.3</div>
<h1 class="les-title">Functional vs Non-Functional Requirements</h1>
<div class="les-meta">
  <span class="pill">Documentation</span>
  <span class="pill">~12 min</span>
  <span class="pill">Founder skill</span>
  <span class="pill">core</span>
</div>
<p class="motto">Anyone can list what your product does. The bar that wins is how well it does it.</p>
<p class="lead">By the end you will have <em class="k">a one-page requirements split: a functional list (what the product does) sitting next to a non-functional table with a concrete, measurable target for each quality attribute</em> that you can hand to an engineer or an AI agent and have them build the right thing.</p>

<h2><span class="ix">1</span> Your Mandate</h2>
<div class="sub">Decide what the product does, then decide how well it has to do it, before a single line is written.</div>
<p>Most founders write requirements as a feature list and stop there: sign up, upload a file, search, export. That is the functional half, and it is the easy half, because your competitors have the same list. The half that decides whether anyone keeps using the thing is non-functional: how fast it responds, whether it stays up, whether one customer can see another customer's data, whether it survives a tenfold spike. Your mandate in this lesson is to stop treating quality as something you tune later and start treating it as a requirement you specify up front. You cannot bolt low latency, reliability, or tenant isolation onto a finished product. Those properties live in the architecture, and the architecture is chosen on day one. Write the non-functional bar before you build, because that document is what your stack, your infrastructure, and your hiring will be forced to satisfy.</p>

<h2><span class="ix">2</span> You Own vs. You Do NOT Own</h2>
<div class="sub">The founder owns the bar; the engineer owns the mechanism that hits it.</div>
<table>
  <tr><th>You own</th><th>You do NOT own</th></tr>
  <tr>
    <td><strong>The quality targets.</strong> You decide "join in under three seconds" or "usable on a hotel wifi connection," because those targets come from the customer's reality, not the codebase.</td>
    <td><strong>The implementation that hits them.</strong> Whether reliability comes from retries, replication, or a queue is an engineering decision, not a founder decision.</td>
  </tr>
  <tr>
    <td><strong>The ranking of attributes.</strong> You declare that reliability beats feature count this quarter, so engineering knows what to trade away under pressure.</td>
    <td><strong>The benchmark methodology.</strong> How load is simulated, how latency is measured at p95, and which tools run the tests belong to the people building it.</td>
  </tr>
  <tr>
    <td><strong>The customer-facing definition of "good enough."</strong> You translate vague pain ("it keeps freezing") into a testable line ("video must hold up at high packet loss").</td>
    <td><strong>The infrastructure choices.</strong> Region placement, protocol fallbacks, and database engine are means to your ends, not ends you should be dictating.</td>
  </tr>
  <tr>
    <td><strong>The decision to spend on quality.</strong> You sign off that two extra weeks on reliability is worth more than a new feature, because you see the retention math.</td>
    <td><strong>The day-to-day tuning.</strong> Cache sizing, connection pooling, and garbage-collection settings are the team's craft, and micromanaging them is a waste of your judgment.</td>
  </tr>
</table>

<h2><span class="ix">3</span> Signals You Are Getting This Wrong</h2>
<div class="sub">Watch for the tells that say you specified features but never specified quality.</div>
<table>
  <tr><th>Signal</th><th>Reads as</th><th>Why it matters</th></tr>
  <tr>
    <td>Your spec is a list of verbs with no numbers next to any of them</td>
    <td>You defined what, never how well</td>
    <td>Engineers will pick the easiest implementation, and "easiest" rarely means fast, reliable, or secure</td>
  </tr>
  <tr>
    <td>Demos are flawless but real usage produces complaints about speed and crashes</td>
    <td>You tested the happy path, not the conditions</td>
    <td>The gap between demo and reality is exactly the non-functional gap, and it is where churn lives</td>
  </tr>
  <tr>
    <td>A competitor ships the same feature and you have no answer for why a customer stays</td>
    <td>You won on parity, which is not a moat</td>
    <td>If both products do the same things, the only remaining battleground is how well, and you never specified yours</td>
  </tr>
  <tr>
    <td>"We will fix performance after launch" appears in your planning notes</td>
    <td>You think quality is a later layer</td>
    <td>Reliability and latency are architectural, so "after launch" often means a rewrite, not a patch</td>
  </tr>
</table>
<div class="callout warn">
  <div class="ch">The trap of the feature list</div>
  <p>A pure feature list feels like progress because it is concrete and checkable. But it lulls you into shipping something that technically does everything and satisfies no one. If your requirements doc has zero measurable targets, you have written half a spec and handed the other half, the half customers actually feel, to chance.</p>
</div>

<h2><span class="ix">4</span> How to Think Here: What vs. How Well</h2>
<div class="sub">Picture two columns, and remember that competitors usually match the left one and lose on the right.</div>
<div class="fig">
  <div class="fig-title">FUNCTIONAL VS NON-FUNCTIONAL</div>
  <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Hanken Grotesk, sans-serif">
  <text x="140" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#86868b">FUNCTIONAL &middot; what it does</text>
  <text x="140" y="42" text-anchor="middle" font-size="9" fill="#86868b">everyone ships this</text>
  <text x="380" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">NON-FUNCTIONAL &middot; how well</text>
  <text x="380" y="42" text-anchor="middle" font-size="9" fill="#3730a3">where the moat lives</text>

  <rect x="20" y="56" width="240" height="156" rx="10" fill="#f5f5f7" stroke="#86868b" stroke-width="1.1"/>
  <rect x="260" y="56" width="240" height="156" rx="10" fill="#4f46e5" opacity="0.08"/>
  <rect x="260" y="56" width="240" height="156" rx="10" fill="none" stroke="#4f46e5" stroke-width="1.5"/>

  <rect x="36" y="72" width="208" height="36" rx="7" fill="#ffffff" stroke="#86868b" stroke-width="1"/>
  <text x="140" y="94" text-anchor="middle" font-size="10" fill="#86868b">Join a meeting</text>
  <rect x="36" y="116" width="208" height="36" rx="7" fill="#ffffff" stroke="#86868b" stroke-width="1"/>
  <text x="140" y="138" text-anchor="middle" font-size="10" fill="#86868b">Video and audio</text>
  <rect x="36" y="160" width="208" height="36" rx="7" fill="#ffffff" stroke="#86868b" stroke-width="1"/>
  <text x="140" y="182" text-anchor="middle" font-size="10" fill="#86868b">Screen share</text>

  <rect x="276" y="72" width="208" height="36" rx="7" fill="#ffffff" stroke="#4f46e5" stroke-width="1.2"/>
  <text x="380" y="94" text-anchor="middle" font-size="10" font-weight="600" fill="#3730a3">Joins in under a second</text>
  <rect x="276" y="116" width="208" height="36" rx="7" fill="#ffffff" stroke="#4f46e5" stroke-width="1.2"/>
  <text x="380" y="138" text-anchor="middle" font-size="10" font-weight="600" fill="#3730a3">Holds up on weak wifi</text>
  <rect x="276" y="160" width="208" height="36" rx="7" fill="#ffffff" stroke="#4f46e5" stroke-width="1.2"/>
  <text x="380" y="182" text-anchor="middle" font-size="10" font-weight="600" fill="#3730a3">Reliable and secure</text>

  <polygon points="259,134 271,127 271,141" fill="#4f46e5"/>

  <rect x="20" y="232" width="480" height="34" rx="8" fill="#f5f5f7" stroke="#1d1d1f" stroke-width="1.2"/>
  <text x="140" y="253" text-anchor="middle" font-size="10" fill="#86868b">Same feature set</text>
  <text x="380" y="253" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Different quality bar</text>

  <text x="260" y="294" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">Anyone can match the left. The right is why people stay.</text>
</svg>
  <div class="fig-cap">Once a category matures the functional column is table stakes everyone ships; the non-functional column, the same features done well, is the moat that makes people refuse to leave.</div>
</div>
<ol>
  <li><strong>Split the page in two.</strong> On the left, write every capability as a verb the user performs. On the right, write how well each must happen, expressed as a number or a condition, not an adjective.</li>
  <li><strong>Attach a target to every quality word.</strong> "Fast" is not a requirement; "join in under three seconds on a typical connection" is. "Reliable" is not a requirement; "no data loss across a session restart" is. A target you cannot test is a wish.</li>
  <li><strong>Ask which column your competitors already won.</strong> If the left column is commoditized, stop adding features and pour the effort into a right-column target nobody else is hitting. That is where a defensible product is built.</li>
</ol>
<div class="callout accent">
  <div class="ch">Say this to yourself</div>
  <p>"My competitors and I do the same things. The reason a customer chooses me has to live in how well, so I will specify how well with a number I can measure."</p>
</div>

<h2><span class="ix">5</span> Frameworks to Deploy</h2>
<div class="sub">Three lenses that turn quality from an afterthought into a written, defensible spec.</div>

<h3>Functional vs Non-Functional Requirements</h3>
<p>Functional requirements describe capabilities and behaviors: the discrete things the system does when a user acts. Non-functional requirements describe quality attributes: performance, reliability, availability, security, scalability, usability. This split maps cleanly onto ISO/IEC 25010, which separates functional suitability (the what) from the quality characteristics (the how well). Applied: for a video tool, "lets two people share a call" is functional, while "the call stays watchable when the network drops a large share of packets" is non-functional. The first sentence can be true while the product is unusable; only the second sentence decides whether anyone comes back.</p>

<h3>The Quality-Attributes Checklist</h3>
<p>Before building, name a concrete target for each of five attributes: reliability, scalability, security, maintainability, usability. This is a working practitioner checklist, a defensible subset of the full ISO list, not the standard itself, and its value is that it is short enough to actually complete. Applied: reliability becomes "zero data loss on restart," scalability becomes "serve ten thousand concurrent sessions without degradation," security becomes "one tenant can never read another tenant's data," maintainability becomes "a new engineer ships a fix in week one," usability becomes "works without a manual." Each line gets a number or a testable condition. A checklist of adjectives is decoration; a checklist of targets is an engineering contract.</p>

<h3>Non-Functional as Moat</h3>
<p>This is a strategic argument, not a formal law: when functional features are commoditized, the non-functional bar is where products win or lose. Once every competitor ships the same feature list, the only remaining axis of competition is quality, and quality is hard to copy because it is baked into architecture. Applied: in mature categories, the founder who keeps adding features is fighting on the saturated left column, while the founder who makes the existing features dramatically more reliable, faster, or more trustworthy is building something rivals cannot match by shipping another button. The case in the next two blocks is the cleanest illustration of this claim you will find.</p>

<h2><span class="ix">6</span> Worked Solution: How I Specify Requirements for GeniOS</h2>
<div class="sub">GeniOS is a Context Brain for AI Agents, and its real defensibility is almost entirely non-functional.</div>
<p><strong>Step 1: Write the functional list first, and keep it short.</strong> GeniOS does three things. It lets an agent write context, it stores that context across dimensions (a relationship graph, state, authority), and it lets an agent retrieve context by query. That is the whole functional spec, and on purpose it is small. Any competent team could build a service that writes and reads memory. If GeniOS competed on this list alone, it would be one of dozens of context stores.</p>
<p><strong>Step 2: Specify retrieval latency as a hard target, not a hope.</strong> An AI agent calls memory inside a reasoning loop, often several times per response. So the requirement is not "fast retrieval," it is "retrieval fast enough that a memory lookup does not stall the agent's loop." That target shapes the architecture immediately: indexing strategy, caching, and where data physically sits all flow from it. A plain vector database that finds similar memories slowly would technically satisfy the functional spec and fail the product.</p>
<p><strong>Step 3: Make reliability mean "context is never lost."</strong> The entire promise of a context brain is that an agent does not lose its memory across sessions. So the non-functional requirement is durability: once context is written, it survives restarts, redeploys, and failures, with no silent loss. This is why GeniOS is more than a similarity search. The bar is not "usually remembers," it is "never forgets what it stored."</p>
<p><strong>Step 4: Treat isolation and security per tenant as non-negotiable.</strong> Many agents and many customers share the infrastructure, and an agent's memory is sensitive. The requirement is that one tenant's context can never leak into another tenant's retrieval, ever. This is a security and architecture decision made before launch, because tenant isolation cannot be retrofitted onto a system that was designed to share.</p>
<p><strong>Step 5: Specify scale across many agents from the start.</strong> A context brain serving one agent is a demo; serving thousands of agents writing and querying at once is the product. The requirement is that retrieval latency and reliability hold as the agent count grows, which forces a design that scales horizontally rather than one that works only at small volume.</p>
<div class="flow">
  <span class="st">[Functional: write, store across dimensions, retrieve]</span> <span class="ar">&rarr;</span><br>
  <span class="st">[Latency target: fits inside the agent loop]</span> <span class="ar">&rarr;</span><br>
  <span class="st">[Reliability target: context never lost]</span> <span class="ar">&rarr;</span><br>
  <span class="st">[Isolation target: no cross-tenant leakage]</span> <span class="ar">&rarr;</span><br>
  <span class="st">[Scale target: holds across many agents]</span> <span class="ar">&rarr;</span><br>
  <span class="nt">The non-functional bar is what makes a context brain trustworthy</span>
</div>
<div class="callout good">
  <div class="ch">Why this matters</div>
  <p>The functional list for GeniOS is something a weekend hackathon could approximate. The reason it is a defensible product is the non-functional bar: low-enough latency, durability you can trust, hard tenant isolation, and scale. Specify those as targets up front and the architecture writes itself; leave them vague and you ship a memory store nobody trusts with their agent.</p>
</div>

<h2><span class="ix">7</span> Industry Case: A Company Built Entirely on a Non-Functional Requirement</h2>
  <div class="sub">Voice agents all do the same job, so Hamming AI sells the one thing features cannot: proof they are reliable.</div>
  <h3>How Hamming AI turned reliability, accuracy, safety, and latency into the whole product</h3>
  <p><strong>The company:</strong> Hamming AI is a Y Combinator company from the Summer 2024 batch, founded in 2024 by Sumanyu Sharma (CEO, previously Head of Data at Citizen and a Senior Staff Data Scientist at Tesla) and Marius Buleandra (previously in data infrastructure at Anduril and a founding engineer at the MLOps startup Spell, later acquired by Reddit). It builds a QA and observability platform for voice AI agents, the systems that answer phone calls and book appointments for businesses. <strong>The move:</strong> instead of shipping another voice agent, Hamming built the layer that tests one. Its platform deploys its own AI voice agents to place large volumes of simulated calls into a client's agent, generating scenarios across happy paths, edge cases, accents, interruptions, background noise, and adversarial inputs, then measures the results. <strong>Why it worked:</strong> every vendor's voice agent does roughly the same functional things, so the company competes purely on non-functional qualities. Hamming positions explicitly around measuring "accuracy, safety, compliance, and latency" across the full voice stack, and markets itself as the "reliability layer for voice AI." It is selling the right column of this lesson, the how well, as a standalone business.</p>
  <ul>
    <li>Voice agents are probabilistic, so a small prompt, model, or infrastructure change can silently cause regressions (a missed intent, an unsafe response, a latency spike). Hamming's pitch is that you win by measuring and defending these qualities continuously, not by adding features, which is the non-functional bar made into a product.</li>
    <li>The company frames the value as quality you can quantify: it claims its automated testing is roughly 10x cheaper and about 20x faster than manual human testing, turning a vague promise of reliability into a measurable, repeatable target rather than a hope.</li>
    <li>Its production monitoring includes 50+ built-in metrics and supports 65+ languages and regional accents, and its homepage cites a Grove AI case study with 165K+ calls analyzed alongside named customers including Luma Health, Maven AGI, Podium, Bland, and Netomi. It raised a $3.8M seed round announced in December 2024, led by Mischief with participation from Y Combinator, AI Grant, NEA, and Pioneer.</li>
  </ul>
  <div class="callout accent">
    <div class="ch">The builder takeaway</div>
    <p>Hamming AI is the clean proof of this lesson: when a category's functional list is commoditized, the non-functional attributes are not a footnote, they can be the entire company. Hamming targets regulated buyers like banks and healthtech precisely because in those markets reliability, safety, and latency, not features, decide whether anyone ships. Ask which non-functional target your category quietly fails to guarantee, then consider making that guarantee your product.</p>
  </div>

  <h2><span class="ix">&#10003;</span> Check Yourself</h2>
<div class="quiz" data-correct="1">
  <div class="q">A founder hands you a requirements doc that lists "sign up, upload, search, share, export" and nothing else. What is the most important thing missing?</div>
  <div class="opt" data-i="0"><span class="l">A</span><span>More features, so the product can compete on capability breadth</span></div>
  <div class="opt" data-i="1"><span class="l">B</span><span>The non-functional requirements: measurable targets for latency, reliability, security, and scale</span></div>
  <div class="opt" data-i="2"><span class="l">C</span><span>A pricing model, since requirements should always include revenue</span></div>
  <div class="opt" data-i="3"><span class="l">D</span><span>A competitor analysis listing which rivals ship each feature</span></div>
  <div class="qexp">B is correct. The doc is a pure functional list (the what) with no specification of how well any of it must perform. The non-functional requirements are exactly the half that shapes architecture and decides whether customers stay, and they are missing entirely. Adding features (A) deepens the parity trap; pricing (C) and competitor analysis (D) are useful but are not requirements for what the product must do or how well.</div>
</div>
<div class="quiz" data-correct="2">
  <div class="q">Why does the lesson insist that non-functional requirements be written before you build, not tuned after launch?</div>
  <div class="opt" data-i="0"><span class="l">A</span><span>Because investors require a quality document before they will fund the round</span></div>
  <div class="opt" data-i="1"><span class="l">B</span><span>Because writing them first makes the feature list shorter and cheaper</span></div>
  <div class="opt" data-i="2"><span class="l">C</span><span>Because reliability, low latency, and isolation are architectural, and architecture is chosen on day one, so they cannot be bolted on later</span></div>
  <div class="opt" data-i="3"><span class="l">D</span><span>Because launch deadlines never leave time for performance work afterward</span></div>
  <div class="qexp">C is correct. Quality attributes like reliability, latency, and tenant isolation live in the architecture, and the architecture is decided up front. "Fix it after launch" often means a rewrite, which is why a quality attribute like reliability has to be designed in from the start rather than patched on later. Funding (A) and scheduling (D) are not the core reason, and writing them first does not primarily aim to shorten the feature list (B).</div>
</div>

<h2><span class="ix">&#9998;</span> Apply It Yourself</h2>
<div class="sub">About 30 to 40 minutes with your current product.</div>
<div class="callout">
  <div class="ch">Build your two-column requirements page</div>
  <p style="font-family:var(--font-ui);font-weight:600;">Take your product and write one page split in two. On the left, list every functional capability as a user verb. On the right, build a quality-attributes table with five rows (reliability, scalability, security, maintainability, usability) and write one concrete, measurable target in each row. Then circle the single non-functional target you believe is your real moat.</p>
</div>
<p><strong>Hints</strong> (peek only if you are stuck):</p>
<ul>
  <li>If a target uses an adjective ("fast," "secure," "reliable"), rewrite it until it contains a number or a testable condition. "Fast" becomes "p95 response under N seconds."</li>
  <li>For each functional item, ask: do my competitors already ship this? If yes, it cannot be your moat, so look right.</li>
  <li>Pick targets from your customer's worst real conditions, not your demo conditions. Design for the bad-wifi call and the noisy edge case, not the boardroom.</li>
  <li>If you cannot state how you would measure a target, you have not finished writing it.</li>
</ul>
<table>
  <tr><th>Strong target</th><th>Weak target</th></tr>
  <tr><td>"Stored context survives a restart with zero loss, verified by a restart test."</td><td>"The system should be reliable."</td></tr>
  <tr><td>"Usable when the network drops a large share of packets, tested at high simulated loss."</td><td>"Works well on bad connections."</td></tr>
  <tr><td>"One tenant can never read another tenant's data, enforced and tested in CI."</td><td>"Keep customer data secure."</td></tr>
</table>
<div class="callout accent">
  <div class="ch">Make it live</div>
  <p>Hand your two-column page to the engineer or AI agent building the product and ask them to confirm the architecture can hit every right-column target. If any target forces a redesign, you just learned it on paper instead of after launch, which is the entire point of writing it first.</p>
</div>

__NAV__
</div>`