import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RabbitService } from './rabbitmq.service';

@Module({
  imports: [ConfigModule],
  providers: [RabbitService]
})
export class RabbitModule {}
