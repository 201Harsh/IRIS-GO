# IRISX ⚡

**Agentic AI CLI + SDK for Real-World Automation**

> Build, run, and orchestrate autonomous AI agents — locally.

---

## 🚀 Overview

IRISX is a **developer-first agentic AI platform** that enables you to create, execute, and manage autonomous agents directly from your terminal.

It combines:

- ⚡ A powerful CLI (chat + command hybrid)
- 🧠 A local agent runtime (Express + LangGraph)
- 🧩 A flexible SDK for building custom agents
- 🖥️ An optional web-based control panel

IRISX is designed for **execution-first AI** — not just conversation.

> You don’t ask. You delegate.

---

## ✨ Core Capabilities

### 🤖 Agentic Execution

- Autonomous agents that **plan → execute → iterate**
- Multi-step reasoning using LangGraph
- Real-world task automation

---

### ⚡ CLI-First Experience

- Conversational + command-based interface
- Run tasks instantly from terminal

```bash
iris "analyze this repo and fix errors"
```

---

### 🧩 Extensible Tool System

- File system access
- Terminal execution
- Browser automation
- Custom tools via SDK

---

### 🧠 Local-First Runtime

- Runs on your machine
- No forced cloud dependency
- Full control over execution

---

### 🔄 Workflow Automation

- Define reusable agent workflows
- JSON / programmatic execution

---

### 🐳 Docker Sandbox (Optional)

- Run agents in isolated environments
- Safe system-level execution

---

## 🏗️ Architecture

```
irisx/
├── src/
│   ├── client/        # Vite + React (Control Panel UI)
│   ├── server/        # Express runtime (agent execution)
│   ├── core/          # Agent logic, tools, workflows
│   ├── sdk/           # Developer SDK
│   └── types/         # Shared types
│
├── bin/               # CLI entry
├── package.json
└── tsconfig.json
```

---

## 🧠 System Design

### CLI (Entry Layer)

- User interaction
- Command parsing
- Chat interface

### Server (Execution Layer)

- Agent orchestration
- Tool execution
- WebSocket streaming logs

### Core (Brain)

- Agent logic
- LangGraph workflows
- Memory + tool system

### SDK (Developer Layer)

- Build custom agents
- Extend tools
- Integrate into apps

### Client (Optional UI)

- Monitoring
- Logs visualization
- Agent control panel

---

## ⚡ CLI Usage

### Start CLI

```bash
npx irisx
```

---

### Run a task

```bash
iris "build and deploy this project"
```

---

### Chat mode

```bash
iris chat
```

---

### Run workflow

```bash
iris run workflow.json
```

---

### Manage tools

```bash
iris tools list
iris tools add <tool>
```

---

### View logs

```bash
iris logs
```

---

### Launch UI (optional)

```bash
iris ui
```

---

## 🧩 SDK Usage

### Create an Agent

```ts
import { createAgent } from "irisx";

const agent = createAgent({
  goal: "analyze and optimize codebase",
  tools: ["fs", "terminal"],
});

await agent.run();
```

---

### Create Custom Tool

```ts
import { createTool } from "irisx";

export const myTool = createTool({
  name: "runCommand",
  execute: async ({ command }) => {
    // custom logic
  },
});
```

---

### Create Workflow

```ts
import { createWorkflow } from "irisx";

const workflow = createWorkflow(["analyze", "plan", "execute"]);

await workflow.run();
```

---

## 🔁 Agent Flow (LangGraph)

IRISX uses graph-based execution:

```
User Input
   ↓
Planner Agent
   ↓
Executor Agent
   ↓
Critic Agent
   ↓
Final Output
```

---

## 🖥️ Control Panel (Optional)

- View live agent execution
- Monitor logs
- Inspect workflows
- Debug tasks visually

> Not required. CLI-first system.

---

## 🐳 Docker Support

Run IRISX in a sandboxed environment:

```bash
docker build -t irisx .
docker run -p 3000:3000 irisx
```

---

## 🔐 Security

- Local execution by default
- No external key storage
- Optional sandboxing via Docker
- Controlled tool access

---

## 💻 Tech Stack

### Core

- TypeScript
- Node.js
- Express

### AI / Agent Layer

- LangChain
- LangGraph

### CLI

- Custom Node CLI (bin)

### Frontend (Optional)

- Vite
- React

---

## 🧠 Philosophy

- Execution > Conversation
- Local-first intelligence
- Developer-first experience
- Modular and extensible
- Real-world impact over demos

---

## 🧩 Extending IRISX

You can:

- Add new tools
- Build custom agents
- Create workflows
- Extend SDK capabilities

---

## 🧠 Roadmap

- Multi-agent orchestration
- Plugin marketplace
- VS Code extension
- Persistent memory graph
- Cloud + local hybrid execution

---

## ⚠️ Disclaimer

IRISX enables system-level automation.
Use responsibly. The maintainers are not liable for misuse.

---

## 👨‍💻 Author

Harsh Pandey
AI Systems Engineer

---

## 📜 License

MIT License

---

## 🟥 Final Note

IRISX is not a chatbot.

It is an **agentic execution system**.

**You define the intent.
Agents handle the work.**
