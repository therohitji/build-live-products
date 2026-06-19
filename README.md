# Build Live Products (2026)

A build-first course that takes you from a raw problem to a live product with real users, in about 4 weeks. By **Rohit Swerashi**, founder of GeniOS, taught through the **Hustlers Fellowship**.

**Read it live:** https://hustlersfellowship.com/buildliveproducts

This repository holds the full source of the course: the curriculum, every lesson, the figures, and the small build script that stitches them into one self-contained HTML file you can open in any browser.

## What this is

Most courses hand you theory and trust you to apply it someday. This one is a loop you run. It makes a single promise: if you do the work, you finish with a live product that solves a real problem and has real users, built in about four weeks. You measure progress not by chapters read but by the artifact each chapter asks you to produce. The certificate at the end is the URL you can send someone.

The course follows one real startup, GeniOS, as the worked example through every step, while you run the same step on your own product.

## Who it is for

- Builders who will actually ship: founders, operators, indie hackers, and students who want a product in real hands, not another folder of notes.
- People who will use AI at every step and still own every decision.
- Anyone with a problem, or the willingness to go find one.

It is not for people who want theory to file away, or a guarantee before they start.

## The arc

Sixteen chapters, one arc, from a real problem to a live product. Every chapter is a gate you earn before the next.

| # | Chapter | Lessons |
|---|---------|---------|
| 0 | Start Here | 2 |
| 1 | Understanding the Problem and the Customer | 4 |
| 2 | Ideation and Picking the Wedge | 3 |
| 3 | Validation: Will They Actually Pay | 4 |
| 4 | Feasibility, Pricing and Unit Economics | 4 |
| 5 | Positioning and Differentiation | 3 |
| 6 | Planning the Build | 4 |
| 7 | Documentation: PRD and User Journey | 3 |
| 8 | Prototyping: Fake It Before You Build It | 3 |
| 9 | The MVP: The Boring V1 | 3 |
| 10 | Building With AI | 5 |
| 11 | Execution: Ship It Live | 3 |
| 12 | Analytics: Instrument and Read the Truth | 4 |
| 13 | A/B Testing and Iteration | 3 |
| 14 | Launch and Grow Toward Retention | 4 |
| 15 | The Build Lab: 10 Real 0 to 1 Teardowns | 11 |

That is **63 lessons across 16 chapters**.

## How each lesson works

Every teaching lesson follows the same seven-block shape, so you always know where you are:

1. **Your Mandate** the one job of this step
2. **What You Own vs What You Do Not Own** where the line sits
3. **Signals to Watch** what tells you it is working, or not
4. **How to Think** the mental model, with one figure
5. **Frameworks to Deploy** the tools you actually use
6. **The GeniOS Worked Solution** the step run on a real product
7. **A Real Industry Case** a recent, verified company that lived it

Each lesson then ends with **Check Yourself** (two quick questions) and **Apply It Yourself**, the rep you do on your own product. The reps are the course; everything else is setup.

## The Build Lab

The final chapter is a Build Lab: ten teardowns of real, recent 0 to 1 products, read the way a builder reads them, plus a capstone that turns the whole course into a one-page plan for your own product.

## Repository layout

```
.
├── build-live-products-master.html   # the generated, ready-to-read course (single file)
├── build.py                          # stitches the course together
├── shell.html                        # the app shell: all CSS and the reader engine
├── course_map.json                   # the curriculum: chapter and lesson titles, in order
├── chapters/                         # lesson content, one file per chapter (chNN.js)
└── BUILD_GUIDE.md                    # authoring rules and the build pipeline
```

## Build it yourself

The course is a single static HTML file generated from the sources. No dependencies beyond Python 3.

```bash
python3 build.py
```

That reads `course_map.json` and every `chapters/chNN.js`, injects them into `shell.html`, and writes `build-live-products-master.html`. Open that file in any browser to read the course.

Never hand-edit the generated file; it is overwritten on every build. All edits go in `chapters/` or `shell.html`. See [BUILD_GUIDE.md](BUILD_GUIDE.md) for the full authoring rules: lesson structure, the figure palette, and the house style.

## Credits

Written by **Rohit Swerashi**, founder of GeniOS, for the **Hustlers Fellowship**. Companion course: [AI Product Management](https://hustlersfellowship.com/aipm).

Free to read and learn from. Please do not repackage or resell the content.
