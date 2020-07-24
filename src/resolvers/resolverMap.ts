import { IResolvers } from 'graphql-tools';
const Query = require('./Query');
const Mutation = require('./Mutation');
const Event = require('./Event');
const Production = require('./Production');

const resolverMap: IResolvers = {
  Query,
  Mutation,
  Event,
  Production,
};
export default resolverMap;
