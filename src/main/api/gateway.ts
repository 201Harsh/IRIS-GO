import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { Server } from 'http'
import { BrowserWindow } from 'electron'

export class LocalGateway {
  private app: Express
  private server: Server | null = null
  private port: number = 3042
  private mainWindow: BrowserWindow | null = null

  constructor(window: BrowserWindow | null) {
    this.mainWindow = window
    this.app = express()

    // Middleware
    this.app.use(cors())
    this.app.use(express.json()) // Crucial for parsing WhatsApp/Telegram webhooks

    this.setupRoutes()
  }

  private setupRoutes() {
    this.app.get('/ping', (req: Request, res: Response) => {
      console.log('📡 [GATEWAY] Ping received from UI')
      res.status(200).json({ status: 'IRIS_CORE_ONLINE', uptime: process.uptime() })
    })

    // The Main Webhook Receiver
    this.app.post('/api/webhook/relay', (req: Request, res: Response) => {
      const payload = req.body

      console.log('📡 [GATEWAY] Payload Received:', payload)

      // Send a ping to the UI so the Telemetry tab can show "Payload Received"
      if (this.mainWindow) {
        this.mainWindow.webContents.send('telemetry-log', {
          time: new Date().toLocaleTimeString(),
          source: 'GATEWAY',
          message: 'Secure payload received via remote uplink.'
        })
      }

      // TODO: Route this payload to the LangGraph Orchestrator

      // Immediately respond 200 OK so Telegram/WhatsApp doesn't timeout
      res.status(200).json({ status: 'ACK', message: 'Payload queued for execution.' })
    })
  }

  public start() {
    if (this.server) return // Prevent double-booting

    this.server = this.app.listen(this.port, () => {
      console.log(`🚀 [GATEWAY] Secure local server listening on port ${this.port}`)
    })
  }

  public stop() {
    if (this.server) {
      this.server.close(() => {
        console.log('🛑 [GATEWAY] Local server shut down cleanly.')
      })
      this.server = null
    }
  }
}
