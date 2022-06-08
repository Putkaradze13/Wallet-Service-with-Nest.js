import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsEmail() @IsNotEmpty() public email: string;
  @IsNumber() @IsNotEmpty() public amount: string;
}
