import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { completedEvent, Data, Event, Guest, Id, processGuest } from 'core';
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {
  constructor(readonly repository: EventPrisma) {}
  @Get()
  async findAll() {
    const events = await this.repository.getAll();
    return events.map(this.serialize);
  }

  @Get(':idOrAlias')
  async findOneEvent(@Param('idOrAlias') idOrAlias: string) {
    if (Id.valid(idOrAlias)) {
      const event = await this.repository.getById(idOrAlias, true);

      return this.serialize(event);
    }

    const event = await this.repository.getByAlias(idOrAlias, true);
    return this.serialize(event);
  }

  @Get('valid/:alias/:id')
  async validedAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.repository.getByAlias(alias);
    return {
      valid: !event || event.id === id,
    };
  }

  @Post('access')
  async accessEvent(@Body() body: { id: string; password: string }) {
    const event = await this.repository.getById(body.id);

    if (!event) {
      throw new HttpException('Evento não encontrado', 400);
    }
    if (event.password !== body.password) {
      throw new HttpException('Senha não corresponde ao evento', 400);
    }

    return this.serialize(event);
  }

  @Post(':alias/convidado')
  async createGuest(@Param('alias') alias: string, @Body() body: Guest) {
    const event = await this.repository.getByAlias(alias);

    if (!event) {
      throw new HttpException('Evento não encontrado', 400);
    }
    const guesCompleted = processGuest(body);

    await this.repository.createGuest(event, guesCompleted);
    return guesCompleted;
  }

  @Post()
  async create(@Body() body: Event) {
    const event = await this.repository.getByAlias(body.alias);

    if (event && event.id !== body.id) {
      throw new Error('Ja existe um evento cadastrado');
    }

    const eventCompleted = completedEvent(this.deserialize(body));
    await this.repository.create(eventCompleted);
  }

  private serialize(event: Event) {
    if (!event) return null;
    return {
      ...event,
      date: Data.format(event.date),
    };
  }

  private deserialize(event: any): Event {
    return {
      ...event,
      date: Data.parse(event.date),
    };
  }
}
