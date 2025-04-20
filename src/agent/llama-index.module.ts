import { Module } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { AgentService } from './agent.service';

@Module({
  providers: [ProductsService, AgentService],
  exports: [AgentService],
})
export class LlamaIndexModule {}
