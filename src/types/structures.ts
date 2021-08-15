/* eslint-disable */
/* not edit - generated file */
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type TAnalysis = {
  __typename?: 'Analysis';
  description: Scalars['String'];
  disabled: Scalars['Boolean'];
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type TFaq = {
  __typename?: 'FAQ';
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type THiw = {
  __typename?: 'HIW';
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  title: Scalars['String'];
};

export type TQuery = {
  __typename?: 'Query';
  ListAnalysis: Array<TAnalysis>;
  ListFAQ: Array<TFaq>;
  ListHIW: Array<THiw>;
  getReports: Array<Maybe<TRow>>;
};

export type TRow = {
  __typename?: 'Row';
  id: Scalars['String'];
  name: Scalars['String'];
  profit: Scalars['Float'];
  profitPercent: Scalars['Float'];
  portion: Scalars['Float'];
  group: Scalars['String'];
};

// The file generated on: 14.08.21
