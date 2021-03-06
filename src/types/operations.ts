/* eslint-disable */
/* not edit - generated file */
import type * as Types from './structures';

export type TGetIndexPageContentQueryQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type TGetIndexPageContentQueryQuery = {
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
  ListHIW: Array<{
    __typename?: 'HIW';
    id: number;
    image: string;
    title: string;
    description: string;
  }>;
};

export type TGetReportQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TGetReportQueryQuery = {
  __typename?: 'Query';
  getReports: Array<
    Types.Maybe<{
      __typename?: 'Row';
      id: string;
      name: string;
      portion: number;
      profit: number;
      profitPercent: number;
      group: string;
    }>
  >;
};

// The file generated on: 14.08.21
