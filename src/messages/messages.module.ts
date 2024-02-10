import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';

@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
