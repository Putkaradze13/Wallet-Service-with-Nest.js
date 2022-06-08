import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Umzug, SequelizeStorage } from 'umzug';

@Injectable()
export default class DatabaseService implements OnModuleInit {
  constructor(private readonly sequelize: Sequelize) {}

  public async onModuleInit(): Promise<void> {
    await this.applyMigrations();
  }

  private async applyMigrations(): Promise<void> {
    const umzug = new Umzug({
      migrations: { glob: 'migrations/*.js' },
      context: this.sequelize.getQueryInterface(),
      storage: new SequelizeStorage({ sequelize: this.sequelize }),
      logger: console
    });
    await umzug.up();
  }
}
