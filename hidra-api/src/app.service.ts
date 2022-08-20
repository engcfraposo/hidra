import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): { ok: boolean } {
    return { ok: true };
  }
}
