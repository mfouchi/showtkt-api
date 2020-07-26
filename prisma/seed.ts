import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const company = await prisma.company.create({
    data: {
      name: 'Theatre 13',
    },
  });

  const venue1 = await prisma.venue.create({
    data: {
      name: 'Rivertown Theaters - Mainstage',
      Companies: {
        connect: { id: company.id },
      },
    },
  });

  const venue2 = await prisma.venue.create({
    data: {
      name: 'Rivertown Theaters - Lagniappe',
      Companies: {
        connect: { id: company.id },
      },
    },
  });

  const producer1 = await prisma.producer.create({
    data: {
      name: 'Theatre 13',
      Company: {
        connect: { id: company.id },
      },
    },
  });

  const producer2 = await prisma.producer.create({
    data: {
      name: 'Ricky Graham',
      Company: {
        connect: { id: company.id },
      },
    },
  });

  const production1 = await prisma.production.create({
    data: {
      name: 'Peter and the Starcatcher',
      Company: {
        connect: { id: company.id },
      },
      Producer: {
        connect: { id: producer1.id },
      },
    },
  });

  const production2 = await prisma.production.create({
    data: {
      name: 'The Drowsy Chaperone',
      Company: {
        connect: { id: company.id },
      },
      Producer: {
        connect: { id: producer1.id },
      },
    },
  });

  const production3 = await prisma.production.create({
    data: {
      name: 'The Golden Girls',
      Company: {
        connect: { id: company.id },
      },
      Producer: {
        connect: { id: producer2.id },
      },
    },
  });

  const event1_1 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-03-06 19:30:00'),
      Production: {
        connect: { id: production1.id },
      },
      Company: {
        connect: { id: company.id },
      },
      Venue: {
        connect: { id: venue1.id },
      },
    },
  });

  const event1_2 = await prisma.event.create({
    data: {
      name: "Peter and the Starcatcher - Actor's night",
      dateTime: new Date('2020-03-07 19:30:00'),
      Production: {
        connect: { id: production1.id },
      },
      Company: {
        connect: { id: company.id },
      },
      Venue: {
        connect: { id: venue1.id },
      },
    },
  });
  const event1_3 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-03-08 14:00:00'),
      Production: {
        connect: { id: production1.id },
      },
      Company: {
        connect: { id: company.id },
      },
      Venue: {
        connect: { id: venue1.id },
      },
    },
  });
  const event2_1 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-05-08 19:30:00'),
      Production: {
        connect: { id: production2.id },
      },
      Company: {
        connect: { id: company.id },
      },
      Venue: {
        connect: { id: venue1.id },
      },
    },
  });

  const event2_2 = await prisma.event.create({
    data: {
      name: 'The Drowsy Chaperone - Benefit performance',
      dateTime: new Date('2020-05-09 19:30:00'),
      Production: {
        connect: { id: production2.id },
      },
      Company: {
        connect: { id: company.id },
      },
      Venue: {
        connect: { id: venue1.id },
      },
    },
  });
  const event2_3 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-05-10 14:00:00'),
      Production: {
        connect: { id: production2.id },
      },
      Company: {
        connect: { id: company.id },
      },
      Venue: {
        connect: { id: venue1.id },
      },
    },
  });

  const event3_1 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-03-13 19:30:00'),
      Production: {
        connect: { id: production3.id },
      },
      Company: {
        connect: { id: company.id },
      },
      Venue: {
        connect: { id: venue1.id },
      },
    },
  });

  const event3_2 = await prisma.event.create({
    data: {
      dateTime: new Date('2020-03-14 19:30:00'),
      Production: {
        connect: { id: production3.id },
      },
      Company: {
        connect: { id: company.id },
      },
      Venue: {
        connect: { id: venue1.id },
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
