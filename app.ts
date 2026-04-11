import express from 'express';
import cors from 'cors';
import path from 'path';
import AIRouter from './src/kernel/api/agent-chat-api.js';

export async function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/ai', AIRouter);

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    console.log('🔄 Booting Vite Middleware for HMR...');
    const { createServer: createViteServer } = await import('vite');

    const vite = await createViteServer({
      configFile: path.resolve(process.cwd(), 'iris.vite.config.ts'),
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    console.log('⚡ Serving compiled static surface.');
    const distPath = path.resolve(process.cwd(), 'dist/surface');

    app.use(express.static(distPath));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  return app;
}
