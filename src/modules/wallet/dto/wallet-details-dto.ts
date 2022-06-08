import { Wallet } from '../../database/model/Wallet';

export class WalletDetailsDto {
  public email: string;
  public amount: number;

  constructor(wallet: Wallet) {
    this.email = wallet.email;
    this.amount = wallet.amount;
  }
}
