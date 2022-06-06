import { Injectable, OnModuleInit } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as amqp from 'amqplib';

import { MessageHandler } from '../../decorator/message-handler';

@Injectable()
export class AppService implements OnModuleInit {
  private queueConnection: amqp.Connection;
  public queueChannel: amqp.Channel;

  constructor(private reflector: Reflector) {}

  public async onModuleInit() {
    this.queueConnection = await amqp.connect({
      protocol: 'amqp',
      hostname: 'localhost',
      port: 5672,
      username: 'root',
      password: '12345678'
    });
    this.queueChannel = await this.queueConnection.createChannel();
    this.queueChannel.consume('main', (msg) => {
      const { message, payload } = JSON.parse(msg.content.toString());
      this[this.reflector.get(message, AppService)](payload);
      this.queueChannel.ack(msg);
    });
  }

  @MessageHandler('create-something')
  public handleCreation(): void {
    console.log('create something');
  }
}
