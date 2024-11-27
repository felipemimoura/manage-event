import { Module } from '@nestjs/common';
import { Prisma } from './prisma';

@Module({
  providers: [Prisma],
  exports: [Prisma],
})
export class DbModule {}
