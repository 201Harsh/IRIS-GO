<div align="center">
  <h1>🚀 IRIS GO</h1>
  <p><b>Your Personal, Open Source, Remote Multi-AI Agent Ecosystem</b></p>
  <p>Control your AI agents from anywhere via Mobile or Dashboard. 100% Local. 100% Free. Bring Your Own API Keys (BYOAK).</p>

  <p>
    <img alt="License" src="https://img.shields.io/badge/License-MIT-blue.svg" />
    <img alt="Open Source" src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red.svg" />
    <img alt="Local" src="https://img.shields.io/badge/Privacy-100%25%20Local-brightgreen.svg" />
    <img alt="BYOAK" src="https://img.shields.io/badge/Keys-BYOAK-yellow.svg" />
  </p>
</div>

<hr />

## 🌟 Introduction

Welcome to **IRIS GO**, the ultimate open-source platform designed for running and managing multi-AI agents locally on your machine. Whether you are using a smartphone on the go or sitting in front of the IRIS GO Dashboard, you have complete control over your agents.

Say goodbye to expensive monthly subscriptions and privacy concerns. IRIS GO is built natively to run locally, offering absolute data privacy. Simply plug in your own API keys, and launch powerful AI agents to do the heavy lifting for you!

## ✨ Key Features

- 🤖 **Remote Multi-AI Agents:** Deploy, monitor, and interact with multiple specialized AI agents simultaneously.
- 📱 **Mobile & Dashboard Control:** 100% manageable via an intuitive web dashboard or mobile device interface. Control your fleet from anywhere.
- 🔒 **100% Local & Private:** All core systems run locally on your own hardware. Your prompts, data, and agent states never leave your machine without your permission.
- 💸 **Absolutely Free:** No premium tiers, no hidden costs. It's fully open-source.
- 🔑 **Bring Your Own API Keys (BYOAK):** Total freedom. Use Google Gemini, OpenAI, Claude, local LLMs (like Ollama or LM Studio), or any supported provider. You pay only for what you use on the provider side.
- ⚡ **Highly Extensible:** Easily build custom agent skills, tools, and integrations.

## 🚀 Getting Started

Follow these instructions to get your local IRIS GO environment up and running.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/201Harsh/IRIS-GO.git
   cd IRIS-GO
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Rename `.env.example` to `.env` and plug in your API keys.

   ```bash
   cp .env.example .env
   ```

   _Edit the `.env` file with your preferred API keys._

4. **Start the Application:**

   ```bash
   npm run dev
   ```

5. **Access the Dashboard:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your console). To access via mobile, ensure your device is on the same local network and navigate to `<your-local-ip>:3000`.

## 🎮 Usage

### 1. Dashboard Management

Once the server is running, log into the local dashboard to create new agents, assign them roles, and equip them with tools. You can monitor their internal thought processes and inter-agent communication in real-time.

### 2. Mobile Access

The IRIS GO dashboard is fully responsive. Simply connect your mobile phone to the same Wi-Fi network as your host machine, enter your host's local IP address in the browser, and command your agents seamlessly.

### 3. Adding Your API Keys (BYOAK)

Navigate to the "Settings" > "Providers" section in the dashboard to securely add and manage your API keys, or update them directly in your `.env` file. We support a wide array of LLM providers.

## 🤝 Contributing

IRIS GO is driven by the open-source community! We welcome contributions, from bug fixes and documentation improvements to new features and agent tools.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🛡️ License

Distributed under the [MIT License](LICENSE). See `LICENSE` for more information.

---

<div align="center">
  <b>Built with ❤️ by the Open Source Community.</b>
</div>
