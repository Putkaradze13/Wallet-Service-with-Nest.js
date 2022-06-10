import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Wallet', freezeTableName: true })
export class Wallet extends Model {
  @Column({ allowNull: false, unique: true })
  public email: string;

  @Column({ allowNull: false })
  public amount: number;
}
