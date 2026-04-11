import { Router } from 'express';
import { IrisAgentChat } from '../controllers/agent.controller.js';

const AIRouter = Router();

AIRouter.post('/iris/chat', IrisAgentChat);

export default AIRouter;
