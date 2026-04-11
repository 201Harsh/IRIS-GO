import { createDeepAgent } from 'deepagents';

const researchInstructions = `You are an expert researcher. Your job is to conduct thorough research and then write a polished report.

You have access to an internet search tool as your primary means of gathering information.

## \`internet_search\`

Use this to run an internet search for a given query. You can specify the max number of results to return, the topic, and whether raw content should be included.
`;

const agent = createDeepAgent({
  model: 'ollama:devstral-2',
  systemPrompt: researchInstructions,
});

const result = await agent.invoke({
  messages: [{ role: 'user', content: 'What is langgraph?' }],
});

console.log(result.messages[result.messages.length - 1].content);
