import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import * as Umzug from 'umzug';

import { getAbsolutePath } from '../../../utils/path';

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
      migrations: {
        path: `${getAbsolutePath()}/migrations`,
        pattern: /^\d+[-\w]+.js$/,
        params: [this.sequelize.getQueryInterface(), Sequelize]
      }
    });
    (async () => {
      try {
        await umzug.up();
      } catch (e) {
        console.log('Umzug Error', e);
      }
    })();
  }
}
