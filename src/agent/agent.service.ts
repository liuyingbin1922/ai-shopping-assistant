import { Injectable } from '@nestjs/common';
import { OpenAI, agent } from 'llamaindex';
import { ProductsService } from '../products/products.service';
import { createFindProductByCategoryTool } from './tools/findProductByCategory.tool';
import { createFindProductByNameTool } from './tools/findProductByName.tool';

@Injectable()
export class AgentService {
  private agent: agent;

  constructor(private productsService: ProductsService) {
    const llm = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
      model: 'gpt-4-turbo'
    });

    const tools = [
      createFindProductByCategoryTool(this.productsService),
      createFindProductByNameTool(this.productsService),
    ];

    this.agent = new Agent({
      llm,
      tools,
      systemPrompt: '你是一个AI商品导购助手，帮用户推荐商品。'
    });
  }

  async ask(prompt: string) {
    const response = await this.agent.chat(prompt);
    return response.message.content;
  }
}
