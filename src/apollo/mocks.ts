import { IMockStore } from '@graphql-tools/mock/types';
import faker from 'faker';
import { TAnalysis, TFaq, TRow } from 'types/structures';

export const mocks = {
  Analysis: (): TAnalysis => ({
    __typename: 'Analysis',
    id: faker.datatype.number(),
    name: faker.random.arrayElement(['ABC']),
    description: faker.lorem.paragraph(),
    disabled: faker.datatype.boolean(),
    image: faker.image.business(200, 200),
  }),
  FAQ: (): TFaq => ({
    __typename: 'FAQ',
    id: faker.datatype.number(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(3),
  }),
  Row: (): TRow => ({
    __typename: 'Row',
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    group: faker.random.arrayElement(['A', 'B', 'C']),
    portion: faker.datatype.number({ min: 1, max: 100 }),
    profit: faker.datatype.number(),
    profitPercent: faker.datatype.number({ min: 1, max: 100 }),
  }),
};

export const resolvers = (store: IMockStore) => ({
  Query: {
    getReports: () => Array.from(Array(100), () => store.get('Row')),
  },
});
