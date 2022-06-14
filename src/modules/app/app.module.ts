import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { RabbitModule } from '../rabbitmq/rabbitmq.module';
import { DatabaseModule } from '../database/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wallet } from '../database/model/Wallet';
import { WalletModule } from '../wallet/wallet.module';
import { getAbsolutePath } from 'src/utils/path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${getAbsolutePath()}/.env.${process.env.NODE_ENV}`
    }),
    DatabaseModule,
    SequelizeModule.forFeature([Wallet]),
    WalletModule,
    RabbitModule
  ],
  controllers: [AppController]
})
export class AppModule {}
