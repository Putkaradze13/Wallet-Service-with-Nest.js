import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHealthCheck(): { data: string } {
    return { data: 'Hello' };
  }
}
