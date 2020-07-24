import { Context } from '../context';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

async function createEvent(_parent: any, args: any, ctx: Context) {
  const userId = getUserId(ctx);

  return await ctx.prisma.event.create({
    data: {
      name: args.name,
      max_admission: args.maxAdmission,
      datetime: new Date(args.datetime),
    },
  });
}

async function signup(_parent: any, args: any, ctx: Context) {
  const password = await bcrypt.hash(args.password, 10);

  const admin = await ctx.prisma.admin.create({
    data: { ...args, password },
  });

  const token = jwt.sign({ userId: admin.id }, APP_SECRET);

  return {
    token,
    admin,
  };
}

async function login(_parent: any, args: any, ctx: Context) {
  const admin = await ctx.prisma.admin.findOne({
    where: { email: args.email },
  });
  if (!admin) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, admin.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: admin.id }, APP_SECRET);

  return {
    token,
    admin,
  };
}

module.exports = {
  signup,
  login,
  createEvent,
};
