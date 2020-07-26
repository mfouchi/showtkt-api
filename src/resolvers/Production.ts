import { Context } from '../context';

async function producer(parent, _args, ctx: Context) {
  return await ctx.prisma.production
    .findOne({ where: { id: parent.id } })
    .Producer();
}

async function events(parent, args, ctx: Context) {
  return await ctx.prisma.event.findMany({
    where: { Production: { id: parent.id } },
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });
}

// async function events(parent, args, ctx) {
//   return await ctx.prisma.production
//     .findOne({
//       where: { id: parent.id },
//     })
//     .Events({
//       where: { orderBy: args.orderBy },
//     });
// }

module.exports = {
  producer,
  events,
};
