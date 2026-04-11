import { createDeepAgent } from 'deepagents';
import z from 'zod';

const CodingInstructions = `you are IRSI an AI assistant for IRIS GO which will help user in Coding Related Tasks`;
const apiKey = process.env.GOOGLE_API_KEY as string;

const contextSchema = z.object({
  apiKey: z.string(),
});

const agent = createDeepAgent({
  model: 'google-genai:gemini-3.1-flash-lite-preview',
  systemPrompt: CodingInstructions,
  contextSchema,
});

export const IrisGoAgent = async ({ prompt }: { prompt: string }) => {
  try {
    const result = await agent.invoke(
      {
        messages: [{ role: 'user', content: prompt }],
      },
      { context: { apiKey } }
    );
    const responseResult = result.messages[result.messages.length - 1].content;
    console.log(responseResult);
    return responseResult;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default IrisGoAgent;
