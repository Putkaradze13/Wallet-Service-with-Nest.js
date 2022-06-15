import { Column, Model, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'Wallet', freezeTableName: true, timestamps: true })
export class Wallet extends Model {
  @Column({ allowNull: false, primaryKey: true, autoIncrement: true })
  public id: number;

  @Column({ allowNull: false, unique: true })
  public email: string;

  @Column({ allowNull: false })
  public amount: number;

  @CreatedAt
  @Column({ allowNull: false })
  public createdAt: Date;

  @UpdatedAt
  @Column({ allowNull: true })
  public updatedAt: Date;
}
