import { Context } from '../context';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

async function createEvent(_parent, args, ctx: Context) {
  const userId = getUserId(ctx);

  return await ctx.prisma.event.create({
    data: {
      name: args.name,
      maxAdmission: args.maxAdmission,
      dateTime: new Date(args.dateTime),
      Company: { connect: { id: args.companyId } },
      Production: { connect: { id: args.productionId } },
      Venue: { connect: { id: args.venueId } },
    },
  });
}

async function signup(_parent, args, ctx: Context) {
  const password = await bcrypt.hash(args.password, 10);

  const user = await ctx.prisma.user.create({
    data: { ...args, password },
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function login(_parent, args, ctx: Context) {
  const user = await ctx.prisma.user.findOne({
    where: { email: args.email },
  });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

module.exports = {
  signup,
  login,
  createEvent,
};
