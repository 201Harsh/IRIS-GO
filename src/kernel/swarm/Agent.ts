import { createDeepAgent } from 'deepagents';

const researchInstructions = ``;

const agent = createDeepAgent({
  model: 'ollama:qwen2.5-coder:0.5b',
  systemPrompt: researchInstructions,
});

const result = await agent.invoke({
  messages: [{ role: 'user', content: 'What is langgraph?' }],
});

console.log(result.messages[result.messages.length - 1].content);
