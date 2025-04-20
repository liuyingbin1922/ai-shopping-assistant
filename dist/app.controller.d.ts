import { AgentService } from './agent/agent.service';
export declare class AppController {
    private readonly agentService;
    constructor(agentService: AgentService);
    ask(body: {
        prompt: string;
    }): Promise<{
        result: any;
    }>;
}
