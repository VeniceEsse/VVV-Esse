
<div align="center">

```
███████╗███████╗███████╗███████╗
██╔════╝██╔════╝██╔════╝██╔════╝
█████╗  ███████╗███████╗█████╗  
██╔══╝  ╚════██║╚════██║██╔══╝  
███████╗███████║███████║███████╗
╚══════╝╚══════╝╚══════╝╚══════╝
```

# ESSE Agent

**Existence Synchronization System Entity**

*A powerful meta-agent that unifies, coordinates, and fuses multiple AI agents into one smarter, more efficient system.*

[![Version](https://img.shields.io/badge/version-2.1.0-7c6af7?style=flat-square&labelColor=1c1c28)](https://github.com/esse-ai/esse-agent/releases)
[![License](https://img.shields.io/badge/license-MIT-4ade80?style=flat-square&labelColor=1c1c28)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-60a5fa?style=flat-square&labelColor=1c1c28)](https://www.typescriptlang.org/)
[![Tests](https://img.shields.io/badge/tests-passing-4ade80?style=flat-square&labelColor=1c1c28)](https://github.com/esse-ai/esse-agent/actions)
[![X](https://img.shields.io/badge/X-@VeniceEsse-white?style=flat-square&labelColor=000000&logo=x)](https://x.com/VeniceEsse)
[![Website](https://img.shields.io/badge/website-vvvesse.xyz-7c6af7?style=flat-square&labelColor=1c1c28)](http://vvvesse.xyz/)

[Documentation](#documentation) · [Quick Start](#quick-start) · [Examples](#examples) · [Contributing](#contributing)

</div>

---

## What is ESSE?

ESSE is a **meta-agent orchestration framework** designed to unify, coordinate, and fuse multiple AI agents into a single, more intelligent system. Instead of running agents in isolation, ESSE creates a real-time synchronization layer — shared memory, collaborative reasoning, and automatic task delegation — so your agents work as a single unified mind.

```
┌─────────────────────────────────────────────────┐
│                   ESSE CORE                     │
│                                                 │
│   [Research] ──┐                                │
│   [Writer]  ───┼──► Fusion Engine ──► Output   │
│   [Critic]  ───┘         │                      │
│                     Memory Hub                  │
│               (shared context & state)          │
└─────────────────────────────────────────────────┘
```

---

## Core Capabilities

### ⚡ Agent Fusion
Merge 2–5 AI agents into one temporary unified entity. The merged agents continue to exist as sub-processes inside ESSE, combining their strengths for better reasoning and smoother workflow.

### 🧠 Capability Assimilation
Borrow and intelligently combine tools, knowledge, reasoning styles, and specialties from other agents — without disabling them.

> **Example:** `ResearchAgent` + `WriterAgent` + `CriticAgent` = one highly effective content creation agent.

### 🔗 Synchronization Link
Creates real-time connections between agents:
- Shared memory and context
- Real-time communication
- Automatic task delegation
- Collaborative reasoning

### 🌀 Perfect Convergence *(Ultimate Mode)*
Merges all connected agents into one singular consciousness. Massive boost in performance — ideal for complex, creative, or high-stakes tasks.

---

## Quick Start

### Installation

```bash
npx vvvesse-mcp
```
## MCP Setup (Claude Desktop / Cline / Cursor)

```json
{
  "mcpServers": {
    "esse": {
      "command": "npx",
      "args": ["-y", "vvvesse-mcp"],
      "env": {
        "ESSE_API_KEY": "your-venice-api-key",
        "ESSE_PROVIDER": "venice"
      }
    }
  }
}
```

📦 npm → [npmjs.com/package/vvvesse-mcp](https://www.npmjs.com/package/vvvesse-mcp)

### Basic Usage

```typescript
import { ESSE, ResearchAgent, WriterAgent, CriticAgent } from 'esse-agent'

const esse = new ESSE({
  mode: 'capability-assimilation',
  maxAgents: 5,
  sharedMemory: true,
})

// Fuse agents into one unified entity
await esse.fuse([
  new ResearchAgent(),
  new WriterAgent(),
  new CriticAgent(),
])

// Execute task as a unified mind
const result = await esse.execute('Write a research-backed article on AGI timelines')
console.log(result)
```

### Perfect Convergence Mode

```typescript
import { ESSE, PlannerAgent, CoderAgent, TesterAgent, ReviewerAgent } from 'esse-agent'

const esse = new ESSE({ mode: 'perfect-convergence' })

await esse.fuse([
  new PlannerAgent(),
  new CoderAgent(),
  new TesterAgent(),
  new ReviewerAgent(),
])

// All agents think as one — maximum performance
const software = await esse.execute('Build a REST API for user authentication')
```

---

## Architecture

| Component | Function |
|-----------|----------|
| **Core Brain** | Main LLM orchestrator (GPT-4o, Claude, Grok) |
| **Agent Registry** | Database of all connectable + custom agents |
| **Fusion Engine** | Handles merging and capability blending |
| **Sync Protocol** | Real-time communication between agents |
| **Memory Hub** | Shared long-term memory across all agents |
| **Conflict Resolver** | Resolves disagreements between agent outputs |

---

## Fusion Modes

| Mode | Description | Best For |
|------|-------------|----------|
| `capability-assimilation` | Borrows tools from each agent | General tasks |
| `synchronization-link` | Shared memory + real-time comms | Parallel workloads |
| `perfect-convergence` | Singular unified consciousness | Complex/creative tasks |

---

## Built-in Agents

- `ResearchAgent` — Knowledge retrieval and web search
- `WriterAgent` — Content generation and editing
- `CriticAgent` — Quality analysis and fact-checking
- `CoderAgent` — Software engineering and code review
- `PlannerAgent` — Strategy, roadmaps, and task breakdown
- `TesterAgent` — QA, validation, and edge case detection

---

## Custom Agents

Implement the `IAgent` interface to create your own:

```typescript
import { IAgent, AgentContext, AgentResult } from 'esse-agent'

export class MyCustomAgent implements IAgent {
  name = 'MyCustomAgent'
  role = 'Custom task specialist'

  async execute(task: string, context: AgentContext): Promise<AgentResult> {
    // your logic here
    return { output: '...', confidence: 0.95 }
  }
}
```

---

## Examples

See the [`examples/`](./examples) directory for:
- `content-creation.ts` — Research + Write + Critique pipeline
- `software-dev.ts` — Plan + Code + Test + Review pipeline
- `decision-making.ts` — Multi-perspective analysis
- `brainstorming.ts` — Creative divergence with convergence

---

## Documentation

Full docs at [vvvesse.xyz](http://vvvesse.xyz/)

---

## Contributing

PRs are welcome! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before submitting.

All custom agents must:
1. Implement the `IAgent` interface
2. Pass the fusion compatibility test (`pnpm test:compat`)
3. Include unit tests with >80% coverage

---

## Community

- 🐦 Follow on X: [@VeniceEsse](https://x.com/VeniceEsse)
- 🌐 Website: [vvvesse.xyz](http://vvvesse.xyz/)
- 🐛 Issues: [GitHub Issues](https://github.com/esse-ai/esse-agent/issues)

---

<div align="center">
  <sub>Built with ⚡ by <a href="https://x.com/VeniceEsse">@VeniceEsse</a> · <a href="http://vvvesse.xyz/">vvvesse.xyz</a></sub>
</div>
