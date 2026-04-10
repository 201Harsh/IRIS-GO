<div align="center">
  
# 🧠 IRIS GO
**The Headless Neural OS for Visual Automation**

[![Version](https://img.shields.io/badge/Version-1.0.0-006400?style=for-the-badge&logoColor=black)](#)
[![Architecture](https://img.shields.io/badge/Architecture-Vite_Middleware-000000?style=for-the-badge&logoColor=006400&labelcolor=000000&labelColor=006400)](#)
[![License](https://img.shields.io/badge/License-MIT-006400?style=for-the-badge&logoColor=black)](#)

IRIS GO is an enterprise-grade, local AI orchestration engine. It bypasses standard cloud limitations by running a headless Express + Vite middleware monolith directly on your machine, granting autonomous agent squads root-level access to your terminal, file system, and Git workflows.

**[ Watch the Visual Automation Engine in Action ]** _(Insert a high-quality GIF of your terminal chat UI working here)_

</div>

**Agentic AI CLI + SDK for Real-World Automation**

> Build, run, and orchestrate autonomous AI agents — locally.

---

## 🚀 Overview

IRIS GO is a **developer-first agentic AI platform** that enables you to create, execute, and manage autonomous agents directly from your terminal.

It combines:

- ⚡ A powerful CLI (chat + command hybrid)
- 🧠 A local agent runtime (Express + LangGraph)
- 🧩 A flexible SDK for building custom agents
- 🖥️ A pure Vantablack/Neon Emerald Visual Automation Dashboard

IRIS GO is designed for **execution-first AI** — not just conversation.

> You don’t ask. You delegate.

---

## ✨ Core Capabilities

### 🤖 Agentic Execution

- Autonomous agents that **plan → execute → iterate**
- Multi-step reasoning using LangGraph
- Real-world task automation

### ⚡ CLI-First Experience

- Conversational + command-based interface
- Run tasks instantly from the terminal

```bash
iris "analyze this repo and fix the typescript errors"
```

### 🧩 Tools
- File system access
- Terminal execution
- Browser automation
- Custom SDK tools

### 🧠 Local Runtime
- Runs on your machine
- No cloud dependency

### 🔄 Workflows
- JSON / programmatic automation

---

## 🏗️ Architecture

```
iris-go/
├── src/
│   ├── surface/
│   ├── kernel/
│   └── cli/
```

---

## ⚡ CLI Usage

```
iris start
iris execute "deploy app"
iris chat
```

---

## 🧩 SDK

```ts
import { createAgent } from '@iris/go';

const agent = createAgent({
  goal: 'optimize code',
  tools: ['fs', 'terminal']
});

await agent.run();
```

---

## 🐳 Docker

```
docker build -t iris-go .
docker-compose up -d
```

---

## 🧠 Philosophy
Execution > Conversation  
Local-first  
Developer-first  

---

## ⚠️ Disclaimer
Use responsibly. System-level execution enabled.

---

## 👨‍💻 Author
Harsh Pandey

---

## 📜 License
MIT
