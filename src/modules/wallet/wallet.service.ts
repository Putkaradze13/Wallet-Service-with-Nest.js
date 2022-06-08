import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize';
import { Wallet } from '../database/model/Wallet';
import { CreateWalletDto } from './dto/create-wallet-dto';
import { WalletDetailsDto } from './dto/wallet-details-dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel(Wallet)
    private walletRepository: typeof Wallet,
    private sequelize: Sequelize
  ) {}

  public async create(
    wallet: CreateWalletDto,
    transaction?: Transaction
  ): Promise<WalletDetailsDto> {
    return this.sequelize.transaction({ transaction }, async (t) => {
      const walletEntity = new this.walletRepository({ ...wallet });

      const createdWallet = await walletEntity.save({ transaction: t });

      return new WalletDetailsDto(createdWallet);
    });
  }
}
