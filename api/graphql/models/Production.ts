import { schema } from 'nexus'

schema.objectType({
  name: 'Production',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.producerId()
    t.model.companyId()
    t.model.Company()
    t.model.Producer()
    t.model.Events()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.production()
    t.crud.productions({ filtering: true, ordering: true })

    t.field('productionsCount', {
      type: 'Int',
      args: {
        where: 'ProductionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.db.production.count(args)
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneProduction()
    t.crud.updateOneProduction()
    t.crud.upsertOneProduction()
    t.crud.deleteOneProduction()

    t.crud.updateManyProduction()
    t.crud.deleteManyProduction()
  },
})
