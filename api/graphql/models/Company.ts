import { schema } from 'nexus';

schema.objectType({
  name: 'Company',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.city();
    t.model.state();
    t.model.Producers();
    t.model.Productions();
    t.model.Events();
    t.model.Venues();
  },
});

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.company();
    t.crud.companies({ filtering: true, ordering: true });

    t.field('companiesCount', {
      type: 'Int',
      args: {
        where: 'CompanyWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.db.company.count(); //(args);
      },
    });
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCompany();
    t.crud.updateOneCompany();
    t.crud.upsertOneCompany();
    t.crud.deleteOneCompany();

    t.crud.updateManyCompany();
    t.crud.deleteManyCompany();
  },
});
