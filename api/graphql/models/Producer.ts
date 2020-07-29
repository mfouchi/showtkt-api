import { schema } from 'nexus'

schema.objectType({
  name: 'Producer',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.companyId()
    t.model.Company()
    t.model.Productions()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.producer()
    t.crud.producers({ filtering: true, ordering: true })

    t.field('producersCount', {
      type: 'Int',
      args: {
        where: 'ProducerWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.db.producer.count(args)
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneProducer()
    t.crud.updateOneProducer()
    t.crud.upsertOneProducer()
    t.crud.deleteOneProducer()

    t.crud.updateManyProducer()
    t.crud.deleteManyProducer()
  },
})
