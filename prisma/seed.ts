import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const comp_th13 = await prisma.company.create({
    data: {
      name: 'Theatre 13',
      city: 'Kenner',
      state: 'LA',
    },
  });

  const comp_jpas = await prisma.company.create({
    data: {
      name: 'Jefferson Performing Arts Society',
      city: 'Metairie',
      state: 'LA',
    },
  });

  const comp_lepetit = await prisma.company.create({
    data: {
      name: 'Le Petit Theatre',
      city: 'New Orleans',
      state: 'LA',
    },
  });

  const venue_rivmain = await prisma.venue.create({
    data: {
      name: 'Rivertown Theaters - Mainstage',
      Companies: {
        connect: { id: comp_th13.id },
      },
    },
  });

  const venue_rivlag = await prisma.venue.create({
    data: {
      name: 'Rivertown Theaters - Lagniappe',
      Companies: {
        connect: { id: comp_th13.id },
      },
    },
  });

  const venue_jpac = await prisma.venue.create({
    data: {
      name: 'Jefferson Performing Arts Center',
      Companies: {
        connect: { id: comp_jpas.id },
      },
    },
  });

  const venue_wpac = await prisma.venue.create({
    data: {
      name: 'Westwego Performing Arts Center',
      Companies: {
        connect: { id: comp_jpas.id },
      },
    },
  });

  const producer_th13 = await prisma.producer.create({
    data: {
      name: 'Theatre 13',
      Company: {
        connect: { id: comp_th13.id },
      },
    },
  });

  const producer_ricky = await prisma.producer.create({
    data: {
      name: 'Ricky Graham',
      Company: {
        connect: { id: comp_th13.id },
      },
    },
  });

  const producer_jpas = await prisma.producer.create({
    data: {
      name: 'Jefferson Performing Arts Society',
      Company: {
        connect: { id: comp_jpas.id },
      },
    },
  });

  const production_peter = await prisma.production.create({
    data: {
      name: 'Peter and the Starcatcher',
      Company: {
        connect: { id: comp_th13.id },
      },
      Producer: {
        connect: { id: producer_th13.id },
      },
    },
  });

  const production_drowsy = await prisma.production.create({
    data: {
      name: 'The Drowsy Chaperone',
      Company: {
        connect: { id: comp_th13.id },
      },
      Producer: {
        connect: { id: producer_th13.id },
      },
    },
  });

  const production_golden = await prisma.production.create({
    data: {
      name: 'The Golden Girls',
      Company: {
        connect: { id: comp_th13.id },
      },
      Producer: {
        connect: { id: producer_ricky.id },
      },
    },
  });

  const production_42nd = await prisma.production.create({
    data: {
      name: '42nd Street',
      Company: {
        connect: { id: comp_jpas.id },
      },
      Producer: {
        connect: { id: producer_jpas.id },
      },
    },
  });

  const ev_peter_2 = await prisma.event.create({
    data: {
      name: "Peter and the Starcatcher - Actor's night",
      dateTime: new Date('2020-03-07 19:30:00'),
      Production: {
        connect: { id: production_peter.id },
      },
      Company: {
        connect: { id: comp_th13.id },
      },
      Venue: {
        connect: { id: venue_rivmain.id },
      },
    },
  });

  const ev_peter_1 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-03-06 19:30:00'),
      Production: {
        connect: { id: production_peter.id },
      },
      Company: {
        connect: { id: comp_th13.id },
      },
      Venue: {
        connect: { id: venue_rivmain.id },
      },
    },
  });

  const ev_peter_3 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-03-08 14:00:00'),
      Production: {
        connect: { id: production_peter.id },
      },
      Company: {
        connect: { id: comp_th13.id },
      },
      Venue: {
        connect: { id: venue_rivmain.id },
      },
    },
  });
  const ev_drowsy_1 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-05-08 19:30:00'),
      Production: {
        connect: { id: production_drowsy.id },
      },
      Company: {
        connect: { id: comp_th13.id },
      },
      Venue: {
        connect: { id: venue_rivmain.id },
      },
    },
  });

  const ev_drowsy_2 = await prisma.event.create({
    data: {
      name: 'The Drowsy Chaperone - Benefit performance',
      dateTime: new Date('2020-05-09 19:30:00'),
      Production: {
        connect: { id: production_drowsy.id },
      },
      Company: {
        connect: { id: comp_th13.id },
      },
      Venue: {
        connect: { id: venue_rivmain.id },
      },
    },
  });
  const ev_drowsy_3 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-05-10 14:00:00'),
      Production: {
        connect: { id: production_drowsy.id },
      },
      Company: {
        connect: { id: comp_th13.id },
      },
      Venue: {
        connect: { id: venue_rivmain.id },
      },
    },
  });

  const ev_golden_1 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-03-13 19:30:00'),
      Production: {
        connect: { id: production_golden.id },
      },
      Company: {
        connect: { id: comp_th13.id },
      },
      Venue: {
        connect: { id: venue_rivmain.id },
      },
    },
  });

  const ev_golden_2 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-03-14 19:30:00'),
      Production: {
        connect: { id: production_golden.id },
      },
      Company: {
        connect: { id: comp_th13.id },
      },
      Venue: {
        connect: { id: venue_rivmain.id },
      },
    },
  });

  const ev_42nd_1 = await prisma.event.create({
    data: {
      dateTime: new Date('2021-01-29 19:30:00'),
      Production: {
        connect: { id: production_42nd.id },
      },
      Company: {
        connect: { id: comp_jpas.id },
      },
      Venue: {
        connect: { id: venue_jpac.id },
      },
    },
  });

  const ev_42nd_2 = await prisma.event.create({
    data: {
      dateTime: new Date('2021-01-30 19:30:00'),
      Production: {
        connect: { id: production_42nd.id },
      },
      Company: {
        connect: { id: comp_jpas.id },
      },
      Venue: {
        connect: { id: venue_jpac.id },
      },
    },
  });

  const ev_42nd_3 = await prisma.event.create({
    data: {
      dateTime: new Date('2021-01-31 14:00:00'),
      Production: {
        connect: { id: production_42nd.id },
      },
      Company: {
        connect: { id: comp_jpas.id },
      },
      Venue: {
        connect: { id: venue_jpac.id },
      },
    },
  });

  console.log('Database seeding complete');
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.disconnect();
  });
