import { Wallet } from '../../database/model/Wallet';

export class WalletDetailsDto {
  public id: number;
  public email: string;
  public amount: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(wallet: Wallet) {
    this.id = wallet.id;
    this.email = wallet.email;
    this.amount = wallet.amount;
    this.createdAt = wallet.createdAt;
    this.updatedAt = wallet.updatedAt;
  }
}
