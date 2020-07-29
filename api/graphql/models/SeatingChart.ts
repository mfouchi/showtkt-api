import { schema } from 'nexus'

schema.objectType({
  name: 'SeatingChart',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.venueId()
    t.model.Venue()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.seatingChart()
    t.crud.seatingCharts({ filtering: true, ordering: true })

    t.field('seatingChartsCount', {
      type: 'Int',
      args: {
        where: 'SeatingChartWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.db.seatingChart.count(args)
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSeatingChart()
    t.crud.updateOneSeatingChart()
    t.crud.upsertOneSeatingChart()
    t.crud.deleteOneSeatingChart()

    t.crud.updateManySeatingChart()
    t.crud.deleteManySeatingChart()
  },
})
