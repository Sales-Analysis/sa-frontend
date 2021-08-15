/* eslint-disable */
/* not edit - generated file */
import type * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};

export const GetIndexPageContentQueryDocument = gql`
  query GetIndexPageContentQuery {
    ListAnalysis {
      id
      image
      name
      disabled
      description
    }
    ListFAQ {
      id
      title
      description
    }
    ListHIW {
      id
      image
      title
      description
    }
  }
`;

/**
 * __useGetIndexPageContentQueryQuery__
 *
 * To run a query within a React component, call `useGetIndexPageContentQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndexPageContentQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndexPageContentQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIndexPageContentQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.TGetIndexPageContentQueryQuery,
    Types.TGetIndexPageContentQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    Types.TGetIndexPageContentQueryQuery,
    Types.TGetIndexPageContentQueryQueryVariables
  >(GetIndexPageContentQueryDocument, options);
}
export function useGetIndexPageContentQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.TGetIndexPageContentQueryQuery,
    Types.TGetIndexPageContentQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.TGetIndexPageContentQueryQuery,
    Types.TGetIndexPageContentQueryQueryVariables
  >(GetIndexPageContentQueryDocument, options);
}
export type GetIndexPageContentQueryQueryHookResult = ReturnType<
  typeof useGetIndexPageContentQueryQuery
>;
export type GetIndexPageContentQueryLazyQueryHookResult = ReturnType<
  typeof useGetIndexPageContentQueryLazyQuery
>;
export type GetIndexPageContentQueryQueryResult = Apollo.QueryResult<
  Types.TGetIndexPageContentQueryQuery,
  Types.TGetIndexPageContentQueryQueryVariables
>;
export function refetchGetIndexPageContentQueryQuery(
  variables?: Types.TGetIndexPageContentQueryQueryVariables
) {
  return { query: GetIndexPageContentQueryDocument, variables: variables };
}
export const GetReportQueryDocument = gql`
  query GetReportQuery {
    getReports {
      id
      name
      portion
      profit
      profitPercent
      group
    }
  }
`;

/**
 * __useGetReportQueryQuery__
 *
 * To run a query within a React component, call `useGetReportQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReportQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.TGetReportQueryQuery,
    Types.TGetReportQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.TGetReportQueryQuery, Types.TGetReportQueryQueryVariables>(
    GetReportQueryDocument,
    options
  );
}
export function useGetReportQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.TGetReportQueryQuery,
    Types.TGetReportQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.TGetReportQueryQuery,
    Types.TGetReportQueryQueryVariables
  >(GetReportQueryDocument, options);
}
export type GetReportQueryQueryHookResult = ReturnType<typeof useGetReportQueryQuery>;
export type GetReportQueryLazyQueryHookResult = ReturnType<
  typeof useGetReportQueryLazyQuery
>;
export type GetReportQueryQueryResult = Apollo.QueryResult<
  Types.TGetReportQueryQuery,
  Types.TGetReportQueryQueryVariables
>;
export function refetchGetReportQueryQuery(
  variables?: Types.TGetReportQueryQueryVariables
) {
  return { query: GetReportQueryDocument, variables: variables };
}
// The file generated on: 14.08.21
