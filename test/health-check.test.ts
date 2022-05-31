import { HttpStatus } from '@nestjs/common';

import { getRequest } from './base';

describe('Health check', () => {
  it('Check is up', async () => {
    const res = await getRequest('/');
    expect(res.statusCode).toBe(HttpStatus.OK);
  });
});
