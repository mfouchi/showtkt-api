import { Context } from '../context';

function production(parent: any, args: any, ctx: Context) {
  return ctx.prisma.event.findOne({ where: { id: parent.id } }).Production();
}

function venue(parent: any, args: any, ctx: Context) {
  return ctx.prisma.event.findOne({ where: { id: parent.id } }).Venue();
}

module.exports = {
  production,
  venue,
};
