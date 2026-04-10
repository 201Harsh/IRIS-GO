import { createApp } from "./app";

const PORT = process.env.PORT || 3042;

async function startServer() {
  try {
    const app = await createApp();

    app.listen(PORT, () => {
      console.log(`\n======================================`);
      console.log(`🧠 IRIS KERNEL ONLINE`);
      console.log(`🌐 PORT: ${PORT}`);
      console.log(`💻 COMMAND CENTER: http://localhost:${PORT}`);
      console.log(`======================================\n`);
    });
  } catch (error) {
    console.error("❌ Failed to start IRIS engine:", error);
    process.exit(1);
  }
}

startServer();
