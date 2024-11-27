import { PrismaClient } from '@prisma/client';
import { eventos } from 'core';

async function seed() {
  const prisma = new PrismaClient();
  const transactions = eventos.map(
    async (event) =>
      await prisma.event.create({
        data: {
          id: event.id,
          alias: event.alias,
          password: event.password,
          name: event.name,
          date: event.date,
          local: event.local,
          description: event.description,
          image: event.image,
          backgroundImage: event.backgroundImage,
          publicExpect: event.publicExpect,
          guests: {
            create: event.guests.map((convidado) => ({
              id: convidado.id,
              name: convidado.name,
              email: convidado.email,
              confirm: convidado.confirm,
              hasAnEscort: convidado.hasAnEscort,
              qtdEscort: convidado.qtdEscort,
            })),
          },
        },
      }),
  );

  Promise.all(transactions);
}

seed();
