import { Context } from '../context';

function producer(parent: any, _args: any, ctx: Context) {
  return ctx.prisma.production
    .findOne({ where: { id: +parent.id } })
    .producer();
}

// function event(parent: any, args: any, ctx: Context) {
//   return ctx.prisma.production.findOne({ where: { id: parent.id } }).event();
// }

function events(parent: any, _args: any, ctx: Context) {
  return ctx.prisma.production.findOne({ where: { id: +parent.id } }).events();
}

module.exports = {
  producer,
  events,
};
