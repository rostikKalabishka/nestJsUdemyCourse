import { MessagesRepository } from '../repository/messages.repository';
import { Injectable } from '@nestjs/common';

// interface Repository {
//   findOne(id: string);
//   findAll();
//   create(message: string);
// }
@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(message: string) {
    return this.messagesRepo.create(message);
  }
}
