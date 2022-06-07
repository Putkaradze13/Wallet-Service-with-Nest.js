import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import * as amqp from 'amqplib';
import { MessageHandler } from '../../decorator/message-handler';

@Injectable()
export class RabbitService implements OnModuleInit {
  private readonly logger = new Logger(RabbitService.name);
  private queueConnection: amqp.Connection;
  public queueChannel: amqp.Channel;

  constructor(private readonly configService: ConfigService, private reflector: Reflector) {}

  public async onModuleInit() {
    this.queueConnection = await amqp.connect({
      protocol: this.configService.get('RABBITMQ_PROTOCOL'),
      hostname: this.configService.get('RABBITMQ_HOST'),
      port: this.configService.get('RABBITMQ_PORT'),
      username: this.configService.get('RABBITMQ_USER'),
      password: this.configService.get('RABBITMQ_PASS')
    });
    this.queueChannel = await this.queueConnection.createChannel();
    this.queueChannel.assertQueue(this.configService.get('RABBITMQ_QUEUE'), {
      durable: true
    });
    this.queueChannel.consume(this.configService.get('RABBITMQ_QUEUE'), (msg) => {
      const { message, payload } = JSON.parse(msg.content.toString());
      this[this.reflector.get(message, RabbitService)](payload);
      this.queueChannel.ack(msg);
    });
  }

  @MessageHandler('healthcheck')
  public healthCheck(...args) {
    this.logger.log({ args });
  }
}
