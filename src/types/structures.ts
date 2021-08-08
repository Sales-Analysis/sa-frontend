export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Analysis = {
  __typename?: 'Analysis';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  disabled: Scalars['Boolean'];
};

export type Faq = {
  __typename?: 'FAQ';
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
};

export type Hiw = {
  __typename?: 'Hiw';
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ListAnalysis: Array<Analysis>;
  ListFAQ: Array<Faq>;
  ListHiw: Array<Hiw>;
  getReports: Array<Maybe<Row>>;
};

export type Row = {
  __typename?: 'Row';
  id: Scalars['Int'];
  name: Scalars['String'];
  profit: Scalars['Float'];
  profitPercent: Scalars['Float'];
  portion: Scalars['Float'];
  group: Scalars['String'];
};
