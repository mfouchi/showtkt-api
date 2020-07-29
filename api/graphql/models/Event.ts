import { schema } from 'nexus'

schema.objectType({
  name: 'Event',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.maxAdmission()
    t.model.dateTime()
    t.model.venueId()
    t.model.productionId()
    t.model.companyId()
    t.model.Company()
    t.model.Production()
    t.model.Venue()
    t.model.Seats()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.event()
    t.crud.events({ filtering: true, ordering: true })

    t.field('eventsCount', {
      type: 'Int',
      args: {
        where: 'EventWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.db.event.count(args)
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEvent()
    t.crud.updateOneEvent()
    t.crud.upsertOneEvent()
    t.crud.deleteOneEvent()

    t.crud.updateManyEvent()
    t.crud.deleteManyEvent()
  },
})
