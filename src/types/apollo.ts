import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import {
  GetIndexPageContentQueryQuery,
  GetIndexPageContentQueryQueryVariables,
  GetReportQueryQuery,
  GetReportQueryQueryVariables,
} from 'types/operations';

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
    ListHiw {
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
    GetIndexPageContentQueryQuery,
    GetIndexPageContentQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetIndexPageContentQueryQuery,
    GetIndexPageContentQueryQueryVariables
  >(GetIndexPageContentQueryDocument, options);
}

export function useGetIndexPageContentQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIndexPageContentQueryQuery,
    GetIndexPageContentQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetIndexPageContentQueryQuery,
    GetIndexPageContentQueryQueryVariables
  >(GetIndexPageContentQueryDocument, options);
}

export type GetIndexPageContentQueryQueryHookResult = ReturnType<
  typeof useGetIndexPageContentQueryQuery
>;
export type GetIndexPageContentQueryLazyQueryHookResult = ReturnType<
  typeof useGetIndexPageContentQueryLazyQuery
>;
export type GetIndexPageContentQueryQueryResult = Apollo.QueryResult<
  GetIndexPageContentQueryQuery,
  GetIndexPageContentQueryQueryVariables
>;
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
  baseOptions?: Apollo.QueryHookOptions<GetReportQueryQuery, GetReportQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetReportQueryQuery, GetReportQueryQueryVariables>(
    GetReportQueryDocument,
    options
  );
}

export function useGetReportQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReportQueryQuery,
    GetReportQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetReportQueryQuery, GetReportQueryQueryVariables>(
    GetReportQueryDocument,
    options
  );
}

export type GetReportQueryQueryHookResult = ReturnType<typeof useGetReportQueryQuery>;
export type GetReportQueryLazyQueryHookResult = ReturnType<
  typeof useGetReportQueryLazyQuery
>;
export type GetReportQueryQueryResult = Apollo.QueryResult<
  GetReportQueryQuery,
  GetReportQueryQueryVariables
>;
