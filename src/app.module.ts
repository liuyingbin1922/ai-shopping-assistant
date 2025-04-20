import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LlamaIndexModule } from './agent/llama-index.module';

@Module({
  imports: [LlamaIndexModule],
  controllers: [AppController],
})
export class AppModule {}
