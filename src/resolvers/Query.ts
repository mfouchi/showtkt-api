import { Context } from '../context';

async function event(parent: any, args: any, ctx: Context) {
  return await ctx.prisma.event.findOne({ where: { id: +args.id } });
}

async function events(_parent: any, args: any, ctx: Context) {
  const where = args.filter ? { name: { contains: args.filter } } : {};
  const events = await ctx.prisma.event.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });
  return events;
}

async function production(_parent: any, args: any, ctx: Context) {
  return await ctx.prisma.production.findOne({ where: { id: +args.id } });
}

async function productions(_parent: any, args: any, ctx: Context) {
  const where = args.filter ? { name: { contains: args.filter } } : {};
  const productions = await ctx.prisma.production.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
    include: { events: true },
  });
  return productions;
}

module.exports = {
  event,
  events,
  production,
  productions,
};
