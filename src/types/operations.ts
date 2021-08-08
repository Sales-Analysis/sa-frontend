import { Exact, Maybe } from 'types/structures';

export type GetIndexPageContentQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetIndexPageContentQueryQuery = {
  __typename?: 'Query';
  ListAnalysis: Array<{
    __typename?: 'Analysis';
    id: number;
    image: string;
    name: string;
    disabled: boolean;
    description: string;
  }>;
  ListFAQ: Array<{ __typename?: 'FAQ'; id: number; title: string; description: string }>;
  ListHiw: Array<{
    __typename?: 'Hiw';
    id: number;
    image: string;
    title: string;
    description: string;
  }>;
};

export type GetReportQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetReportQueryQuery = {
  __typename?: 'Query';
  getReports: Array<
    Maybe<{
      __typename?: 'Row';
      id: number;
      name: string;
      portion: number;
      profit: number;
      profitPercent: number;
      group: string;
    }>
  >;
};
