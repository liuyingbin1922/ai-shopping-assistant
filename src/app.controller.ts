import { Controller, Post, Body } from '@nestjs/common';
import { AgentService } from './agent/agent.service';

@Controller()
export class AppController {
  constructor(private readonly agentService: AgentService) {}

  @Post('ask')
  async ask(@Body() body: { prompt: string }) {
    const result = await this.agentService.ask(body.prompt);
    return { result };
  }
}
