---
title: "Execution Is Cheap. Thinking Isn’t"
slug: "execution-is-cheap-thinking-isnt"
date: 2026-02-06
excerpt: "This week I launched a small web app, Tone Ladder, which was my first serious step into product development assisted by AI. I took notes during the..."
category: "blog"
featured: false
---

This week I launched a small web app, [Tone Ladder](https://wrightmartin.github.io/tone-ladder/), which was my first serious step into product development assisted by AI. I took notes during the process, so here’s a mix of my live notes and some reflections.

I couldn’t have made Tone Ladder alone without the support of Claude Code, an AI agentic coding tool\*. I know enough JavaScript to get by as a technical-leaning designer, I’ve shipped plenty of front ends, but the engineering depth required for an app like Tone Ladder is outside my skillset.

I made notes and recorded thoughts as I was working, which I’ve written up below, but here’s biggest takeaway of all, and you can read this and leave if you want:

With AI execution is cheap, but without a good plan, execution is worthless. Now more than ever design – and I don’t mean the UI, I mean the applied understanding of the problem space – is critical to success.

#### Is this Big Design Up Front? It sure feels like it.

If you’ve been in the industry more than a few years, you’ve absorbed the arguments for agile. Getting to working software as quickly as possible is second nature to me, but it made Claude worse – the ambiguity in every half-formed idea became amplified.

This felt like a philosophical rollback of the agile mindset. The more I understood ‘up front’, the better the results. The more certain I was about what I was building, the more Claude could do\*.

#### Claude failed at supporting me in the process of thinking.

Claude took soft language literally, it filled gaps in my understanding without asking for clarification, and confidently accelerated off in the wrong direction.

Prompting Claude without clarity and intent felt like rolling a die: I ask Claude to do something, the monkey paw curls, and I wait, with gritted teeth, for the consequences to reveal themselves.

This was my first AI project and I got better at prompting and checking Claude’s work with time, but I never felt like we gelled in the way I would with a human collaborator, bouncing off each others’ energy and enthusiasm, making something greater than the sum of its parts.

I couldn’t trust Claude to hold context or respect the invisible boundaries a human can infer, unless I’d specifically defined them in advance.

#### Is this all about contracts?

Claude worked best when I’d given it a container to work inside. I wrote a behaviour contract in plain language describing what the app should do, what results were acceptable and defined series of tests to protect against regression, or flag where Claude had decided to take a short, destructive route to a goal.

This gave me back the feeling of control without constricting the potential of Claude to bring different and creative solutions. And it unlocked the approach, Claude was able to bring ideas and solutions in a space that wasn’t familiar to me, and wouldn’t have known to prompt for.

#### If I can’t think with Claude, I need to think before Claude

Next time I work with Claude, I’ll work with it much later in the process. I’ll get the thinking done, the boundaries defined, and the expectations written. I’ll bring Claude in as a prototyping tool, not a collaborator.

#### Cheap and fast right, cheap and fast wrong

Making things with Claude was cheap and fast. But it was cheap and fast to make the wrong thing, and sometimes Claude would even defend itself passionately that it \*had\* done the right thing – *exactly* what I’d asked.

#### This is terrifying *and* exciting

I had a few expectations going into this process.

I hoped to get a working app. I hoped I’d cut through the hype and bluster and relax in the knowledge my profession was safe for a while yet. I got one of those things.

I wasn’t expecting to rediscover the feeling I got when I first started experimenting with the web, building websites for friends’ bands all those years ago. A feeling of possibility and optimism.

What I came away with was equal parts fear and exhilaration: making things is suddenly effortless, and deciding what’s worth making may now be the real work of design.

\* Anthropic’s Claude Code was my weapon of choice, with thanks to Dan, who was willing to patiently walk me through his process to get me started.

\* I’ve since learnt this was a prescient thought. [Spec driven development](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) is the hot ‘new’ thing.
