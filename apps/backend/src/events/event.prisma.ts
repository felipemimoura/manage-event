import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { Prisma } from 'src/db/prisma';
@Injectable()
export class EventPrisma {
  constructor(readonly prisma: Prisma) {}
  create(event: Event) {
    return this.prisma.event.create({
      data: {
        ...(event as any),
        guests: { create: event.guests },
      },
    });
  }

  createGuest(event: Event, guest: Guest) {
    return this.prisma.guest.create({
      data: {
        ...guest,
        qtdEscort: +(guest.qtdEscort ?? 0),
        event: {
          connect: {
            id: event.id,
          },
        },
      },
    });
  }

  async getAll(): Promise<Event[]> {
    return this.prisma.event.findMany() as any;
  }

  async getById(id: string, completed: boolean = false): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: {
        guests: completed,
      },
    }) as any;
  }

  async getByAlias(
    alias: string,
    completed: boolean = false,
  ): Promise<Event | null> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        alias: true,
        name: true,
        description: true,
        date: true,
        local: true,
        image: true,
        backgroundImage: true,
        password: completed,
        publicExpect: true,
        guests: completed,
      },
      where: { alias },
    }) as any;
  }
}
