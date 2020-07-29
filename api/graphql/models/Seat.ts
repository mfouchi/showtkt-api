import { schema } from 'nexus'

schema.objectType({
  name: 'Seat',
  definition(t) {
    t.model.id()
    t.model.section()
    t.model.row()
    t.model.number()
    t.model.level()
    t.model.status()
    t.model.eventId()
    t.model.Event()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.seat()
    t.crud.seats({ filtering: true, ordering: true })

    t.field('seatsCount', {
      type: 'Int',
      args: {
        where: 'SeatWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.db.seat.count(args)
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSeat()
    t.crud.updateOneSeat()
    t.crud.upsertOneSeat()
    t.crud.deleteOneSeat()

    t.crud.updateManySeat()
    t.crud.deleteManySeat()
  },
})
