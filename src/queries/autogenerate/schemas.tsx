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
  /** ISO 6801 datetime */
  Iso8601: any;
};

export type Balloon = {
  __typename?: 'Balloon';
  id: Scalars['String'];
  name: Scalars['String'];
  imageUrl: Scalars['String'];
  description: Scalars['String'];
  color: Color;
  variant: Variant;
  /** This is denominated in SEK. */
  price: Scalars['Int'];
  /** The date since this balloon has been available for sale. */
  availableSince: Scalars['Iso8601'];
};

export type BalloonConnection = {
  __typename?: 'BalloonConnection';
  edges: Array<BalloonEdge>;
  pageInfo: PageInfo;
};

export type BalloonEdge = {
  __typename?: 'BalloonEdge';
  node: Balloon;
  cursor: Scalars['String'];
};

export enum Color {
  Red = 'RED',
  Pink = 'PINK',
  Green = 'GREEN',
  Blue = 'BLUE',
  Yellow = 'YELLOW',
  Purple = 'PURPLE',
  White = 'WHITE',
  Orange = 'ORANGE',
  Black = 'BLACK'
}

export type FilterInput = {
  variant?: Maybe<Variant>;
  color?: Maybe<Color>;
};


export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a balloon by id. */
  balloon?: Maybe<Balloon>;
  /**
   * This API follows a simplified version of the Relay pagination pattern. Specify an ID on
   * after or before to get 5 results. There is no option for controlling the count.
   *
   * You can use variant and color to filter only matching results of those types.
   */
  balloons: BalloonConnection;
};


export type QueryBalloonArgs = {
  id: Scalars['String'];
};


export type QueryBalloonsArgs = {
  filter?: Maybe<FilterInput>;
  sort?: Maybe<SortInput>;
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
};

export enum SortInput {
  Id = 'ID',
  Name = 'NAME',
  Price = 'PRICE',
  AvailableSince = 'AVAILABLE_SINCE',
  Color = 'COLOR'
}

export enum Variant {
  Normal = 'NORMAL',
  Heart = 'HEART',
  Star = 'STAR'
}
