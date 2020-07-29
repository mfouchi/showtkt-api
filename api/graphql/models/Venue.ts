import { schema } from 'nexus'

schema.objectType({
  name: 'Venue',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.Events()
    t.model.SeatingCharts()
    t.model.Companies()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.venue()
    t.crud.venues({ filtering: true, ordering: true })

    t.field('venuesCount', {
      type: 'Int',
      args: {
        where: 'VenueWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.db.venue.count(args)
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneVenue()
    t.crud.updateOneVenue()
    t.crud.upsertOneVenue()
    t.crud.deleteOneVenue()

    t.crud.updateManyVenue()
    t.crud.deleteManyVenue()
  },
})
