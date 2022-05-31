import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/modules/app/app.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

export class BaseTest {
  private static app: INestApplication;

  public static async getTestApp(): Promise<INestApplication> {
    if (!this.app) {
      await this.initTestApp();
    }
    return this.app;
  }

  private static async initTestApp(): Promise<void> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();
    this.app = moduleFixture.createNestApplication();
    await this.app.init();
  }
}

export const getRequest = async (url: any, authToken?: string): Promise<request.Response> => {
  const app = await BaseTest.getTestApp();
  const req = request(app.getHttpServer()).get(url);

  if (authToken) {
    req.set('authorization', authToken);
  }

  return req;
};

export const postRequest = async (
  url: string,
  body: any,
  authToken?: string
): Promise<request.Response> => {
  const app = await BaseTest.getTestApp();
  const req = request(app.getHttpServer()).post(url).send(body);

  if (authToken) {
    req.set('authorization', authToken);
  }

  return req;
};

export const patchRequest = async (
  url: string,
  body: any,
  authToken?: string
): Promise<request.Response> => {
  const app = await BaseTest.getTestApp();
  const req = request(app.getHttpServer()).patch(url).send(body);

  if (authToken) {
    req.set('authorization', authToken);
  }

  return req;
};

export const putRequest = async (
  url: string,
  body: any,
  authToken?: string
): Promise<request.Response> => {
  const app = await BaseTest.getTestApp();
  const req = request(app.getHttpServer()).put(url).send(body);

  if (authToken) {
    req.set('authorization', authToken);
  }

  return req;
};

export const deleteRequest = async (url: string, authToken?: string): Promise<request.Response> => {
  const app = await BaseTest.getTestApp();
  const req = request(app.getHttpServer()).delete(url);

  if (authToken) {
    req.set('authorization', authToken);
  }

  return req;
};
