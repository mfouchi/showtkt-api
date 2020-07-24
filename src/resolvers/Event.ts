import { Context } from '../context';

function production(parent: any, args: any, ctx: Context) {
  return ctx.prisma.event.findOne({ where: { id: +parent.id } }).production();
}

function venue(parent: any, args: any, ctx: Context) {
  return ctx.prisma.event.findOne({ where: { id: +parent.id } }).venue();
}

function ticketProvider(parent: any, args: any, ctx: Context) {
  return ctx.prisma.event
    .findOne({ where: { id: parent.id } })
    .ticketprovider();
}

module.exports = {
  production,
  venue,
  ticketProvider,
};
