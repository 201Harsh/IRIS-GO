import { Request, Response } from 'express';
import IrisGoAgent from '../swarm/Agent.js';

export const IrisAgentChat = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({
        message: 'Prompt is required and must be a string',
      });
    }
    const result = await IrisGoAgent({ prompt });
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error,
    });
  }
};
