import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import * as Umzug from 'umzug';

@Injectable()
export default class DatabaseService implements OnModuleInit {
  constructor(private readonly sequelize: Sequelize) {}

  public async onModuleInit(): Promise<void> {
    await this.applyMigrations();
  }

  private async applyMigrations(): Promise<void> {
    const umzug = new Umzug({
      storage: 'sequelize',
      storageOptions: { sequelize: this.sequelize },
      migrations: {}
    });
    await umzug.up();
  }
}
