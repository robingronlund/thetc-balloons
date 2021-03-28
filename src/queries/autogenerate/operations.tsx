import * as Types from './schemas';

export type BalloonQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type BalloonQuery = (
  { __typename?: 'Query' }
  & { balloon?: Types.Maybe<(
    { __typename?: 'Balloon' }
    & Pick<Types.Balloon, 'id' | 'name' | 'color' | 'imageUrl' | 'description' | 'variant' | 'price' | 'availableSince'>
  )> }
);

export type BalloonsQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.FilterInput>;
  sort?: Types.Maybe<Types.SortInput>;
  before?: Types.Maybe<Types.Scalars['ID']>;
  after?: Types.Maybe<Types.Scalars['ID']>;
}>;


export type BalloonsQuery = (
  { __typename?: 'Query' }
  & { balloons: (
    { __typename?: 'BalloonConnection' }
    & { edges: Array<(
      { __typename?: 'BalloonEdge' }
      & Pick<Types.BalloonEdge, 'cursor'>
      & { node: (
        { __typename?: 'Balloon' }
        & Pick<Types.Balloon, 'id' | 'name' | 'color' | 'imageUrl' | 'description' | 'variant' | 'price' | 'availableSince'>
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<Types.PageInfo, 'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'>
    ) }
  ) }
);
