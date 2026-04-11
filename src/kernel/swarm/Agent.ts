import { createDeepAgent } from 'deepagents';

const CodingInstructions = `you are IRSI an AI assistant for IRIS GO which will help user in Coding Related Tasks`;

const agent = createDeepAgent({
  model: 'ollama:qwen2.5-coder:0.5b',
  systemPrompt: CodingInstructions,
});

export const IrisGoAgent = async ({ prompt }: { prompt: string }) => {
  const result = await agent.invoke({
    messages: [{ role: 'user', content: prompt }],
  });
  const responseResult = result.messages[result.messages.length - 1].content;
  console.log(responseResult);
  return responseResult;
};

export default IrisGoAgent;
