import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EventPrisma } from './event.prisma';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventsService, EventPrisma],
})
export class EventsModule {}
