import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { RabbitModule } from '../rabbitmq/rabbitmq.module';
import { DatabaseModule } from '../database/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wallet } from '../database/model/Wallet';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    DatabaseModule,
    SequelizeModule.forFeature([Wallet]),
    WalletModule,
    RabbitModule
  ],
  controllers: [AppController]
})
export class AppModule {}
