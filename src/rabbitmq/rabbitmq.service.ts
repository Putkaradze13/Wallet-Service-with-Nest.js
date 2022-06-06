// import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import * as amqp from 'amqplib';

// @Injectable()
// export class RabbitService implements OnModuleInit {
//   private readonly logger = new Logger(RabbitService.name);
//   private queueConnection: amqp.Connection;
//   public queueChannel: amqp.Channel;

//   constructor(private readonly configService: ConfigService) {}
//   onModuleInit() {
//     throw new Error('Method not implemented.');
//   }

//   public async onModuleInt() {
//     this.logger.log({
//       protocol: this.configService.get('AMQP_PROTOCOL'),
//       hostname: this.configService.get('AMQP_HOST'),
//       port: this.configService.get('AMQP_PORT'),
//       username: this.configService.get('AMQP_USER'),
//       password: this.configService.get('AMQP_PASS'),
//       vhost: this.configService.get('AMQP_VHOST')
//     });
//     this.queueConnection = await amqp.connect({
//       protocol: this.configService.get('AMQP_PROTOCOL'),
//       hostname: this.configService.get('AMQP_HOST'),
//       port: this.configService.get('AMQP_PORT'),
//       username: this.configService.get('AMQP_USER'),
//       password: this.configService.get('AMQP_PASS'),
//       vhost: this.configService.get('AMQP_VHOST')
//     });
//     this.queueChannel = await this.queueConnection.createChannel();
//   }
// }
