import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../service/messages.service';
// interface Service {
//   findAll();
//   create(message: string);
//   findOne(id: string);
// }
@Controller('messages')
export class MessagesController {
  // messagesService: Service;
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessage() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      return new NotFoundException('message not found');
    }
    return message;
  }
}
